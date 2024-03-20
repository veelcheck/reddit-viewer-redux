import PopularArticles from '../features/popularArticles/PopularArticles';
import SearchedArticles from '../features/search/SearchResults';
import CategoriesResults from '../features/categories/CategoriesResults';

import Root from '../components/Root';
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
        path='/search-results'
        element={<SearchedArticles />}
      />
      <Route
        path='/categories-results'
        element={<CategoriesResults />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
