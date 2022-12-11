import React, {useState} from 'react'

const Newsletter = () => {
  const [input, setInput] = useState('')

  return (
     <div className='w-full sm:flex justify-between items-center px-6  sm:px-16  lg:px-36 xl:px-48  mx-auto py-14 bg-[var(--color-primary)] ' >
   
        <div className='text-white'>
          <h1 className='text-4xl font-bold'>Let's keep you updated</h1>
          <h3>Stay tune and get the latest update, discount rates and freebies</h3>
        </div>

        <form 
        className='overflow-hidden bg-white flex justify-between rounded md:w-[45%] h-14 mt-4 sm:mt-0 mr-6 sm:mr-0'
        onSubmit={""}
        >
          <input 
          className='bg-zinc-300 px-4 w-full hover:bg-white focus:bg-zinc-100 duration-300'
          type="email"
          name='input' 
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='email@email.com'
          />
          <button type='submit'
          className='py-2 px-4 hover:bg-blue-400 hover:text-white duration-500'
          ><i className='fa fa-paper-plane'></i></button>
        </form>
    </div>
  )
}

export default Newsletter;