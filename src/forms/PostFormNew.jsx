import { useContext, useState } from 'react';
import PostsContext from '../context/PostContext';

import { toast } from 'react-toastify';

function PostFormNew() {
  const { userId, handleAdd } = useContext(PostsContext);

  const [titleValue, setTitleValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const savePost = () => {
    const minLength = 0;
    if (titleValue.length > minLength && textValue.length > minLength) {
      const newPost = {
        title: titleValue,
        body: textValue,
        userId: userId,
      };
      handleAdd(newPost);
    } else {
      toast.error('Please fill out the form.');
    }
  };
  return (
    <div>
      <h3 className="font-bold text-lg">Create a Post</h3>
      <div className="flex flex-col items-center gap-3 my-3">
        <input
          type="text"
          value={titleValue}
          className="input input-bordered input-success w-full max-w-xs"
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <textarea
          value={textValue}
          className="textarea textarea-success w-full max-w-xs leading-5"
          onChange={(e) => setTextValue(e.target.value)}
        ></textarea>
      </div>
      <div className="modal-action">
        <button className="btn btn-success" onClick={savePost}>
          create
        </button>
      </div>
    </div>
  );
}

export default PostFormNew;
