import React, { useState } from "react";
import { BASE_URL, TOKEN } from "../utils/config";
import { useParams } from "react-router-dom";

const EditBlog = () => {
  const {id} = useParams()
  
  const [editBlog, setEditBlog] = useState({
      image: "",
      title: "",
      topic: "",
      content: "",
    })

    const handleChange = (e) => {
      setEditBlog((preState) => ({...preState, [e.target.id] : e.target.value}))
    }
  
    const handleSubmit = async(e) => {
      e.preventDefault()
      console.log(TOKEN);
  
      try{
        const res = await fetch(`${BASE_URL}/blog/editBlog/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
             authorization: `Bearer ${TOKEN}`
          },
          body: JSON.stringify(editBlog)
        })
  
        const result = await res.json()
        console.log(result);
        
      }catch(err){
        console.log(err);
      }
      
    }
  return (
    <div>
      <h2>EditBlog</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <form action="#" onSubmit={handleSubmit}>
              <input
                type="text"
                id="imageUrl"
                className="form-control mt-1"
                placeholder="Edit imageUrl here"
                onChange={handleChange}
              />

              <input
                type="text"
                id="title"
                className="form-control mt-1"
                placeholder="Edit your title"
                onChange={handleChange}
              />
              <input
                type="text"
                id="topic"
                className="form-control mt-1"
                placeholder="Edit your topic "
                onChange={handleChange}
              />
              <textarea
                type="text"
                id="content"
                className="form-control mt-1"
                placeholder="Edit your a Blog here!"
                onChange={handleChange}
              ></textarea>
              <br />

              <button type="submit" className="btn btn-primary">
                submit
              </button>
            </form>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
