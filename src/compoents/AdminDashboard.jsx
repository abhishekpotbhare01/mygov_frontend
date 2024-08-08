import React, { useState } from 'react';
import { Navbar } from './Navbar'
import { AdminNavbar } from './AdminNavbar';

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

    return (
        <>
         <AdminNavbar></AdminNavbar>
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