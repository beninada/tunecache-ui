import { axiosInstance, authedAxiosInstance } from './api.service';

const AuthService = {
  register: async ({
      username,
      email,
      password,
      password_confirmation,
      role,
    }) => {
      await axiosInstance.post('register', {
        username,
        email,
        password,
        password_confirmation,
        role,
      });
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
