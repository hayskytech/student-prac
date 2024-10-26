import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { doLogout } from '../firebaseConfig'

export default function MainMenu() {
  return (
    <div>
      <div style={{ maxWidth: 650, margin: 'auto', marginBottom: 10 }}>
        <Link to=""><Button color='blue'>Home</Button></Link>
        <Link to="about"><Button color='blue'>About</Button></Link>
        <Link to={'contact'}><Button color='blue'>Contact</Button></Link>

        <Button as={Link} to="todolist" color='blue'>Todo List</Button>
        <Button as={Link} to="calculator" color='blue'>Calculator</Button>
        <Button as={Link} to="students" color='green'>Students</Button>
        <Button as={Link} to="books" color='green'>Books</Button>
        <Button onClick={doLogout} color='red'>Logout</Button>
      </div>
      <hr />
      <Outlet />
    </div>
  )
}
