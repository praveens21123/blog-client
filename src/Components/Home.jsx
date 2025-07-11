import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../utils/config";
import { Link } from 'react-router-dom'

const Home = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const res = await fetch(`${BASE_URL}/blog/getallblogs`);
    const { data } = await res.json();
    setAllBlogs(data);
  };
  return (
    <div>
      <h2>All Blogs</h2>
      <div className="container">
        <div className="row">
          {allBlogs &&
            allBlogs.length > 0 &&
            allBlogs.map((blog) => (
              <div className="col-lg-4" key={blog._id}>
                <div className="card">
                  <img src={blog.imageUrl} className="card-img-top" alt={blog.title} />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">
                      {blog.topic}
                    </p>
                    <Link to={`/singleblog/${blog._id}`} className="btn btn-primary">
                      Read More...
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
