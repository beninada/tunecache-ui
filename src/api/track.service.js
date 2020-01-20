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
    title, description, bpm, key, duration, scale, user_id, uuid
  }) => {
    const response = await authedAxiosInstance.put(`tracks?user_id=${user_id}`, {
      title, description, bpm, key, duration, scale, uuid
    });
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
