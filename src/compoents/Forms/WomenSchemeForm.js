import React, { useState } from 'react';
import './WomenSchemeForm.css';
import WomenSchemeService from '../../service/WomenSchemeService';

const WomenSchemeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [maritialStatus, setMaritalStatus] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [success, setSuccess] = useState('');
  const [address, setAddress] = useState({
    village_street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
  const [errors, setErrors] = useState({});
  const [formerror, setFormError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      phoneNumber,
      maritialStatus,
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
    if (!maritialStatus) {
      errorObject.maritialStatus = 'Marital status is required *';
    }
    if (!annualIncome) {
      errorObject.annualIncome = 'Annual income is required *';
    }
    if (!address.village_street) {
      errorObject.village_street = 'Village street address is required *';
    }
    if (!address.city) {
      errorObject.city = 'City is required *';
    }
    if (!address.state) {
      errorObject.state = 'State is required *';
    }
    if (!address.zip) {
      errorObject.zip = 'Zip code is Required *';
    }
    if (!address.country) {
      errorObject.country = 'Country name is required *';
    }

    if (Object.keys(errorObject).length > 0) {
      setErrors(errorObject);
    } else {
      console.log('Form data:', formData);

      // get login userId
      let userId = localStorage.getItem("loginResponse");

      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxx---------", localStorage.getItem("loginResponse"))
      if (!userId) {
        throw new Error("Login response not found in local storage");
      }
      userId = JSON.parse(userId).userDto.userId;


      // get schemeId from localstorage
      let schemeId = localStorage.getItem("schemeMasterData");
      if (!schemeId) {
        throw new Error("Scheme master data not found in local storage");
      }
      schemeId = JSON.parse(schemeId).schemeId;
      // console.log("schemeId",schemeId)
      try {
        const resp = await WomenSchemeService.postWomenSchemeData(formData, userId, schemeId);
        console.log(resp);
        setSuccess("Applied Successfully !!!")
        // alert("applied for womenScheme Successfully...")

        navigator("/schemepage")
      } catch (error) {
        setFormError(error);
        console.log("error", error);
      }


    }
  };

  return (
    <div className='schemeForm'>
      <h2>Scheme Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='d-flex flex-row justify-content-around'>
          <div className="form-group mb-2 col-md-5">
            <label>
              First Name:
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                className="form-control"
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="Enter first name"
              />
              {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
            </label>
          </div>
          <div className="form-group mb-2 col-md-5">
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                id="lastName"
                name="lastName"
                className="form-control"
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Enter last name"
              />
              {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
            </label>
          </div>
        </div>
        <div className='d-flex flex-row justify-content-around'>
          <div className="form-group mb-2 col-md-5">
            <label>
              Phone Number:
              <input
                type="tel"
                value={phoneNumber}
                id="phoneNumber"
                name="phoneNumber"
                className="form-control"
                pattern="[0-9]{10}"
                onChange={(event) => setPhoneNumber(event.target.value)}
                placeholder="Enter phone number"
              />
              {errors.phoneNumber && <div style={{ color: 'red' }}>{errors.phoneNumber}</div>}
            </label>
          </div>
          <div className="form-group mb-2 col-md-5">
            <label>
              Marital Status:
              <select
                value={maritialStatus}
                id="maritialStatus"
                name="maritialStatus"
                className="form-control"
                onChange={(event) => setMaritalStatus(event.target.value)}
              >
                <option value="">Select marital status</option>
                <option value="MARRIED">Married</option>
                <option value="SINGLE">Single</option>
              </select>
              {errors.maritialStatus && <div style={{ color: 'red' }}>{errors.maritialStatus}</div>}
            </label>
          </div>
        </div>
        <div className='d-flex flex-row justify-content-around'>
          <div className="form-group mb-1 col-md-5">
            <label>
              Annual Income:
              <input
                type="number"
                value={annualIncome}
                id="annualIncome"
                name="annualIncome"
                min={1}
                className="form-control"
                onChange={(event) => setAnnualIncome(event.target.value)}
                placeholder="Enter annual income"
              />
              {errors.annualIncome && <div style={{ color: 'red' }}>{errors.annualIncome}</div>}
            </label>
          </div>
          <div className="form-group mb-2 col-md-5">
            <label>
              Street:
              <input
                type="text"
                value={address.village_street}
                className="form-control"
                id="village_street"
                name="village_street"
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
                id="city"
                name="city"
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
                id="state"
                name="state"
                onChange={(event) => setAddress({ ...address, state: event.target.value })}
                placeholder="Enter state"
              />
              {errors.state && <div style={{ color: 'red' }}>{errors.state}</div>}
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
                id="zip"
                name="zip"
                pattern='[0-9]{6}'
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
                id="country"
                name="country"
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

        {/* setting success or error popup when form is submitted */}
        {formerror && <div className="alert alert-danger"><b>{formerror}</b></div>}
        {success && <div className="alert alert-success"><b>{success}</b></div>}
      </form>
    </div>
  );
};

export default WomenSchemeForm;
