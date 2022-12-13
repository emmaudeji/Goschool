import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { useState, useContext, createContext } from "react"

const AuthContext = createContext()

const Authprovider = ({children}) => { 
  const navigate = useNavigate()
  const [username, setUsername] = useState(null)

  const login = (param) => {
    setUsername(param.charAt(0).toUpperCase() + param.slice(1));
  }

  const logout = () => {
    setUsername(null)
    navigate('/')
  }

  return (
    <AuthContext.Provider 
    value={{
      username, login, logout
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default Authprovider;

export const useAuth = () => useContext(AuthContext)


