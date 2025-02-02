import { createContext, ReactNode, useReducer, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

interface Todo {
    id: number;
    todo: string;
    checkedTask: boolean;
    date: string,
}

interface InitialState {
    todoList: Todo[],
}

interface Action {
    type: string,
    payload?: any,
}

interface TodoContextProps extends InitialState {
    addTodo: (todo: string) => void,
    removeTodo: (id: number) => void,
    checkedTask: (id: number) => void,
    dispatch: React.Dispatch<Action>
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined)

let idCounter = 0;


const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [storedTodoList, setStoredTodoList] = useLocalStorage('todoList', []);

    const initialState: InitialState = {
        todoList: storedTodoList,
    };

    function reducer(state: InitialState, action: Action): InitialState {
        switch (action.type) {
            case 'initialTodoList':
                return { ...state, todoList: useLocalStorage('todoList', []) }
            case 'addTask': {
                const newTodo: Todo = {
                    id: idCounter++,
                    todo: action.payload,
                    checkedTask: false,
                    date: new Date().toDateString(),
                }
                const updatedTodoList = [...state.todoList, newTodo];
                setStoredTodoList(updatedTodoList);
                return { ...state, todoList: updatedTodoList };
            }
            case 'removeTask': {
                const updatedTodoList = state.todoList.filter((todo) => todo.id !== action.payload);

                setStoredTodoList(updatedTodoList);
                return { ...state, todoList: updatedTodoList };
            }
            case 'checkedTask':{
                const updatedTodos = state.todoList.map(todo => {
                    if (todo.id === action.payload) {
                      return { ...todo, checkedTask: !todo.checkedTask }; 
                    }
                    return todo;
                  });
                setStoredTodoList(updatedTodos);
                return { ...state, todoList: updatedTodos };
            }
        
            default:
                throw new Error('Unknown action');
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState);
    const { todoList } = state;

    function addTodo(todo: string): void {
        dispatch({ type: 'addTask', payload: todo })
    }

    function removeTodo(id: number): void {
        dispatch({ type: 'removeTask', payload: id })
    }

    function checkedTask(id: number) {
        dispatch({ type: 'checkedTask', payload: id })
    }

    return (
        <TodoContext.Provider value={{ todoList, addTodo, dispatch, removeTodo, checkedTask }}>
            { children }
        </TodoContext.Provider>
    )
}

function useTodo() {
    const context = useContext(TodoContext)
    if(context === undefined) throw new Error('TodoContex was used outside its ContextProvider')
    return context;
}

export { TodoProvider, useTodo }
