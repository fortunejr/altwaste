import React from 'react'
import Nav from '../../Components/Nav/Nav'
import HeroSection from '../../Components/HeroSection/HeroSection'
import MarqueeText from '../../Components/Marquee/Marquee'
import Stats from '../../Components/Stats/Stats'
import Intro from '../../Components/Intro/Intro'
import Solutions from '../../Components/Solutions/Solutions'
import Products from '../../Components/Products/Products'
import ServicesBanner from '../../Components/ServicesBanner/ServicesBanner'

const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <Stats />
        <ServicesBanner />
        <Intro />
        <Solutions />
        <Products />
        <MarqueeText />
    </div>
  )
}

export default Homepage