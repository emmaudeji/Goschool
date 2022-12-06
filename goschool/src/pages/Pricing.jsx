import {Hero} from '../components'
import bg3 from '../assets/bg3.png'

const Pricing = () => {
  return (
     <Hero
    backgroundImage={bg3}
    header={'Enrol for your choice course at 30% discount rate'}
    text={<>
            <p>Start learning today and pay as you increase your acess.</p>
            <p>Follow the premium plan and access full content of the courses</p>
          </>}
    CTA={
      <div className='mt-4'>
              <button className='primary-btn bg-[var(--color-primary)] px-[18px] py-[14px] mr-[20px] rounded hover:bg-[var(--color-secondary)] duration-500 cursor-pointer'>
                View Premium <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='bg-[var(--color-white)] text-[var(--color-black)] px-[18px] py-[14px] mr-[20px] rounded hover:bg-[var(--color-secondary)] hover:text-[var(--color-white)] duration-500 cursor-pointer'>
                View Free <i className='fa fa-long-arrow-alt-right'></i>
              </button>
      </div>
    }
    />
  )
}

export default Pricing