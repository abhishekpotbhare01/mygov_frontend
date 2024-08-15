import axios from 'axios';

const UserClient = axios.create(
    {
        baseURL: "http://localhost:8080/user",
        headers: {
            'Content-Type': 'application/json'
        }
    });
UserClient.interceptors.request.use(config => {
    const token = sessionStorage.getItem('jwttoken'); // Use sessionStorage

    if (token && !config.url.includes('/login') && !config.url.includes('/register')) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, error => {
    return Promise.reject(error);
});

const RegisterUser = async (user) => {
    try {
        const resp = await UserClient.post("/register", user);

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

        sessionStorage.setItem('jwttoken', resp.data.accessToken);
        console.log("abhishek22 :: ", sessionStorage.getItem('jwttoken'));

        return resp.data;

    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

export default { RegisterUser,ResetPassword, LoginUser };
