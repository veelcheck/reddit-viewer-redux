import PopularArticles from '../features/popularArticles/PopularArticles';
import Search from '../features/search/Search';
import SearchedArticles from '../features/search/SearchResults';
import { selectSearchTerm } from '../features/search/searchResultsSlice';
import CategoriesButtons from '../features/categories/Categories';
import CategoriesResults from '../features/categories/CategoriesResults';
import { selectCategory } from '../features/categories/categoriesSlice';
import { useSelector } from 'react-redux';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Route index element={<PopularArticles />}/>
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
