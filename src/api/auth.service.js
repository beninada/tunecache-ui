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
  login: async (email, password) =>
    await axiosInstance.post('login', {
      email,
      password,
    }),
  logout: async () =>
    await authedAxiosInstance.get('logout'),
  passwordForgot: async () =>
    await axiosInstance.post('password/forgot'),
  passwordReset: async () =>
    await axiosInstance.post('password/reset'),
};

export default AuthService;
