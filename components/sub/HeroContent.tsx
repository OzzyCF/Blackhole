"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className='flex flex-col md:flex-row items-center justify-center px-4 md:px-40 mt-10  w-full z-[20] md:py-40'
        id="hero"
      >
          <div className='w-5/6 flex flex-col gap-5 justify-center mt-20 text-start'>
              <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[15px] px-[25px] border border-[#7042f88b] opacity-0.5 sm:w-auto'
              >
                  <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                  <h1 className='Welcome-text text-[18px]'>
                      FrontEnd Developer NextJS Project
                  </h1>
              </motion.div>
              <motion.div
                variants={slideInFromLeft(0.5)}
                className='flex flex-col gap-6 mt-6 text-3xl md:text-6xl font-bold text-white max-w-[600px] w-auto mx-auto'
              >
                  <span>
                  Providing 
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600'> the best </span>
                  project experience</span>
              </motion.div>

              <motion.p
                variants={slideInFromLeft(0.8)}
                className='lg:text-lg text-gray-400 my-5 max-w-[600px] mx-auto sm:text-justify md:text-base sm:text-sm'
              >
                  I&apos;m a FrontEnd Developer with experience in Websites and 
                  Mobile applications, specialized in Graphic design, UI/UX.<br></br> <br></br>Check my portfolio website for other projects and skills. 
              </motion.p>
             
          </div>

          <motion.div
            variants={slideInFromRight(0.8)}
            className='w-full h-full flex justify-center items-center mt-10 md:mt-0'
          >
             <Image
             src="/mainIconsdark.svg"
             alt="work icons"
             height={400}
             width={400}
             layout='intrinsic'
             />

          </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="mt-10 mx-auto w-3/6 max-w-lg sm:w-3/6 md:w-3/6  lg:w-2/6 z-30"
      >
        <motion.a
          variants={slideInFromLeft(2)}
          href="https://www.ozzycf.co.uk/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg mx-auto block'
        >
          Learn More!
        </motion.a>
      </motion.div>
    </>
  )
}

export default HeroContent
