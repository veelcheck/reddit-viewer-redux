import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPopularArticles } from './popularArticlesSlice';

const PopularArticles = () => {
  const dispatch = useDispatch();
  const { articles, isLoading, hasError } = useSelector(
    (state) => state.popularArticles
  );

  useEffect(() => {
    dispatch(loadPopularArticles());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error fetching data.</div>;
  }

  const getDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds
    const formattedDate = date.toLocaleString(); // Format the date as a string
    return formattedDate + ' UTC';
  };

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
          <p>
            {' '}
            {getDate(article.data.created_utc)}
            {article.data.subreddit_name_prefixed} {article.data.ups}{' '}
            {article.data.downs} {article.data.num_comments}
          </p>
          <h3>{article.data.title}</h3>
          <div>{article.data.author}</div>
          <a
            href={`https://reddit.com${article.data.permalink}`}
            target='_blank'
            rel='noopener noreferrer'>
            View on real reddit
          </a>
          <p>{ article.data.selftext}</p>
          {/* <img src={`https://i.redd.it/wy4gzmigvdpc1.jpeg`}></img> */}
        </article>
      ))}
    </div>
  );
};

export default PopularArticles;
