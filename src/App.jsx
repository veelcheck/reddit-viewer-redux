import PopularArticles from './features/popularArticles/PopularArticles';
import Search from './features/search/Search';
import SearchedArticles from './features/search/SearchResults';
import { selectSearchTerm } from './features/search/searchResultsSlice';
import CategoriesButtons from './features/categories/Categories';
import CategoriesResults from './features/categories/CategoriesResults';

function App() {
  return (
    <>
      <Search />
      <CategoriesResults />
      <CategoriesButtons />
      {selectSearchTerm ? <SearchedArticles /> : <PopularArticles />}
    </>
  );
}

export default App;
