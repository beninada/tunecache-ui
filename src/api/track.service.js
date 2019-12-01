import { axiosInstance, authedAxiosInstance } from './api.service';

const TrackService = {
  upload: async (tracks) => {
  const response = await axiosInstance.post('tracks/upload', tracks);
  authedAxiosInstance.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;
  return response.data;
}
};

export default TrackService;
