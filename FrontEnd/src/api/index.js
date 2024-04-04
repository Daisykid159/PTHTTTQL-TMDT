import axios from 'axios';

const Api = (baseURL,token) => {
    const api = axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token||''}`
        },
        timeout: 20000, // Timeout là 20 giây
    });

    // api get token
    const getTokenLogin =(username, password) => {
        return api.post('/api/v1/account/login', {
            "username": username,
            "password": password
        });
    }

    const register = (username, password, email, date ) => {
        return api.post('/api/v1/account/register', {
            "username": username,
            "password": password,
            "email": email,
            "role": "USER",
            "date": date,
            "gender": "male"
        })
    }

    return {
        getTokenLogin,
        register,
    };
};

export default Api;
