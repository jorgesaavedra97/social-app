import { configureStore } from '@reduxjs/toolkit';
import currentDetailUser from './reducers/currentDetailUser';
import currentLanguage from './reducers/currentLanguage';
import currentUser from './reducers/currentUser';

export const store = configureStore({
  reducer: {
    currentDetailUser,
    currentLanguage,
    currentUser,
  },
  devTools: process.env.NODE_ENV !== 'production',
});