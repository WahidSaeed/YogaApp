import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.1.111:3000/YogaAPI/api/v1'
    //baseURL: 'http://10.0.2.2:3000/YogaAPI/api/v1'
})

export default api;