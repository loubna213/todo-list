import { HiTrash } from 'react-icons/hi2'
import { useTodo } from '../contexts/TodoContext';


interface Todo {
  id: number;
  todo: string;
  checkedTask: boolean;
  date: string,
}

interface ToDoItemProps {
  todo: Todo;
}


const ToDoItem = ({ todo  }: ToDoItemProps) => {
  const { removeTodo, checkedTask } = useTodo();

  return (
    <div className={`bg-gray-100 p-4 w-full flex mb-4 }`}>
      <input className='mr-4' type="checkbox" checked={todo.checkedTask} onChange={() => checkedTask(todo.id)} />
      <p className={`me-auto ml-3 ${todo.checkedTask ? 'line-through' : ''}`}>{todo.todo}</p>
      <div className='flex gap-2 cursor-pointer text-xl'>
        <p className='text-base mx-4'>{todo.date}</p>
        <HiTrash onClick={() => removeTodo(todo.id)}/>
      </div>
    </div>
  )
}

export default ToDoItem
