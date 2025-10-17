import { AppConfig } from "./AppConfig";

export const getBaseUrl = () => {
  return AppConfig.BASE_URL;
};


export const getServerUrl=()=>{
    return AppConfig.API_URL;
}

export const API_ENDPOINT = {
  LOGIN: "/api/v1/admin/auth/login",
};

export const getApiUrl = (endpoint) => {
  return `${getServerUrl()}${endpoint}`;
};
