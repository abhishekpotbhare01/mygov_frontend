import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SchemeClient from '../service/SchemeService';
import AdminService from '../service/AdminService';
import SetSession from "../service/AdminService";
import { AdminNavbar } from './AdminNavbar';
import './AdminComponent.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [schemesDetails, setSchemesDetails] = useState([]);
    const [applications, setApplications] = useState([]);
    const [activeTab, setActiveTab] = useState('Pending');

    // Fetch schemes and initial applications data
    useEffect(() => {
        const fetchData = async () => {
            try {

                await SetSession();

                const schemesRes = await SchemeClient.GetAllSchemes();

                setSchemesDetails(schemesRes);

                console.log('Schemes Abhishek ',schemesDetails);

                // Fetch applications for the initial active tab
                const applicationsRes = await AdminService.GetAllSchemesById(1, activeTab);
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


    }, []); // Empty dependency array to run only once

    // Fetch applications when activeTab changes
    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const applicationsRes = await AdminService.GetAllSchemesById(1, activeTab);
                setApplications(applicationsRes);
                console.log('Applications:', applicationsRes);
            } catch (error) {
                console.error('Error while fetching applications:', error);
            }
        };

        fetchApplications();
    }, [activeTab]); // Dependency on activeTab

    // Handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Extract scheme names for the select dropdown
    const schemeNames = schemesDetails.map((scheme) => ({
        schemeId: scheme.schemeId,
        name: scheme.schemeName
    }));

    // Handle details click
    const handleDetailsClick = (app) => {
        const application = { application: app };
        navigate('/approval-page', { state: application });
    };

    return (
        <>
            <AdminNavbar />
            <div className='schemelist'>
                <label htmlFor="schemelist">Choose Scheme</label>
                <select name="schemelist" id="schemelist">
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
                                <div key={`${app.farmerScheme ? app.farmerScheme.userId.userId : app.studentScheme ? app.studentScheme.userId.userId : app.id}`} className="card mb-3">
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        {app.farmerScheme ? (
                                            <span className="text-bold text-end">
                                                {app.farmerScheme.userId.firstName} &nbsp; {app.farmerScheme.userId.lastName} &nbsp; &nbsp; {app.scheme.schemeName}
                                            </span>
                                        ) : app.studentScheme ? (
                                            <span className="text-end">
                                                {app.studentScheme.userId.firstName} &nbsp; {app.studentScheme.userId.lastName} &nbsp; &nbsp; {app.scheme.schemeName}
                                            </span>
                                        ) : (
                                            <span>No scheme found</span>
                                        )}
                                        <button className="btn btn-outline-primary btn-sm" onClick={() => handleDetailsClick(app)}>
                                            See Details
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>No applications available</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
