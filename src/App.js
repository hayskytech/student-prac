import React from 'react'
import Contact from './comp/Contact'
import { About } from './comp/About'
import { HashRouter, Route, Routes } from 'react-router-dom'
import MainMenu from './comp/MainMenu'
import Home from './comp/Home'
import TodoList from './comp/TodoList'
import Calculator from './comp/Calculator'

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
          </Route>
        </Routes>
      </HashRouter>

    </div>
  )
}