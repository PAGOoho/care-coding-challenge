import { useContext } from 'react';

import PostNew from './PostNew';
import PostItem from './PostItem';
import Spinner from './layout/Spinner';

import PostsContext from '../context/PostContext';

function PostList() {
  const { posts, userId } = useContext(PostsContext);

  console.log(posts);

  return (
    <section className="postwrapper">
      {userId && <PostNew />}
      {posts.length === 0 && <Spinner />}
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;
