import React from 'react'
import { CardSpotlight } from './ui/card-spotlight'
import { FaUsers } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
const AiForEveryone = () => {
    return (
        <div className='bg-gradient-to-b from-slate-950 to-black min-h-screen px-5 md:px-20 h-full pt-20 pb-20 xl:pb-[200px]'>
            <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
                AI for Everyone
            </h4>
            <div className='w-full grid grid-cols-1 xl:grid-cols-3 gap-5 xl:gap-20 mt-20 justify-items-center'>
                <CardSpotlight className="h-full w-full md:h-96 md:w-96 bg-zinc-900/40  hover:cursor-pointer px-5">

                    <HiOutlineBuildingLibrary className='w-full xl:w-max xl:pl-2 text-6xl text-left md:text-6xl relative z-20 mb-5 md:mb-10' />

                    <h2 className="text-2xl relative z-20 font-bold text-center md:text-left">
                        Government domains

                    </h2>

                    <p className="text-gray-600 mt-4 relative z-20 hover:text-gray-400 duration-200 text-center md:text-left text-sm md:text-base">
                        Zenlect helps develop innovative AI solutions for various government domains, enhancing
                        efficiency in administration , improving data analysis for decision-making, and fostering
                        transparency in operations.
                    </p>
                </CardSpotlight>
                <CardSpotlight className="h-full w-full md:h-96 md:w-96 bg-zinc-900/40  hover:cursor-pointer px-5">

                    <FaUsers className='w-full xl:w-max xl:pl-2 text-6xl text-center md:text-left md:text-6xl relative z-20 mb-5 md:mb-10' />

                    <h2 className="text-2xl relative z-20 font-bold text-center md:text-left">
                        Public Sector


                    </h2>

                    <p className="text-gray-600 mt-4 relative z-20 hover:text-gray-400 duration-200 text-center md:text-left text-sm md:text-base">
                        Zenlect delivers groundbreaking AI solutions for public services and social initiatives,
                        empowering communities through better resource management, improving accessibility, and
                        optimizing resource allocation.

                    </p>
                </CardSpotlight>
                <CardSpotlight className="h-full w-full md:h-96 md:w-96 bg-zinc-900/40  hover:cursor-pointer px-5">
                    <GrUserSettings className='w-full xl:w-max xl:pl-2 text-6xl text-center md:text-left md:text-6xl relative z-20 mb-10' />

                    <h2 className="text-2xl relative z-20 font-bold text-center md:text-left">
                        Custom Solution

                    </h2>

                    <p className="text-gray-600 mt-4 relative z-20 hover:text-gray-400 duration-200 text-center md:text-left text-sm md:text-base">
                        Zenlect develops tailored AI innovation for businesses, streamlining operations, enhancing
                        customer experiences, and driving data-driven insights to faster growth .

                    </p>
                </CardSpotlight>
            </div>
            <div className='flex items-center justify-center w-full mt-10 xl:mt-20 group'>
                <a href={"/contact"} className=''>
                <button className="bg-violet-500 px-5 py-2 border-violet-600 border-2 rounded-[6px] text-white text-[16px] xl:text-xl font-medium text-nowrap font-montserrat group-hover:bg-black transition duration-200 group-hover:border-2 hover:border-indigo-500">
                    Contact Us
                </button>
                </a>

            </div>
        </div>
    )
}

export default AiForEveryone