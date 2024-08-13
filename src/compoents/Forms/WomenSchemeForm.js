import React, { useState } from 'react';
import './WomenSchemeForm.css';

const WomenSchemeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [address, setAddress] = useState({
    village_street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      phoneNumber,
      maritalStatus,
      annualIncome,
      address,
    };

    const errorObject = {};

    if (!firstName) {
      errorObject.firstName = 'First name is required *';
    }
    if (!lastName) {
      errorObject.lastName = 'Last name is required *';
    }
    if (!phoneNumber) {
      errorObject.phoneNumber = 'Phone number is required *';
    }
    if (!maritalStatus) {
      errorObject.maritalStatus = 'Marital status is required *';
    }
    if (!annualIncome) {
      errorObject.annualIncome = 'Annual income is required *';
    }
    if (!address.village_street) {
      errorObject.address = 'Village street address is required *';
    }
    if (!address.city) {
      errorObject.city = 'City is required *';
    }
    if (!address.country) {
      errorObject.country = 'Country name is required *';
    }

    if (Object.keys(errorObject).length > 0) {
      setErrors(errorObject);
    } else {
      console.log('Form data:', formData);
      // Add your form submission logic here
    }
  };

  return (
    <div className='schemeForm'>
      <h2>Scheme Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='d-flex flex-row justify-content-around'>
          <div className="form-group mb-3 col-md-5">
            <label>
              First Name:
              <input
                type="text"
                value={firstName}
                className="form-control"
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="Enter first name"
              />
              {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
            </label>
          </div>
          <div className="form-group mb-3 col-md-5">
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                className="form-control"
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Enter last name"
              />
              {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
            </label>
          </div>
        </div>
        <div className='d-flex flex-row justify-content-around'>
          <div className="form-group mb-3 col-md-5">
            <label>
              Phone Number:
              <input
                type="tel"
                value={phoneNumber}
                className="form-control"
                onChange={(event) => setPhoneNumber(event.target.value)}
                placeholder="Enter phone number"
              />
              {errors.phoneNumber && <div style={{ color: 'red' }}>{errors.phoneNumber}</div>}
            </label>
          </div>
          <div className="form-group mb-3 col-md-5">
            <label>
              Marital Status:
              <select
                value={maritalStatus}
                className="form-control"
                onChange={(event) => setMaritalStatus(event.target.value)}
              >
                <option value="">Select marital status</option>
                <option value="MARRIED">Married</option>
                <option value="SINGLE">Single</option>
              </select>
              {errors.maritalStatus && <div style={{ color: 'red' }}>{errors.maritalStatus}</div>}
            </label>
          </div>
        </div>
        <div className='d-flex flex-row justify-content-around'>
          <div className="form-group mb-3 col-md-5">
            <label>
              Annual Income:
              <input
                type="number"
                value={annualIncome}
                className="form-control"
                onChange={(event) => setAnnualIncome(event.target.value)}
                placeholder="Enter annual income"
              />
              {errors.annualIncome && <div style={{ color: 'red' }}>{errors.annualIncome}</div>}
            </label>
          </div>
          <div className="form-group mb-3 col-md-5">
            <label>
              Street:
              <input
                type="text"
                value={address.village_street}
                className="form-control"
                onChange={(event) => setAddress({ ...address, village_street: event.target.value })}
                placeholder="Enter street name"
              />
              {errors.village_street && <div style={{ color: 'red' }}>{errors.village_street}</div>}
            </label>
          </div>
        </div>
        <div className='d-flex flex-row justify-content-around'>
          <div className="form-group mb-3 col-md-5">
            <label>
              City:
              <input
                type="text"
                value={address.city}
                className="form-control"
                onChange={(event) => setAddress({ ...address, city: event.target.value })}
                placeholder="Enter city name"
              />
              {errors.city && <div style={{ color: 'red' }}>{errors.city}</div>}
            </label>
          </div>
          <div className="form-group mb-3 col-md-5">
            <label>
              State:
              <input
                type="text"
                value={address.state}
                className="form-control"
                onChange={(event) => setAddress({ ...address, state: event.target.value })}
                placeholder="Enter state"
              />
            </label>
          </div>
        </div>
        <div className='d-flex flex-row justify-content-around'>
          <div className="form-group mb-3 col-md-5">
            <label>
              Zip:
              <input
                type="text"
                value={address.zip}
                className="form-control"
                onChange={(event) => setAddress({ ...address, zip: event.target.value })}
                placeholder="Enter zip code"
              />
              {errors.zip && <div style={{ color: 'red' }}>{errors.zip}</div>}
            </label>
          </div>
          <div className="form-group mb-3 col-md-5">
            <label>
              Country:
              <input
                type="text"
                value={address.country}
                className="form-control"
                onChange={(event) => setAddress({ ...address, country: event.target.value })}
                placeholder="Enter country"
              />
              {errors.country && <div style={{ color: 'red' }}>{errors.country}</div>}
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Apply
        </button>
      </form>
    </div>
  );
};

export default WomenSchemeForm;
