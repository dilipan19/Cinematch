import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/tmdb';

export const fetchTrending = createAsyncThunk('tmdb/fetchTrending', async () => {
  const response = await tmdbApi.getTrending();
  return response.data.results;
});

export const fetchTopRated = createAsyncThunk('tmdb/fetchTopRated', async () => {
  const response = await tmdbApi.getTopRated();
  return response.data.results;
});

export const fetchActionMovies = createAsyncThunk('tmdb/fetchActionMovies', async () => {
  const response = await tmdbApi.getActionMovies();
  return response.data.results;
});

const initialState = {
  trending: [],
  topRated: [],
  actionMovies: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const tmdbSlice = createSlice({
  name: 'tmdb',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrending.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.trending = action.payload;
      })
      .addCase(fetchTrending.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchTopRated.fulfilled, (state, action) => {
        state.topRated = action.payload;
      })
      .addCase(fetchActionMovies.fulfilled, (state, action) => {
        state.actionMovies = action.payload;
      });
  }
});

export default tmdbSlice.reducer;
