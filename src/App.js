import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login, Register, Home, CreateBlog, YourBlog, OtherBlog, CreateBlog1 } from './pages'
const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element = {<Login />} />
      <Route path="/register" element={<Register />} /> */}
      <Route path='/' element={<Home />} />
      {/* <Route path='/create-blog' element={<CreateBlog />} /> */}
      <Route path='/your-blog' element={<YourBlog />} />
      <Route path='/other-blog' element={<OtherBlog />} />
      <Route path="/create-blog" element={<CreateBlog1 />} />
    </Routes>
  )
}

export default App