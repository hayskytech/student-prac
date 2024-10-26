import React, { createContext, useState } from 'react'
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
import { doLogin, FBInitialSetup } from './firebaseConfig'
import { Button } from 'semantic-ui-react'

export const MyContext = createContext(null)

export default function App() {
  const [user, setUser] = useState(null)
  FBInitialSetup(setUser)

  if (!user) {
    return (<div style={{ maxWidth: 650, margin: 'auto', padding: 50, textAlign: 'center' }}>
      <img src="https://haysky.com/wp-content/uploads/2024/08/account.png" style={{ width: '100%', maxWidth: 300 }} />
      <br />
      <Button onClick={doLogin} color='blue'>Login with Google</Button>
    </div>)
  }

  return (
    <>
      <MyContext.Provider value={{ user }}>
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
      </MyContext.Provider>
    </>
  )
}