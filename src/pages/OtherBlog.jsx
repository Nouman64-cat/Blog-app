import React from 'react'
import { Navbar, Quote } from '../components'
import bren from '../assets/bren.jpg'
const OtherBlog = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mb-5">
        <Quote line="Your Blog" />
        <div className='w-full mt-10'>
          <img src={bren} alt="bren" className="w-full h-[40rem]" />
        </div>
        <div className='flex flex-col justify-center items-center content-center mt-6'>
          <h1 className="text-[3rem]">How to Run a Successful Business</h1>
          <p className="text-gray-600 mt-3 italic">Author: Nouman Ejaz</p>
          <p className="text-gray-600 mt-4 italic">2 June, 2023</p>
        
        <p className="w-[75rem] mt-10 text-justify text-gray-600">Wix is a free website and blog builder tool that can be totally managed from the front-end. The main characteristics of this platform are that it comes with a 100% free plan that lets you launch a blog under Wix’s subdomain, plus it offers really good drag-and-drop tools you can use when working on your blog.Every Wix plan also comes with website hosting included, so you don’t have to go elsewhere to get it, but can instead focus on arranging your layouts, picking a template, and writing some content. Wix also provides a nice collection of free and premium themes and templates for different purposes – including blogging. The design of the platform overall is very intuitive and modern, so it can be used by both beginners and advanced users alike. To launch a Wix blog, just sign up and make a choice: you can either let the Wix ADI create a site for you based on a questionnaire or build your blog yourself – which includes selecting a template and arranging the layouts via the Wix editor. If you go with the second option, all you need to do is find a beautiful template and start customizing everything on the front-end, in a live preview mode. You can add multiple elements to your pages, from multimedia widgets to backgrounds, menus, typography, forms, video boxes etc. When you think the site is ready, click Publish and start blogging your stories. After publishing, you can return anytime to edit the content blocks.</p>
        </div>
        
      </div>
    </>
  )
}

export default OtherBlog