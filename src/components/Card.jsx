import React from 'react'
import blog1 from '../assets/blog1.jpg'
const Card = ({title, topic, author, createdAt}) => {
  return (
    <div className='relative border-2 border-solid w-6/7 ml-5 mr-5 mt-10 hover:shadow-2xl cursor-pointer'>
      <img src={blog1} alt='blog_1' className='w-[17rem] h-70' />
      <div className='flex flex-col ml-3 mt-4 gap-y-2'>
        <p className='text-gray-500'>Author: {author}</p>
        <div>
          <h1 className='font-bold text-xl'>{topic}</h1>
          <h1>{title}</h1>
        </div>
        {/* <div>
          <p className='font-bold text-gray-400'>Summary</p>
          <p className='text-gray-500 text-[0.8rem]'>{content}</p>
        </div> */}
        <p className='text-gray-400 text-[0.6rem] py-5'>Published: {createdAt}</p>
      </div>
    </div>
  )
}

export default Card