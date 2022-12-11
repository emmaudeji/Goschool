import {useRef} from 'react';
import Heading from './Heading'
import {testimonal} from '../Data/dummydata'

const Testimonial = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 50;
    } else {
      current.scrollLeft += 50;
    }
  };
  return (
    <div className="flex justify-center  text-center w-full px-6 sm:px-16 lg:px-48 py-14" >
      
      <div>
        <Heading
      subtitle={"Testimonial"}
      title={"What Students say"}
      />

      <div className='slider mt-10'>
       
        <div ref={scrollRef}  className='slider_container w-[85vw] gap-4 justify-center items-center h-72'>

        {
          testimonal.map(data => (
            <div className=' min-w-[270px] p-4 rounded hover:text-white shadow-md duration-500 hover:bg-[var(--color-primary)] text-left'>
          <div className='flex mb-2'>
            <div className='profile w-16 h-16 rounded-full mr-2 overflow-hidden'>
              <img className='w-full h-full object-cover'
               src={data.cover} alt="profile" />
            </div>
            <div className='name ml-1 '>
              <h1 className='font-semibold text-lg'>{data.name}</h1>
              <h2 className='capitalize text-md font-medium text-md'>{data.post}</h2>
            </div>
          </div>
          <div >
            {data.desc}
          </div>
        </div>
          ))
        }
      </div>
      <div className='xl:hidden absolute top-[90%] flex justify-center gap-2 w-full '>
         <i onClick={() => scroll('left')}
         className='fa-solid fa-circle-arrow-left
          text-2xl hover:text-blue-800 duration-300 cursor-pointer'></i>
           <i onClick={() => scroll('right')}
           className='fa-solid fa-circle-arrow-right
          text-2xl hover:text-blue-800 duration-300 cursor-pointer'></i>
      </div>
      </div>
      
      </div>
    </div>
  )
}

export default Testimonial