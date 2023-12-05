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
    initial= "hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[15px] px-[25px] border border-[#7042f88b] opacity-0.5'
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                <h1 className='Welcome-text text-[18px]'>
                    FrontEnd Developer NextJS Project
                    </h1>
            </motion.div>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
            >
                <span>
                Providing 
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600'> the best </span>
                project experience</span>
            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 my-5 max-w-[600px]'
            >
                I&apos;m a FrontEnd Developer with experience in Websites and 
                Mobile applications, specialized in Graphic design, UI/UX.<br></br> Check my portfolio website for other projects and skills. 
            </motion.p>
           
        </div>

        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
        >
           <Image
           src="/mainIconsdark.svg"
           alt="work icons"
           height={650}
           width={650}
           />

        </motion.div>
    </motion.div>
    <motion.a
  variants={slideInFromLeft(1)}
  href="https://www.ozzycf.co.uk/" // Add the URL here
  target="_blank" // Open in a new tab
  rel="noopener noreferrer" // For security purposes
  className='py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg mx-auto block w-1/6 mt-1.5' // Centered and bigger
>
  Learn More!
</motion.a>
    </>
  )
}

export default HeroContent