import axios from 'axios';

const UserClient = axios.create({
    baseURL: "http://localhost:8081/user",
    headers: {
        'Content-Type': 'application/json'
    },
});

const AddUser = async (user) => {
    try {
        const response = await UserClient.post('/', user);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

const LoginUser = async (user) => {
    try {
        const response = await UserClient.post('/', user);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

export default { AddUser };
