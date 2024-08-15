
import axios from 'axios';
import Swal from 'sweetalert2';

const AdminClient = axios.create(
    {
        baseURL: "http://localhost:8080/admin",
        headers: {
            'Content-Type': 'application/json'
        }
    }
);

const SetSession = async (token) => {
    sessionStorage.setItem('jwttoken', token);
    return;
};

const GetSessionToken = async () => {
    const token = sessionStorage.getItem("jwttoken");
    if (!token) {
        return null; // or throw an error
    }
    return token;
};

const GetAllSchemesById = async (schemeId, status, navigate) => {
    try {
        const token = await GetSessionToken();
        if (!token) {
            throw new Error('No token found');
        }
        const response = await AdminClient.get(`/${schemeId}`, {
            params: {
                status: `${status.toUpperCase()}`
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            Swal.fire({
                title: 'Unauthorized',
                text: 'You are not authorized to access this resource. Please log in.',
                icon: 'error',
                confirmButtonText: 'Login',
                customClass: {
                    popup: 'custom-popup-class',
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    // navigate('/admin-login');
                    window.location.href = '/admin-login';
                }
            });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'An error occurred while fetching schemes.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
        throw error;
    }
};

const updateApplicationStatus = async (approvalPayLoad) => {
    try {
        const token = await GetSessionToken();
        if (!token) {
            throw new Error('No token found');
        }
        const resp = await AdminClient.post("/approval", approvalPayLoad, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(resp.data);
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'An error occurred while approving schemes.',
            icon: 'error',
            confirmButtonText: 'OK',
        });
        throw error;
    }
};

export default { GetAllSchemesById, updateApplicationStatus, SetSession, GetSessionToken };