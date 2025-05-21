import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-[#FFFFFF] flex items-center justify-between px-[150px] py-[50px]'>
        <Image src="/Logo.png" alt= "logo" width={149} height={36}/>

        <div className='flex gap-5 text-[16px] text-[#4F5665]'>
          <Link href= "#home">About</Link>
          <Link href= "#feature">Features</Link>
          <Link href= "#price">Pricing</Link>
          <Link href= "#testimonial">Testimonials</Link>
          <Link href= "#footer">Help</Link>
        </div>

        <div className='flex items-center gap-5'>
        <Link href= "/" className='text-[16px] font-medium text-[#0B132A]'>Sign In</Link>
        <Link href= "/" className='border border-[#F53855] rounded-3xl w-[150px] h-[45px] text-[#F53855] text-[16px] font-medium text-center pt-2'>Sign Up</Link>
        </div>
    </div>
  )
}

export default Navbar