import React from 'react'

const Quote = ({line}) => {
  return (
    <div className='flex w-full justify-center mt-5'>
      <h1 className='text-3xl font-thin italic'><span className="text-6xl">&#8220;</span>{line}<span className='text-6xl'>&#8221;</span> </h1>
    </div>
  )
}

export default Quote