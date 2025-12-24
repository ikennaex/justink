import React from 'react'
import Herosection from '../../Components/Herosection/Herosection'
import DeliveryAnimations from '../../Components/Animation/DeliveryAnimations'
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'
import MarqueeText from '../../Components/Marquee/Marquee'

const Homepage = () => {
  return (
    <div>
      <Herosection/>
      <DeliveryAnimations/>
      <WhyChooseUs/>
      <MarqueeText />
    </div>
  )
}

export default Homepage