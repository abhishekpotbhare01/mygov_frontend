import axios from "axios";

// Create an axios instance with base URL and headers
const schemes=axios.create(
 {
   baseURL: "http://localhost:8080/scheme",
   headers: {
            'Content-Type': 'application/json'
        }     
});

const getAllSchemes=async ()=>{
   try{
    
    const resp=await schemes.get("")
    
    return resp.data;
    
}catch(error)
{
    console.log("error while getting scheme data!!!",error);
    throw error;
}

};
export default { getAllSchemes };
