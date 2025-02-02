import ToDoItem from "../todo-components/ToDoItem"
import { useTodo } from "../contexts/TodoContext";

interface Todo {
  id: number;
  todo: string;
  checkedTask: boolean;
  date: string,
}

const CompletedTodos = () => {
  const { todoList } = useTodo()
  const todoListLength: number = todoList.length

  return (
    <>
      {todoListLength > 0 ? (
        todoList.map((todo: Todo) =>
          todo.checkedTask ? (
            <ToDoItem key={todo.id} todo={todo} />
          ) : null 
        )
      ) : (
        <h1 className="text-center capitalize text-2xl font-semibold text-gray-400">
          Start adding tasks
        </h1>
      )}
    </>
  )
}

export default CompletedTodos
