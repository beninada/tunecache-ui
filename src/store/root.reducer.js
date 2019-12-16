import { combineReducers } from '@reduxjs/toolkit'
import loggedInUserReducer from './loggedInUser.slice';
import trackUploadReducer from './trackUpload.slice';

const rootReducer = combineReducers({
  loggedInUser: loggedInUserReducer,
  trackUpload: trackUploadReducer,
});

export default rootReducer;
