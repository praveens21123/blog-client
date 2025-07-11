import React, { useState } from "react";
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    userName:undefined,
    email:undefined,
    phone:undefined,
    password:undefined,
    profilePicture:undefined
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData((preState)=>({...preState, [e.target.id]:e.target.value}))    
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const res = await fetch(`${BASE_URL}/auth/registeruser`, {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      const data = await res.json()
      console.log(data);
      navigate("/login")

    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <h2>Registration Form</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                id="userName"
                className="form-control mt-1"
                placeholder="Enter your Name"
                onChange={handleChange}
              />
              <input
                type="email"
                id="email"
                className="form-control mt-1"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              <input
                type="number"
                id="phone"
                className="form-control mt-1"
                placeholder="Enter your PhoneNumber"
                onChange={handleChange}
              />
              <input
                type="password"
                id="password"
                className="form-control mt-1"
                placeholder="Enter your Password"
                onChange={handleChange}
              />
              <input
                type="text"
                id="profilePicture"
                className="form-control mt-1"
                placeholder="Enter your profilePic URL"
                onChange={handleChange}
              />
              <br/>

              <button type="submit" className="btn btn-primary">Register</button>
            </form>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
