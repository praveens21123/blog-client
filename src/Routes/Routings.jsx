import React from 'react'
import Home from '../Components/Home'
import { Route, Routes } from 'react-router-dom'
import SingleBlog from '../Components/SingleBlog'
import Register from '../Components/Register'
import Login from '../Components/Login'
import CreateBlog from '../Components/CreateBlog'
import EditBlog from '../Components/EditBlog'

const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/createblog" element={<CreateBlog />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/singleblog/:id" element={<SingleBlog />}/>
      <Route path="/editblog/:id" element={<EditBlog />}/>
    </Routes>
  )
}

export default Routings