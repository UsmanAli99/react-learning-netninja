import { useState, useEffect } from 'react'
import BlockList from './BlogList'

const Home = () => {
  const [blogs, setBlog] = useState([
    {title: "How to learn", body: "This is lrom", author: "Usman Ali", "id": 1},
    {title: "How to glearn", body: "This is lrom", author: "Umer Abdullah", "id": 2},
    {title: "How to clearn", body: "This is lrom", author: "Usman Ali", "id": 3},
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
  }

  useEffect(() => {
    console.log('Yes you are right');
    // console.log(blogs);
  });

  return (
    <div className="home">
      <h1>HomePage</h1>
      <BlockList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
    </div>
  );
};

export default Home;
