import axios from "axios";


export const backendRequest = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});

backendRequest.interceptors.request.use( config => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem("token_access")}`,
  }
  return config;
})
