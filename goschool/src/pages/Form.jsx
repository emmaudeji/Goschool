import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"

export const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()

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



  return (
    <div className="h-screen w-screen flex justify-center items-center">
      
      <div className="w-[400px] bg-white rounded shadow-lg overflow-hidden">
        
        <div className="flex w-full justify-between bg-zinc-200 text-center cursor-pointer">
          
          <div className={`${location.pathname === "/signup" && "bg-blue-800 text-white"}  
          w-full py-4 rounded`}
          onClick={() => navigate('/signup')}
          >Sign-up</div>
          
          <div className={`${location.pathname === "/login" && "bg-blue-800 text-white"}  
          w-full py-4 rounded`}
          onClick={() => navigate('/login')}
          >Login</div>
      </div>

       <form className="body h-96">
        <div>
          <label htmlFor="username">Username:</label>
          <input 
          onChange = {changeHandler}
          type="text" name="username" value={input.username} placeholder="Gogrene" id="username" />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input 
          onChange = {changeHandler}
          type="email" name="email" value={input.email} placeholder="email@email.com" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
          onChange = {changeHandler}
          type="text" name="password" value={input.password} placeholder="password" id="password" />
        </div>
        <div>
          <label htmlFor="Confirm password">repassword:</label>
          <input 
          onChange = {changeHandler}
          type="text" name="repassword" value={input.repassword} placeholder="password" id="repassword" />
        </div>
      </form>

      </div>
    </div>
  )
}

export const SignUp = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-[400px] bg-white rounded shadow-lg overflow-hidden">
        <div className="flex w-full justify-between bg-zinc-200 text-center cursor-pointer">
          
          <div className={`${location.pathname === "/signup" && "bg-blue-800 text-white"}  
          w-full py-4 rounded`}
          onClick={() => navigate('/signup')}
          >Sign-up</div>
          
          <div className={`${location.pathname === "/login" && "bg-blue-800 text-white"}  
          w-full py-4 rounded`}
          onClick={() => navigate('/login')}
          >Login</div>

      </div>
      <form className="body h-96">{" "}</form>
      </div>
    </div>
  )
}