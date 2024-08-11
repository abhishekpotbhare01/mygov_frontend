import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import StudentService from '../../service/StudentService';
import { useNavigate } from 'react-router-dom';

const StudentSchemeForm = () => {
  const navigate = useNavigate();

  const[errorMessage,setErrorMessage]=useState(" ");
  
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
    
    try {
      console.log("studentData is", studentData)
      localStorage.setItem("studentData", JSON.stringify(studentData))
      // get login user Id
      // let userId = localStorage.getItem("userData").userId

      // get schemeId  

      // axios call
      const resp = await StudentService.AddStudentScheme(studentData, 4, 1);
      console.log(resp);
      alert("Student Added....!!!");
      // navigate("/schemepage");

    } catch (error) {
      console.error('Error adding student:', error);

    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 p-4" style={{ maxWidth: '600px' }}>
        <h2 className="text-center mb-4">Add Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="studentName"
              name="studentName"
              value={studentData.studentDetails.studentName}
              onChange={handleChange}
              placeholder='Enter Student First Name'
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="studentSurname"
              name="studentSurname"
              value={studentData.studentDetails.studentSurname}
              onChange={handleChange}
              placeholder='Enter Student Last Name'
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="instituteName"
              name="instituteName"
              value={studentData.studentDetails.instituteName}
              onChange={handleChange}
              placeholder='Enter Institute Name'
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="courseName"
              name="courseName"
              value={studentData.studentDetails.courseName}
              onChange={handleChange}
              placeholder='Enter Course Name'
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="marks">Marks (in percentage)</label>
            <input
              type="number"
              className="form-control"
              id="marks"
              name="marks"
              value={studentData.studentDetails.marks}
              onChange={handleChange}
              placeholder='Enter marks (in percentage)'
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="grade"
              name="grade"
              value={studentData.studentDetails.grade}
              onChange={handleChange}
              placeholder='Enter grade '
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="familyIncome">Enter Family Income</label>
            <input
              type="number"
              className="form-control"
              id="familyIncome"
              name="familyIncome"
              value={studentData.familyIncome}
              onChange={(e) => setStudentData({ ...studentData, familyIncome: parseFloat(e.target.value) })}
              placeholder='Enter Family Income'
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="village_street"
              name="village_street"
              value={studentData.address.village_street}
              onChange={handleAddressChange}
              placeholder='Enter Village/Street'
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={studentData.address.city}
              onChange={handleAddressChange}
              placeholder='Enter City'
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              value={studentData.address.state}
              onChange={handleAddressChange}
              placeholder='Enter State'
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="zip"
              name="zip"
              value={studentData.address.zip}
              onChange={handleAddressChange}
              placeholder='Enter ZIP Code'
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              value={studentData.address.country}
              onChange={handleAddressChange}
              placeholder='Enter Country'
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentSchemeForm;