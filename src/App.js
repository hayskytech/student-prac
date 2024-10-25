import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Contact from './comp/Contact'
import { About } from './comp/About'
import { HashRouter, Route, Routes } from 'react-router-dom'
import MainMenu from './comp/MainMenu'
import Home from './comp/Home'
import TodoList from './comp/TodoList'
import Calculator from './comp/Calculator'
import Students from './students/Students'
import StudentEdit from './students/StudentEdit'
import Books from './books/Books'
import BookEdit from './books/BookEdit'

export default function App() {

  return (
    <div>

      <HashRouter>
        <Routes>
          <Route path="/" element={<MainMenu />}>
            <Route path='' element={<Home />} />
            <Route path='calculator' element={<Calculator />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='todolist' element={<TodoList />} />
            <Route path='books' element={<Books />} />
            <Route path='book-edit' element={<BookEdit />} />
            <Route path='students' element={<Students />} />
            <Route path='student-edit' element={<StudentEdit />} />
          </Route>
        </Routes>
      </HashRouter>

    </div>
  )
}