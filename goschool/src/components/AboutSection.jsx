import cover from '../assets/online7.jpg'
import Heading from './Heading'
import {homeAbout} from '../Data/dummydata'

const About = () => {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row px-6  sm:px-16  lg:px-36 xl:px-48  mx-auto pt-14'>
      
        <div className='h-auto w-full overflow-hidden rounded '>
          <img className='w-full object-cover h-full' src={cover} alt="about-photo" />
        </div>
      
      <div className='leading-10 md:ml-10 py-10'>
        
          <Heading
            title='Benefits of Online Learning'
            subtitle={'learn anything'}
          />

          {
            homeAbout.map((data) => (
              <div key={data.id} className='flex p-4 hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] duration-300 mb-4'>
            <div className='mr-2'>
              <img src={data.cover} alt="cover" />
            </div>
            <div>
              <h4>{data.title}</h4>
              <p>{data.desc}</p>
            </div>
          </div>
            ))
          
          }
        
      </div>
    </div>
  )
}

export default About