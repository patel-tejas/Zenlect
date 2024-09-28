"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";


import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";


export function HeroSection() {
    return (
        <BackgroundBeamsWithCollision className="h-full w-full">
            <HeroHighlight className="font-poppins h-full flex items-center flex-col">
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="px-4 text-5xl lg:text-9xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto uppercase font-poppins tracking-widest "
                >
                    Zenlec<span className="tracking-normal">t.</span>

                </motion.h1>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-center px-4 text-xl"
                >
                    Empowering industries with advanced AI for {" "}
                    <Highlight className="text-white">

                        Geolocation, {" "} Legal matters and beyond.
                    </Highlight>
                </motion.p>

                <div className="mt-5 text-lg ">
                    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </span>
                        {/* <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                            <span className="text-lg">
                                Coming soon...
                            </span>
                            
                        </div> */}
                       
                    </button>

                </div>

            </HeroHighlight>
        </BackgroundBeamsWithCollision >
    );
}
