import { axiosInstance, authedAxiosInstance } from "./api.service";

const UserService = {
  me: async () => {
    const response = await authedAxiosInstance.get("me");
    return response.data;
  },
  artists: async () => {
    const response = await axiosInstance.get("users?artists=1");
    return response.data;
  },
  artist: async (uri) => {
    const response = await axiosInstance.get(`users/artist/${uri}/profile`);
    return response.data;
  },
  uploadImage: async ({ userId, file, type }) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);
    const response = await authedAxiosInstance.post(
      `users/${userId}/images`,
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

export default UserService;
