const AuthService = {
  register: (axios, username, email, password, password_confirmation, role) =>
    axios.post('users', {
      username,
      email,
      password,
      password_confirmation,
      role,
    }),
  login: (axios, email, password) =>
    axios.post('login', {
      email,
      password,
    }),
  logout: (axios) =>
    axios.get('logout'),
  passwordForgot: (axios) =>
    axios.post('password/forgot'),
  passwordReset: (axios) =>
    axios.post('password/reset'),
};

export default AuthService;
