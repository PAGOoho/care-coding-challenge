import { useContext } from 'react';

import PostsContext from '../context/PostContext';
function PostNew() {
  const { startAdd } = useContext(PostsContext);

  const handleNew = () => {
    startAdd();
  };

  return (
    <button className="btn btn-success mt-5" onClick={handleNew}>
      create new post
    </button>
  );
}

export default PostNew;
