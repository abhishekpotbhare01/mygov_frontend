import axios from "axios";

const FarmerClient = axios.create({
    baseURL: "http://localhost:8080/fscheme",
    headers: {
        "Content-Type": "application/json",

    },
});

const postFarmerSchemeData = async (farmerData, userId, schemeId) => {

    try {
        console.log("farmerData: ", farmerData);
        const response = await FarmerClient.post(`/${userId}`, farmerData, {
            params: {
                schemeId: 1
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error while Registering the farmer:", error);
        throw error;
    }

}

export default { postFarmerSchemeData };