import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../common/auth";

export const Objects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {login} = useAuth()

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    repassword: ""
  })

  const changeHandler = (event) => {
    event.persist();
    const {name, value} = event.target;
    setInput(prevValue => ({
      ...prevValue,
      [name]: value
    }))
  }

  const handleSignup = event => {
    event.preventDefault();
    if (input.password === input.repassword) {
      navigate('goschool/login')
      // alert(`You are successfully signed up ${input.username}`)

      // setInput({
      //   username: "",
      //   email: "",
      //   password: "",
      //   repassword: ""
      // })
    } else {alert('password does not match')}
  }

  const handleLogin = event => {
    event.preventDefault();
    login(input.username)
    navigate('/goschool')
    alert(`You are successfully logged in ${input.username}`)
  }

  return ({location, navigate, input, setInput, changeHandler, handleLogin, handleSignup});
}


export const Login = () => {

  const {location, navigate, input, setInput, changeHandler, handleLogin} = Objects()

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      
      <div className="w-[400px]  rounded shadow-lg overflow-hidden">
        
        <div className="flex w-full justify-between  text-center cursor-pointer">
          
          <div className={`${location.pathname === "/goschool/signup" && "bg-blue-800 text-white"}  
          w-full py-4 rounded`}
          onClick={() => navigate('/goschool/signup')}
          >Sign-up</div>
          
          <div className={`${location.pathname === "/goschool/login" && "bg-blue-800 text-white"}  
          w-full py-4 rounded`}
          onClick={() => navigate('/goschool/login')}
          >Login</div>
        </div>

       <form onSubmit={handleLogin}>
        
        <div className="w-full px-4 pt-4 ">
          <div  htmlFor="username">Username:</div>
          <input 
          className="w-full flex items-center h-12 text-zinc-900 p-2 bg-zinc-100 hover:bg-zinc-200 focus:outline-none focus:bg-zinc-200 rounded duration-300"
          onChange = {changeHandler}
          type="text" name="username" value={input.username} placeholder="Gogrene" id="username" />
        </div>
        
        <div className="w-full px-4 pt-4 ">
          <div htmlFor="password">Password:</div>
          <input          
          className="w-full flex items-center h-12 text-zinc-900 p-2 bg-zinc-100 hover:bg-zinc-200 focus:outline-none focus:bg-zinc-200 rounded duration-300" 
          onChange = {changeHandler}
          type="password" name="password" value={input.password} placeholder="password" id="password" />
        </div>
        <div className="px-4">

          <button 
          className="w-full h-12 mt-4 bg-blue-800 text-zinc-100 flex items-center justify-center rounded" type="submit">Login</button>
          </div>
        
      </form>

          <div className="p-4 ">Not registered? <span className="text-blue-900 hover:text-blue-500 duration-300 cursor-pointer" onClick={() => navigate('/goschool/signup')}>Sign-up</span>
          </div>
      </div>
    </div>
  )
}

export const SignUp = () => {
 const {location, navigate, input, setInput, changeHandler, handleSignup} = Objects()

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      
      <div className="w-[400px]  rounded shadow-lg overflow-hidden">
        
        {/* header */}
        <div className="flex w-full justify-between  text-center cursor-pointer">
          <div className={`${location.pathname === "/goschool/signup" && "bg-blue-800 text-white"}  
          w-full py-4 rounded`}
          onClick={() => navigate('/goschool/signup')}
          >Sign-up</div>
          
          <div className={`${location.pathname === "/goschool/login" && "bg-blue-800 text-white"}  
          w-full py-4 rounded`}
          onClick={() => navigate('/goschool/login')}
          >Login</div>
      </div>

      {/* form */}
      <form onSubmit={handleSignup}>
        <div className="w-full px-4 pt-4 ">
          <div  htmlFor="username">Username:</div>
          <input 
          className="w-full flex items-center h-12 text-zinc-900 p-2 bg-zinc-100 hover:bg-zinc-200 focus:outline-none focus:bg-zinc-200 rounded duration-300"
          onChange = {changeHandler}
          type="text" name="username" value={input.username} placeholder="Gogrene" id="username" />
        </div>
        <div className="w-full px-4 pt-4 ">
          <div htmlFor="email">email:</div>
          <input
          className="w-full flex items-center h-12 text-zinc-900 p-2 bg-zinc-100 hover:bg-zinc-200 focus:outline-none focus:bg-zinc-200 rounded duration-300"
          onChange = {changeHandler}
          type="email" name="email" value={input.email} placeholder="email@email.com" id="email" />
        </div>
        <div className="w-full px-4 pt-4 ">
          <div htmlFor="password">Password:</div>
          <input          
          className="w-full flex items-center h-12 text-zinc-900 p-2 bg-zinc-100 hover:bg-zinc-200 focus:outline-none focus:bg-zinc-200 rounded duration-300" 
          onChange = {changeHandler}
          type="password" name="password" value={input.password} placeholder="password" id="password" />
        </div>
        <div className="w-full px-4 pt-4 ">
          <div htmlFor="Confirm password">Retype password:</div>
          <input 
          className="w-full flex items-center h-12 text-zinc-900 p-2 bg-zinc-100 hover:bg-zinc-200 focus:outline-none focus:bg-zinc-200 rounded duration-300"
          onChange = {changeHandler}
          type="password" name="repassword" value={input.repassword} placeholder="password" id="repassword" />
        </div>

          <div>
        <button 
          className="w-full h-12 mt-4 bg-blue-800 text-zinc-100 flex items-center justify-center rounded" type="submit">Sign-up</button>
          </div>
      </form>

          <div className="p-4 ">Already registered? <span className="text-blue-900 hover:text-blue-500 duration-300 cursor-pointer" onClick={() => navigate('/goschool/login')}>Sign in</span>
          </div>
      {/* option */}
          
      </div>
    </div>
  )
}