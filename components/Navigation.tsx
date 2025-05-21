"use client"
import { Networks } from '@/constant'
import React from 'react'
import Image from 'next/image'

const Navigation = () => {
  return (
    <div className='flex items-center justify-between px-[90px] py-[50px] bg-[#ffffff] border border-[#ffffff] mx-[150px] mt-10 rounded-[10px] shadow-xl'>
        {Networks.map((network) => (
            <div key={network.id} className='flex gap-5'>
                <Image src={network.src} alt='network' width={55} height={55}/>

                <div>
                    <h1 className='text-[#0B132A] font-bold text-[25px] leading-[30px]'>{network.title}</h1>
                    <p className='text-[#4F5665] font-normal text-[20px] leading-[30px]'>{network.text}</p>
                </div>
            </div>
            
        ))}
        
    </div>
  )
}

export default Navigation