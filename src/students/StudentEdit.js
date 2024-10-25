import { onValue, push, ref, set } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Button, Form, Icon, Input, Table } from 'semantic-ui-react'
import { db } from '../firebaseConfig'

export default function StudentEdit() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');



  function handleSubmit() {

    if (first_name === '') return
    push(ref(db, 'students'), { first_name, last_name })
    setFirstName('')
    setLastName('')

    window.alert('student added')
    window.history.back()
  }


  return (
    <div style={{ maxWidth: 550, margin: 'auto' }}>
      <h3>
        <Icon name='arrow alternate circle left' onClick={() => window.history.back()} />
        Student Edit
      </h3>

      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <Input
            placeholder="First Name"
            value={first_name}
            onChange={(e, d) => setFirstName(d.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <Input
            placeholder="Last Name"
            value={last_name}
            onChange={(e, d) => setLastName(d.value)}
          />
        </Form.Field>
        <Button type="submit" primary>
          Submit
        </Button>
      </Form>


    </div>
  )
}
