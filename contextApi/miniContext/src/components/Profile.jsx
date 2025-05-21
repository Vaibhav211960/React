import React, { useContext } from 'react'
import userContext from '../context/userContext'

function Profile() {

    const { user } = useContext(userContext)

  if(user) return <div>welcome ,{user.name}</div>

  return (
    <div>uuu</div>
  )
}

export default Profile