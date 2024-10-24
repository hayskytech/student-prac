import { onValue, push, ref, set } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'
import { db } from '../firebaseConfig'

export default function TodoList() {

  const [item, setItem] = useState('')
  const [list, setList] = useState({})

  useEffect(() => {
    onValue(ref(db, 'todos'), (snapshot) => {
      const res = snapshot.val()
      // console.log(res);
      // console.log(Object.entries(res));
      setList(res)

    })
  }, [])

  function addItem() {
    push(ref(db, 'todos'), item)
    setItem('')
  }

  return (
    <div>
      <h3>Todo List</h3>
      <input value={item} onChange={(e) => setItem(e.target.value)} />
      <Button onClick={addItem}>ADD ITEM</Button>
      <hr />

      <ol>
        {Object.entries(list).map((todo) => {
          return (<li>{todo[1]}</li>)
        })}
      </ol>
    </div>
  )
}
