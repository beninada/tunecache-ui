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
    title, description, bpm, key, duration, tracks
  }) => {
    const response = await authedAxiosInstance.put(`tracks?uuid=${tracks.tracks[0].uuid}&user_id=${tracks.tracks[0].user_id}&title=${title}&description=${description}&bpm=${bpm}&key=${key}&duration=${duration}`);
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
