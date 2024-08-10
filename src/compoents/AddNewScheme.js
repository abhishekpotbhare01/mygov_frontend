import React from 'react'
import "./AddNewScheme.css"
function AddNewScheme() {
  return (
    <div className='form'>
    <h3>Add New Scheme</h3>
    <div className="mb-3 ">
            <label for="text">Scheme Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="schemeName"
              id="schemeName"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
    <label for="exampleFormControlTextarea1">Scheme Desccription:</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    <br/>     
    <div className="form-group">
    <label for="exampleFormControlSelect1">select Category</label>
    <select className="form-control" name='category' id="exampleFormControlSelect1">
      <option >AGRICULTURE</option>
      <option>WOMEN_EMPOWERMENT</option>
      <option>EDUCATION</option>
    </select>
  </div>
  <br />
  <div className='form-group'>
  <label for="startDate">Start Date:</label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              aria-describedby="emailHelp"
            />
    </div>
    <br />
    <div className="form-group">
    <label for="exampleFormControlSelect1">select status</label>
    <select className="form-control" name='category' id="exampleFormControlSelect1">
      <option >ACTIVE</option>
      <option>INACTIVE</option>
    </select>
  </div>
  <br />
  <div className="form-group">
            <label className="form-label" for="exampleInputDocument">
              Document Required:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Dcoument name"
              name='DocumentReq'
              id="exampleInputDocument"
            />
          </div>


            {/* login form with submit functionality  */}
    
    <button type="submit" className="btn btn-primary ">Submit</button>
           
   </div>
  )
}

export default AddNewScheme;