import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import NewPost from './Components/NewPost';
import PostPage from './Components/PostPage';
import Missing from './Components/Missing';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Why Learn React",
      datetime: "October 05, 2022 20:56:45 PM",
      body: "This is the day that the Lord has made. We will rejoice as the days go by."
    },
    {
      id: 2,
      title: "React best Practices",
      datetime: "October 05, 2022 20:56:45 PM",
      body: "This is the day that the Lord has made. We will rejoice as the days go by."
    },
    {
      id: 3,
      title: "Acing your first React Interview",
      datetime: "October 05, 2022 20:56:45 PM",
      body: "This is the day that the Lord has made. We will rejoice as the days go by."
    },
    {
      id: 4,
      title: "Developer Roadmap",
      datetime: "October 05, 2022 20:56:45 PM",
      body: "This is the day that the Lord has made. We will rejoice as the days go by."
    }
  ])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App container">
      <Header 
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path='/' element={<Home posts={posts} />}/>
        <Route path='/post' element={<NewPost />}/>
        <Route path='/post/:id' element={<PostPage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<Missing />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
