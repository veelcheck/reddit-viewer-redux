import { useSelector } from 'react-redux';
import timeAgo from '../../util/timeAgo';
import UpIcon from '@mui/icons-material/ThumbUpAltOutlined';
import DownIcon from '@mui/icons-material/ThumbDownAltOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Button from '@mui/material/Button';

const SubredditComponenet = () => {
  const {
    id,
    title,
    author,
    text,
    created,
    permalink,
    ups,
    downs,
    numComments,
    url,
  } = useSelector((state) => state.subreddit.subreddit);

  const customStyleLikesAndComments =
    'flex gap-2 font-quicksand text-gray-800 bg-slate-200 p-2 rounded-xl';

  return (
    <>
      <article className='space-y-2'>
        <div className='text-xs flex gap-4 font-quicksand text-gray-800'>
          <div>{timeAgo(created)}</div>
          <div>{author}</div>
        </div>
        <h2 className='font-bold text-xl'>{title}</h2>
        <p>{text}</p>
        <div className='bg-black border border-red-300 text-white rounded-xl'>
          {url.includes('.png') || url.includes('.jpg') || url.includes('.jpeg')? (
            <img
              src={url}
              className='max-w-64 sm:max-w-80 mx-auto'
              alt='image related to the post'
            />
          ) : (
            <p className='max-w-prose text-center py-4 mx-auto '>
              Well, I didn't quite figure out how to render galleries or viedes yet. If you
              need to see those, click the button below and go to{' '}
              <span className='text-reddit-orange'>reddit.com</span>
            </p>
          )}
        </div>

        <div className='flex gap-4 justify-center'>
          <div className={customStyleLikesAndComments}>
            {ups}
            <UpIcon color='primary' />
          </div>
          <div className={customStyleLikesAndComments}>
            {downs}
            <DownIcon color='primary' />
          </div>
          <div className={customStyleLikesAndComments}>
            {numComments}
            <CommentIcon color='primary' />
          </div>
        </div>
        <div className='flex justify-center py-6'>
          <Button
            href={`https://reddit.com${permalink}`}
            target='_blank'
            rel='noopener noreferrer'
            variant='outlined'>
            View on reddit.com
          </Button>
        </div>
      </article>
    </>
  );
};

export default SubredditComponenet;
