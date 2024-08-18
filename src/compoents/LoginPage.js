import React, { useState } from "react";
import "./LoginPage.css";
import { Navbar } from "./Navbar";
import UserService from "../service/UserService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AdminService from "../service/AdminService";

function LoginPage(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = () => {

    if (!email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Email is required" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
    
  };

  const validatePassword = () => {
    if (!password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Password is required" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    validateEmail();
    validatePassword();

    if (!email || !password) return; // Prevent submission if errors exist

    const user = {
      email: email,
      password: password,
    };

    try {
      const resp = await UserService.LoginUser(user);
      console.log("login response is ", resp);
      localStorage.setItem("loginResponse", JSON.stringify(resp));
      sessionStorage.setItem("user", JSON.stringify(resp.userDto));

      await AdminService.SetSession(resp.accessToken);

      Swal.fire({
        title: 'Login Successful!',
        text: 'You have successfully logged in.',
        icon: 'success',
        confirmButtonText: 'Continue',
      }).then(() => {
        if (resp.role === "ROLE_ADMIN") {
          navigate("/admin", { replace: true });
        } else if (resp.role === "ROLE_USER") {
          navigate("/schemepage", { replace: true });
        }
      });
    } catch (error) {
      console.error("Error while login: ", error);
      alert("Login Failed..!!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="loginform">
        <form onSubmit={handleSubmit}>
          <h2 className="login-head">{props.name} Login</h2>
          <div className="mb-3">
            <label htmlFor="email">Email Address: <span style={{ color: 'red' }}>*</span></label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="exampleInputEmail1"
              required
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail} // Validate on blur
            />
            {errors.email && <div className="error text-danger" >{errors.email}</div>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="exampleInputPassword1">
              Enter Password:<span style={{ color: 'red' }}>*</span>
            </label>
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword} // Validate on blur
            />
            {errors.password && <div className="error text-danger"  >{errors.password}</div>}
          </div>
          <div className="form-group form-check forgot-div">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
            <a href="forgotpassword" className="text-danger text-decoration-none">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="btn btn-primary btn-block login-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;