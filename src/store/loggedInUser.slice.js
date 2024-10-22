import { createSlice } from '@reduxjs/toolkit';
import JwtService from '../api/jwt.service';

let initialState = {
  email: null,
  username: null,
  uri: null,
  roles: null,
};

const loggedInUser = createSlice({
  name: 'loggedInUser',
  initialState,
  reducers: {
    setLoggedInUser(state, action) {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.uri = action.payload.uri;
      state.roles = action.payload.roles;

      if (action.payload.token) {
        JwtService.saveToken(action.payload.token);
      }
    },
    destroyLoggedInUser(state, action) {
      Object.keys(state).forEach(function(index) {
        state[index] = null;
      });
      JwtService.destroyToken();
    },
  },
});

export const {
  setLoggedInUser,
  destroyLoggedInUser,
} = loggedInUser.actions;

export default loggedInUser.reducer;
