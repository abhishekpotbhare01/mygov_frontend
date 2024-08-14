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


const LoginUser = async (loginUser) => {
    try {

        const resp = await UserClient.post('/login', loginUser);

        sessionStorage.setItem('jwttoken', resp.data.accessToken);
        console.log("abhishek22 :: ",sessionStorage.getItem('jwttoken'));

        return resp.data;

    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

export default { RegisterUser, LoginUser };
