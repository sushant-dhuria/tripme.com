import { configureStore } from '@reduxjs/toolkit';
import {
  profileReducer,
  userReducer,
} from './reducers/userReducer';
const store = configureStore({ 
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});

export const server="";
export default store;
