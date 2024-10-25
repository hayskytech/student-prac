import { onValue, ref, set } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Button, Form, Icon, Table } from 'semantic-ui-react'
import { db } from '../firebaseConfig'
import { Link } from 'react-router-dom'

export default function Books() {

  const [list, setList] = useState({})

  useEffect(() => {
    onValue(ref(db, 'books'), (snapshot) => {
      const res = snapshot.val()
      setList(res || {})
    })
  }, [])

  function deleteAll() {
    if (!window.confirm('Delete All items?')) return
    set(ref(db, 'books'), null)
  }

  function deleteItem(id) {
    if (!window.confirm('Delete this item?')) return
    set(ref(db, `books/${id}`), null)
  }

  return (
    <div style={{ maxWidth: 550, margin: 'auto' }}>
      <h3>Books</h3>
      <Button size='small' color='green' as={Link} to="/book-edit">Add</Button>
      {Object.keys(list).length > 0 &&
        <Button size='small' color='red' onClick={deleteAll} >Delete All</Button>
      }

      <Table unstackable>
        {Object.entries(list).map((book) => {
          return (
            <tr key={book[0]}>
              <td>{book[1].book_name}</td>
              <td>{book[1].price}</td>
              <td>{book[1].pages}</td>
              <td>{book[1].author}</td>
              <td>
                <Icon name="trash alternate" color='red'
                  onClick={() => deleteItem(book[0])}
                />
              </td>
            </tr>
          )
        })}
      </Table>
    </div>
  )
}
