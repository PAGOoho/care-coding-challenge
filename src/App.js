import { PostProvider } from './context/PostContext';

import PostList from './components/PostList';
import PostModal from './components/PostModal';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <PostProvider>
      <div className="content bg-base-200">
        <header>
          <h1 className="font-bold">Post Timeline</h1>
        </header>
        <PostList />
      </div>
      <PostModal />
      <ToastContainer />
    </PostProvider>
  );
}

export default App;
