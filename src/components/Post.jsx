import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { useQuery } from 'react-query';
import { currentDetailUserAction } from '@/redux/actions/currentDetailUserAction'
import { formatDateAgo } from '@/utils'
import { Comments } from '@/components/Comments'
import { messages } from '@/messages'
import './Post.styles.css'
import { fetchComments } from '@/services';

export function Post({ post, setTag }) {
  const { data: comments, error, isError, isLoading } = useQuery('comments'+post.id, fetchComments(post.id));
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);
  const dispatch = useDispatch()
  const lang = useSelector(state => state.currentLanguage);

  function handleFilterByTag(tag) {
    return (event) => {
      event.preventDefault();
      setTag(tag)
    }
  }

  function handleOpenComments(event) {
    event.preventDefault();
    setIsCommentsModalOpen(true)
  }

  function handleCloseComments(event) {
    event.preventDefault();
    setIsCommentsModalOpen(false)
  }

  return (
    <>
      <Modal isOpen={isCommentsModalOpen}>
        <Comments comments={comments?.data || []} handleCloseComments={handleCloseComments} />
      </Modal>
      <div className="post">
        <div className="post__card">
          <div className="post__user-container">
            <div className="post__user-image">
              <div className="post__user-image-circle"
                style={{
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${post.owner.picture})`
                }}
                ></div>
            </div>
            <div className="post__user-name">
              <a href="#" onClick={() => dispatch(currentDetailUserAction(post.owner.id))}>
                {post.owner?.title?.toUpperCase()} {post.owner.firstName} {post.owner.lastName}, {formatDateAgo(post.publishDate)}
              </a>
            </div>
          </div>
          <div className="post__image-container">
            <img className="post__image" src={post.image} alt="" />
          </div>
          <div className="post__info">
            <h5 className="post__title">
              {post.text}
            </h5>
            <p className="post__tags">
              <strong>{messages[lang].LANGUAGE_TAGS}:</strong>
              {post.tags.map((tag) => (
                <a href="" onClick={handleFilterByTag(tag)} key={tag}>{tag}, </a>
              ))}
            </p>
            <p className="post__likes">{post.likes} likes</p>
            <p className="post__likes">
              {isLoading && 'Loading comments..'}
              {comments?.data?.length > 0 && <a href="" onClick={handleOpenComments}>{comments?.data?.length} Comments</a>}
              {!comments?.data?.length > 0 && <span>No comments</span>}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
