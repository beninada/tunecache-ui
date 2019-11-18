import axios from 'axios';
import JwtService from './jwt.service';
import { API_URL } from './config';

const ApiService = {
  init() {
    axios.defaults.baseURL = API_URL;
  },
  setHeader() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${JwtService.getToken()}`
  },
  query(resource, params) {
    return axios.get(resource, params).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },
  get(resource) {
    return axios.get(`${resource}`).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },
  post(resource, params) {
    return axios.post(`${resource}`, params);
  },
  update(resource, params) {
    return axios.put(`${resource}`, params);
  },
  put(resource, params) {
    return axios.put(`${resource}`, params);
  },
  postFormData(resource, params) {
    const formData = new FormData();
    formData.append('file', params.file);
    formData.append('type', params.type);
    return axios.post(`${resource}`, formData, {headers: {'Content-Type': 'multipart/form-data'}});
  },
  delete(resource) {
    return axios.delete(resource).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },
};

export default ApiService;
