import PopularArticles from '../features/popularArticles/PopularArticles';
import Search from '../features/search/Search';
import SearchedArticles from '../features/search/SearchResults';
import { selectSearchTerm } from '../features/search/searchResultsSlice';
import CategoriesButtons from '../features/categories/Categories';
import CategoriesResults from '../features/categories/CategoriesResults';
import { selectCategory } from '../features/categories/categoriesSlice';
import { useSelector } from 'react-redux';

function App() {
  const selectedCategory = useSelector(selectCategory);
  const searchTerm = useSelector(selectSearchTerm);
  console.log(selectedCategory);
  console.log(searchTerm);

  return (
    <>
      <Search />
      <CategoriesButtons />
      {selectedCategory ? (
        <CategoriesResults />
      ) : searchTerm ? (
        <SearchedArticles />
      ) : (
        <PopularArticles />
      )}
    </>
  );
}

export default App;
