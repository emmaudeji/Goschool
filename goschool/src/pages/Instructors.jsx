import {Hero} from '../components'
import bg3 from '../assets/team1.jpg'

const Instructors = () => {
  return (
    <Hero
    title="Instructors"
    backgroundImage={bg3}
    header={'Learn from the best and master your skill'}
    text={<>
            <p>Over 100 certified tutors in different field.</p>
            <p>Find out our range of professional tutors and start learning today.</p>
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
  )
}

export default Instructors