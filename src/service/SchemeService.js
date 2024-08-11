import axios from 'axios';

const SchemeClient = axios.create(
    {
        baseURL: "http://localhost:8080/scheme",
        headers: {
            'Content-Type': 'application/json'
        }
    });


const GetAllSchemes = async () => {

    try {
        const response = await SchemeClient.get("/");
        return response.data;

    } catch (error) {
        console.error('Error while Retriving All Schemes:', error);
        throw error;
    }
}


export default { GetAllSchemes };