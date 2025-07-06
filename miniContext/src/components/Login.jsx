import { useState,useContext } from "react"
import React  from 'react'
import UserContext from "../context/userContext"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')

    const  {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
       e.preventDefault() //data post ya get nal kite vi chl janda ohnu rokn vste
       setUser({username, password})
    }

  return (
  <>
  <h2>Login</h2>
  <input type = 'text'
  value={username}
  onChange={(e)=>setUsername(e.target.value)}
  placeholder="username"/>
<br></br>
<br></br>
  <input type = 'text' 
  value={password}
  onChange={(e)=> setpassword(e.target.value)}
  placeholder="password"/>
  <br></br>
  <br></br>
  <button onClick = {handleSubmit}>Submit</button>

  </>
  )
}

export default Login