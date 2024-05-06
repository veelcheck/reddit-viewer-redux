import { configureStore } from '@reduxjs/toolkit';
import popularArticles from '../features/popularArticles/popularArticlesSlice';
import searchResults from '../features/search/searchResultsSlice';
import categoryResults from '../features/categories/categoriesSlice';
import subreddit from '../features/subreddit/subredditSlice';
import comments from '../features/comments/commentsSlice';

export default configureStore({
  reducer: {
    popularArticles,
    searchResults,
    categoryResults,
    subreddit,
    comments,
  },
});
