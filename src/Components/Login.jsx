import React, { useContext, useState } from 'react'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const navigate = useNavigate()
const [credentials, setCredentials] = useState({
  email:undefined,
  password:undefined
})
const {dispatch} = useContext(AuthContext)

const handleChange = (e) =>{
  setCredentials((prevState)=>({...prevState, [e.target.id]:e.target.value}))
  console.log(credentials);
}
const handleSubmit = async(e) => {
   e.preventDefault()

   try{
     const res = await fetch(`${BASE_URL}/auth/login`, {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(credentials),
      credentials:"include",
     })
     const result = await res.json()
    //  console.log(data);
    dispatch({
      type:"LOGIN_SUCCESS",
      payload: result.data,
      token:result.token,
      role:result.role
    })
    navigate("/")
   }catch(err){
      console.log(err);
   }
}

  return (
    <div>
      <h2>Login</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <form action="#" onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                className="form-control mt-1"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              
              <input
                type="password"
                id="password"
                className="form-control mt-1"
                placeholder="Enter your Password"
                onChange={handleChange}
              />
              <br/>

              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  )
}

export default Login