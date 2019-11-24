import { axiosInstance, authedAxiosInstance } from './api.service';

const UserService = {
  me: async () =>
    await authedAxiosInstance.get('me'),
  artists: async () =>
    await axiosInstance.get('users?artists=1'),
  artist: async (uri) =>
    await axiosInstance.get(`users/artist/${uri}/profile`),
};

export default UserService;
