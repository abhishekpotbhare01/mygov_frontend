
import axios from 'axios';

const AdminClient = axios.create(
    {
        baseURL: "http://localhost:8080/admin",
        headers: {
            'Content-Type': 'application/json'
        }
    });


const GetAllSchemesById = async (schemeId, status) => {

    try {

        const response = await AdminClient.get(`/${schemeId}`,
            {
                params: {
                    status: `${status.toUpperCase()}`
                }
            }
        );
        return response.data;


    } catch (error) {
        console.error('Error while Retriving Schemes By ID:', error);
        throw error;
    }
}

// await AdminService.updateApplicationStatus(applicationId, status, comment);

const updateApplicationStatus = async (approvalPayLoad) => {

    try {

        console.log("AdminClient :  ", approvalPayLoad);
        const resp = await AdminClient.post("/approval", approvalPayLoad);

        console.log(resp.data);



    } catch (error) {
        console.error('Error while Approving Schemes:', error);
        throw error;
    }




}

export default { GetAllSchemesById, updateApplicationStatus }