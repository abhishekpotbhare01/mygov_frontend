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

    const [errorMessages, setErrorMessages] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateField = (name, value) => {
        let message = '';
        switch (name) {
            case 'firstName':
                if (!value) message = 'First Name is required';
                break;
            case 'email':
                if (!value) message = 'Email is required';
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = 'Invalid email format';
                break;
            case 'age':
                if (!value) message = 'Age is required';
                else if (isNaN(value) || value <= 0) message = 'Age must be a positive number';
                break;
            case 'password':
                if (!value) message = 'Password is required';
                break;
            case 'confirmPassword':
                if (value !== formData.password) message = 'Passwords do not match';
                break;
            default:
                break;
        }
        setErrorMessages((prev) => ({ ...prev, [name]: message }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields before submission
        Object.keys(formData).forEach((key) => validateField(key, formData[key]));
        if (Object.values(errorMessages).some((msg) => msg)) return; // Prevent submit if there are errors

        try {
            const resp = await UserService.RegisterUser(formData);
            setSuccessMessage('Registration Successful');
            setErrorMessages({});
            alert("Registration Successful");
            navigate('/user-login');
        } catch (error) {
            console.error("error while registration ", error);
            alert("Registration Failed..!!");
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => setShowPassword(!showPassword);

    return (
        <>
            <Navbar />
            <div className="container mt-5 p-4" style={{ maxWidth: '600px', backgroundColor: "#a3b3de3e" }}>
                <h2 className="text-center mb-4">Register User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group d-flex align-items-center mb-4">
                        <label htmlFor="firstName" className="me-3" style={{ minWidth: '120px' }}>
                            First Name <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter First Name"
                            required
                        />
                        {errorMessages.firstName && <small className="text-danger">{errorMessages.firstName}</small>}
                    </div>
                    <div className="form-group d-flex align-items-center mb-4">
                        <label htmlFor="lastName" className="me-3" style={{ minWidth: '120px' }}>Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder='Enter Last Name'
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="form-group d-flex align-items-center mb-4">
                        <label htmlFor="email" className="me-3" style={{ minWidth: '120px' }}>
                            Email <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='Enter Email'
                            required
                        />
                        {errorMessages.email && <small className="text-danger">{errorMessages.email}</small>}
                    </div>
                    <div className="form-group d-flex align-items-center mb-4">
                        <label htmlFor="age" className="me-3" style={{ minWidth: '120px' }}>
                            Age <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='Enter Age'
                            required
                        />
                        {errorMessages.age && <small className="text-danger">{errorMessages.age}</small>}
                    </div>
                    <div className="form-group d-flex align-items-center mb-4">
                        <label htmlFor="password" className="me-3" style={{ minWidth: '120px' }}>
                            Password <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='Enter Password'
                            required
                        />
                        <div
                            style={{ marginTop: "5px", marginLeft: "5px" }}
                            onClick={handleTogglePassword}
                        >
                            {/* Password visibility toggle icon */}
                        </div>
                        {errorMessages.password && <small className="text-danger">{errorMessages.password}</small>}
                    </div>
                    <div className="form-group d-flex align-items-center mb-4">
                        <label htmlFor="confirmPassword" className="me-3" style={{ minWidth: '120px' }}>
                            Re-enter Password <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='Re-Enter Password'
                            required
                        />
                        {errorMessages.confirmPassword && <small className="text-danger">{errorMessages.confirmPassword}</small>}
                    </div>

                    {errorMessages.form && <div className="alert alert-danger">{errorMessages.form}</div>}
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    <div className="d-flex justify-content-between mt-4">
                        <button type="submit" className="btn btn-primary btn-block col-md-8" style={{ marginLeft: "0px" }}>
                            Register
                        </button>
                        <button
                            type="button"
                            className="btn btn-link"
                            onClick={() => navigate('/user-login')}
                        >
                            Go to Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default RegisterUser;
