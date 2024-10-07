import Link from 'next/link'
import React from 'react'
import logo from "@/public/zenlectnobg1.png"
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='px-4 md:px-8 pt-20 pb-5 lg:py-5 h-full w-full bg-zinc-900 border-t-2 border-zinc-800 flex flex-col gap-20 lg:gap-5 font-poppins'>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 text-left md:grid-cols-2 gap-5 md:px-20 md:py-20 w-full justify-items-center md:justify-items-start'>
                    
                    <div className='flex flex-col gap-3 text-center md:text-left'>
                        <h2 className='text-xl font-bold py-2'>Company</h2>
                        <Link className='hover:text-blue-500 text-sm lg:text-[15px]' href={"/privacy-policy"}>Privacy Policy</Link>
                        <Link className='hover:text-blue-500 text-sm lg:text-[15px]' href={"/usage-policy"}>Terms of Use</Link>
                        <Link className='hover:text-blue-500 text-sm lg:text-[15px]' href={"/identity"}>Our Identity</Link>
                        
                    </div>
                    <div className='flex flex-col gap-3 text-center md:text-left'>
                        <h2 className='text-xl font-bold py-2'>Contact</h2>
                        <Link href={"/mailto:support@zenlect.com"} className='text-sm lg:text-[15px] hover:text-blue-500 text-gray-300'>support@zenlect.com</Link>
                       
                    </div>

                </div>
            </div>
            <div className=' flex flex-col lg:flex-row justify-between gap-2 font-poppins items-center'>

                <div className='font-poppins font-bold flex items-center justify-center gap-2'>
                <Image src={logo} alt="logo" width={50} height={50} />

                    <Link href={"/"} className='font-bold text-lg lg:text-2xl mt-1'>Zenlect<span className='tracking-normal text-purple-500'>.</span></Link>
                </div>
                <div className='align-right flex gap-5 items-center flex-col md:flex-row text-center'>
                    <h3 className='text-sm lg:text-lg text-center'>© {new Date().getFullYear()} Zenlect Pvt Ltd. All rights reserved.</h3>
                    
                </div>

            </div>

        </div>

    )
}

export default Footer