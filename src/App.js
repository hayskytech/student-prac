import React from 'react'
import About from './comp/About'
import Contact from './comp/Contact'

export default function App() {

  let x = 5
  x = 10
  let y = 5
  let z = x + y

  function run() {
    window.alert('hai')
  }

  return (
    <div>

      <h2>Main</h2>
      <h1>{x} and {y} = {z}</h1>
      <button onClick={run}>Click here</button>

      <About />
      <Contact />

    </div>
  )
}