import { useContext, useState } from 'react';

import PostsContext from '../context/PostContext';

import { toast } from 'react-toastify';

function PostFormEdit() {
  const { editData, handleEdit } = useContext(PostsContext);

  const [titleValue, setTitleValue] = useState(editData?.title ?? '');
  const [textValue, setTextValue] = useState(editData?.body ?? '');

  const savePost = () => {
    const minLength = 0;
    if (titleValue.length > minLength && textValue.length > minLength) {
      const updatedData = { ...editData, title: titleValue, body: textValue };
      handleEdit(updatedData);
    } else {
      toast.error('Please fill out the form.');
    }
  };
  return (
    <div>
      <h3 className="font-bold text-lg">Edit your Post</h3>
      <div className="flex flex-col items-center gap-3 my-3">
        <input
          type="text"
          value={titleValue}
          className="input input-bordered input-warning w-full max-w-xs"
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <textarea
          value={textValue}
          className="textarea textarea-warning w-full max-w-xs leading-5"
          onChange={(e) => setTextValue(e.target.value)}
        ></textarea>
      </div>
      <div className="modal-action">
        <button className="btn btn-success" onClick={savePost}>
          save
        </button>
      </div>
    </div>
  );
}

export default PostFormEdit;
