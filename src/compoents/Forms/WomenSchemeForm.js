import React, { useState } from 'react';
import './WomenSchemeForm.css';
import axios from 'axios';

const WomenSchemeForm = () => {
  const [formData, setFormData] = useState({
    DOB: '',
    phoneNumber: '',
    Occupation: '',
    maritialStatus: '',
    annualIncome: '',
    address: '',
    userId: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');

  const validateForm = () => {
    const errors = {};

    if (!formData.DOB) errors.DOB = "Date of Birth is required.";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required.";
    if (!formData.Occupation) errors.Occupation = "Occupation is required.";
    if (!formData.maritialStatus) errors.maritialStatus = "Marital status is required.";
    if (!formData.annualIncome || formData.annualIncome <= 0) errors.annualIncome = "Annual income must be greater than 0.";
    if (!formData.address) errors.address = "Address is required.";
    if (!formData.userId) errors.userId = "User ID is required.";

    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('https://your-backend-api.com/api/women-scheme', formData);
        console.log("Form submitted:", response.data);
        setSubmissionStatus('Form submitted successfully.');
      } catch (error) {
        console.error("There was an error submitting the form!", error);
        setSubmissionStatus('Failed to submit form. Please try again.');
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="DOB" value={formData.DOB} onChange={handleChange} />
          {formErrors.DOB && <span>{formErrors.DOB}</span>}
        </div>

        <div>
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          {formErrors.phoneNumber && <span>{formErrors.phoneNumber}</span>}
        </div>

        <div>
          <label>Occupation:</label>
          <input type="text" name="Occupation" value={formData.Occupation} onChange={handleChange} />
          {formErrors.Occupation && <span>{formErrors.Occupation}</span>}
        </div>

        <div>
          <label>Marital Status:</label>
          <select name="maritialStatus" value={formData.maritialStatus} onChange={handleChange}>
            <option value="">Select</option>
            <option value="SINGLE">Single</option>
            <option value="MARRIED">Married</option>
          </select>
          {formErrors.maritialStatus && <span>{formErrors.maritialStatus}</span>}
        </div>

        <div>
          <label>Annual Income:</label>
          <input type="number" name="annualIncome" value={formData.annualIncome} onChange={handleChange} />
          {formErrors.annualIncome && <span>{formErrors.annualIncome}</span>}
        </div>

        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
          {formErrors.address && <span>{formErrors.address}</span>}
        </div>

        <div>
          <label>User ID:</label>
          <input type="text" name="userId" value={formData.userId} onChange={handleChange} />
          {formErrors.userId && <span>{formErrors.userId}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submissionStatus && <p>{submissionStatus}</p>}
    </div>
  );
};

export default WomenSchemeForm;
