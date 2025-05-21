import React, { useContext, useState } from 'react'
import userContext from '../context/userContext'

function Login() {
    const [name , setName] = useState('')
    const [pass , setPass] = useState('')

    const { setUser } = useContext(userContext)

    const onSub = (e) =>{
        e.preventDefault()
        setUser({name , pass})
    }

  return (
    <div>

        <h2>Login here</h2>

        <div>
            <input type="text" value={name} placeholder='username' onChange={(e)=> setName(e.target.value)} />

            <input type="password" value={pass} placeholder='password' onChange={(e)=> setPass(e.target.value)} />

            <input type="submit" value="submit" onClick={onSub} />
        </div>
    </div>
  )
}

export default Login