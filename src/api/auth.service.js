import { axiosInstance, authedAxiosInstance } from './api.service';

const AuthService = {
  register: async ({
      username,
      email,
      password,
      password_confirmation,
      role,
    }) => {
      const response = await axiosInstance.post('register', {
        username,
        email,
        password,
        password_confirmation,
        role,
      });
      return response.data;
    },
  login: async (email, password) => {
    const response = await axiosInstance.post('login', {
      email,
      password,
    });
    return response.data;
  },
  logout: async () => {
    const response = await authedAxiosInstance.get('logout');
    return response.data;
  },
  passwordForgot: async () => {
    const response = await axiosInstance.post('password/forgot');
    return response.data;
  },
  passwordReset: async () => {
    const response = await axiosInstance.post('password/reset');
    return response.data;
  },
};

export default AuthService;
