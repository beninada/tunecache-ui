import { ACCESS_TOKEN } from '../common/constants';

import axios from 'axios';
import Cookies from 'js-cookie';

const createAxiosConfig = (withAuth) => {
  const config = {
    baseURL: `${process.env.REACT_APP_API_URL}/api/v1/`,
  };

  if (withAuth) {
    if (Cookies.get(ACCESS_TOKEN)) {
      config.headers.Authorization = `Bearer ${Cookies.get(ACCESS_TOKEN)}`;
    }
  }

  return config;
}

export const axiosInstance = axios.create(
  createAxiosConfig(false)
);

export const authedAxiosInstance = axios.create(
  createAxiosConfig(true)
);
