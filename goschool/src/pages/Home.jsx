import {Hero, AboutSection, Credibility, CoursesSection, AllCourses, Testimonial, PricingSection, BlogSection, PrimaryBtn, SecondaryBtn} from '../components'
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
          <PrimaryBtn
          action="Get Started"/>
          <SecondaryBtn
          action="View Courses"/>
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