import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full overflow-hidden'>
        <video
          autoPlay
          muted
          loop
          className='rotate-180 absolute z-[1] object-cover
                     md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:w-full md:h-auto
                     lg:top-[-390px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-auto lg:h-auto'
        >
          <source src='/blackhole.webm' type='video/webm'/>
        </video>
        <HeroContent />
    </div>
  )
}

export default Hero;
