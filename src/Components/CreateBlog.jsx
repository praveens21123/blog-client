import React, { useState } from "react";
import { BASE_URL, TOKEN } from "../utils/config";

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    image: "",
    title: "",
    topic: "",
    content: "",
  })
  const handleChange = (e) => {
    setBlog((preState) => ({...preState, [e.target.id] : e.target.value}))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(TOKEN);

    try{
      const res = await fetch(`${BASE_URL}/blog/createblog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
           authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify(blog)
      })

      const result = await res.json()
      console.log(result);
      
    }catch(err){
      console.log(err);
    }
    
  }
  
  return (
    <div>
      <h2>CreateBlog</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <form action="#" onSubmit={handleSubmit}>
              <input
                type="text"
                id="imageUrl"
                className="form-control mt-1"
                placeholder="Enter imageUrl here"
                onChange={handleChange}
              />

              <input
                type="text"
                id="title"
                className="form-control mt-1"
                placeholder="Enter your title"
                onChange={handleChange}
              />
              <input
                type="text"
                id="topic"
                className="form-control mt-1"
                placeholder="Enter your topic "
                onChange={handleChange}
              />
              <textarea
                type="text"
                id="content"
                className="form-control mt-1"
                placeholder="Write a Blog here!"
                onChange={handleChange}
              ></textarea>
              <br />

              <button type="submit" className="btn btn-primary">
                CreateBlog
              </button>
            </form>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
