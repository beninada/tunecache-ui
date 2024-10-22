import { axiosInstance, authedAxiosInstance } from './api.service';

const UserService = {
  me: async () => {
    const response = await authedAxiosInstance.get('me');
    return response.data;
  },
  artists: async () => {
    const response = await axiosInstance.get('users?artists=1');
    return response.data;
  },
  artist: async (uri) => {
    const response = await axiosInstance.get(`users/artist/${uri}/profile`);
    return response.data;
  }
};

export default UserService;
