import { useEffect } from 'react'
import { useState } from 'react'
import { Heading, PrimaryBtn, SecondaryBtn} from '../components'
import {coursesCard} from '../Data/dummydata'


const CoursesSection = () => {
  const [length, setLength] = useState(4)

  const [NewList, setNewList] = useState(coursesCard.slice(0, length))

  useEffect(() => {
    const sliceList = (coursesCard) => {
      coursesCard && setNewList(coursesCard.slice(0, length))
    }
    sliceList(coursesCard)
  }, [length, coursesCard])

  return (
    <div className="flex justify-center  text-center w-full px-6 sm:px-16 lg:px-48 py-14" >

      <div>
        <Heading
        subtitle="Popular Courses"
        title="Explore Popular Online Courses"
        />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-14 text-left rounded " >
          
          {NewList.map((data) => (
            <div key={data.id} className='p-2 bg-white shadow-md hover:shadow-xl duration-500'>
            <div className='w-full h-32 overflow-hidden rounded'><img src={data.dcover} alt="label" /></div>
            <div className='font-bold text-lg leading-6 mt-2'>{data.coursesName}</div>
            <small className='small font-semibold'>{data.name}</small>
            <div className='text-[var(--color-primary)] overflow-hidden flex'>
              <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
            </div>
            <small>{data.totalTime}</small>
            <div className='font-bold'>{`${data.priceAll} / ${data.pricePer}`}</div>
            
             <SecondaryBtn
             action="Enrol Now!"
             width="w-full"/>
          </div>
          ))}
        </div>
        
        <div className='flex justify-center pt-6'>
          {
            (NewList.length < coursesCard.length) && <PrimaryBtn
          action="Load More"
          handleClick={() => setLength(length => length + 4)}/>
          }
          {(length !== 4) && <SecondaryBtn
          action="Collapse all"
          handleClick={() => setLength(4)}
          />}
          
        </div>

      </div>
    </div>
  )
}

export default CoursesSection
