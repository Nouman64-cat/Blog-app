import React, { useState, useRef } from 'react';
import { Navbar, Quote } from '../components';
import axios from 'axios';


const CreateBlog1 = () => {
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  // const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') setTitle(value);
    else if (name === 'topic') setTopic(value);
    else if (name === 'content') setContent(value);
    else if (name === 'author') setAuthor(value);
    // else if (name === 'image') setImage(value);
  };

//   const convertBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();

//     reader.onload = () => {
//       resolve(reader.result);
//     };

//     reader.onerror = (error) => {
//       reject(error);
//     };

//     reader.readAsDataURL(file);
//   });
// };

//   const fileInputRef = useRef(null); // Create a ref for the file input

//   // ... other functions ...
//   const MAX_FILE_SIZE_LIMIT = 10 * 1024 * 1024;
//   const handleUpload = async (e) => {
//   console.log('handleUpload function called'); // Add this line
//   e.preventDefault();
//   const file = e.target.files[0];
//   console.log('file:', file); // Add this line

//   if (file) {
//     try {
//       const base64 = await convertBase64(file);
//       setImage(base64);
//     } catch (error) {
//       console.error('Error converting image to base64:', error);
//     }
//   } else {
//     console.warn('No file selected');
//   }
// };




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Start loading
      const response = await axios.post('http://localhost:8080/api/create-blog', {
        title: title,
        topic: topic,
        content: content,
        author: author,
        // image: image,
      });

      if (response.status === 200){
        console.log('Blog created successfully');
      }
      const data = response.data;
      console.log(data);
      setTimeout(() => {
        setLoading(false); // Stop loading after a delay
        window.location.replace('/your-blog'); // Redirect to login page
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className='flex flex-col justify-center items-center content-center'>
        <Quote line="Let's Create Blog" />
        {loading && <p>Creating Blog</p>}
        <form onSubmit={handleSubmit} className='mt-10 w-[70rem]'>
          <div className='flex w-full gap-4'>
          <input
            type='text'
            name='topic'
            placeholder='Enter Topic'
            onChange={handleChange}
            className='px-5 py-3 rounded-lg w-full border-2 border-[#129B3B] mb-4'
          />
          
          <input
            type='text'
            name='author'
            placeholder='Author'
            onChange={handleChange}
            className='px-5 py-3 rounded-lg w-full border-2 border-[#129B3B] mb-4'
          />
          </div>
          <input
            type='text'
            name='title'
            placeholder='Enter Title'
            onChange={handleChange}
            className='px-5 py-3 rounded-lg w-full border-2 border-[#129B3B] mb-4'
          />
          <textarea
            name='content'
            placeholder='Start writing your blog...'
            onChange={handleChange}
            className='px-5 py-3 rounded-lg w-full border-2 border-[#129B3B] mb-4'
            style={{height: '16rem'}}
          />
           {/* <input
            placeholder="Upload Image"
            ref={fileInputRef} // Attach the ref to the file input
            type='file'
            name='image'
            className='' // Hide the input element
          />
          <label onClick={handleUpload} htmlFor='image' className='relative bg-[#129B3B] rounded-full py-3 px-5 text-white w-[10rem] ml-3 cursor-pointer'>
            Upload Image
          </label> */}
          <div className="flex w-full justify-end">
          <button type='submit' className=' bg-[#129B3B] rounded-lg py-3 px-5 text-white w-[10rem] '>
            <p>Submit</p>
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBlog1;
