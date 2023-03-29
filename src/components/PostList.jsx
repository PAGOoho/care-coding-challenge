import { useContext } from 'react';

import PostNew from './PostNew';
import PostItem from './PostItem';
import Spinner from './layout/Spinner';

import PostsContext from '../context/PostContext';

function PostList() {
  const { posts, userId } = useContext(PostsContext);

  return (
    <section className="postwrapper">
      {userId && <PostNew />}
      {posts.length === 0 && <Spinner />}
      {posts
        .slice(-50)
        .reverse()
        .map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
    </section>
  );
}

export default PostList;
