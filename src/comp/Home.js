import React, { useContext } from 'react'
import { MyContext } from '../App'
import { Button } from 'semantic-ui-react'
import { doLogout } from '../firebaseConfig'

export default function Home() {
  const { user } = useContext(MyContext)
  return (
    <div>
      <h1>This is a home page</h1>
      {user?.photoURL &&
        <img src={user.photoURL} style={{ borderRadius: 200 }} />
      }
      <Button onClick={doLogout} color='red'>Logout</Button>
    </div>
  )
}
