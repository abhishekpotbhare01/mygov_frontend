import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar'
import { AdminNavbar } from './AdminNavbar';
import './AdminComponent.css'

import SchemeClient from '../service/SchemeService.js'
import AdminService from '../service/AdminService.js';

const AdminDashboard = () => {

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





    const [users, setUsers] = useState([
        { id: 1, name: 'User 1', status: 'Pending' },
        { id: 2, name: 'User 2', status: 'Approved' },
        { id: 3, name: 'User 3', status: 'Pending' },
        { id: 4, name: 'User 4', status: 'Approved' },
        { id: 5, name: 'User 5', status: 'Pending' },
        { id: 6, name: 'User 6', status: 'Pending' },
    ]);



    const pendingCount = users.filter(user => user.status === 'Pending').length;
    const approvedCount = users.filter(user => user.status === 'Approved').length;

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const filteredUsers = users.filter(user => user.status === activeTab);

    const schemeNames = schemesDetails.map((scheme) => {
        const schemeNames = {
            "schemeId": scheme.schemeId,
            "name": scheme.schemeName
        }

        return schemeNames;

    });

    console.log(schemeNames)


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
                            <p>{pendingCount}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="status-box approved-box">
                            <h4>Total Approved</h4>
                            <p>{approvedCount}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="list-group">
                            {['Pending', 'Approved'].map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    className={`mt-2 list-group-item list-group-item-action ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-9">
                        {applications.map((app) => (
                            <div key={`${app.farmerScheme ? app.farmerScheme.userId.userId : app.studentScheme ? app.studentScheme.userId.userId : app.id}`} className="card mb-3">
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    {app.farmerScheme ? (
                                        <span>{JSON.stringify(app.farmerScheme.userId.email)}</span>
                                    ) : app.studentScheme ? (
                                        <span>{JSON.stringify(app.studentScheme.userId.email)}</span>
                                    ) : (
                                        <span>No scheme found</span>
                                    )}
                                    <button className="btn btn-outline-primary btn-sm">See Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;