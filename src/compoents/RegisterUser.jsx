import React, { useState } from 'react';
import { Navbar } from './Navbar';
import UserService from '../service/UserService';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {


    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Passwords do not match');
            setSuccessMessage('');
            return;
        }
        try {
            const resp = await UserService.RegisterUser(formData);
            setSuccessMessage('Registration Successful');
            setErrorMessage('');
            console.log(resp);
            alert("Registration Successful")
            navigate('/user-login');
        } catch (error) {
            console.error("error while registration ", error);
            alert("Registration Failed..!!")
        }
    }

    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => setShowPassword(!showPassword);

    return (
        <>
            <Navbar />
            <div className="container mt-5 p-4" style={{ maxWidth: '600px' }}>
                <h2 className="text-center mb-4">Register User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder='Enter First Name'
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder='Enter last Name'
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter Email'
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder='Enter Age'
                        />
                    </div>

                    <div className="form-group mt-3 d-flex flex-row ">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-control w-100"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Enter Password'
                        />
                        <div
                            // className="mt-1"
                            style={{ marginTop: "5px", marginLeft: "5px" }}
                            onClick={handleTogglePassword}
                        >
                            {showPassword ?
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="12" r="3" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                :
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2L22 22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                                        stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            }
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder='Re-Enter Password'
                        />
                    </div>
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary btn-block col-md-8" style={{ marginLeft: "0px" }}>
                            Register
                        </button>
                        <button className="btn btn-link">Go to Login</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default RegisterUser;
