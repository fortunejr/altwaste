import React from 'react'
import Nav from '../../Components/Nav/Nav'
import HeroSection from '../../Components/HeroSection/HeroSection'
import MarqueeText from '../../Components/Marquee/Marquee'
import Stats from '../../Components/Stats/Stats'
import Intro from '../../Components/Intro/Intro'
import Solutions from '../../Components/Solutions/Solutions'
import Products from '../../Components/Products/Products'

const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <Intro />
        <Solutions />
        <Products />
        <MarqueeText />
    </div>
  )
}

export default Homepage