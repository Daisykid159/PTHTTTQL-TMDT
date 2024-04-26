import axios from 'axios';

const Api = (token, username) => {
    const api = axios.create({
        baseURL: 'http://localhost:8080/api/v1',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token || ''}`,
            'x-client-username': username,
        },
        timeout: 20000,
    });

    // api get token
    const getTokenLogin =(username, password) => {
        return api.post('/account/login', {
            "username": username,
            "password": password
        });
    }

    const register = (fullName, username, password, email, sdt, date ) => {
        return api.post('/account/register', {
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

    const getListTypeProducts = (pageNumber, sortBy, type, categoryId) => {
        return api.get(`/product/allProductSpu?pageNumber=${pageNumber}&pageSize=8&sortBy=${sortBy}&type=${type}&categoryId=${categoryId}`)
    }

    return {
        getTokenLogin,
        register,
        getListTypeProducts,
    };
};

export default Api;
