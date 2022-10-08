import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import NewPost from './Components/NewPost';
import PostPage from './Components/PostPage';
import Missing from './Components/Missing';

const App = () => {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState(''); 
  const history = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter(post => ((post.title).toLowerCase().includes(search.toLowerCase())) 
    || ((post.body).toLowerCase().includes(search.toLowerCase())));
    setSearchResults(filteredResults.reverse());
  }, [posts, search])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format('');
    const myNewPost = {id, title: postTitle, datetime, body: postBody};
    const AllPosts = [...posts, myNewPost];
    setPosts(AllPosts);
    setPostTitle('');
    setPostBody('');
    history('/');
  }

  const handleDelete = (id) => {
    const postList = posts.filter(post => post.id !== id);
    setPosts(postList);
    history('/');
  }

  return (
    <div className="App container">
      <Header 
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path='/' element={<Home posts={searchResults} />}/>
        <Route path='/post' element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} />}/>
        <Route path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete} />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<Missing />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
