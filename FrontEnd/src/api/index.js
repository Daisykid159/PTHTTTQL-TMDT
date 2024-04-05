import axios from 'axios';

const Api = (token, username) => {
    const api = axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token || ''}`,
            'x-client-username': username,
        },
        timeout: 20000,
    });

    // api get token
    const getTokenLogin =(username, password) => {
        return api.post('/api/v1/account/login', {
            "username": username,
            "password": password
        });
    }

    const register = (fullName, username, password, email, sdt, date ) => {
        return api.post('/api/v1/account/register', {
            "fullName": fullName,
            "username": username,
            "password": password,
            "email": email,
            "sdt": sdt,
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
