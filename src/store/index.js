import { configureStore } from '@reduxjs/toolkit';
import tmdbReducer from './tmdbSlice';

export const store = configureStore({
  reducer: {
    tmdb: tmdbReducer,
  },
});
