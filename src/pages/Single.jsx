import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/single.css";

const Single = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://voyage-backend-wwrd.onrender.com/blogs/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
      });
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://voyage-backend-wwrd.onrender.com/blogs/${id}`);
      navigate('/blogs');
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="single-container">
      {post ? (
        <div>
          <h1 className="single-title">{post.title}</h1>
          {post.imageUrl && <img className="single-image" src={post.imageUrl} alt={post.title} />}
          <p className="single-description">{post.description}</p>
          {/* <button className="delete-button" onClick={handleDelete}>Delete</button> */}
        </div>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </div>
  );
};

export default Single;
