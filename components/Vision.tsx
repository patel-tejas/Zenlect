import React from 'react'
import img2 from "@/public/heromirror.png"
import Image from 'next/image'
import { ModelSpecs } from './ModelSpecs'

const Vision = () => {
    return (
        <div className='relative bg-black min-h-screen py-20 font-sans'>
            <div className='absolute top-[-220px] right-[0px] sm:w-[200px] h-[40vh] w-[150px]  md:hidden'>
                <Image src={img2} alt="feature" fill className='object-fill opacity-25' />
            </div>
            <div className='flex flex-col gap-5'>

                <h1 className='text-2xl lg:text-4xl font-bold text-center text-white max-w-xl px-5 font-montserrat w-full mx-auto'>AI-driven precision for smarter decisions. All in one innovative solution.</h1>
                <p className='text-slate-500 text-center px-5 font-montserrat text-sm md:text-lg max-w-3xl w-full mx-auto'>
                    ZENLECT AI&apos;s long-term vision is to harness AI to streamline processes, improve decision-making, and enhance operational efficiencies in sectors that require high levels of accuracy, like legal enforcement and location-based intelligence
                </p>
            </div>
            <ModelSpecs />
        </div>
    )
}

export default Vision