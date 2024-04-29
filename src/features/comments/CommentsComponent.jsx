import { loadComments } from './commentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import getTimespamp from '../../util/timestamp';
import UpIcon from '@mui/icons-material/ThumbUpAltOutlined';
import DownIcon from '@mui/icons-material/ThumbDownAltOutlined';
import PlusIcon from '@mui/icons-material/AddCircleOutline';

const CommentsComponent = ({ idUrl }) => {
  const dispatch = useDispatch();
  const { comments, isLoading, hasError } = useSelector(
    (state) => state.comments
  );

  useEffect(() => {
    dispatch(loadComments(idUrl));
  }, [dispatch]);

  const [showReplies, setShowReplies] = useState({});
  const toggleShowReplies = (commentId) => {
    setShowReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <Error />;
  }

  const customStyleLikesAndComments =
    'flex gap-2 font-quicksand text-gray-800 bg-slate-200 py-1 px-2 rounded-xl';

  return (
    <section className='max-w-prose mx-auto text-md pb-8'>
      <ul className='space-y-4'>
        {comments.map((comment) => (
          <li key={comment.data.id}>
            <div className='flex gap-4 text-xs text-gray-800 pb-2'>
              <div>{comment.data.author}</div>
              <div>{getTimespamp(comment.data.created)}</div>
            </div>
            <div>{comment.data.body}</div>
            <div className='flex gap-4 justify-start pt-2'>
              <div className={customStyleLikesAndComments}>
                {comment.data.ups}
                <UpIcon
                  fontSize='small'
                  color='primary'
                />
              </div>
              <div className={customStyleLikesAndComments}>
                {comment.data.downs}
                <DownIcon
                  fontSize='small'
                  color='primary'
                />
              </div>
              {comment.data.replies !== '' ? (
                <div className='cursor-pointer px-2 rounded-xl flex gap-2 items-center text-gray-800'>
                  See replies
                  <PlusIcon
                    fontSize='small'
                    color='primary'
                    onClick={() => toggleShowReplies(comment.data.id)}
                  />
                </div>
              ) : (
                <div>
                  <PlusIcon
                    fontSize='small'
                    color='disabled'
                  />
                </div>
              )}
            </div>
            {showReplies[comment.data.id] && comment.data.replies !== '' && (
              <ul className='space-y-4 my-2 '>
                {comment.data.replies.data.children.map((reply) => (
                  <li
                    className=' rounded-xl px-2 max-w-lg ml-auto'
                    key={reply.data.id}>
                    <div className='flex gap-4 text-xs text-gray-800 pb-2'>
                      <div>{reply.data.author}</div>
                      <div>{getTimespamp(reply.data.created)}</div>
                    </div>
                    <div className='border-l-8 pl-2'>{reply.data.body}</div>
                    <div className='flex gap-4 justify-start pt-2'>
                      <div className={customStyleLikesAndComments}>
                        {reply.data.ups}
                        <UpIcon
                          fontSize='small'
                          color='primary'
                        />
                      </div>
                      <div className={customStyleLikesAndComments}>
                        {reply.data.downs}
                        <DownIcon
                          fontSize='small'
                          color='primary'
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CommentsComponent;
