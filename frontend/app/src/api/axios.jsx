import axios from "axios";
import { getBaseUrl } from "../config/ApiConfig";

const axiosInstance=axios.create({
    baseURL:getBaseUrl(),
    headers:{
        "Content-Type":"application/json"
    }
})


axiosInstance.interceptors.request.use(
    (config)=> {
        const token = localStorage.getItem("token")
        if(token) {
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)


axiosInstance.interceptors.response.use(
(response)=>{
    return response
},
(error)=> {
    const status=error.response?.status;
    if(status===401) {
        console.error("Auth Error:",error);
        localStorage.removeItem("token");
        localStorage.setItem("user");
    }

    return Promise.reject(error)
}

)



export default axiosInstance;