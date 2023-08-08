import React from 'react';
import blog_logo from '../assets/blog_logo.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex flex-row justify-between py-5'>
      <div className='flex flex-row ml-5 align-middle content-center gap-2'>
        <img src={blog_logo} alt='logo' className='w-10 h-10' />
        <h1 className='text-3xl mt-1'>Blog</h1>
      </div>
      <div className='flex flex-row align-self-end gap-5 mr-5'>
        <Link to="/">
          <button className='bg-[#129B3B] rounded-full py-3 px-5 text-white w-[7rem]'><p>Login</p></button>
        </Link>
        <Link to="/register">
          <button className='bg-[#129B3B] rounded-full py-3 px-5 text-white w-[7rem]'><p>Sign Up</p></button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar