import React , { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Serchbar from './Components/Serchbar';
import Placedetail from './Components/Place-detail';
import Posts from './Components/Posts';
import Pagination from './Components/Pagination';




function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  
  

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch('./example_data.json');
      const json = await res.json();
      console.log(json);
      setPosts(json);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Navbar />
      <Serchbar />
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
    
  );
}

export default App;
