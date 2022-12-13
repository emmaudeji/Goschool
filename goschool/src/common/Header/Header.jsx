import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Head from "./Head"
import {navLinks} from "../../Data/dummydata"
import { useAuth } from "../auth"


const Header = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false)
  const [active, setActive] = useState("Home")
  const {logout, username} = useAuth()

  return (
    <>
      <Head />
        <nav className='bg-[var(--color-bg-transparent)] h-12 flex w-full px-6  sm:px-16  lg:px-36 xl:px-48  justify-between items-center navbar z-20 '>

          <NavLink to={'goschool'} className="text-xl font-bold hover:text-[var(--color-primary)] duration-300" >Goschool</NavLink>
          
          <ul className= { click ? "flex-1 absolute top-24 left-0 bg-[var(--color-primary)] text-[var(--color-white)] w-[100vw] flex justify-between  text-center md:hidden py-6 leading-8" : "md:flex hidden justify-end"} onClick={() => setClick(false)}>

            <div className="md:flex text-[14px] ">
              {
                navLinks.map(({id, link, title}) => (
                  <li key={id}
                      onClick={() => setActive(title)}>
                    <NavLink className={`hover:font-bold duration-500 ${active === title ? 'font-bold ': null} 
                    ${id === navLinks.length - 1 ? "md:pr-0" : "md:pr-2 lg:pr-4"}`}
                    to={link}>{title}</NavLink>
                  </li>
                ))
              }
            </div>
            
          </ul>

          <div className="flex items-center ">
            <div className='start'>
              <div className='flex rounded mr-2 md:mr-0 px-4 h-10 text-[var(--color-white)] bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] items-center duration-300 cursor-pointer'
              onClick={() => navigate('/goschool/signup')}
              >{username ? username : 'Register' }      
              </div>

            </div>
            {username ? <div className="pr-2  sm:pr-0 cursor-pointer hover:font-semibold duration-300" onClick={() => logout()}>Logout</div> : null }
            <div className=' md:hidden cursor-pointer ' onClick={() => setClick(!click)}>
                {click ? <i className='fa fa-times z-20 hover:text-xl duration-300'> </i> : <i className='fa fa-bars hover:text-xl duration-300'></i>}
            </div>
          </div>
        </nav>
    </>
  )
}

export default Header
