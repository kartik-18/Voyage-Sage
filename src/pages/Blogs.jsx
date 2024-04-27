import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../styles/blogs.css';
import blog from '../assets/images/blog.png'

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://voyage-backend-wwrd.onrender.com/blogs')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <div className="home">
      <span className="">
        <div className="new">
        <img src={blog} className="blogImg" alt="" />
        <Link className="link" to="/write">
          Write
        </Link>
        </div>
      </span>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post._id}>
              <div className="img">
              {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
            </div>
            <div className="content">
              <h1 className="h">{post.title}</h1>
              <p className="description">{post.description}</p>
              <Link to={`/blogs/${post._id}`} className="read-more">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
