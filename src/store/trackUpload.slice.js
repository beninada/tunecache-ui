import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  tracks: []
};

const trackUpload = createSlice({
  name: 'trackUpload',
  initialState,
  reducers: {
    setTrackUpload(state, action) {
      state.tracks = action.payload.tracks;
    },
    getTrackUpload(state, action){
      return state.tracks;
    }
  },
});

export const {
  setTrackUpload, getTrackUpload
} = trackUpload.actions;

export default trackUpload.reducer;
