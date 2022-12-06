import {useNavigate} from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className='text-center'>
        <h1 className='text-6xl'>Page was not found</h1>
      <h4 onClick={() => navigate(-1)} className="cursor-pointer text-2xl font-bold text-[var(--color-primary)] hover:text-blue-600">BACK</h4>
      </div>
    </div>
  )
}

export default NotFound