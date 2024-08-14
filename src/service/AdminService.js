
import axios from 'axios';
import Swal from 'sweetalert2';

const AdminClient = axios.create(
    {
        baseURL: "http://localhost:8080/admin",
        headers: {
            'Content-Type': 'application/json'
        }
    });



const SetSession =  () => {
    const token = sessionStorage.getItem("jwttoken");
    return token; // Return the token so it can be used later
};

const GetAllSchemesById = async (schemeId, status) => {

    try {
        const token = SetSession();
        const response = await AdminClient.get(`/${schemeId}`,
            {
                params: {
                    status: `${status.toUpperCase()}`
                },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        );

        return response.data;


    }
    catch (error) {
        if (error.response && error.response.status === 401) {
            Swal.fire({
                title: 'Unauthorized',
                text: 'You are not authorized to access this resource. Please log in.',
                icon: 'error',
                confirmButtonText: 'Login',
                customClass: {
                    popup: 'custom-popup-class', // Optional custom CSS class for styling
                },
            });
        }
        throw error;
    }
}



const updateApplicationStatus = async (approvalPayLoad) => {

    try {
        const token = SetSession();
        console.log("AdminClient :  ", approvalPayLoad);
        const resp = await AdminClient.post("/approval", approvalPayLoad, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        );

        console.log(resp.data);


    } catch (error) {
        console.error('Error while Approving Schemes:', error);
        throw error;
    }

}

export default { GetAllSchemesById, updateApplicationStatus ,SetSession}