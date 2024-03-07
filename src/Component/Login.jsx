import React, { useState } from 'react'

export default function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
  return (
    <div>
      <form onSubmit={HandleSubmit}>
      <label >
        <span>Username:</span>
        <input type="text" value={username}  onChange={(e) => setUsername(e.target.value)}  />
         <span>Password:</span>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type='submit'>Login</button>


      </form>
    </div>
  )
}
