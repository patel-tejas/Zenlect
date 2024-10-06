import React from 'react'

const page = () => {
  return (
    <div className='font-sans min-h-screen flex flex-col gap-5 px-5 md:px-20 mt-10'>
        <h1 className='text-2xl md:text-4xl font-bold text-center w-full'>Our Identity</h1>
        <div className='flex flex-col gap-3 text-xl  mt-5'>
            <h2>Trade Name: <span className='text-gray-500'>ZENLECT AI PRIVATE LIMITED</span></h2>
            <h2>CIN:- <span className='text-gray-500'>U62099WB2024PTC273690</span></h2>
            <h2>Physical address: <span className='text-gray-500'>NARENDRAPUR, South 24 Parganas WB, India</span></h2>
            <h2>Operational address: <span className='text-gray-500'>PANCHASAYAR,South 24 Parganas, WB, India</span></h2>
        </div>
    </div>
  )
}

export default page