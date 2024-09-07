"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";


import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";


export function HeroSection() {
    return (
        <BackgroundBeamsWithCollision>
            <HeroHighlight className="font-poppins min-h-[90vh] flex items-center flex-col justify-center">
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
                    className="text-center px-4 text-lg"
                >
                    Empowering industries with advanced AI for {" "}
                    <Highlight className="text-white">

                        Geolocation, {" "} Legal matters and beyond.
                    </Highlight>
                </motion.p>
            </HeroHighlight>
        </BackgroundBeamsWithCollision >
    );
}
