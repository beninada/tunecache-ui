const UserService = {
  me: (axios) =>
    axios.get('me'),
  artists: (axios) =>
    axios.get('users?artists'),
};

export default UserService;
