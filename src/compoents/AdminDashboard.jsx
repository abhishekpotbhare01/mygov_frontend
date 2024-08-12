import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar'
import { AdminNavbar } from './AdminNavbar';
import './AdminComponent.css'
import { Navigate, useNavigate } from 'react-router-dom';

import SchemeClient from '../service/SchemeService.js'
import AdminService from '../service/AdminService.js';

const AdminDashboard = () => {

    const navigate = useNavigate();

    const [schemesDetails, setSchemesDetails] = useState([]);

    const [applications, setApplications] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await SchemeClient.GetAllSchemes();
                setSchemesDetails(res)
                const res1 = await AdminService.GetAllSchemesById(1, activeTab);
                setApplications(res1);
            } catch (error) {

                console.error('SchemeClient or SchemeClient.getSchemes is not defined');
            }
        };

        fetchData();

    }, []);

    const [activeTab, setActiveTab] = useState('Pending');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await AdminService.GetAllSchemesById(2, activeTab);
                setApplications(res); // Ensure res is the correct data structure
                console.log('Applications:', res);
            } catch (error) {
                console.error('Error while fetching applications:', error);
            }
        };

        fetchData();
    }, [activeTab]);

    //  console.log("Data : ", schemesDetails);


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const schemeNames = schemesDetails.map((scheme) => {
        const schemeNames = {
            "schemeId": scheme.schemeId,
            "name": scheme.schemeName
        }

        return schemeNames;

    });


    const handleDetailsClick = (app) => {
        const application = { application: app };
        navigate('/approval-page', { state: application });
    };


    return (
        <>
            <AdminNavbar></AdminNavbar>
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
            </div >
        </>
    );
};

export default AdminDashboard;