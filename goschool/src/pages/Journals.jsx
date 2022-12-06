import {Hero} from '../components'
import bg3 from '../assets/bg3.png'

const Journals = () => {
  return (
     <Hero
    backgroundImage={bg3}
    header={'Access professional to support your research work'}
    text={<>
            <p>Over 100 journals updated each week.</p>
            <p>Journals from different field and varying contents.</p>
          </>}
    CTA={
      <div className='mt-4'>
              <button className='primary-btn bg-[var(--color-primary)] px-[18px] py-[14px] mr-[20px] rounded hover:bg-[var(--color-secondary)] duration-500 cursor-pointer'>
                Latest journal <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='bg-[var(--color-white)] text-[var(--color-black)] px-[18px] py-[14px] mr-[20px] rounded hover:bg-[var(--color-secondary)] hover:text-[var(--color-white)] duration-500 cursor-pointer'>
                Start Learning <i className='fa fa-long-arrow-alt-right'></i>
              </button>
      </div>
    }
    />
  )
}

export default Journals