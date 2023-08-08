import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios library
import 'tailwindcss/tailwind.css';

const Register = () => {
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // New state for loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Start loading
      const response = await axios.post('http://localhost:8080/api/register', {
        userName: name,
        email: userEmail,
        passwordHash: password,
      });
      if (response.status !== 200) throw new Error('Something went wrong');
      const data = response.data;
      console.log(data);
      setTimeout(() => {
        setLoading(false); // Stop loading after a delay
        window.location.replace('/'); // Redirect to login page
      }, 500); // 500ms delay
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    // This function will run when the component mounts (page reloads or loads for the first time)
    // Clear the form fields when the component mounts
    setName('');
    setUserEmail('');
    setPassword('');
  }, []); // The empty array [] as the second argument ensures the effect runs only once, on mount

  return (
    <div className="flex flex-col justify-center items-center content-center bg-[#C6D8AF] h-[100vh]">
      <h1 className="text-5xl mb-5">Register Yourself</h1>
      <div className='flex flex-col justify-center items-center content-center bg-[#FFFFF] rounded-full w-full'>
        <form onSubmit={handleSubmit} className="flex flex-col items-center content-center justify-center w-full">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-2 rounded-full py-3 px-5 w-1/2"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="mb-2 rounded-full py-3 px-5 w-1/2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 rounded-full py-3 px-5 w-1/2"
            required
          />
          <button type="submit" className="rounded-full bg-[#129B3B] py-3 w-[10rem] flex-auto justify-center">
            <p className="text-white">Register</p>
          </button>
        </form>
      </div>
      {loading && <p>Registering...</p>} {/* Display loading message */}
      <p>
        <Link to="/">Already have an account? <span className="hover:underline">Login</span></Link>
      </p>
    </div>
  );
};

export default Register;
