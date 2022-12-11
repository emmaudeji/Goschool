import React from 'react'

const BlogCard = (props) => {
  return (
     <div key={""} className='text-left bg-white shadow-md rounded hover:shadow-xl duration-300 w-96 sm:w-60 md:w-72 h-max grow cursor-pointer m-4 '>
      <div className='w-full h-[40%] overflow-hidden'>
        <img className='w-full h-full object-cover' src={props.blogImg} alt="profile" />
      </div>
      <div className='px-6'>
        <div className='pt-4'> icons</div>
        <div className='text-2xl font-semi-bold py-4 hover:text-[var(--color-primary) duration-500] hover:text-[var(--color-primary)] capitalize'>{props.heading}</div>
        <div className='pb-6'>{props.content}</div>
      </div>
      
    </div>
  )
}

export default BlogCard