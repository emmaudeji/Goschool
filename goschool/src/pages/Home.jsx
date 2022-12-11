import {Hero, AboutSection, Credibility, CoursesSection, AllCourses, Testimonial, PricingSection, BlogSection} from '../components'
import bg3 from '../assets/bg3.png'

const Home = () => {
  return (
    <>
      <Hero
      backgroundImage={bg3}
      header={'Education made easy and accessible'}
      text={<>
              <p>Get the best of education from the comfort of your home.</p>
              <p>Start learning today from a wide range of courses.</p>
            </>}
      CTA={
        <div className='mt-4'>

                <button className='bg-[var(--color-primary)] px-[18px] py-[14px] mr-[20px] rounded hover:bg-[var(--color-secondary)] duration-500 cursor-pointer'>
                  Get Started <i className='fa fa-long-arrow-alt-right'></i>
                </button>

                <button className='bg-[var(--color-white)] text-[var(--color-black)] px-[18px] py-[14px] mr-[20px] rounded hover:bg-[var(--color-secondary)] hover:text-[var(--color-white)] duration-500 cursor-pointer'>
                  View Courses <i className='fa fa-long-arrow-alt-right'></i>
                </button>
        </div>
      }
      />

      <AboutSection/>
      <Credibility/>
      <CoursesSection/>
      <AllCourses/>
      <Testimonial/>
      <PricingSection/>
      <BlogSection/>
      
 </>
  )

}

export default Home