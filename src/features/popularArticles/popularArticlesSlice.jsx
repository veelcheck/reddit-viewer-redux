import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadPopularArticles = createAsyncThunk(
  'popularArticles/loadArticles',
  async () => {
    try {
      const response = await axios.get('https://www.reddit.com/r/home.json');
      const data = response.data.data.children;
      console.log(data)
      return data;
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error
    }
  }
);

export const popularsSlice = createSlice({
  name: 'popularArticles',
  initialState: {
    articles: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPopularArticles.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadPopularArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.articles = action.payload;
      })
      .addCase(loadPopularArticles.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default popularsSlice.reducer;
