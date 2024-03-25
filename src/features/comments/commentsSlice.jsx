import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadComments = createAsyncThunk(
  'comments/loadComments',
  async (idUrl) => {
    try {
      const response = await axios.get(`https://www.reddit.com${idUrl}.json`);

      const data = response.data[1].data.children;
      console.log(data);
      return data;
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
    }
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.comments = action.payload;
      })
      .addCase(loadComments.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default commentsSlice.reducer;
