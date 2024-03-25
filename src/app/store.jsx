import { configureStore } from '@reduxjs/toolkit';
import popularArticleReducer from '../features/popularArticles/popularArticlesSlice';
import searchResultsReducer from '../features/search/searchResultsSlice';
import categoriesResultsReducer from '../features/categories/categoriesSlice';
import subredditReducer from '../features/subreddit/subredditSlice';
import commentsReducer from '../features/comments/commentsSlice'

export default configureStore({
  reducer: {
    popularArticles: popularArticleReducer,
    searchResults: searchResultsReducer,
    categoryResults: categoriesResultsReducer,
    subreddit: subredditReducer,
    comments: commentsReducer
  },
});
