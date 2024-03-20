import axios from 'axios';

const Api = (baseURL,token) => {
    // const yourData = useSelector(state => state.auth?.token);
    //Hàm tạo header
    const apiConfig = () => {
        return axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token||''}`
            },
            timeout: 20000, // Timeout là 20 giây
        });
    }
    // api get token
    const login =(userName, password)=> {
        return apiConfig().post('/api/v1/login', {
            "userName": userName,
            "password": password
        });
    }

    return {
        apiConfig,
        login,
    };
};
export default Api;
