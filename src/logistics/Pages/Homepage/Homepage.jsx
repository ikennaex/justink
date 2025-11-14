import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import About from '../../Components/About/About'
import WhyChooseUse from '../../Components/WhyChooseUs/WhyChooseUse'
import Services from '../../Components/Services/Services'
import OurImpact from '../../Components/OurImpact/OurImpact'
import DeliveryCost from '../../Components/DeliveryCost/DeliveryCost'
import CTA from '../../Components/CTA/CTA'

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <WhyChooseUse />
      <Services />
      <OurImpact />
      <DeliveryCost />
      <CTA />
    </div>
  )
}

export default Homepage