import React,{useState} from 'react';
import {Link} from 'react-router-dom'

const Signup = () => {
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")

  const PostData = () =>{
    fetch("/signup",{
      method:"post",
      headers:{
        "Content-Type":"applicatioon/json"
      },
      body:JSON.stringify({
        name:"",
        password:"",
        email:""
      })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  }

  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input type="text"
         placeholder="name" 
           value={name}
           onChange={(e)=>setName(e.target.value)}
         />
        <input type="text" 
        placeholder="email"
        value={email}
           onChange={(e)=>setEmail(e.target.value)}
         />
        <input type="text" 
        placeholder="password" 
        value={password}
           onChange={(e)=>setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light #0095F6 blue darken-1"
        onClick={()=>PostData()}
        >
         SignUP
        </button>
        <h5>
            <Link to="/signin">Already have an account?</Link>
        </h5>
      </div>
    </div>
  )
}

export default Signup;
