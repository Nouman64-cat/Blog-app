import React, { useState, useEffect } from 'react'
import {Card, Navbar, Quote} from '../components'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Home = () => {

  const [blog, setBlog] = useState([])

  const fetchAllBlogs = async () => {
    try{
      const response = await axios.get("http://localhost:8080/api/read-all-blog")
      setBlog(response.data)
      console.log(response)
    } catch(error) {
      console.log(error)
    }
  } 
  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <>
    {/* <Navbar /> */}
    <div className='w-full flex flex-col justify-center items-center content-center'>
      <div className='flex flex-col'>
        
        <Quote line='A well-executed blog sets you apart as an expert in your field' />
      </div>
      <div className="w-full flex justify-center mt-6">
        <Link to='/create-blog'>
          <button className='flex justify-center bg-[#129B3B] rounded-full py-3 px-5 text-white w-[9rem]'><p>Create Blog</p></button>
        </Link>
      </div>
       <div className='grid grid-cols-4 gap-4'>
          {blog.slice(0, 4).map((blog) => (
            <Card
              key={blog._id}
              title={blog.title}
              topic={blog.topic}
              
              author={blog.author}
              createdAt={new Date(blog.createdAt).toLocaleDateString()}
            />
          ))}
        </div>
      <div className="flex flex-col justify-center align-middle content-center items-center bg-[#98C261] w-2/3 mt-10 mb-10 rounded-full h-[20rem]">
        <div className="flex flex-col items-center justify-center gap-0">
          <h1 className="font-bold text-[5rem] mb-0">Interested?</h1>
          <p className="mt-[-1rem]">Let's bring something to the world!</p>
        </div>
         <Link to='/create-blog'>
          <button className='flex justify-center bg-[#129B3B] rounded-full py-3 px-5 text-white w-[9rem] mt-5'><p>Create Blog</p></button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Home