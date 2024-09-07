import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between h-[8vh] px-4 font-poppins items-center max-w-[1440px] mx-auto'>
      <Link href={"/"} className='font-bold text-xl '>Zenlect</Link>
      <div className=' gap-3 hidden lg:flex'>
        <Button variant="ghost" className='text-white hover:bg-white/10 hover:text-white no-underline'>Home</Button>
        <Button variant='ghost' className='text-white hover:bg-white/10 hover:text-white no-underline'>About</Button>
        <Button variant='ghost' className='text-white hover:bg-white/10 hover:text-white no-underline'>Contact</Button>
      </div>
      <div className='hidden lg:flex gap-3'>
        <button className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-5 py-2 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent text-sm font-medium">
            Login
          </div>
        </button>
        <button className="inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-5 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"> Sign Up </button>
      </div>

    </div>
  )
}

export default Navbar