import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function MainMenu() {
  return (
    <div>
      <div>
        <Link to=""><button>Home</button></Link>
        <Link to="about"><button>About</button></Link>
        <Link to={'contact'}><button>Contact</button></Link>
        <Link to="todolist">
          <button>Todo List</button>
        </Link>
        <Link to="calculator">
          <button>Calculator</button>
        </Link>
      </div>

      <Outlet />
    </div>
  )
}
