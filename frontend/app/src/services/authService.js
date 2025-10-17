
import axiosInstance from "../api/axios";
import { API_ENDPOINT, getApiUrl } from "../config/ApiConfig";

export const login = async (data) => {
console.log( getApiUrl(API_ENDPOINT.LOGIN));



  try {
    const response = await axiosInstance.post(
      getApiUrl(API_ENDPOINT.LOGIN),
      data
    );
    console.log(response);
    return response;
    
  } catch (error) {
    console.log("Login in error:", error);
  }
};
