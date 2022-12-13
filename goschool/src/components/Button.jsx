

export const PrimaryBtn = (props) => {
  return (
    <button className={`${props.width} bg-[var(--color-primary)] px-[18px] py-[14px] mr-[20px] rounded hover:bg-[var(--color-secondary)] text-white duration-500 cursor-pointer`}
  onClick={props.handleClick}>
                {props.action} 
                {/* <i className='fa fa-long-arrow-alt-right pl-2'></i> */}
                </button>
  )
  
}


export const SecondaryBtn = (props) => {
  return (
    
      <button className={`${props.width} bg-[var(--color-white)] text-[var(--color-black)] px-[18px] py-[14px] rounded hover:bg-[var(--color-secondary)] hover:text-[var(--color-white)] duration-500 cursor-pointer border border-blue-600`}
      onClick={props.handleClick}>
      {props.action}
      {/* <i className='pl-2 fa fa-long-arrow-alt-right'></i> */}
      </button>

      
  )
}

