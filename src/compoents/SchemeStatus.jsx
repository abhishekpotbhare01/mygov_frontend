import React from "react";
import { Navbar } from "./Navbar";
import "./SchemeStatus.css";
import { NavLink } from "react-router-dom";
function SchemeStatus() {
  let data = JSON.parse(localStorage.getItem("resp"));
  const results = data.map((obj) => {
    const scheme = obj.scheme || obj.schemeMaster;
    let status =  "";
            if(obj.womenScheme)
               status=obj.womenScheme.status
            else if(obj.studentScheme)
                status= obj.studentScheme.status
            else
                status=obj.farmerscheme.status;
    // obj.womenScheme ? obj.womenScheme.status : obj.studentScheme.status;
     
    return {
      schemeId: scheme.schemeId,
      schemeName: scheme.schemeName,
      status: status,
    };
  });


  return (
    <>
      <Navbar />
      <div className="contianer-fluid">
        {/* <h2 className="mt-2">Applied scheme status</h2> */}
        <header className="about-us-header">
          <nav className="breadcrumb">
            <a href="schemepage">SchemePage</a> <span>&gt;</span> <span>Scheme Status</span>
          </nav>
        </header>
        
        <div className="d-flex justify-content-center">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">SR.NO</th>
                <th scope="col">SchemeId</th>
                <th scope="col">SchemeName</th>
                {/* <th scope="col">Applied Date</th> */}
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {results?.map((e, i) => {
                return (
                  <tr>
                    <td scope="row">{i + 1}</td>
                    <td>{e.schemeId}</td>
                    <td>{e.schemeName}</td>

                    <td>{e.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SchemeStatus;
