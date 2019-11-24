import { combineReducers } from '@reduxjs/toolkit'
import loggedInUserReducer from './loggedInUser.slice';

const rootReducer = combineReducers({
  loggedInUser: loggedInUserReducer,
});

export default rootReducer;
