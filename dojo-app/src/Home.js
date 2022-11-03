import { useState, useEffect } from 'react'
import BlockList from './BlogList'

const Home = () => {
  const [blogs, setBlog] = useState(null)
  const [name, setName] = useState('Usman')

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlog(data);
      })
  }, []);

  return (
    <div className="home">
      <h1>HomePage</h1>
      {blogs && <BlockList blogs={blogs} title="All blogs"/>}
      <button onClick={() => {setName('Ali')}}>Click here</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
