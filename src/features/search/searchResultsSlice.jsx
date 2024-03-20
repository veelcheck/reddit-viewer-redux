import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadSearchResults = createAsyncThunk(
  'searchResults/loadArticles',
  async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://www.reddit.com/search.json?q=${searchTerm}`
      );
      console.log(searchTerm)
      return response.data.data.children;
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
    }
  }
);

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: {
    articles: [],
    isLoading: false,
    hasError: false,
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSearchResults.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.articles = action.payload;
      })
      .addCase(loadSearchResults.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { setSearchTerm, clearSearchTerm } = searchResultsSlice.actions;
export const selectSearchTerm = (state) => state.searchResults.searchTerm;
export default searchResultsSlice.reducer;
