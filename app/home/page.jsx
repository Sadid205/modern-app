import React from 'react'
import HeroContent from '../home/app'

const Hero = () => {
  return (
    <div className="relative w-full h-screen rounded-br-full blueColor">
      <HeroContent/>
      <div className="absolute top-0 left-0 rounded-r-full width height transparentColor "></div>
      <div className="absolute bottom-0 rounded-r-full width height transparentColor "></div>
      <div className="absolute top-0 rounded-br-full leftCenter width heightRect transparentColor"></div>
      <div className="absolute bottom-0 rounded-tl-full rightCenter width heightRect transparentColor"></div>
      <div className="absolute right-0 rounded-l-full bottom-60 width height transparentColor"></div>
      <div className="absolute top-0 right-0 rounded-br-full h-36 width transparentColor"></div>
    </div>
  )
}

export default Hero