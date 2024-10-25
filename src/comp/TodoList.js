import { onValue, push, ref, set } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Button, Form, Icon, Input, Table } from 'semantic-ui-react'
import { db } from '../firebaseConfig'

export default function TodoList() {

  const [item, setItem] = useState('')
  const [list, setList] = useState({})

  useEffect(() => {
    onValue(ref(db, 'todos'), (snapshot) => {
      const res = snapshot.val()
      setList(res || {})

    })
  }, [])

  function addItem() {
    if (item === '') return
    push(ref(db, 'todos'), item)
    setItem('')
  }

  function deleteAll() {
    if (!window.confirm('Delete All items?')) return
    set(ref(db, 'todos'), null)
  }

  function deleteItem(id) {
    if (!window.confirm('Delete this item?')) return
    set(ref(db, `todos/${id}`), null)
  }

  return (
    <div style={{ maxWidth: 500, margin: 'auto' }}>

      <h3>Todo List</h3>

      <Form onSubmit={addItem}>
        <Input placeholder="Enter text" value={item} onChange={(e) => setItem(e.target.value)} />
        <Button color="blue" disabled={item === ''}>ADD ITEM</Button>
        {Object.keys(list).length > 0 && <Button color="red" type='button' onClick={deleteAll}>Delete All</Button>}
      </Form>

      <hr />

      <Table unstackable>
        {Object.entries(list).map((todo) => {
          return (<tr>
            <td>{todo[1]}</td>
            <td>
              <Icon name="trash alternate" color='red'
                onClick={() => deleteItem(todo[0])}
              />
            </td>
          </tr>)
        })}
      </Table>

    </div>
  )
}
