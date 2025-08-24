import { useContext } from 'react';

import PropTypes from 'prop-types';

import PostsContext from '../context/PostContext';

function PostItem({ post }) {
  const { userId, startEdit, startDelete } = useContext(PostsContext);

  const clickEdit = () => {
    startEdit(post);
  };

  const clickDelete = () => {
    startDelete(post);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <article className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <div className="card-actions justify-left">
          {post.tags &&
            post.tags.map((tag, index) => (
              <div key={index} className="badge badge-outline">
                {tag}
              </div>
            ))}
        </div>
        <p>{post.body}</p>
        {post.user && (
          <address className="italic text-xs text-end">
            {`by ${post.user.firstname} ${post.user.lastname}`}
          </address>
        )}
        <p>
          Likes: <b>{post.reactions.likes || 0}</b> Dislikes:{' '}
          <b>{post.reactions.dislikes || 0}</b>
        </p>
        {post.userId === userId && (
          <div className="card-actions justify-end">
            <label
              htmlFor="modal"
              className="btn btn-warning"
              onClick={clickEdit}
            >
              edit
            </label>
            <button className="btn btn-error" onClick={clickDelete}>
              delete
            </button>
          </div>
        )}
      </article>
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostItem;
