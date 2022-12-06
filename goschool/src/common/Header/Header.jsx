import { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
        <nav className='bg-[var(--color-bg-transparent)] h-12 flex w-full px-6  sm:px-16  lg:px-36 xl:px-48  justify-between items-center navbar z-20 '>

          <h2 className="">Goschool</h2>
          <ul className= { click ? "absolute top-24 left-0 bg-[var(--color-primary)] text-[var(--color-white)] w-[100vw] flex justify-center  text-center md:hidden py-6 leading-8" : "md:flex hidden justify-end"} onClick={() => setClick(false)}>
            <div className="md:flex">
              <li>
              <Link class to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Instructors</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            </div>
            
          </ul>

          <div className="flex items-center ">
            <div className='start'>
              <div className='flex rounded mr-2 md:mr-0 px-4 h-10 text-[var(--color-white)] bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] items-center duration-300'>Register              </div>
            </div>
            <div className=' md:hidden' onClick={() => setClick(!click)}>
                {click ? <i className='fa fa-times z-20'> </i> : <i className='fa fa-bars '></i>}
            </div>
          </div>
        </nav>
    </>
  )
}

export default Header
