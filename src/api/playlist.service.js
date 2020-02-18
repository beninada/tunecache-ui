import { authedAxiosInstance, axiosInstance } from './api.service';

const PlaylistService = {
  getPlaylists: async (
    userId
  ) => {
    const response = await axiosInstance.get(`users/${userId}/playlists`);
      return response.data;
  },
  createPlaylist: async ({
    title, description, userId
  }) => {
    const response = await authedAxiosInstance.post(`users/${userId}/playlists`, {
      title, description, user_id: userId
    });
    return response.data;
  }
};

export default PlaylistService;
