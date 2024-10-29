"use client"
import React from 'react'
import gsap from 'gsap';

const page = () => {
    const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
        gsap.to(e.target, {
            y: -5,
            color: "#c263d1",
            ease: "elastic.out(1.4,0.3)"
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
        gsap.to(e.target, {
            y: 0,
            color: "#fff",
            ease: "elastic.out"
        });
    };

    return (
        <div className='min-h-screen gap-5 px-5 md:px-20 py-10 w-full font-montserrat'>

            <h1 className='font-semibold overflow-hidden text-[10vw] sm:text-[5vw] whitespace-nowrap text-center md:pb-10'>
                <span className='inline-block'>&nbsp;</span>
                <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>A</span>
                <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>b</span>
                <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>o</span>
                <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>u</span>
                <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>t</span>
                <span className='inline-block'>&nbsp;</span>

                <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>U</span>
                <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>s</span>

            </h1>
            <div className='flex flex-col text-xl'>

                {projects.map((project, index) => (
                    <div key={index} className={`flex flex-col gap-5 text-xl items-center border-b-2 border-zinc-800 py-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} ${index === projects.length - 1 ? 'border-b-0' : ''}`}>
                        <h2 className={`w-full md:w-1/2 text-2xl md:text-[4vw] font-bold uppercase text-purple-400 hover:text-purple-600 duration-300 text-center ${index % 2 === 1 ? 'md:text-right' : ''}`}>{project.title}</h2>
                        <p className='max-w-md md:w-1/2 text-center md:text-left text-base md:text-xl'>{project.description}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}
const projects = [
    {
        title: "Who Are we?",
        description:
            "We are a team of experts dedicated to building AI software and integrating innovative solutions across various sectors. Our mission is to empower businesses with cutting-edge technology that enhances efficiency and drives growth.",

    },
    {
        title: "Our Vision",
        description:
            "Our vision is to transform industries through advanced AI solutions, enabling businesses to harness the power of technology for smarter decision-making and sustainable growth. We aspire to be a leader in innovation, shaping a future where AI enhances every aspect of life and work.",

    },
    {
        title: "Our Mission",
        description:
            "Our mission is to empower organizations by providing tailored AI software and integration solutions that address their unique challenges. We strive to deliver exceptional value, foster collaboration, and drive innovation, ensuring our clients thrive in an increasingly digital world.",

    },

];

export default page