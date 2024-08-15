import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ApprovalPage.css'; // Import custom CSS if you have additional styling
import AdminService from '../service/AdminService';
import Swal from 'sweetalert2';



function ApprovalPage() {

  const navigate = useNavigate();


  const location = useLocation();

  const [scheme, setScheme] = useState();
  const [subScheme, setSubScheme] = useState();
  const [comment, setComment] = useState('');

  const [applicationId, setApplicationId] = useState()

  useEffect(() => {
    setScheme(location.state.application.scheme);

    if (location.state.application.farmerScheme) {
      setSubScheme(location.state.application.farmerScheme);

      setApplicationId(location.state.application.farmerScheme.farmerSchemeId);
    } else if (location.state.application.studentScheme) {
      setSubScheme(location.state.application.farmerScheme);

      setApplicationId(location.state.application.farmerScheme.farmerSchemeId);
    }
    else if (location.state.application.womenScheme) {
      setSubScheme(location.state.application.womenScheme);

      setApplicationId(location.state.application.womenScheme.id);
    } else {
      console.log("No Scheme found");
    }
  }, [scheme, subScheme, comment, location.state]);

  const handleApprove = async (status, comment, schemeConst) => {
    try {

      const approvalPayLoad = {
        "applicationId": applicationId,
        "status": status.toUpperCase(),
        "comments": comment,
        "schemeConst": schemeConst
      }

      const resp = await AdminService.updateApplicationStatus(approvalPayLoad);
      sessionStorage.setItem('schemeId', location.state.application.schemeId);
      Swal.fire({
        title: 'Approved!',
        text: `Application has been approved with the following comment: "${comment}"`,
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-popup-class', // Optional custom CSS class for styling
        },
      });
      navigate(-1, {
        state: {
          schemeId: location.state.application.schemeId
        }
      });

    } catch (error) {
      console.error('Error approving application:', error);


      Swal.fire({
        title: 'Error!',
        text: 'There was an issue approving the application. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      navigate(-1, {
        state: {
          schemeId: location.state.application.schemeId
        }
      });
    }
  }

  const handleReject = async (status, comment, schemeConst) => {
    try {

      const rejecetdPayLoad = {
        "applicationId": applicationId,
        "status": status.toUpperCase(),
        "comments": comment,
        "schemeConst": schemeConst

      }

      // Add logic to handle rejection


      const resp = await AdminService.updateApplicationStatus(rejecetdPayLoad);
      console.log('Rejected with comment:', comment);
      sessionStorage.setItem('schemeId', location.state.application.schemeId);
      Swal.fire({
        title: 'Rejected!',
        text: `Application has been rejected with the following comment: "${comment}"`,
        icon: 'warning',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-popup-class', // Optional custom CSS class for styling
        },
      });
      navigate(-1, {
        state: {
          schemeId: location.state.application.schemeId
        }
      });


    } catch (error) {
      console.error('Error rejecting application:', error);
      Swal.fire({
        title: 'Error!',
        text: 'There was an issue rejecting the application. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });

      navigate(-1, {
        state: {
          schemeId: location.state.application.schemeId
        }
      });

    }
  };

  console.log(scheme);



  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card mb-3 border-primary shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="row g-0">
          <div className="col-md-4">
            {scheme?.imageUrl && (
              <img src={scheme?.imageUrl} className="img-fluid rounded-start" alt={`${scheme?.schemeName} logo`} />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{scheme?.schemeName}</h5>
              <p className="card-text"><strong>Description:</strong> {scheme?.schemeDescription}</p>
              <p className="card-text"><strong>Launch Date:</strong> {scheme?.launchDate}</p>
              <p className="card-text"><strong>Category:</strong> {scheme?.category}</p>
              <p className="card-text"><strong>Eligibility Criteria:</strong> {scheme?.eligibilityCriteria}</p>
              <p className="card-text"><strong>Required Document:</strong> {scheme?.docRequired}</p>
              <hr />
              {subScheme && (
                <>
                  <h6 className="card-subtitle mb-2 text-muted">Farmer Details:</h6>
                  <p className="card-text"><strong>Name:</strong> {subScheme.userId.firstName} {subScheme.userId.lastName}</p>
                  <p className="card-text"><strong>Land Details:</strong> {subScheme.landDetails}</p>
                  <p className="card-text"><strong>Income:</strong> ₹{subScheme.income}</p>
                  <p className="card-text"><strong>Address:</strong> {subScheme.address.village_street}, {subScheme.address.city}, {subScheme.address.state}, {subScheme.address.zip}, {subScheme.address.country.toUpperCase()}</p>
                  <p className="card-text"><strong>Status:</strong> {subScheme.status}</p>
                </>
              )}

            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter comments here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button
            className="btn btn-success me-2"
            onClick={() => handleApprove('Approved', comment, scheme.schemeConst)}
          >
            Approve
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleReject('Rejected', comment, scheme.schemeConst)}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApprovalPage;
