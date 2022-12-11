import React from 'react'
import Heading from './Heading'
import {online} from '../Data/dummydata'

const AllCourses = () => {
  return (
    <div className="flex justify-center  text-center w-full px-6 sm:px-16 lg:px-48 py-14" >
      <div>
        <Heading
      subtitle={"Course Category"}
      title={"Browse Through All Courses"}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full pt-14 text-center rounded " >
        {online.map((data) => (
          <div className='text-center p-6 bg-white hover:bg-[var(--color-primary)] hover:text-white shadow-md rounded overflow-hidden duration-500'>
          <div className='text-[var(--color-primary)] '>
             <img src={data.cover} />
              <img src={data.hoverCover} alt='' className='show' />
          </div>
          <div className='capitalize text-2xl font-medium py-3'>{data.courseName}</div>
          <div className='bg-[var(--color-white)] p-2 rounded'>
            <h5 className='text-[var(--color-primary)]'>{data.course}</h5></div>
        </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default AllCourses