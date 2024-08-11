import React, { useState } from "react";
import "./LoginPage.css";
import { Navbar } from "./Navbar";
import UserService from "../service/UserService";

import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    try {
      const resp = await UserService.LoginUser(user);

      console.log("login response  is ", resp);
      localStorage.setItem("loginResponse", JSON.stringify(resp));

      alert("Login Successfull....!!!");
      navigate("/schemepage");
    } catch (error) {
      console.error("error while Login ", error);
      alert("Login Failed..!!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="loginform">
        <form onSubmit={handleSubmit}>
          <h2 className="login-head"> {props.name} Login </h2>
          <div className="mb-3 ">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" for="exampleInputPassword1">
              Enter Password:
            </label>
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group form-check forgot-div">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Remember me
            </label>
            {/* Simple link */}
            <a href="#!" className="text-danger text-decoration-none">
              Forgot password?
            </a>

            {/* login form with submit functionality  */}
          </div>
          <button type="submit" className="btn btn-primary btn-block login-btn">
            Submit
          </button>
          <div className="text-center">
            {/* {<div>  <p>or sign up with:</p>
              <button type="button" className="btn btn-outline-primary btn-block">
                <i className="fab fa-google mr-2"></i> Login with Google
              </button>
              <button type="button" class="btn btn-outline-primary btn-block">
                <i className="fab fa-facebook-f mr-2"></i> Login with Facebook
              </button></div>}


            {<div className="text-center mt-2">
              {" "}
              New user? <a href="#">Sign up</a>
            </div>} */}
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
