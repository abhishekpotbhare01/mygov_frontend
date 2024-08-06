import React, { useState } from 'react'
import "./LoginPage.css";

function LoginPage(props) {
    // handler submit function 
    let [email,setemail]=useState("")
    let [password,setPassword]=useState("")
    const handleSubmit=(event)=>{
        //incomplete code for login    
        event.preventDefault();
            setemail=event.target.email;
            setPassword=event.target.password
            // console.log(email,password) 

    }
    return (
    <div className='loginform'>
    <form onSubmit={ handleSubmit }>
      <h1> {props.name} Login </h1>
  <div className="mb-3 ">
  <label for="email">Email Address:</label>
  <input type="email" className="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
  <label className="form-label" for="exampleInputPassword1">Enter Password:</label><br/>
    <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check forgot-div">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Remember me</label>
      {/* Simple link */}
    <a href="#!"className='text-danger text-decoration-none'>Forgot password?</a>
    
  

    {/* login form with submit functionality  */}
  
  </div>
  <button type="submit" className="btn btn-primary btn-block login-btn" >Submit</button>
  <div class="text-center">
    <p>or sign up with:</p>
    <button type="button" className="btn btn-outline-primary btn-block">
              <i className="fab fa-google mr-2"></i> Login with Google
            </button>
            <button type="button" class="btn btn-outline-primary btn-block">
              <i className="fab fa-facebook-f mr-2"></i> Login with Facebook
            </button>
      </div>
</form>
</div>
  )
}

export default LoginPage