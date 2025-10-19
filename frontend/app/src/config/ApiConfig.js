import { AppConfig } from "./AppConfig";

export const getBaseUrl = () => {
  return AppConfig.BASE_URL;
};


export const getServerUrl=()=>{
    return AppConfig.API_URL;
}

export const API_ENDPOINT = {
  LOGIN: "/api/v1/admin/auth/login",
  GETQUESTIONS:"/api/v1/user/questions",
  SUBMIT_ANSWERS:"/api/v1/user/answer/submit"
};

export const getApiUrl = (endpoint) => {
  return `${getServerUrl()}${endpoint}`;
};
