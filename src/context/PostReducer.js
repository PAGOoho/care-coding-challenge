// The Reducer handles all the state changes
const postReducer = (state, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.payload,
        triggerFetchUser: !state.triggerFetchUser,
      };
    case 'GET_USERNAMES':
      // Create a map to access userdata more easily
      const usersMap = new Map(action.payload.map((user) => [user.id, user]));
      const postsWithUsernames = state.posts.map((post) => ({
        ...post,
        user: {
          firstname: usersMap.get(post.userId).firstName,
          lastname: usersMap.get(post.userId).lastName,
        },
      }));
      return {
        ...state,
        posts: postsWithUsernames,
        loading: false,
      };
    case 'SET_ADD':
      return {
        ...state,
        form: 'new',
        modal: true,
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
        triggerFetchUser: !state.triggerFetchUser,
        form: null,
        modal: false,
      };
    case 'SET_EDIT':
      return {
        ...state,
        editData: action.payload,
        form: 'edit',
        modal: true,
      };
    case 'EDIT_POST':
      const postIndex = state.posts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (postIndex === -1) {
        return {
          ...state,
        };
      }
      const updatedPosts = [...state.posts];
      updatedPosts[postIndex] = action.payload;
      return {
        ...state,
        posts: updatedPosts,
        editData: null,
        form: null,
        modal: false,
        loading: false,
      };
    case 'SET_DELETE':
      return {
        ...state,
        deleteData: action.payload,
        form: 'delete',
        modal: true,
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        deleteData: null,
        form: null,
        modal: false,
        loading: false,
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modal: !state.modal,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'UNSET_LOADING':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default postReducer;
