import { configureStore } from '@reduxjs/toolkit';
import popularArticleReducer from './features/popularArticles/popularArticlesSlice';

export default configureStore(
  {
    reducer: {
      popularArticles: popularArticleReducer,
    },
  },
);
