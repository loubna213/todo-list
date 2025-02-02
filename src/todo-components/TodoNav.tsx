import { NavLink } from 'react-router-dom'

const TodoNav = () => {
  return (
    <div>
  <nav className='flex gap-4'>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'text-black font-medium capitalize underline' // Active styles
          : 'capitalize font-medium text-gray-500' // Inactive styles
      }
      to=''
    >
      all
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'text-black font-medium capitalize underline' // Active styles
          : 'capitalize font-medium text-gray-500' // Inactive styles
      }
      to='active'
    >
      active
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'text-black font-medium capitalize underline' // Active styles
          : 'capitalize font-medium text-gray-500' // Inactive styles
      }
      to='completed'
    >
      completed
    </NavLink>
  </nav>
</div>

  )
}

export default TodoNav
