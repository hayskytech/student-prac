import { onValue, push, ref, set } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Button, Form, Icon, Input, Table } from 'semantic-ui-react'
import { db } from '../firebaseConfig'
import { Link } from 'react-router-dom'

export default function Students() {

  const [list, setList] = useState({})

  useEffect(() => {
    onValue(ref(db, 'students'), (snapshot) => {
      const res = snapshot.val()
      setList(res || {})

    })
  }, [])

  function deleteAll() {
    if (!window.confirm('Delete All items?')) return
    set(ref(db, 'students'), null)
  }

  function deleteItem(id) {
    if (!window.confirm('Delete this item?')) return
    set(ref(db, `students/${id}`), null)
  }

  return (
    <div style={{ maxWidth: 550, margin: 'auto' }}>
      <h3>Students</h3>
      <Button size='small' color='green' as={Link} to="/student-edit">Add</Button>
      {Object.keys(list).length > 0 &&
        <Button size='small' color='red' onClick={deleteAll} >Delete All</Button>
      }


      <Table unstackable>
        {Object.entries(list).map((student) => {
          return (<tr>
            <td>{student[1].first_name}</td>
            <td>{student[1].last_name}</td>
            <td>
              <Icon name="trash alternate" color='red'
                onClick={() => deleteItem(student[0])}
              />
            </td>
          </tr>)
        })}
      </Table>

    </div>
  )
}
