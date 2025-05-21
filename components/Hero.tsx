import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-[#FFFFFF] flex items-center justify-between px-[150px] py-[50px]' id='home'>
      <div className='flex flex-col gap-8'>
        <h1 className='text-[#0B132A] text-[50px] font-medium leading-[70px] w-[555px]'>Want anything to be easy with <span className='font-bold'>LaslesVPN.</span></h1>
        <p className='text-[#4F5665] text-[16px] font-normal leading-[30px] w-[555px]'>Provide a network for all your needs with ease and fun using <span className='font-medium'>LaslesVPN</span> discover interesting features from us.</p>
        <button className='bg-[#F53838] w-[250px] h-[60px] rounded-[10px] text-[#ffffff] text-[16px] font-medium leading-[25px]'>Get Started</button>
      </div>
      <Image src= "/Illustration 1.png" alt='hero' width={611} height={382}/>
    </div>
  )
}

export default Hero