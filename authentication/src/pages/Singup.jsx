import React from "react";
import axios from "axios";

function Singup() {

    const handleSubmit = async () => {
      try {
        const user = await axios.post(
          "http://localhost:8000/singup",
          {
            name,
            age,
            email,
            password,
          },
          {
            withCredentials: true,
          }
        );
        console.log(user.data);
      } catch (error) {
        console.log(error);
      }
    };
  

    const [name,setName] = React.useState("");
    const [age,setAge] = React.useState("");        
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState(null);
  return (
<>

<div className="input-group mb-3" >
    <span className="input-group-text" id="inputGroup-sizing-default">User Name</span>
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  value={name} onChange={(e)=>{setName(e.target.value)}}/>
    </div>

<div className="input-group mb-3">
<span className="input-group-text" id="inputGroup-sizing-default">Age</span>
<input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
</div>

<div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>

<div className="input-group mb-3">
<span className="input-group-text" id="inputGroup-sizing-default">Password</span>
<input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
</div>

<button type="button" className="btn btn-primary btn-lg" onClick={()=>{handleSubmit()}}>Sing Up</button>

</>

  
  );
}

export default Singup;
