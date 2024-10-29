"use client"
import React from 'react'
import Marquee from "react-fast-marquee";
import gsap from 'gsap';

const MarqueeComponent = () => {
    const handleMarqueeHover = (e: React.MouseEvent<HTMLSpanElement>) => {
        gsap.to(e.target, {
            scale: 1.1,
            color: "#3a87ca",
            duration: 0.1
        });
    };

    const handleMarqueeLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
        gsap.to(e.target, {
            scale: 1,
            color: "#fff",
            duration: 0.1
        });
    };
    return (
        <Marquee className='marquee font-montserrat font-semibold uppercase bg-slate-950 border-t-[#5a166b] border-t-4 border-b-[#5a166b] border-b-4 py-2 md:py-5' speed={100} pauseOnHover>
            <h1 className='text-xl sm:text-[3vw]'>
                <span onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeLeave}>&nbsp;Zenlect AI </span>
                <span>✦ </span>
                <span onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeLeave}>Custom AI Solutions </span>
                <span>✦ </span>
                <span onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeLeave}>Geolocation Intelligence </span>
                <span>✦ </span>
                <span onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeLeave}>Public Sector Solutions </span>
                <span>✦ </span>
            </h1>
        </Marquee>
    )
}

export default MarqueeComponent