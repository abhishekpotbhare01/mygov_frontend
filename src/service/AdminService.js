
import axios from 'axios';

const SchemeClient = axios.create(
    {
        baseURL: "http://localhost:8080/admin",
        headers: {
            'Content-Type': 'application/json'
        }
    });


const GetAllSchemesById = async (schemeId, status) => {

    try {

        const response = await SchemeClient.get(`/${schemeId}`,
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

export default { GetAllSchemesById }