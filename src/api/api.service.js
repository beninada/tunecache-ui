import axios from "axios";
import JwtService from "./jwt.service";

const createAxiosConfig = (withAuth) => {
  const config = {
    baseURL: `${process.env.REACT_APP_API_URL}/api/v1/`,
    headers: {},
  };

  if (withAuth) {
    const token = JwtService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
};

export const axiosInstance = axios.create(createAxiosConfig(false));

export const authedAxiosInstance = axios.create(createAxiosConfig(true));
