import axios from "axios";

const FarmerClient =axios.create({
    baseURL:"http://localhost:8080/student",
    headers:{
        "Content-Type":"application/json",

    },
});

const AddStudentScheme= async(farmerData,userId,schemeId)=>{
    try{


        

    }catch(error){
        console.log("Error while Registering the farmer:",error);
        throw error;
    }    
}