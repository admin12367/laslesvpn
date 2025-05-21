import React from 'react'
import Image from 'next/image'
import { Lists } from '@/constant'

const Feature = () => {
  return (
    <div className='bg-[#FFFFFF] flex items-center justify-between px-[150px] py-[50px] mt-10' id='feature'>
        <Image src='/Illustration 2.png' alt='feature' width={508} height={414}/>
        <div className='flex flex-col gap-4 mt-12'>
            <h1 className='text-[#0B132A] text-[35px] leading-[50px] font-medium w-[383px]'>We Provide Many Features You Can Use</h1>
            <p className='text-[#4F5665] text-[16px] leading-[30px] font-normal w-[430px]'>You can explore the features that we provide with fun and have their own functions each feature.</p>
            {Lists.map((list) => (
                <div key={list.id} className='flex gap-3'>
                     <Image src={list.image} alt='feature' width={20} height={20}/>
                     <p className='text-[#4F5665] text-[14px] font-normal leading-[30px]'>{list.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Feature