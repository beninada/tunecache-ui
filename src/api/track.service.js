import { authedAxiosInstance, axiosInstance } from './api.service';

const TrackService = {
  upload: async ({
      tracks,
      userId,
    }) => {
      const response = await authedAxiosInstance.post(`tracks/upload?user_id=${userId}`, tracks);
      return response.data;
  },
  update: async ({
    title, description, bpm, key, duration, scale, userId, uuid
  }) => {
    const response = await authedAxiosInstance.put(`tracks?user_id=${userId}`, {
      title, description, bpm, key, duration, scale, uuid
    });
    return response.data;
},
  getTracks: async (
    userId
  ) => {
    const response = await axiosInstance.get(`tracks?user_id=${userId}`);
      return response.data;
  }
};

export default TrackService;
