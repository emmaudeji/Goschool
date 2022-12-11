import {price} from '../Data/dummydata'
import {PrimaryBtn} from '../components'

const PriceCard = () => {
  return (
    <>
      {price.map((data) => (
        <div key={data.id} className=' rounded p-6 shadow-md bg-white hover:shadow-xl duration-500 text-left'>
          <h4 className='text-md font-semi-bold uppercase text-[var(--color-primary)]'>{data.name}</h4>
          <h1 className='flex  text-4xl font-bold p-3'>
            <small className='small'>$</small>
            {data.price}
          </h1>
          <p className='leading-6 pb-2'>{data.desc}</p>
          <PrimaryBtn action="GET STARTED" />
        </div>
      ))}
      </>
  )
}

export default PriceCard