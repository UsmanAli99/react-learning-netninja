import { useState } from 'react'

const Home = () => {
  const [blogs, setBlog] = useState([
    {title: "How to learn", body: "This is lrom", author: "Usman Ali", "id": 1},
    {title: "How to glearn", body: "This is lrom", author: "Umer Abdullah", "id": 2},
    {title: "How to clearn", body: "This is lrom", author: "Ghilman Ahmed", "id": 3},
  ])

  return (
    <div className="home">
      <h1>HomePage</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>{ blog.author }</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
