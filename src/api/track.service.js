import { authedAxiosInstance, axiosInstance } from './api.service';

const TrackService = {
  upload: async ({
      tracks,
      userId,
    }) => {
      const response = await authedAxiosInstance.post(`tracks/upload?user_id=${userId}`, tracks);
      return response.data;
  },
  getTracks: async ({
    id
  }) => {
    const response = await axiosInstance.get(`tracks?user_id=${id}`);
      return response.data;
  }
};

export default TrackService;
