import { useContext } from 'react';

import PostFormNew from '../forms/PostFormNew';
import PostFormEdit from '../forms/PostFormEdit';
import PostFormDelete from '../forms/PostFormDelete';

import Spinner from '../components/layout/Spinner';

import PostsContext from '../context/PostContext';

function PostModal() {
  const { loading, form, modal, dispatch } = useContext(PostsContext);

  // Scaleable if more forms are needed
  let formHtml;
  if (form === 'new') {
    formHtml = <PostFormNew />;
  } else if (form === 'edit') {
    formHtml = <PostFormEdit />;
  } else if (form === 'delete') {
    formHtml = <PostFormDelete />;
  } else {
    <p>Oops something went wrong. Try again!</p>;
  }
  const handleClose = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };

  return (
    <>
      <input
        type="checkbox"
        id="modal"
        className="modal-toggle"
        checked={modal}
        readOnly
      />
      <div className="modal">
        <div className="modal-box">
          <span
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={handleClose}
          >
            ✕
          </span>
          {!loading ? formHtml : <Spinner />}
        </div>
      </div>
    </>
  );
}

export default PostModal;
