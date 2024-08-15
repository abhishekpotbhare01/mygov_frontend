import axios from 'axios';

const UserClient = axios.create(
    {
        baseURL: "http://localhost:8080/user",
        headers: {
            'Content-Type': 'application/json'
        }
    });


const RegisterUser = async (user) => {
    try {
        const resp = await UserClient.post("/", user);

        return resp.data;

    } catch (error) {
        console.error('Error while Registering the user:', error);
        throw error;
    }
}

const ResetPassword = async (emailId, newPassword) => {
    try {
      const response = await UserClient.post('/reset-password', { email: emailId, password: newPassword });
      return response.data; 
    } catch (error) {
      throw error; 
    }
  };
  


const LoginUser = async (loginUser) => {
    try {

        const resp = await UserClient.post('/login', loginUser);

        return resp.data;

    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

export default { RegisterUser,ResetPassword, LoginUser };
