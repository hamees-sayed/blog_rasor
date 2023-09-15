import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import './style.scss'
import './media-query.css'
import Header from './components/Header'
import RecentBlog from './components/RecentBlog';
import Blogs from './components/Blogs'

function App() {
  return (
    <div className='App'>
      <Header />
      <RecentBlog />
      <Blogs />
      <ToastContainer />
    </div>
  );
}

export default App;
