import axios from "axios";

const SchemeClient = axios.create({
  baseURL: "http://localhost:8080/scheme",
  headers: {
    "Content-Type": "application/json",
  },
});

const GetAllSchemes = async () => {
  try {
    const response = await SchemeClient.get("/");

    console.log("Abhishek 9999",response);
    return response.data;
  } catch (error) {
    console.error("Error while Retriving All Schemes:", error);
    throw error;
  }
};

const getAllSchemeId = async (userid) => {
  try {
    const resp = await SchemeClient.get("/userId/" + parseInt(userid));
    return resp.data;
  } catch (error) {
    console.log("error while getting scheme id data!!!", error);
    throw error;
  }
};
export default { GetAllSchemes, getAllSchemeId };
