import Root from '../components/Root';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { lazy } from 'react';

const PopularArticles = lazy(() => import('../features/popularArticles/PopularArticles'));
const SearchedArticles = lazy(() => import('../features/search/SearchResults'));
const CategoriesResults = lazy(
  () => import('../features/categories/CategoriesResults')
);
const SubredditComponent = lazy(
  () => import('../features/subreddit/SubredditComponent')
);
const SurprisePage = lazy(() => import('../components/SurprisePage'));

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route
        path='/'
        element={<Root />}
        exact>
        <Route
          index
          element={<PopularArticles />}
        />
        <Route
          path='search-results/:searchTermUrl'
          element={<SearchedArticles />}
        />
        <Route
          path='categories-results/:categoryUrl'
          element={<CategoriesResults />}
        />
        <Route
          path='subreddit/:idUrl'
          element={<SubredditComponent />}
        />
        <Route
          path='surpise-page'
          element={<SurprisePage />}
        />
      </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
