import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../utils/config";

const SingleBlog = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState({});

  useEffect(() => {
    fetchSingleBlog();
  }, []);

  const fetchSingleBlog = async () => {
    const res = await fetch(`${BASE_URL}/blog/singleblog/${id}`);
    const { data } = await res.json();
    setSingleBlog(data);
  };

  return (
    <div>
      <h2>SingleBlog</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-5">
            {singleBlog && Object.keys(singleBlog).length > 0 && (
              <div class="card mb-3" style={{width:"35rem"}}>
                <img src={singleBlog.imageUrl} class="card-img-top" alt={singleBlog.title} />
                <div class="card-body">
                  <h5 class="card-title">Author : {singleBlog.user.userName}</h5>
                  <h5 class="card-title">{singleBlog.title}</h5>
                  <p class="card-text">
                    {singleBlog.content}
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Created on : {Date(singleBlog.timeStamp)}
                    </small>
                  </p>
                  <Link to={`/editBlog/${singleBlog._id}`}><button className="btn btn-warning">EditBlog</button></Link>
                </div>
              </div>
            )}
          </div>
           <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
