import { createContext, useReducer, useEffect } from 'react';

import { toast } from 'react-toastify';

import postReducer from './PostReducer.js';
import {
  getPosts,
  addPost,
  editPost,
  deletePost,
  getUser,
} from './PostApiAction';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const initialState = {
    userId: 1,
    posts: [],
    editData: null,
    deleteData: null,
    triggerFetchUser: false,
    form: null,
    modal: false,
    loading: true,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  // Initially get data/posts
  useEffect(() => {
    const getPostData = async () => {
      const posts = await getPosts();
      dispatch({ type: 'GET_POSTS', payload: posts });
    };
    getPostData(() => {});
  }, []);

  // Get user first- and lastname and update the state
  // If the dependency would be state.posts it would trigger itself so I had to add an trigger (triggerFetchUser) which only gets triggered on initial query and if a post is added.
  useEffect(() => {
    const getUserData = async () => {
      const userIds = state.posts.map((post) => post.userId);
      // Make the userIds unique to lower the amount of API-Calls
      const uniqueUserIds = [...new Set(userIds)];
      const userRequests = uniqueUserIds.map((userId) => getUser(userId));

      const usersData = await Promise.all(userRequests);
      dispatch({ type: 'GET_USERNAMES', payload: usersData });
    };
    if (state.posts.length > 0) {
      getUserData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.triggerFetchUser]);

  const startAdd = () => {
    dispatch({ type: 'SET_ADD' });
  };

  const handleAdd = (post) => {
    dispatch({ type: 'SET_LOADING' });
    const addData = async () => {
      const response = await addPost(post);
      if (response) {
        dispatch({ type: 'ADD_POST', payload: response });
        toast.success('Post has been created.');
      } else {
        dispatch({ type: 'UNSET_LOADING' });
      }
    };
    addData();
  };

  const startEdit = (post) => {
    dispatch({ type: 'SET_EDIT', payload: post });
  };

  const handleEdit = (post) => {
    dispatch({ type: 'SET_LOADING' });
    const editData = async () => {
      // Since its a dummy API he wont find newly added posts. Therefore I will NOT work with the response.
      // eslint-disable-next-line
      const response = await editPost(post);

      dispatch({ type: 'EDIT_POST', payload: post });
      toast.success('Post has been edited.');
    };
    editData();
  };

  const startDelete = (post) => {
    dispatch({ type: 'SET_DELETE', payload: post });
  };

  const handleDelete = (postId) => {
    dispatch({ type: 'SET_LOADING' });
    const deleteData = async () => {
      // Since it's a dummy API he wont find newly added posts. Therefore I will NOT work with the response.
      // It would like the handleAdd function.
      // eslint-disable-next-line
      const response = await deletePost(postId);

      dispatch({ type: 'DELETE_POST', payload: postId });
      toast.success('Post has been deleted.');
    };
    deleteData();
  };

  return (
    <PostContext.Provider
      value={{
        ...state,
        dispatch,
        startAdd,
        handleAdd,
        startEdit,
        handleEdit,
        startDelete,
        handleDelete,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
