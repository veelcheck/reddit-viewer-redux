import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearchResults } from './searchResultsSlice';
import { selectSearchTerm } from './searchResultsSlice';

const SearchedArticles = () => {
  const dispatch = useDispatch();
  const { articles, isLoading, hasError } = useSelector(
    (state) => state.searchResults
  );

  useEffect(() => {
    dispatch(loadSearchResults(selectSearchTerm));
    console.log(`The selected search term is ${selectSearchTerm}`);
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div>
      {articles.map((article) => (
        <article
          key={article.data.id}
          className='flex flex-cols p-2 gap-2 items-center'>
          {article.data.thumbnail !== 'self' &&
          article.data.thumbnail !== 'default' &&
          article.data.thumbnail.includes('redditmedia') ? (
            <img
              key={article.data.id}
              className='rounded-xl'
              src={article.data.thumbnail}
              alt='thumbnail'
            />
          ) : (
            <img
              key={article.data.id}
              className='rounded-xl'
              src={'https://dummyimage.com/140x100/ff4400/fff&text=Reddit'}
              alt='dummy'
            />
          )}
          <h3>{article.data.title}</h3>
        </article>
      ))}
    </div>
  );
};

export default SearchedArticles;
