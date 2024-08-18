import axios from "axios"

const womenScheme=axios.create({

    baseURL:'http://localhost:8080/women',
        headers: {
        "Content-Type": "application/json",
      }
})

const postWomenSchemeData= async(FormData,userId,schemeId)=>{

  try{

       const url = `/${userId}?schemeId=${2}`;
       const resp=await womenScheme.post(url,FormData);
       console.log("data:",resp.data)
       return resp.data;
  } catch(error){
    console.log("error while adding womenescheme data into database.")
    throw error;
  } 

}
export default { postWomenSchemeData }