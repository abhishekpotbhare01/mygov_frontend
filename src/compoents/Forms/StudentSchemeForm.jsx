import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import StudentService from '../../service/StudentService';
import { useNavigate } from 'react-router-dom';

const StudentSchemeForm = () => {
  const navigate = useNavigate();

  const [studentData, setStudentData] = useState({
    studentDetails: {
      studentName: "",
      studentSurname: "",
      instituteName: "",
      courseName: "",
      marks: 0,
      grade: ""
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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData(prevData => ({
      ...prevData,
      studentDetails: {
        ...prevData.studentDetails,
        // [name]: value,
        [name]: name === 'marks' ? parseFloat(value) : value,
      }
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setStudentData(prevData => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorObject = {};

    if (!studentData.studentDetails.studentName) {
      errorObject.studentName = 'First name is required *';
    }
    if (!studentData.studentDetails.studentSurname) {
      errorObject.studentSurname = 'Last name is required *';
    }
    if (!studentData.studentDetails.instituteName) {
      errorObject.instituteName = 'Institute name is required *';
    }
    if (!studentData.studentDetails.courseName) {
      errorObject.courseName = 'Course name is required *';
    }
    if (!studentData.studentDetails.marks) {
      errorObject.marks = 'Marks are required *';
    }
    if (!studentData.studentDetails.grade) {
      errorObject.grade = 'Grade is required *';
    }
    if (!studentData.familyIncome) {
      errorObject.familyIncome = 'Family income is required *';
    }

    if (!studentData.address.village_street) {
      errorObject.village_street = 'Village/Street is required *';
    }
    if (!studentData.address.city) {
      errorObject.city = 'City is required *';
    }
    if (!studentData.address.state) {
      errorObject.state = 'State is required *';
    }
    if (!studentData.address.zip) {
      errorObject.zip = 'ZIP Code is required *';
    }
    if (!studentData.address.country) {
      errorObject.country = 'Country is required *';
    }

    if (Object.keys(errorObject).length > 0) {
      setErrors(errorObject);
    } else {
      try {
        console.log("studentData is", studentData)
        // localStorage.setItem("studentData", JSON.stringify(studentData))

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
        const resp = await StudentService.AddStudentScheme(studentData, userId, schemeId);
        console.log("Student Scheme post response: ", resp);
        alert("Student Added....!!!");
        // navigate("/schemepage");

      } catch (error) {
        console.error('Error adding student:', error);

      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 p-4" style={{ maxWidth: '800px', backgroundColor: "#a3b3de3e" }}>
        <h2 className="text-center mb-4">Add Student</h2>
        <form onSubmit={handleSubmit}>
          <div className='d-flex flex-row justify-content-around'>
            <div className="form-group mb-3 col-md-5">
              <label htmlFor="studentName">First Name</label>
              <input
                type="text"
                className="form-control mb-0"
                id="studentName"
                name="studentName"
                value={studentData.studentDetails.studentName}
                onChange={handleChange}
                placeholder='Enter Student First Name'
              // required
              />
              {errors.studentName && <div style={{ color: 'red' }}>{errors.studentName}</div>}
            </div>
            <div className="form-group mb-3 col-md-5">
              <label htmlFor="studentSurname">Last Name</label>
              <input
                type="text"
                className="form-control mb-0"
                id="studentSurname"
                name="studentSurname"
                value={studentData.studentDetails.studentSurname}
                onChange={handleChange}
                placeholder='Enter Student Last Name'
              // required
              />
              {errors.studentSurname && <div style={{ color: 'red' }}>{errors.studentSurname}</div>}
            </div>
          </div>
          <div className='d-flex flex-row justify-content-around'>
            <div className="form-group mb-3 col-md-5">
              <label htmlFor="instituteName">Institute Name</label>
              <input
                type="text"
                className="form-control mb-0"
                id="instituteName"
                name="instituteName"
                value={studentData.studentDetails.instituteName}
                onChange={handleChange}
                placeholder='Enter Institute Name'
              // required
              />
              {errors.instituteName && <div style={{ color: 'red' }}>{errors.instituteName}</div>}
            </div>
            <div className="form-group mb-3 col-md-5">
              <label htmlFor="courseName">Course Name</label>
              <input
                type="text"
                className="form-control mb-0"
                id="courseName"
                name="courseName"
                value={studentData.studentDetails.courseName}
                onChange={handleChange}
                placeholder='Enter Course Name'
              // required
              />
              {errors.courseName && <div style={{ color: 'red' }}>{errors.courseName}</div>}
            </div>
          </div>
          <div className='d-flex flex-row justify-content-around'>
            <div className="form-group mb-3 col-md-5">
              <label htmlFor="marks" style={{ marginBottom: "10px" }}>Marks (in percentage)</label>
              <input
                type="number"
                className="form-control"
                id="marks"
                name="marks"
                value={studentData.studentDetails.marks}
                onChange={handleChange}
                placeholder='Enter marks (in percentage)'
              // required
              />
              {errors.marks && <div style={{ color: 'red' }}>{errors.marks}</div>}
            </div>
            <div className="form-group mb-3 col-md-5">
              <label htmlFor="grade">Enter grade</label>
              <input
                type="text"
                className="form-control mb-0"
                id="grade"
                name="grade"
                value={studentData.studentDetails.grade}
                onChange={handleChange}
                placeholder="Enter grade"
              // required
              />
              {errors.grade && <div style={{ color: 'red' }}>{errors.grade}</div>}
            </div>
          </div>
          <div className='d-flex flex-row justify-content-around'>
            <div className="form-group mb-3 col-md-5">
              <label htmlFor="familyIncome" style={{ marginBottom: "10px" }}>Enter Family Income</label>
              <input
                type="number"
                className="form-control mb-0"
                id="familyIncome"
                name="familyIncome"
                value={studentData.familyIncome}
                onChange={(e) => setStudentData({ ...studentData, familyIncome: parseFloat(e.target.value) })}
                placeholder='Enter Family Income'
              // required
              />
              {errors.familyIncome && <div style={{ color: 'red' }}>{errors.familyIncome}</div>}
            </div>
            <div className="form-group mb-3 col-md-5">
              <label htmlFor="village_street">Enter Village/Street</label>
              <input
                type="text"
                className="form-control mb-0"
                id="village_street"
                name="village_street"
                value={studentData.address.village_street}
                onChange={handleAddressChange}
                placeholder='Enter Village/Street'
              // required
              />
              {errors.village_street && <div style={{ color: 'red' }}>{errors.village_street}</div>}
            </div>
          </div>
          <div className='d-flex flex-row justify-content-around'>
            <div className="form-group mb-3 col-md-5">
              <label htmlFor="city">Enter City</label>
              <input
                type="text"
                className="form-control mb-0"
                id="city"
                name="city"
                value={studentData.address.city}
                onChange={handleAddressChange}
                placeholder='Enter City'
              // required
              />
              {errors.city && <div style={{ color: 'red' }}>{errors.city}</div>}
            </div>
            <div className="form-group mb-3 col-md-5">
              <label htmlFor="state">Enter State</label>
              <input
                type="text"
                className="form-control mb-0"
                id="state"
                name="state"
                value={studentData.address.state}
                onChange={handleAddressChange}
                placeholder='Enter State'
              // required
              />
              {errors.state && <div style={{ color: 'red' }}>{errors.state}</div>}
            </div>
          </div>
          <div className='d-flex flex-row justify-content-around'>
            <div className="form-group mb-3 col-md-5">
              <label htmlFor="zip">Enter ZIP Code</label>
              <input
                type="text"
                className="form-control mb-0"
                id="zip"
                name="zip"
                value={studentData.address.zip}
                onChange={handleAddressChange}
                placeholder='Enter ZIP Code'
              // required
              />
              {errors.zip && <div style={{ color: 'red' }}>{errors.zip}</div>}
            </div>
            <div className="form-group mb-5 col-md-5">
              <label htmlFor="country">Enter Country</label>
              <input
                type="text"
                className="form-control mb-0"
                id="country"
                name="country"
                value={studentData.address.country}
                onChange={handleAddressChange}
                placeholder='Enter Country'
              // required
              />
              {errors.country && <div style={{ color: 'red' }}>{errors.country}</div>}
            </div>
          </div>
          <button style={{ marginLeft: "34px" }} type="submit" className="btn btn-primary col-md-11">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentSchemeForm;