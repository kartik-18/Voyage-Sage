import React, { useState } from "react";
import axios from "axios";
import "../styles/write.css";
import { useNavigate } from "react-router-dom";

function Write() {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("file", file); // Ensure this matches the key used in index.js

    axios
      .post("https://voyage-backend-wwrd.onrender.com/blogs", formDataToSend)
      .then((response) => {
        console.log("Blog added successfully:", response.data);
        navigate("/blogs");
      })
      .catch((error) => {
        console.error("Error adding blog:", error);
      });
  };

  return (
    <div className="write">
      <h1>Write a Blog</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <input
          style={{ display: "none" }}
          type="file"
          id="file"
          name=""
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label className="file" htmlFor="file">
          Upload Image
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Write;
