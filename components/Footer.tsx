import Link from 'next/link'
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className=' py-4 lg:py-5 w-full bg-black border-t-2 px-4 border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-2'>
            <div className='font-poppins font-bold '>
                <Link href={"/"} className='font-bold text-lg lg:text-2xl'>Zenlect<span className='tracking-normal text-purple-500'>.</span></Link>
            </div>
            <h3 className='font-poppins text-sm lg:text-lg text-center'>© {new Date().getFullYear()} Zenlect Pvt Ltd. All rights reserved.</h3>
            <div className='flex gap-3'>
                <FaInstagram className='lg:w-6 lg:h-6'/>
                <FaXTwitter className='lg:w-6 lg:h-6'/>
            </div>
        </div>
    )
}

export default Footer