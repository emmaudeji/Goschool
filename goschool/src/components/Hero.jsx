import {Heading } from '../components'


const Hero = (props) => {
  return (
    <div>
      <section className='hero mx-auto'>
        <div style={{backgroundImage: `url(${props.backgroundImage})` }} className='bg-cover bg-fixed bg-right md:bg-top flex top-0 right-0 w-[100%]  h-[100vh] px-6  sm:px-16  lg:px-36 xl:px-48 pt-[45%] md:pt-[20%] justify-between text-[var(--color-white)] bg-gradient-to-t from-slate-900 to-blue-500'>
          <div className='w-full md:w-[62%]'>
            <Heading subtitle={props.title} title={props.header}/>
            {props.text}
            {props.CTA}
          </div>
        </div>
      </section>
      <div className='h-[90vh]'>
        {" "}
      </div>
      
    </div>
  )
}

export default Hero