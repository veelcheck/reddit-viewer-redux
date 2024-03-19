import { configureStore } from '@reduxjs/toolkit';
import popularArticleReducer from './features/popularArticles/popularArticlesSlice';
import searchResultsReducer from './features/search/searchResultsSlice'

export default configureStore(
  {
    reducer: {
      popularArticles: popularArticleReducer,
      searchResults: searchResultsReducer,
    },
  },
);
