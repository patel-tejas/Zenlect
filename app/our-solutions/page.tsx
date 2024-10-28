"use client"
import gsap from 'gsap';
import React from 'react'
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { WobbleCard } from '@/components/ui/wobble-card';
import govt from "@/public/govt.jpg";
import pub from "@/public/public.jpg";
import pvt from "@/public/private.jpg";

const OurSolutions = () => {
  useGSAP(() => {
    gsap.from(".title", {
      y: -80,
      opacity: 0,
      duration: 1,
    });
  });

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    gsap.to(e.target, {
      y: -10,
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
    <>
      <div className='min-h-screen gap-5 px-5 md:px-20 py-10 md:py-20 w-full font-montserrat'>

        <h1 className='text-[15px] md:text-4xl font-bold inline-block md:block md:w-max  px-3 py-2 rounded-full text-center md:text-left title'>Custom AI solutions for <span className='bg-gradient-to-tr from-pink-600 via-purple-600 to-purple-800'>every sector</span></h1>

        <div className="">
          <h1 className='font-semibold overflow-hidden text-[5vw] font-menseal whitespace-nowrap uppercase'>
            <span className='inline-block'>-</span>
            <span className='inline-block'>&nbsp;</span>

            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>G</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>O</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>V</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>E</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>R</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>N</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>M</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>E</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>N</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>T</span>
            <span className='inline-block'>&nbsp;</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>A</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>G</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>E</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>N</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>C</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>I</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>E</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>S</span>
          </h1>

          <h1 className='font-semibold overflow-hidden text-[5vw] font-menseal whitespace-nowrap uppercase'>
            <span className='inline-block'>-</span>

            <span className='inline-block'>&nbsp;</span>

            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>P</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>R</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>I</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>V</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>A</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>T</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>E</span>
            <span className='inline-block'>&nbsp;</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>B</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>U</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>S</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>I</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>N</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>E</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>S</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>S</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>E</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>S</span>
          </h1>

          <h1 className='font-semibold overflow-hidden text-[5vw] font-menseal whitespace-nowrap uppercase'>
            <span className='inline-block'>-</span>

            <span className='inline-block'>&nbsp;</span>

            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>P</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>U</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>B</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>L</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>I</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>C</span>
            <span className='inline-block'>&nbsp;</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>S</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>E</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>C</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>T</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>O</span>
            <span className='inline-block' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>R</span>
          </h1>
        </div>
        {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-10'>
          <section className='flex flex-col gap-5 w-[90%] h-full bg-transparent rounded-2xl p-4 relative'>
            <Image
              src={img}
              alt="image"
              fill
              className="absolute object-cover rounded-2xl"
            />
            <h1>Government Agencies</h1>
            <span>From enhancing public safety to optimizing resource allocation, our AI solutions assist governments in streamlining operations and improving public service efficiency. With ZENLECT AI, public entities can better serve communities while ensuring transparency and security.</span>
          </section>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full my-10">
          <WobbleCard
            containerClassName="col-span-1 bg-black lg:col-span-2 h-full min-h-[400px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-[18px] md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                GOVT. AGENCIES
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                From enhancing public safety to optimizing resource allocation, our AI solutions assist governments in streamlining operations and improving public service efficiency. With ZENLECT AI, public entities can better serve communities while ensuring transparency and security.
              </p>
            </div>
            <Image
              src={govt}
              alt="image"
              fill
              className='absolute w-full h-full z-[-99] object-cover rounded-2xl opacity-20'
            />

          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 bg-black lg:col-span-2 min-h-[300px]">
            <div className="max-w-xs">
              <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white uppercase">
                Public Organizations
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                For public organizations, ZENLECT AI provides tools that help in data-driven decision-making, policy development, and enhancing the quality of public initiatives. We tailor solutions to meet the unique regulatory and operational needs of each organization.
              </p>
            </div>
            <Image
              src={pub}
              alt="image"
              fill
              className='absolute w-full h-full z-[-99] object-cover rounded-2xl opacity-20'
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-4 bg-black min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white uppercase">
                Private Enterprises
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Whether it’s improving customer experience, driving innovation, or increasing operational efficiency, our custom AI models empower businesses to stay competitive and agile. We work closely with companies to design AI systems that align with their specific objectives.
              </p>
            </div>
            <Image
              src={pvt}
              alt="image"
              fill
              className='absolute w-full h-full z-[-99] object-cover rounded-2xl opacity-20'
            />
          </WobbleCard>
        </div>
      </div>

     
    </>
  )
}

export default OurSolutions