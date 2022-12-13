import { Newsletter } from "../components"
import { blog } from "../Data/dummydata"

const Footer = () => {
  return (
    <div>
      <Newsletter/>
      
      <div className="flex flex-col lg:flex-row w-full px-6 sm:px-16 lg:px-48 py-8 gap-6" >
        
        <div className=" text-left lg:w-[30%] ">
          <h1 className="font-bold text-5xl">Goschool</h1>
          <h4 className="pb-4">ONLINE LEARNING MASTER</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, dolores?</p>
          
          <div className="flex gap-2">
            <i className='fab fa-facebook-f icon shadow-md'></i>
            <i className='fab fa-twitter icon shadow-md'></i>
            <i className='fab fa-instagram icon shadow-md'></i>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4">
          <div>
            <h3 className="font-semibold text-lg pb-2">Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg pb-2">Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms </li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>

          <div className="col-span-2">
            <h3 className="font-semibold text-lg pb-2 pt-4 sm:pt-0">Recent Post</h3>
            <div className="divide-y divide-slate-600 text-[12px]">
              {blog.slice(0, 3).map((data) => (
              <div className='flex pb-4 '>
                <div className='mr-2 w-24 rounded overflow-hidden'>
                  <img className="w-full h-full object-cover" src={data.cover} alt='blogphoto' />
                </div>
                <div className='text-left'>
                  <span>
                    <i className='fa fa-calendar-alt pr-2 text-[var(--color-primary)]'></i>
                    <label htmlFor='' className="pr-2">{data.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user pr-2 text-[var(--color-primary)]'></i>
                    <label htmlFor=''>{data.type}</label>
                  </span>
                  <h4 className="text-lg text-sm">{data.title}</h4>
                </div>
              </div>
            ))}
            </div>
            
          </div>
        </div>


        <div className='lg:w-[25%] '>
            <h3 className="font-semibold text-lg pb-2">Have Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map pr-2 text-[var(--color-primary)]'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className='fa fa-phone-alt pr-2 text-[var(--color-primary)]'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane pr-2 text-[var(--color-primary)]'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>

      </div>
      
        <div className="h-4 br-zinc-600 w-full">{" "}</div>
        <div className="flex justify-center text-center text-sm py-4 border-y-4 border-zinc-500">
        Copywrite (05-12-2022) Gogrene
      </div>
    </div>
  )
}

export default Footer