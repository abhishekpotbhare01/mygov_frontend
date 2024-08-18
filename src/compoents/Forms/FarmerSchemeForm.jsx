import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import FarmerService from '../../service/FarmerServise';
import { useNavigate } from 'react-router-dom';
import farmerImage from '../../assets/gov/img/pm_kisan.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FarmerSchemeForm = () => {
  const navigate = useNavigate();

  const [farmerName, setFarmerName] = useState('');
  const [farmerSurname, setFarmerSurname] = useState('');
  const [landDetails, setLandDetails] = useState('');
  const [income, setIncome] = useState('');
  const [landArea, setLandArea] = useState('');
  const [villageStreet, setVillageStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');

  const [formError, setFormError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let userId = sessionStorage.getItem("user");
      if (!userId) throw new Error("Login response not found in session storage");
      userId = JSON.parse(userId).userId;

      let schemeId = sessionStorage.getItem("schemeId");
      if (!schemeId) throw new Error("Scheme ID not found in session storage");
      schemeId = JSON.parse(schemeId).schemeId;

      const farmerData = {
        farmerName,
        farmerSurname,
        landDetails,
        income,
        landArea,
        address: {
          village_street: villageStreet,
          city,
          state,
          zip,
          country,
        },
        bankDetails: {
          name: bankName,
          accountNumber,
          ifscCode,
          aadharNumber,
        },
      };

      const response = await FarmerService.postFarmerSchemeData(farmerData, userId, schemeId);
      console.log("===========777777  ",response);

      toast.success("Applied Successfully!");
      setFormError(''); // Clear any previous errors
      navigate("/schemepage");
    } catch (error) {

      console.log("===========777777  ",error);
      setFormError(error.message);
      toast.error(error.message); // Show error toast
      console.log("Error:", error);
      navigate("/schemepage");
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="container mt-5 p-4" style={{ maxWidth: '700px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <div className="d-flex align-items-center mb-4" style={{ borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
          <img
            src={farmerImage}
            alt="Farmer"
            style={{
              width: '100px',
              height: '100px',
              marginRight: '15px',
              borderRadius: '50%',
              border: '3px solid #28a745',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            }}
          />
          <h2 style={{ color: '#28a745', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>PM KISAN YOJANA</h2>
        </div>
        {formError && <div className="alert alert-danger" role="alert">{formError}</div>}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group mb-3 col-md-6">
              <label htmlFor="farmerName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="farmerName"
                value={farmerName}
                onChange={(e) => setFarmerName(e.target.value)}
                placeholder="Enter Farmer First Name"
                required
              />
            </div>
            <div className="form-group mb-3 col-md-6">
              <label htmlFor="farmerSurname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="farmerSurname"
                value={farmerSurname}
                onChange={(e) => setFarmerSurname(e.target.value)}
                placeholder="Enter Farmer Last Name"
                required
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="annualIncome">Annual Income</label>
            <input
              type="number"
              id="annualIncome"
              min={1}
              className="form-control"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Enter annual income"
              required
            />
          </div>
          <h6>Address</h6>
          <div className="row">
            <div className="form-group mb-3 col-md-6">
              <label htmlFor="villageStreet">Street</label>
              <input
                type="text"
                className="form-control"
                id="villageStreet"
                value={villageStreet}
                onChange={(e) => setVillageStreet(e.target.value)}
                placeholder="Enter street name"
                required
              />
            </div>
            <div className="form-group mb-3 col-md-6">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group mb-3 col-md-6">
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter state"
                required
              />
            </div>
            <div className="form-group mb-3 col-md-6">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                id="zip"
                pattern="[0-9]{6}"
                className="form-control"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="Enter zip code"
                required
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              className="form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter country"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="landArea">Land Area (in acres)</label>
            <input
              type="number"
              className="form-control"
              id="landArea"
              value={landArea}
              onChange={(e) => setLandArea(e.target.value)}
              placeholder="Enter Area in Acre"
              required
            />
          </div>
          <h6>Bank Details</h6>
          <div className="form-group mb-3">
            <label htmlFor="bankName">Bank Name</label>
            <input
              type="text"
              id="bankName"
              className="form-control"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              placeholder="Enter Bank Name"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="text"
              id="accountNumber"
              className="form-control"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter Account Number"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="ifscCode">IFSC Code</label>
            <input
              type="text"
              id="ifscCode"
              className="form-control"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
              placeholder="Enter IFSC Code"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="aadharNumber">Aadhar Number</label>
            <input
              type="text"
              id="aadharNumber"
              className="form-control"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              placeholder="Enter Aadhar Number"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default FarmerSchemeForm;
