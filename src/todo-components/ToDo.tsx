import { useRef, useState } from 'react'
import { HiPlus, HiMagnifyingGlass } from 'react-icons/hi2'
import { Outlet } from 'react-router-dom';
import TodoNav from './TodoNav';
import { useTodo } from '../contexts/TodoContext';


const ToDo = () => {
    const { todoList, addTodo } = useTodo();
    const [todo, setTodo] = useState<string>('');
    const [showAddTask, setShowAddTask] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null);

    function handleShowAddTask(): void {
        setShowAddTask(showAddTask => !showAddTask)
        inputRef.current?.focus();
    }

    return (
        <div className='flex flex-col justify-between w-[700px] min-h-[500px] bg-white border border-gray-400 m'>
            <div className=" flex flex-col items-center p-8">
                <h1 className=" text-5xl font-bold mb-8 uppercase">things to do</h1>
                <div className="w-full h-14 border border-green-200">
                    <input
                        disabled={!showAddTask}
                        ref={inputRef} 
                        className="outline-none p-2 px-4 bg-transparent h-full w-4/5 focus:border-green-400 focus:border"  
                        type="text" 
                        placeholder="what is the task today?"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    {showAddTask && <button onClick={() => {
                        addTodo(todo);
                        setTodo('');
                    }} className="capitalize w-[20%] h-full  font-semibold bg-green-200">add task</button>}
                </div>
                <div className="w-full mt-8">
                    <Outlet/>  
                </div>
            </div>
            <div className='bg-green-200 w-full p-4 flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-4 cursor-pointer text-xl'>
                        <HiPlus onClick={handleShowAddTask}/>
                        <HiMagnifyingGlass/>
                    </div>
                    <div className='px-4 border-l border-l-gray-300'>
                        {
                            todoList.length > 0 ? <span><strong>{todoList.length}</strong> items left</span> : 'No items'
                        }
                    </div>
                </div>  
                <TodoNav/>
            </div>
        </div>
    )
}

export default ToDo
