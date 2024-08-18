// React Component (AddNewScheme.js)
import React from 'react';
import './AddNewScheme.css';

function AddNewScheme() {
  return (
    <div className='form'>
      <h3>Add New Scheme</h3>

      <div className="mb-3">
        <label htmlFor="schemeName">Scheme Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter scheme name"
          id="schemeName"
        />
      </div>

      <div className="form-group">
        <label htmlFor="schemeDescription">Scheme Description:</label>
        <textarea
          className="form-control"
          id="schemeDescription"
          rows="3"
          placeholder="Enter scheme description"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="launchDate">Launch Date:</label>
        <input
          type="date"
          className="form-control"
          id="launchDate"
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select className="form-control" id="category">
          <option>AGRICULTURE</option>
          <option>WOMEN_EMPOWERMENT</option>
          <option>EDUCATION</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="ageCategory">Age Category:</label>
        <select className="form-control" id="ageCategory">
          <option>YOUTH</option>
          <option>ADULT</option>
          <option>SENIOR</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="eligibilityCriteria">Eligibility Criteria:</label>
        <textarea
          className="form-control"
          id="eligibilityCriteria"
          rows="3"
          placeholder="Enter eligibility criteria"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="docRequired">Document Required:</label>
        <input
          type="text"
          className="form-control"
          id="docRequired"
          placeholder="Enter required document name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          className="form-control"
          id="imageUrl"
          placeholder="Enter image URL"
        />
      </div>

      <div className="form-group">
        <label htmlFor="formPath">Form Path:</label>
        <input
          type="text"
          className="form-control"
          id="formPath"
          placeholder="Enter form path"
        />
      </div>

      <div className="form-group">
        <label htmlFor="schemeConst">Scheme Constant:</label>
        <select className="form-control" id="schemeConst">
          <option>SCHEME_A</option>
          <option>SCHEME_B</option>
          <option>SCHEME_C</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <select className="form-control" id="status">
          <option>ACTIVE</option>
          <option>INACTIVE</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  );
}

export default AddNewScheme;
