import {PriceCard, Heading} from '../components'

const PricingSection = () => {
  return (
    <div className="flex justify-center  text-center w-full px-6 sm:px-16 lg:px-48 py-14">
      <div>
        <Heading
        subtitle={"Pricing"}
        title="Pricing & Packages"/>
      
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
          <PriceCard/>
        </div>
      </div>
    </div>
  )
}

export default PricingSection