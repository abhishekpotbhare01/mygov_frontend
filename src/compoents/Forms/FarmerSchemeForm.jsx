import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import FarmerService from '../../service/FarmerService';
import { useNavigate } from 'react-router-dom';

const FarmerSchemeForm = () => {
  const navigate = useNavigate();
  const [farmerData, setFarmerData] = useState({
    farmerDetails: {
      farmerName: "",
      farmerSurname: "",
      farmName: "",
      farmAddress: "",
      cropType: "",
      landArea: 0,
      yield: 0
    },
    familyIncome: 0,
    address: {
      village_street: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmerData(prevData => ({
      ...prevData,
      farmerDetails: {
        ...prevData.farmerDetails,
        [name]: name === 'landArea' || name === 'yield' ? parseFloat(value) : value,
      }
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFarmerData(prevData => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("farmerData is", farmerData)
      localStorage.setItem("farmerData", JSON.stringify(farmerData))

      // get login userId
      let userId = localStorage.getItem("loginResponse");
      if (!userId) {
        throw new Error("Login response not found in local storage");
      }
      userId = JSON.parse(userId).userId;

      // get schemeId
      let schemeId = localStorage.getItem("schemeMasterData");
      if (!schemeId) {
        throw new Error("Scheme master data not found in local storage");
      }
      schemeId = JSON.parse(schemeId).schemeId;

      // axios call
      const resp = await FarmerService.AddFarmerScheme(farmerData, userId, schemeId);
      console.log("Farmer Scheme post response: ", resp);
      alert("Farmer Added....!!!");
      // navigate("/schemepage");

    } catch (error) {
      console.error('Error adding farmer:', error);

    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 p-4" style={{ maxWidth: '600px' }}>
        <h2 className="text-center mb-4">Add Farmer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="farmerName"
              name="farmerName"
              value={farmerData.farmerDetails.farmerName}
              onChange={handleChange}
              placeholder='Enter Farmer First Name'
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="farmerSurname"
              name="farmerSurname"
              value={farmerData.farmerDetails.farmerSurname}
              onChange={handleChange}
              placeholder='Enter Farmer Last Name'
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="farmName"
              name="farmName"
              value={farmerData.farmerDetails.farmName}
              onChange={handleChange}
              placeholder='Enter Farm Name'
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="farmAddress"
              name="farmAddress"
              value={farmerData.farmerDetails.farmAddress}
              onChange={handleChange}
              placeholder='Enter Farm Address'
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="cropType"
              name="cropType"
              value={farmerData.farmerDetails.cropType}
              onChange={handleChange}
              placeholder='Enter Crop Type'
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="landArea">Land Area (in acres)</label>
            <input
              type="number"
              className="form-control"
              id="landArea"
              name="landArea"
              value={farmerData.farmerDetails.landArea}
              onChange={handleChange}
              placeholder='Enter Area in Acre'
              required
              />
              </div>
              <button style={{marginLeft:"0px"}} type="submit" className="btn btn-primary btn-block">
              Register
              </button>
              </form>
              </div>
              </>
  );
};



export default FarmerSchemeForm;