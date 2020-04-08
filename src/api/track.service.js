import { authedAxiosInstance, axiosInstance } from "./api.service";

const TrackService = {
  upload: async ({ tracks, userId }) => {
    const response = await authedAxiosInstance.post(
      `tracks/upload?user_id=${userId}`,
      tracks
    );
    return response.data;
  },
  update: async ({
    title,
    description,
    bpm,
    key,
    duration,
    scale,
    userId,
    uuid,
  }) => {
    const response = await authedAxiosInstance.put(`tracks?user_id=${userId}`, {
      title,
      description,
      bpm,
      key,
      duration,
      scale,
      uuid,
    });
    return response.data;
  },
  getTracks: async (userId) => {
    const response = await axiosInstance.get(`tracks?user_id=${userId}`);
    return response.data;
  },
  getTrack: async (uuid) => {
    const response = await axiosInstance.get(`tracks/${uuid}`);
    return response.data;
  },
  uploadArtwork: async ({ file, userId, trackId }) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", userId);
    formData.append("track_id", trackId);
    const response = await authedAxiosInstance.post(
      `tracks/${trackId}/cover-art`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },
};

export default TrackService;
