import { createSlice } from '@reduxjs/toolkit';

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
    },
  },
});

export const {
  setLoggedInUser,
} = loggedInUser.actions;

export default loggedInUser.reducer;
