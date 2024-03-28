import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { loadSearchResults } from './searchResultsSlice';
import { setSubreddit } from '../subreddit/subredditSlice';
import Button from '@mui/material/Button';
import payloadForSubreddit from '../../util/payloadForSubreddit';
import timeAgo from '../../util/timeAgo';

const SearchedArticles = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { articles, isLoading, hasError } = useSelector(
    (state) => state.searchResults
  );
  const { searchTermUrl } = useParams();

  useEffect(() => {
    dispatch(loadSearchResults(searchTermUrl));
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
     return <Error />;
  }

  return (
    <section className='space-y-2 mt-4'>
      {articles.map((article) => (
        <article
          key={article.data.id}
          className='sm:grid sm:grid-cols-only-two gap-4 border-b border-reddit-orange pb-4'>
          {article.data.thumbnail !== 'self' &&
          article.data.thumbnail !== 'default' &&
          article.data.thumbnail.includes('redditmedia') ? (
            <div
              className='sm:self-center rounded-xl
            bg-black'>
              <LazyLoadImage
                key={article.data.id}
                className='rounded-xl mx-auto'
                src={article.data.thumbnail}
                alt='thumbnail'
              />
            </div>
          ) : (
            <div className='sm:self-center bg-reddit-orange rounded-xl'>
              <LazyLoadImage
                key={article.data.id}
                className='rounded-xl mx-auto sm:self-center'
                src={'https://dummyimage.com/140x100/ff4400/fff&text=reddit'}
                alt='dummy'
              />
            </div>
          )}
          <div className='space-y-2 overflow-hidden'>
            <h2 className='font-bold text-xl sm:text-2xl text-center sm:text-left pt-4 sm:pt-0'>
              {article.data.title}
            </h2>
            <div className='flex flex-row gap-4 text-xs justify-center sm:justify-start'>
              <div className=''>{article.data.author}</div>
              <div className=''>{timeAgo(article.data.created_utc)}</div>
            </div>
            <div className='line-clamp-2'>{article.data.selftext}</div>
            <div className='text-center sm:text-left'>
              <Button
                size='small'
                onClick={() => {
                  navigate(
                    `/subreddit/${encodeURIComponent(article.data.permalink)}`
                  );
                  dispatch(
                    setSubreddit(
                      payloadForSubreddit(
                        article.data.id,
                        article.data.title,
                        article.data.author,
                        article.data.selftext,
                        article.data.created,
                        article.data.permalink,
                        article.data.ups,
                        article.data.downs,
                        article.data.num_comments,
                        article.data.url
                      )
                    )
                  );
                }}
                variant='outlined'>
                See more
              </Button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default SearchedArticles;
