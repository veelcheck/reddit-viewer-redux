import PopularArticles from '../features/popularArticles/PopularArticles';
import SearchedArticles from '../features/search/SearchResults';
import CategoriesResults from '../features/categories/CategoriesResults';
import SubredditComponent from '../features/subreddit/SubredditComponent';
import Root from '../components/Root';
import SurprisePage from '../components/SurprisePage';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}>
      exact
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
