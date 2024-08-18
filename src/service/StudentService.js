import axios from "axios";

const StudentClient = axios.create({
  baseURL: "http://localhost:8080/student",
  headers: {
    "Content-Type": "application/json",
  },
});

const AddStudentScheme = async (studentData, userId, schemeId) => {
  try {
    console.log("type of marks : " + typeof studentData.studentDetails.marks);
    console.log("type of familyIncome : " + typeof studentData.familyIncome);
    const url = "/" + userId + "?schemeId=" + 3;
    const resp = await StudentClient.post(url, studentData);

    return resp.data;
  } catch (error) {
    console.error("Error while Registering the student:", error);
    throw error;
  }
};

export default { AddStudentScheme };
