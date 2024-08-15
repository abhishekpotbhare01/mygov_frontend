import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';
import UserService from '../service/UserService';

function ForgotPassword() {
  const [emailId, setEmailId] = useState("");
  const [verifyOTP, setVerifyOTP] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleClick = (button) => {
    if (emailId) {
      setVerifyOTP(true);
      button.disabled = true;
    }
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();
    
    if (newPassword === confirmPassword) {
      try {
        const data = await UserService.ResetPassword(emailId, newPassword); // Await the result from ResetPassword function
        if (data) {
          console.log("data", data);
          setSuccess("Password reset successfully!"); // Update success message
          setError(null);
        }
      } catch (error) {
        setError("Error resetting password. Please try again."); // Handle any errors that occur
      }
    } else {
      setError("Passwords do not match. Please try again.");
    }
  };
  

  return (
    <>
      <div className="loginform">
        <h2 className="login-head">Forgot Password</h2>
        <div className="mb-3 ">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={emailId}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setEmailId(event.target.value)}
            required
          />
        </div>
        <button
          id="otp"
          type="button"
          className="btn btn-warning"
          onClick={(e) => handleClick(e.target)}
        >
    Confirm</button>
        {verifyOTP && (
          <div>
            <div className="login">
              <label htmlFor="newPassword"><b>New Password</b></label>
              <input
                type="password"
                className="form-control"
                placeholder="New Password"
                value={newPassword}
                id="newPassword"
                name="newPassword"
                onChange={(event) => setNewPassword(event.target.value)}
                required
              />
              <input
                type="password"
                className="form-control"
                placeholder="confirm Password"
                value={confirmPassword}
                id="confirmPassword"
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </div>
            
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
            {error && <div className="alert alert-danger"><b>{error}</b></div>}
            {success && <div className="alert alert-success"><b>{success}</b></div>}
            </div>
        )}
      </div>
    </>
  );
}

export default ForgotPassword;