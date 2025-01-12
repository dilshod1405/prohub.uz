import axios from "axios";
import { getCSRFToken } from "./csrf_utils";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  
  withCredentials: true, 
  
});

API.interceptors.request.use((config) => {
  const csrfToken = getCSRFToken();
  
  if (csrfToken) {
    config.headers["X-CSRFToken"] = csrfToken;
  }
  return config;
});

export default API;