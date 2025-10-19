import axiosInstance from "../api/axios"
import { API_ENDPOINT, getApiUrl } from "../config/ApiConfig"

export const getAllQuestions=async()=>{
    try {
        const response=await axiosInstance.get(getApiUrl(API_ENDPOINT.GETQUESTIONS));
        return response;
    } catch (error) {
        console.error(error)
    }
};


export const submitAnswers=async (data) => {
    try {
        const response=await axiosInstance.post(getApiUrl(API_ENDPOINT.SUBMIT_ANSWERS,data));
        return response;
    } catch (error) {
        throw new error 
    }
}