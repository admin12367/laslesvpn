import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constant'

const Footer = () => {
  return (
    <div className=' bg-[#F8F8F8] flex justify-between px-[145px]  py-[200px] ' id='footer'>
        <div>
            <Image src="/Logo.png" alt= "logo" width={149} height={36}/>
            <p className='text-[#4F5665] text-[16px] font-normal leading-[30px] w-[340px] py-5'><span className='font-medium'>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
            <div  className='flex'>
            {Socials.map(social => (
                <Image key={social.id} src={social.image} alt='social' width={50} height={50} className='flex'/>
              
            ))}
              </div>
            <p className='text-[#AFB5C0] text-[16px]'>©2020Lasles<span className='font-medium'>VPN</span></p>
        </div>

        <div className='text-[#4F5665] text-[16px] leading-[30px]'>
          <h1 className='text-[#0B132A] text-[18px] font-medium pb-5'>Product</h1>
          <p>Download</p>
          <p>Pricing</p>
          <p>Location</p>
          <p>Server</p>
          <p>Countries</p>
          <p>Blogs</p>
        </div>

        <div className='text-[#4F5665] text-[16px] leading-[30px]'>
          <h1 className='text-[#0B132A] text-[18px] font-medium pb-5'>Engage</h1>
          <p>LaslesVPN ? </p>
          <p>FAQ</p>
          <p>Tutorials</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        
        <div className='text-[#4F5665] text-[16px] leading-[30px]'>
          <h1 className='text-[#0B132A] text-[18px] font-medium pb-5'>Earn Money</h1>
          <p>Affiliate</p>
          <p>Become Partner</p>
        </div>
    </div>
  )
}

export default Footer