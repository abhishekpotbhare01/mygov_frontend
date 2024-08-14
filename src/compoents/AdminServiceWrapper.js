import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminService from '../service/AdminService';

const AdminServiceWrapper = () => {
  const navigate = useNavigate();

  return (
    <AdminService navigate={navigate} />
  );
};

export default AdminServiceWrapper;