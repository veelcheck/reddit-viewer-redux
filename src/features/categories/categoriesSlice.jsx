import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadCategoryResults = createAsyncThunk(
  'categoryResults/loadArticles',
  async (category) => {
    try {
      const response = await axios.get(`https://www.reddit.com/r/${category}.json`);

      return response.data.data.children;
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
    }
  }
)

export const categoryResultsSlice = createSlice({
  name: 'categoryResults',
  initialState: {
    articles: [],
    isLoading: false,
    hasError: false,
    category: '',
  },
  reducers: {
    setCategory: (state, action) => { (state.category = action.payload) }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCategoryResults.pending, state => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadCategoryResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(loadCategoryResults.rejected, state => {
        state.isLoading = false;
        state.hasError = true;
      })
  }
});

export const { setCategory } = categoryResultsSlice.actions;
export const selectCategory = state => state.categoryResults.category;
export default categoryResultsSlice.reducer;

