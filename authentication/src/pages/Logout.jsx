import React from 'react'
import axios from 'axios'

function Logout() {
    const handleLogout = async()=>{
        try{
        let user = await axios.post("http://localhost:8000/logout")
        console.log("sucessfull logout")
        }catch(error){
            console.log("error is ",error)
        }
    }
  return (
    <div>
        <h1>Hello welcome in Logout page</h1>
       <button onClick={()=>{handleLogout()}}>Logout</button> 
    </div>
  )
}

export default Logout
