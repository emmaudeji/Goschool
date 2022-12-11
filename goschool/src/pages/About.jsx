import { Hero, AboutSection } from "../components"
import bg3 from '../assets/bgwhite11.png'

const About = () => {
  return (
    <>
    <Hero
    backgroundImage={bg3}
    title='About Us'
    header={'Best Learning experience at your comfort'}
    text={<>
            <p>Learn at your pace and master the skill of choice.</p>
            <p>Courses that meet your career goals.</p>
          </>}
    CTA={
      <div className='mt-4'>
              <button className='primary-btn bg-[var(--color-primary)] px-[18px] py-[14px] mr-[20px] rounded hover:bg-[var(--color-secondary)] duration-500 cursor-pointer'>
                Get Started <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='bg-[var(--color-white)] text-[var(--color-black)] px-[18px] py-[14px] mr-[20px] rounded hover:bg-[var(--color-secondary)] hover:text-[var(--color-white)] duration-500 cursor-pointer'>
                View Courses <i className='fa fa-long-arrow-alt-right'></i>
              </button>
      </div>
    }
    />

    <AboutSection/>
    </>
  )
}

export default About