import React, { useState } from 'react';
import { Navbar } from './Navbar'
import { AdminNavbar } from './AdminNavbar';
import './AdminComponent.css'

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('Pending');
    const [users, setUsers] = useState([
        { id: 1, name: 'User 1', status: 'Pending' },
        { id: 2, name: 'User 2', status: 'Approved' },
        { id: 3, name: 'User 3', status: 'Pending' },
        { id: 4, name: 'User 4', status: 'Approved' },
        { id: 5, name: 'User 5', status: 'Pending' },
        { id: 6, name: 'User 6', status: 'Pending' },
    ]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const filteredUsers = users.filter(user => user.status === activeTab);
    const scheme=["AGRICULTURE","EDUCATION","HEALTH","EMPLOYMENT","INFRASTRUCTURE","WOMEN_EMPOWERMENT","CHILD_WELFARE","SENIOR_CITIZEN","HOUSING","SOCIAL_WELFARE","ENVIRONMENT","RURAL_DEVELOPMENT","URBAN_DEVELOPMENT","FINANCIAL_INCLUSION","SKILL_DEVELOPMENT","TRANSPORT","TOURISM","TECHNOLOGY",]
    return (
        <>
         <AdminNavbar></AdminNavbar>
         <div className='schemelist'>
            <label htmlFor="schemelist">Choose Category</label>
            <select name="schemelist" id="schemelist">
                <option value="">AGRICULTURE</option>
                <option value="">EDUCATION</option>
                <option value="">HEALTH</option>
                <option value="">INFRASTRUCTURE</option>
                <option value="">WOMEN_EMPOWERMENT</option>
                <option value="">CHILD_WELFARE</option>
                <option value="">SENIOR_CITIZEN</option>
                <option value="">HOUSING</option>
                <option value="">SOCIAL_WELFARE</option>
                <option value="">ENVIRONMENT</option>
                <option value="">RURAL_DEVELOPMENT</option>
                <option value="">URBAN_DEVELOPMENT</option>
                <option value="">FINANCIAL_INCLUSION</option>
                <option value="">SKILL_DEVELOPMENT</option>
                <option value="">TRANSPORT</option>
                <option value="">TOURISM</option>
                <option value="">TECHNOLOGY</option>

            </select>
         </div>
            <div className="container-fluid mt-3">
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
                        {filteredUsers.map((user) => (
                            <div key={user.id} className="card mb-3">
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <span>{user.name}</span>
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