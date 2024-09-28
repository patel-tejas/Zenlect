import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import logo from "@/public/zenlectnobg1.png"

const Navbar = () => {
  return (
    <div className='flex justify-between h-[9vh] px-4 md:px-8 font-poppins items-center max-w-[1440px] mx-auto'>
      <div className='flex gap-2 items-center'>
        <Image src={logo} alt="logo" width={50} height={50} />
        <Link href={"/"} className='font-bold text-xl mt-1'>Zenlect<span className='text-purple-400'>.</span></Link>
      </div>
      <div className='gap-3 hidden lg:flex items-center'>
        <Link href="/" >
          <Button variant="ghost" className='text-white text-[15px] hover:bg-white/5 hover:text-white no-underline'>
            Home
          </Button>
        </Link>
        <Link href="/about">
          <Button variant='ghost' className='text-white text-[15px] hover:bg-white/5 hover:text-white no-underline'>About</Button>
        </Link>
        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem> */}
        <Link href="/contact">
          <Button variant='ghost' className='text-white text-[15px] hover:bg-white/5 hover:text-white no-underline'>Contact</Button>
        </Link>
        <Link href="/geolocator-ai">
          <Button variant='ghost' className='text-white text-[15px] hover:bg-white/5 hover:text-white no-underline'>Geolocator AI</Button>
        </Link>




      </div>




      <div className='hidden lg:flex gap-3'>
        <Link href="http://app.zenlect.com" target='_blank' className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-5 py-2 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent text-sm font-medium">
            Login
          </div>
        </Link>
        {/* <button className="inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-5 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"> Sign Up </button> */}
      </div>

      <div className='lg:hidden' >
        <Sheet>
          <SheetTrigger className='flex flex-col gap-[7px]'>
            <div className='h-[1px] rounded-full w-6 bg-slate-400'></div>
            <div className='h-[1px] rounded-full w-6 bg-slate-400'></div>
            <div className='h-[1px] rounded-full w-6 bg-slate-400'></div>
          </SheetTrigger>
          <SheetContent className='bg-black  border-l-[0.5px] border-slate-800 shadow-2xl px-10'>
            <SheetHeader className='my-10 w-full font-poppins h-full'>
              <div className='flex flex-col justify-between h-[80vh]'>
                <div className='flex flex-col'>

                  <div className='flex flex-col gap-2 items-start mb-5'>
                    <Link className='text-lg' href="/">Home</Link>
                    <Link className='text-lg' href="/about"> About Us</Link>
                    <Link className='text-lg' href="/contact"> Contact</Link>
                    <Link className='text-lg' href="/geolocator-ai"> Geolocator AI</Link>
                    <Link href="http://app.zenlect.com" target='_blank' className="relative mt-5">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                      <div className="px-5 py-2 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent text-sm font-medium">
                        Login
                      </div>
                    </Link>
                  </div>
                  {/* <div className='flex flex-col gap-3'>
                    <button className="relative w-[6rem] px-1 py-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent text-lg font-medium">
                    Login
                    </div>
                    </button>
                    <button className="relative w-[6rem] px-1  py-2 inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-lg font-medium"> Sign Up </button>
                    </div> */}
                </div>
                <div className='flex items-start'>
                  <Link href="/" className='text-3xl font-bold'>Zenlect<span className='tracking-normal text-purple-500'>{""}.</span></Link>
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </div >
    </div >

  )
}

export default Navbar;