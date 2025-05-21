"use client"
import { Customers } from '@/constant'
import React, {useRef} from 'react';
import Image from 'next/image'


const Testimonial = () => {

    const slider = useRef<HTMLUListElement | null>(null);
    let tx = 0;

    const forward = () => {
        if (tx > -50) {
            tx -= 25;
            if (slider.current) {
                slider.current.style.transform = `translateX(${tx}%)`; // Fixed template literal syntax
            }
        }
    };

    const backward = () => {
        if (tx < 0) {
            tx += 25;
            if (slider.current) {
                slider.current.style.transform = `translateX(${tx}%)`; // Fixed template literal syntax
            }
        }
    };
    
  return (
    <div className='bg-[#FFFFFF] px-[145px]  py-[50px]  flex flex-col' id='testimonial'>
        <div className='flex flex-col items-center text-center gap-3'>
        <h1 className='text-[#0B132A] text-[35px] leading-[50px] font-medium w-[447px]'>Trusted by Thousands of Happy Customer</h1>
        <p className='text-[#4F5665] text-[16px] leading-[30px] font-normal w-[555px]'>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        </div>
        <div className='overflow-hidden pt-10'>
        <ul ref={slider} className='flex overflow-x-hidden duration-700 w-[200%] gap-14'>
            {Customers.map(customer => (
            
                    <li key={customer.id} className=' border-2 border-[#DDDDDD] hover:border-[#F53838] w-[50%] h-[230px] p-5 rounded-[10px] shadow-xl'>
                       

                        <div className='flex items-center justify-between'>

                            <div className='flex items-center gap-5'>
                                <Image src={customer.image} alt="customer" width={50} height={50} className='rounded-[50%]'/>
                        <div>
                            <h1 className='text-[#0B132A] text-[18px] font-medium '>{customer.name}</h1>
                            <p className='text-[#4F5665] text-[14px] font-normal '>{customer.adress}</p>
                        </div>

                            </div>
                        
                        <div className='flex items-center gap-2'>
                           <p className='text-[#0B132A] text-[16px] font-normal '>{customer.tag}</p>
                           <Image src={customer.icon} alt='icon' width={16} height={16}/>
                        </div>

                        </div>
                        <p className='w-[340px] mt-5'>{customer.text}</p>

                    </li>
                
            ))}
        </ul>
        </div>
        
        <div className='flex items-center justify-between'>
            <Image src="/dot-dot.svg" alt='dot-dot' width={135} height={15}/>
            <div className='flex items-center'>
                <Image src="/left.svg" alt='left' width={60} height={60} onClick={backward} className='cursor-pointer'/>
                <Image src="/right.svg" alt='right' width={147} height={147} className='pt-6 cursor-pointer' onClick={forward}/>
            </div>
        </div>

    </div>
  )
}

export default Testimonial