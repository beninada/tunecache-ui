import { authedAxiosInstance, axiosInstance } from './api.service';

const PlaylistService = {
  getPlaylists: async (
    userId
  ) => {
    const response = await axiosInstance.get(`users/${userId}/playlists`);
      return response.data;
  }
};

export default PlaylistService;
