import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function MainMenu() {
  return (
    <div>
      <div>
        <Link to=""><Button color='blue'>Home</Button></Link>
        <Link to="about"><Button color='blue'>About</Button></Link>
        <Link to={'contact'}><Button color='blue'>Contact</Button></Link>
        <Link to="todolist">
          <Button color='blue'>Todo List</Button>
        </Link>
        <Link to="calculator">
          <Button color='blue'>Calculator</Button>
        </Link>
      </div>

      <Outlet />
    </div>
  )
}
