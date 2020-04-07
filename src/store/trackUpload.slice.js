import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  tracks: [],
  loading: false,
};

const trackUpload = createSlice({
  name: "trackUpload",
  initialState,
  reducers: {
    setTrackUpload(state, action) {
      state.tracks = action.payload;
    },
    setTrackUploadLoading(state, action) {
      state.loading = action.payload;
    },
    resetTrackUpload(state, action) {
      state.tracks = initialState;
    },
  },
});

export const {
  setTrackUpload,
  setTrackUploadLoading,
  resetTrackUpload,
} = trackUpload.actions;

export default trackUpload.reducer;
