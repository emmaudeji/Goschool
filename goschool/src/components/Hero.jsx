import {Heading } from '../components'

const Hero = () => {
  return (
    <div>
      <section className='hero mx-auto'>
        <div className='flex w-full h-[100vh] px-6  sm:px-16  lg:px-36 xl:px-48 pt-[45%] md:pt-[20%] justify-between '>
          <div className='w-full md:w-[62%]'>
            <Heading subtitle='' title='Education made easy and accessible'/>
            <p>Get the best of education from the comfort of your home.</p>
            <p>Start learning today from a wide range of courses.</p>
            
            <div className='mt-4'>
              <button className='primary-btn bg-[var(--color-primary)] px-[18px] py-[14px] mr-[20px] rounded hover:bg-[var(--color-secondary)] duration-500 cursor-pointer'>
                Get Started <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='bg-[var(--color-white)] text-[var(--color-black)] px-[18px] py-[14px] mr-[20px] rounded hover:bg-[var(--color-secondary)] hover:text-[var(--color-white)] duration-500 cursor-pointer'>
                View Courses <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='h-[90vh]'>
        {" "}
      </div>
      
    </div>
  )
}

export default Hero