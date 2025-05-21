import React from 'react'
import Image from 'next/image'

const GlobalNetwork = () => {
  return (
    <div className='bg-[#F8F8F8] px-[145px] py-[50px] gap-5 flex flex-col items-center text-center'>
        <h1 className='text-[#0B132A] text-[35px] leading-[50px] font-medium w-[383px]'>Huge Global Network of Fast VPN</h1>
        <p className='text-[#4F5665] text-[16px] leading-[30px] font-normal w-[555px]'>See <span className='font-medium'>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
        <Image src='/Huge Global.png' alt='global' width={1060} height={538} className='pt-16'/>
        <Image src='/Sponsored.png' alt='sponsor' width={1135} height={208}/>
    </div>
  )
}

export default GlobalNetwork