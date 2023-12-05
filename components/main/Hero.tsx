import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-340px] left-1/2 transform -translate-x-1/2 z-[1] h-full object-cover' 
        >
            <source src='/blackhole.webm' type='video/webm'/>
        </video>
        <HeroContent  />
    </div>
  )
}

export default Hero