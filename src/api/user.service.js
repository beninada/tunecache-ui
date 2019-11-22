import { axiosInstance, authedAxiosInstance } from './api.service';

const UserService = {
  me: () =>
    authedAxiosInstance.get('me'),
  artists: () =>
    axiosInstance.get('users?artists=1'),
  artist: (uri) =>
    axiosInstance.get(`users/artist/${uri}/profile`),
};

export default UserService;
