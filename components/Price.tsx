import React from 'react'
import Image from 'next/image'
import { Frees, Premiums, Standards } from '@/constant'

const Price = () => {
  return (
    <div className='bg-[#F8F8F8] flex flex-col items-center text-center gap-8 px-[180px] py-[50px]' id='price'>
        <h1 className='text-[#0B132A] text-[35px] leading-[50px] font-medium'>Choose Your Plan</h1>
        <p className='text-[#4F5665] text-[16pxpx] leading-[30px] font-normal w-[555px]'>Let&apos;s choose the package that is best for you and explore it happily and cheerfully.</p>

        <div className='flex items-center justify-between gap-10'>

            <div className='border-2 border-[#DDDDDD] hover:border-[#F53838] bg-[#FFFFFF] w-[330px] h-[760px] flex flex-col items-center rounded-[10px]'>
                <Image src="/Free.png" alt='free' width={144} height={165} className='mt-16'/>
                <h2 className='text-[#0B132A] text-18px leading-[30px] font-medium my-7'>Free Plan</h2>
                {Frees.map((free) => (
                    <div key={free.id} className='flex gap-2 my-2'>
                        <Image src={free.image} alt='feature' width={24} height={24}/>
                        <p className='text-[#4F5665] text-[14px] leading-[30px] font-normal'>{free.text}</p>
                    </div>
                ))}
                <h1 className='text-[#0B132A] text-[25px] leading-[30px] font-medium mt-36'>Free</h1>
                <button className='w-[177px] h-[45px] border-2 border-[#F53838] rounded-[50px] text-[#F53838] text-[16px] font-bold hover:bg-[#F53838] hover:text-[#FFFFFF]'>Select</button>
            </div>

            <div className='border-2 border-[#DDDDDD] hover:border-[#F53838] bg-[#FFFFFF] w-[330px] h-[760px] flex flex-col items-center rounded-[10px]'>
                <Image src="/Standard.png" alt='standard' width={144} height={165} className='mt-16'/>
                <h2 className='text-[#0B132A] text-18px leading-[30px] font-medium my-7'>Standard Plan</h2>
                {Standards.map((standard) => (
                    <div key={standard.id} className='flex gap-2 my-2'>
                        <Image src={standard.image} alt='feature' width={24} height={24}/>
                        <p className='text-[#4F5665] text-[14px] leading-[30px] font-normal'>{standard.text}</p>
                    </div>
                ))}
                <h1 className='text-[#0B132A] text-[25px] leading-[30px] font-medium mt-24'>$9 <span className='text-[#4F5665] font-normal'>/ mo</span></h1>
                <button className='w-[177px] h-[45px] border-2 border-[#F53838] rounded-[50px] text-[#F53838] text-[16px] font-bold hover:bg-[#F53838] hover:text-[#FFFFFF]'>Select</button>
            </div>

            <div className='border-2 border-[#DDDDDD] hover:border-[#F53838] bg-[#FFFFFF] w-[330px] h-[760px] flex flex-col items-center rounded-[10px]'>
                <Image src="/Premium.png" alt='premium' width={144} height={165} className='mt-16'/>
                <h2 className='text-[#0B132A] text-18px leading-[30px] font-medium my-7'>Premium Plan</h2>
                {Premiums.map((premium) => (
                    <div key={premium.id} className='flex gap-2 my-2'>
                        <Image src={premium.image} alt='feature' width={24} height={24}/>
                        <p className='text-[#4F5665] text-[14px] leading-[30px] font-normal'>{premium.text}</p>
                    </div>
                ))}
                <h1 className='text-[#0B132A] text-[25px] leading-[30px] font-medium mt-12'>$12 <span className='text-[#4F5665] font-normal'>/ mo</span></h1>
                <button className='w-[177px] h-[45px] border-2 border-[#F53838] rounded-[50px] text-[#F53838] text-[16px] font-bold hover:bg-[#F53838] hover:text-[#FFFFFF]'>Select</button>
            </div>

        </div>
    </div>
  )
}

export default Price