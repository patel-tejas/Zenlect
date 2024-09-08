import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <div className='flex justify-between h-[8vh] px-4 font-poppins items-center max-w-[1440px] mx-auto'>
      <Link href={"/"} className='font-bold text-xl '>Zenlect</Link>
      <div className=' gap-3 hidden lg:flex'>
        <Button variant="ghost" className='text-white hover:bg-white/10 hover:text-white no-underline'>Home</Button>
        <Button variant='ghost' className='text-white hover:bg-white/10 hover:text-white no-underline'>About</Button>
        <Button variant='ghost' className='text-w1e h rounded-fullover:bg-white/10 ho4er:text-white no-underline'>Contact</Button>
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

      <div className='lg:hidden'>
        <Sheet>
          <SheetTrigger className='flex flex-col gap-[7px]'>
            <div className='h-[1px] rounded-full w-6 bg-slate-400'></div>
            <div className='h-[1px] rounded-full w-6 bg-slate-400'></div>
            <div className='h-[1px] rounded-full w-6 bg-slate-400'></div>
          </SheetTrigger>
          <SheetContent className='bg-black  border-l-[0.5px] border-slate-700 shadow-2xl px-10'>
            <SheetHeader className='my-10 w-full font-poppins h-full'>
              <div className='flex flex-col justify-between h-[80vh]'>
                <div className='flex flex-col'>

                  <div className='flex flex-col gap-1 items-start mb-5'>
                    <Link className='text-lg' href="/about"> About Us</Link>
                    <Link className='text-lg' href="/contact"> Contact</Link>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <button className="relative w-[6rem] px-3 py-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                      <div className="rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent text-lg font-medium">
                        Login
                      </div>
                    </button>
                    <button className="relative w-[6rem] px-3 py-2 inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-lg font-medium"> Sign Up </button>
                  </div>
                </div>
                <div className='flex items-start'>
                  <Link href="/" className='text-3xl font-bold'>Zenlect<span className='tracking-normal text-purple-500'>{""}.</span></Link>
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </div>
    </div>
  )
}

export default Navbar