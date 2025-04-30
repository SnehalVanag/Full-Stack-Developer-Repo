import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {

  const navigate = useNavigate();

  const handleLogin = async()=>{
    try{
      console.log(email,password)
      let user = await axios.post("http://localhost:8000/login",{
        email,
        password
      })
      // navigate('/logout')
      navigate('/logout');

    }catch(error){
      console.log("error is = ",error)
    }
  }
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState(null)

  return (
  <>
    <div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
    <button type="button" className="btn btn-primary btn-lg" onClick={()=>{handleLogin()}}>Login</button>

  </>
  )
}

export default Login
