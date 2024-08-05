import React, { useState } from 'react'
import "./LoginPage.css";
function LoginPage() {
    // handler submit function 
    let [email,setemail]=useState("")
    let [password,setPassword]=useState("")
    const handleSubmit=(event)=>{
            event.preventDefault();
            setemail=event.target.email;
            setPassword=event.target.password
            console.log(email,password)
    }
    return (
    <div className='loginform'>
    <form onSubmit={ handleSubmit }>
        <h1> Login </h1>
  <div className="mb-3 ">
    <input type="email" className="form-control" placeholder='Email address' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1"/>
  </div>
  {/* <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label classNameName="form-check-label" for="exampleCheck1">Remember me</label>
  </div>  */}

    {/* login form with submit functionality  */}
  <button type="submit" className="btn btn-primary login-btn" >Submit</button>
</form>
</div>
  )
}

export default LoginPage