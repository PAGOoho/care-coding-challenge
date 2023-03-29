import { useContext } from 'react';

import PostsContext from '../context/PostContext';

function PostFormDelete() {
  const { deleteData, handleDelete } = useContext(PostsContext);

  const deletePost = () => {
    handleDelete(deleteData.id);
  };
  return (
    <div>
      <h3 className="font-bold text-lg">Are you sure to delete this Post?</h3>
      <div className="card bg-base-200 my-3 p-3 ">
        <h3 className="font-bold">{deleteData.title}</h3>
        <p>{deleteData.body}</p>
      </div>
      <div className="modal-action">
        <button className="btn btn-error" onClick={deletePost}>
          delete
        </button>
      </div>
    </div>
  );
}

export default PostFormDelete;
