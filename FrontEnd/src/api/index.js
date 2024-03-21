import axios from 'axios';

const Api = (baseURL,token) => {
    const apiConfig = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token||''}`
        },
        timeout: 20000, // Timeout là 20 giây
    });

    // api get token
    const getTokenLogin =(userName, password)=> {
        return apiConfig.post('/api/v1/login', {
            "userName": userName,
            "password": password
        });
    }

    return {
        getTokenLogin,
    };
};

export default Api;
