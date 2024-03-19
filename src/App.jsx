import './App.css';
import PopularArticles from './features/popularArticles/PopularArticles';
import Search from './features/search/Search';
import SearchedArticles from './features/search/SearchResults';
import { selectSearchTerm } from './features/search/searchResultsSlice';

function App() {
  return (
    <>
      <Search />
      {selectSearchTerm ? <SearchedArticles /> : <PopularArticles />}
    </>
  );
}

export default App;
