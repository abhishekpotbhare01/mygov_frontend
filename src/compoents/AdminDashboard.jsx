import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SchemeClient from '../service/SchemeService';
import AdminService from '../service/AdminService';
import SetSession from "../service/AdminService";
import { AdminNavbar } from './AdminNavbar';
import './AdminComponent.css';

import { useLocation } from 'react-router-dom';

const AdminDashboard = () => {

    const location = useLocation();

    const navigate = useNavigate();
    const [schemesDetails, setSchemesDetails] = useState([]);
    const [applications, setApplications] = useState([]);
    const [activeTab, setActiveTab] = useState('Pending');
    const initialSchemeId = location.state?.schemeId;
    const [schemeId, setSchemeId] = useState(initialSchemeId || 1);


    useEffect(() => {
        var schemeId1 = location.state?.schemeId;
        if (schemeId1) {
            setSchemeId(schemeId1);
        }
        const fetchData = async () => {
            try {

                const schemesRes = await SchemeClient.GetAllSchemes();

                setSchemesDetails(schemesRes);

                console.log('Schemes Abhishek ', schemesDetails);


                const applicationsRes = await AdminService.GetAllSchemesById(schemeId, activeTab, navigate);
                setApplications(applicationsRes);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    Swal.fire({
                        title: 'Session Expired',
                        text: 'Please Login Again',
                        icon: 'error',
                        confirmButtonText: 'Login'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/admin-login');
                        }
                    });
                } else {
                    console.error('Error while fetching schemes or applications:', error);
                }
            }
        };
 
        fetchData();


    }, []);


    useEffect(() => {
        const fetchApplications = async () => {
            try {

                const applicationsRes = await AdminService.GetAllSchemesById(schemeId, activeTab);
                setApplications(applicationsRes);
                console.log('Applications:', applicationsRes);
            } catch (error) {
                console.error('Error while fetching applications:', error);
            }
        };

        fetchApplications();
    }, [schemeId, activeTab]);


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    const schemeNames = schemesDetails.map((scheme) => ({
        schemeId: scheme.schemeId,
        name: scheme.schemeName
    }));

    // Handle details click
    const handleDetailsClick = (app) => {
        const application = { application: app };
        navigate('/approval-page', { state: application });
    };

    const handleSchemeChange = async (event) => {
        console.log(event.target.value);
        setSchemeId(event.target.value);
    }

    const handleAddSchemeClick = () => {

    }

    return (
        <>
            <AdminNavbar />
            <div>


                <div className='schemelist' style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="schemelist">Choose Scheme</label>
                    <select name="schemelist" id="schemelist" onChange={(event) => handleSchemeChange(event)}>
                        {schemeNames && schemeNames.length > 0 ? (
                            schemeNames.map((scheme, index) => (
                                <option key={index} value={scheme.schemeId}>
                                    {scheme.name ? scheme.name.toUpperCase() : "Unnamed Scheme"}
                                </option>
                            ))
                        ) : (
                            <option value="">No Schemes Available</option>
                        )}
                    </select>
                    <div style={{ marginRight: '0' }}>

                    </div>
                </div>
                <button
                    style={{ marginRight: 0 }}
                    className="btn btn-primary text-uppercase"
                    onClick={handleAddSchemeClick}
                >
                    Add Scheme
                </button>
            </div>

            <div className="container-fluid mt-3">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="status-box pending-box">
                            <h4>Total Pending</h4>
                            <p>{4}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="status-box approved-box">
                            <h4>Total Approved</h4>
                            <p>{2}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="list-group">
                            {['Pending', 'Approved', 'Rejected'].map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    className={`list-group-item list-group-item-action ${activeTab === tab ? 'active' : ''} button-spacing`}
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
 
                    <div className="col-md-9">
                        {applications.length > 0 ? (
                            applications.map((app) => (
                                <div
                                    key={`${app.farmerScheme ? app.farmerScheme.userId.userId : app.studentScheme ? app.studentScheme.userId.userId : app.id}`}
                                    className="card mb-3 shadow-sm"
                                >
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        {app.farmerScheme ? (
                                            <div className="text-end">
                                                <h5 className="mb-1 text-primary">
                                                    {app.farmerScheme.userId.firstName.toUpperCase()} {app.farmerScheme.userId.lastName.toUpperCase()}
                                                </h5>
                                                <p className="mb-0 text-muted text-primary">{app.scheme.schemeName}</p>
                                            </div>
                                        ) : app.studentScheme ? (
                                            <div className="text-end">
                                                <h5 className="mb-1 text-success">
                                                    {app.studentScheme.userId.firstName.toUpperCase()} {app.studentScheme.userId.lastName.toUpperCase()}
                                                </h5>
                                                <p className="mb-0 text-muted text-primary">{app.scheme.schemeName}</p>
                                            </div>
                                        ) : app.womenScheme ? (
                                            <div className="text-end">
                                                <h5 className="mb-1 text-info">
                                                    {app.womenScheme.userId.firstName.toUpperCase()} {app.womenScheme.userId.lastName.toUpperCase()}
                                                </h5>
                                                <p className="mb-0 text-muted text-primary">{app.scheme.schemeName}</p>
                                            </div>
                                        ) : (
                                            <div className="text-end">
                                                <h5 className="mb-1 text-danger">No scheme found</h5>
                                            </div>
                                        )}
                                        <button
                                            className="btn btn-outline-primary btn-sm"
                                            style={{
                                                backgroundColor: "#007bff",
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: "20px",
                                                padding: "8px 16px"
                                            }}
                                            onClick={() => handleDetailsClick(app)}
                                        >
                                            See Details
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="alert alert-warning text-center" role="alert">
                                No applications available
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
};
 
export default AdminDashboard;
