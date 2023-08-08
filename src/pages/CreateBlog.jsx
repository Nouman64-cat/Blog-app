import React, {
  useState,
} from 'react'
import { Navbar, Quote } from '../components'
import gren from '../assets/gren.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
const CreateBlog = () => {
  const [title, setTitle] = useState('')
  const [topic, setTopic] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/create-blog",{
      title,
      topic,
      content,
      image,
    });
    console.log("Blog created successfully");
    } catch (error) {
      console.log(error)
    }
    
  }
  
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
      <div className='flex flex-col justify-center items-center content-center'>
        
        <Quote line ="Create your own blog" />
        <div className="flex flex-col items-center bg-[#98C261] w-2/3 mt-10 mb-10 rounded-full h-[20rem]">
          <h1 className="font-bold text-4xl mt-5">Step 1</h1>
          <p className="text-gray-600 mt-3 text-xl">Some famous topics</p>
          <div className="grid grid-cols-4 gap-x-1 gap-y-1 mt-5">
            <button className='flex justify-center bg-[#129B3B] rounded-full py-3 px-5 text-white w-[9rem]'><p>Business</p></button>
            <button className='flex justify-center bg-[#129B3B] rounded-full py-3 px-5 text-white w-[9rem]'><p>Technology</p></button>
            <button className='flex justify-center bg-[#129B3B] rounded-full py-3 px-5 text-white w-[9rem]'><p>Travel</p></button>
            <button className='flex justify-center bg-[#129B3B] rounded-full py-3 px-5 text-white w-[9rem]'><p>Education</p></button>
            <button className='flex justify-center bg-[#129B3B] rounded-full py-3 px-5 text-white w-[9rem]'><p>Food</p></button>
            <button className='flex justify-center bg-[#129B3B] rounded-full py-3 px-5 text-white w-[9rem]'><p>Health</p></button>
            <button className='flex justify-center bg-[#129B3B] rounded-full py-3 px-5 text-white w-[9rem]'><p>Personal</p></button>
            <button className='flex justify-center bg-[#129B3B] rounded-full py-3 px-5 text-white w-[9rem]'><p>Lifestyle</p></button>
          </div>
          <div className="flex mt-7">
            <input 
              className="px-5 py-3 rounded-full w-full"
              placeholder="Enter Topic"
              type="text"
            />
            <button className='relative bg-[#129B3B] rounded-full py-3 px-5 text-white w-[10rem] ml-3'><p>Submit</p></button>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#98C261] w-2/3 mt-10 mb-10 rounded-full h-[20rem]">
          <h1 className="font-bold text-4xl mt-5">Step 2</h1>
          <p className="text-gray-600 mt-3 text-xl">Enter title for blog</p>
          <p className="text-gray-600 mt-6">for example: My life as a Stay-at-Home Mom</p>
          <p className="text-gray-600 mt-3 mb-5">for example: How to grow a successful business</p>
          <div className="flex mt-7">
            <input 
              className="px-5 py-3 rounded-full w-full"
              placeholder="Enter title"
              type="text"
            />
            <button className='relative bg-[#129B3B] rounded-full py-3 px-5 text-white w-[10rem] ml-3'><p>Submit</p></button>
          </div>
        </div>
        <div className="flex flex-col items-center w-full h-[100vh] bg-[#98C261]">
          <h1 className="font-bold text-4xl mt-5">Step 3</h1>
          <p className="text-gray-600 mt-3 text-xl">Write a blog post</p>
          <div className="flex flex-col items-center w-full mt-7">
            <div className="flex flex-col items-end">
              <textarea 
                className="px-5 py-3 w-[70rem]"
                placeholder="Start writing here..."
                type="text"
                style={{
                  height: 400,
                  font: {
                    fontSize: 16,
                  },
        }}
              />
              <button className='relative bg-[#129B3B] rounded-lg py-3 px-5 text-white w-[10rem] ml-3 mt-3'><p>Submit</p></button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-2/3 mt-10 mb-10 rounded-full h-[20rem]"
        style={{
          backgroundImage: `url(${gren})`,
        }}
        >
          <div className="flex justify-center items-center rounded-full bg-[#129B3B] mt-4 w-[10rem] py-3">
            <h1 className="font-bold text-4xl text-white">Step 4</h1>
          </div>
          <button className='relative bg-[#129B3B] rounded-full py-3 px-5 text-white w-[12rem] ml-3 mt-[8rem]'><p>Upload an Image</p></button>
        </div>
        <div className="flex flex-col items-center bg-[#98C261] w-2/3 mt-10 mb-10 rounded-full h-[20rem]">
          <h1 className="font-bold text-[5rem] mt-8">Completed?</h1>
          <p>Let's share your thoughts to the world!</p>
          <Link to='/your-blog'>
            <button type="submit" className='relative bg-[#129B3B] rounded-full py-3 px-5 text-white w-[12rem] ml-3 mt-[3rem]'><p>Publish Blog</p></button>
          </Link>
        </div>
        
      </div>
      </form>
    </>
  )
}

export default CreateBlog;