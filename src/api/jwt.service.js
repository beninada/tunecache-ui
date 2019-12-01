import {
  ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_EXPIRES_IN,
} from '../constants/constants';
import Cookies from 'js-cookie';

const JwtService = {
  getToken: () => {
    return Cookies.get(ACCESS_TOKEN_KEY);
  },
  saveToken: (token) => {
    const date = new Date();
    Cookies.set(ACCESS_TOKEN_KEY, token, {
      expires: new Date(date.getTime() + ACCESS_TOKEN_EXPIRES_IN),
    });
  },
  destroyToken: () => {
    Cookies.remove(ACCESS_TOKEN_KEY);
  },
};

export default JwtService;
