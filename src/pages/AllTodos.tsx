import ToDoItem from "../todo-components/ToDoItem"
import { useTodo } from "../contexts/TodoContext";

interface Todo {
    id: number;
    todo: string;
}

const AllTodos = () => {
    const { todoList } = useTodo()
    const todoListLength: number = todoList.length

    return (
       <>
            {
                todoListLength > 0  ? 
                todoList.map((todo) => <ToDoItem key={todo.id} todo={todo}/>)
                : <h1 className='text-center capitalize text-2xl font-semibold text-gray-400'>Start adding tasks</h1>
            }
       </>
    )
}

export default AllTodos
