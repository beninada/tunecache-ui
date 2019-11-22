import { axiosInstance, authedAxiosInstance } from './api.service';

const AuthService = {
  register: (username, email, password, password_confirmation, role) =>
    axiosInstance.post('users', {
      username,
      email,
      password,
      password_confirmation,
      role,
    }),
  login: (email, password) =>
    axiosInstance.post('login', {
      email,
      password,
    }),
  logout: () =>
    authedAxiosInstance.get('logout'),
  passwordForgot: () =>
    axiosInstance.post('password/forgot'),
  passwordReset: () =>
    axiosInstance.post('password/reset'),
};

export default AuthService;
