import React, { useState, useEffect } from 'react';
import { Navbar, Quote } from '../components';
import bren from '../assets/bren.jpg';
import axios from 'axios';

const YourBlog = () => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/read-blog`);
      console.log(response);
       if (response.data.length > 0) {
        setBlog(response.data[response.data.length - 1]); // Set the most recent blog
      } // Assuming you're fetching a single blog
      else {
        console.log('No blogs found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!blog) {
    return <p>Loading...</p>; // Loading state while fetching data
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col mb-5">
        <Quote line={blog.topic} />
        <div className='w-full mt-10'>
          <img src={bren} alt="bren" className="w-full h-[40rem]" />
        </div>
        <div className='flex flex-col justify-center items-center content-center mt-6'>
          <h1 className="text-[3rem]">{blog.title}</h1>
          <p className="text-gray-600 mt-3 italic">Author: {blog.author}</p>
          <p className="text-gray-600 mt-4 italic">{new Date(blog.createdAt).toLocaleDateString()}</p>
        
        <p className="w-[75rem] mt-10 text-justify text-gray-600">{blog.content}</p>
        </div>
        <div className='w-full flex justify-end pr-10'>
          <button className='relative bg-[#129B3B] rounded-lg py-3 px-5 text-white w-[12rem] ml-3 mt-[1rem]'><p>Edit</p></button>
        </div>
        
      </div>
    </>
  );
};

export default YourBlog;
