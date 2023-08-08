import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios library
import 'tailwindcss/tailwind.css';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'userEmail') setUserEmail(value);
    else if (name === 'password') setPassword(value);

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Start loading
      const response = await axios.get('http://localhost:8080/api/login', {
        email: userEmail,
        passwordHash: password,
      });
      if (!response.status === 200) throw new Error('Something went wrong');
      const data = response.data;
      console.log(data);
      setTimeout(() => {
        setLoading(false); // Stop loading after a delay
        window.location.replace('/home'); // Redirect to login page
      }, 500);
      // response.data && window.location.replace('/home');
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    // This function will run when the component mounts (page reloads or loads for the first time)
    // Clear the form fields when the component mounts
    setUserEmail('');
    setPassword('');
  }, []); // The empty arra-centery [] as the second argument ensures the effect runs only once, on mount

  return (
    <div className="flex flex-col justify-center items-center content-center bg-[#C6D8AF] h-[100vh]">
    
      <h1 className="text-5xl mb-5">Login/Sign in</h1>
      <div className='flex flex-col justify-center items-center content-center bg-[#FFFFF] rounded-full w-full'>
        <form onSubmit={handleSubmit} className="flex flex-col items-center content-center justify-center w-full">
          <input
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="mb-2 rounded-full py-3 px-5 w-1/2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="mb-2 rounded-full py-3 px-5 w-1/2"
            required
          />
          <button type="submit" className="rounded-full bg-[#129B3B] py-3 w-[10rem] flex-auto justify-center">
            <p className="text-white">Login</p>
            
          </button>
        </form>
        
      </div>
      {loading && <p>Logging in...</p>}
      <p>
          <Link to="/register">Don't have an account? <span className="hover:underline">Register</span></Link>
        </p>
    </div>
  );
};

export default Login;
