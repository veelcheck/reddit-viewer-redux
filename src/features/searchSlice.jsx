import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadSeachTopic = createAsyncThunk(
  'searchTopic/loadArticles',
  async () => {
    try {
      const response = await axios.get('https://www.reddit.com/search.json?q=cake%20recipes');
      //Change search into input!!
      
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
)

export const searchedTopic = createSlice({
  name: 'searchTopic',
  initialState: {
    articles: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSearchedTopic.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadSearchedTopic.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.articles = action.payload;
      })
      .addCase(loadSearchedTopic.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});
