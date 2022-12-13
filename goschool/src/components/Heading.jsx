
const Heading = ({ subtitle, title }) => {
  return (
      <div >
        <h3 className="font-[600] leading-8 uppercase text-[var(--color-primary)]">{subtitle} </h3>
        <h1 className="text-[40px] sm:text-[45px] my-[10px] font-[600] leading-10 capitalize">{title} </h1>
      </div>
  )
}

export default Heading
