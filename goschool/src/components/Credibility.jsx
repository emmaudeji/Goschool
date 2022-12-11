import { awrapper } from "../Data/dummydata"

const Credibility = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full px-6 items-center sm:px-16 lg:px-48 py-10 text-[var(--color-white)] bg-[var(--color-primary)] ">
          {awrapper.map((data) => {
            return (
              <div className='flex'>
                <div className='mr-2'>
                  <img src={data.cover} alt='' />
                </div>
                <div className=''>
                  <h1 className="font-semibold">{data.data}</h1>
                  <h3>{data.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
  )
}

export default Credibility