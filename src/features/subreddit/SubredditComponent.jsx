import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import timeAgo from '../../util/timeAgo';
import UpIcon from '@mui/icons-material/ThumbUpAltOutlined';
import DownIcon from '@mui/icons-material/ThumbDownAltOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Button from '@mui/material/Button';  


import CommentsComponent from '../comments/CommentsComponent';

const SubredditComponent = () => {

  const initialSubredditData = useSelector(
    (state) => state.subreddit.subreddit
  );
  const [subredditData, setSubredditData] = useState(initialSubredditData);

  const { idUrl } = useParams();

  const customStyleLikesAndComments =
    'flex gap-2 font-quicksand text-gray-800 bg-slate-200 p-2 rounded-xl';
  
  return (
    <>
      <article className='space-y-2 break-words'>
        <div className='text-xs flex gap-4 font-quicksand text-gray-800'>
          <div>{timeAgo(subredditData.created)}</div>
          <div>{subredditData.author}</div>
        </div>
        <h2 className='font-bold text-xl'>{subredditData.title}</h2>
        <p>{subredditData.text}</p>
        <div className='bg-black border text-white rounded-xl'>
          {subredditData.url.includes('.png') ||
          subredditData.url.includes('.jpg') ||
          subredditData.url.includes('.jpeg') ? (
            <LazyLoadImage
              src={subredditData.url}
              className='max-w-64 sm:max-w-80 mx-auto'
              alt='image related to the post'
            />
          ) : (
            <p className='max-w-prose text-center py-4 mx-auto container'>
              Well, I didn't quite figure out how to render externally sourced materials, galleries or videos
              yet. I might one day. If you want to see those, click the button below and go to{' '}
              <span className='text-reddit-orange'>reddit.com</span>
            </p>
          )}
        </div>

        <div className='flex gap-4 justify-center pt-4'>
          <div className={customStyleLikesAndComments}>
            {subredditData.ups}
            <UpIcon color='primary' />
          </div>
          <div className={customStyleLikesAndComments}>
            {subredditData.downs}
            <DownIcon color='primary' />
          </div>
          <div className={customStyleLikesAndComments}>
            {subredditData.numComments}
            <CommentIcon color='primary' />
          </div>
        </div>
        <div className='flex justify-center py-6'>
          <Button
            href={`https://reddit.com${subredditData.permalink}`}
            target='_blank'
            rel='noopener noreferrer'
            variant='outlined'>
            View on reddit.com
          </Button>
        </div>
      </article>
      <CommentsComponent idUrl={idUrl} />
    </>
  );
};

export default SubredditComponent;
