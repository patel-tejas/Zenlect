"use client"
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import zenlectimg from "@/public/zenlectweb-min.jpg"; // Example AI-related image
import img from "@/public/hero.png"
import img2 from "@/public/heromirror.png"
import Example from "./HorizontalScroll";

export function FeaturesSectionMain() {
    const features = [
        {
            title: "Integrating AI for Societal Development Across Multiple Sectors",
            description:
                "We strive to optimize the use of artificial intelligence by integrating it across various sectors to promote societal development.",
            skeleton: <SkeletonOne />,
            className:
                "col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-800",
        },
        {
            title: "AI-Powered Solution",
            description:
                "ZENLECT's state-of-the-art AI identifies the problem and delivers innovative solutions to effectively address it.",
            skeleton: <SkeletonTwo />,
            className: "border-b col-span-1 lg:col-span-2 border-neutral-800",
        },
        
    ];
    return (
        <div className="relative bg-gradient-to-b from-black via-black to-slate-950">
             <div className='absolute top-[-130px] left-0 h-[60vh] w-[300px] hidden md:block'>
                <Image src={img} alt="feature" fill className='object-fill' />
            </div>
            <div className='absolute top-[-130px] right-0 h-[60vh] w-[300px] hidden md:block'>
                <Image src={img2} alt="feature" fill className='object-fill' />
            </div>

            <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">

                <div className="px-8">
                    <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
                    Revolutionizing Every Possible Sector and Industry with AI
                    </h4>

                    <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal">
                    At ZENLECT, we specialize in cutting-edge AI technologies that transform industries
                    through pinpoint precision and enhanced capabilities.
                    </p>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-neutral-800">
                        {features.map((feature) => (
                            <FeatureCard key={feature.title} className={feature.className}>
                                <FeatureTitle>{feature.title}</FeatureTitle>
                                <FeatureDescription>{feature.description}</FeatureDescription>
                                <div className="h-full w-full">{feature.skeleton}</div>
                            </FeatureCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className={cn("text-sm md:text-base max-w-4xl text-left mx-auto text-neutral-300 my-2")}>
            {children}
        </p>
    );
};

export const SkeletonOne = () => {
    return (
        <div className="relative flex py-8 px-2 gap-10 h-full">
            <div className="w-full p-2 md:p-5 mx-auto bg-transparent shadow-2xl group h-[30vh] md:h-[60vh]">
                <div className="flex flex-1 w-full h-full flex-col space-y-2">
                    <Image
                        src={zenlectimg}
                        alt="AI image"
                        width={800}
                        height={800}
                        className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
                    />
                </div>
            </div>
            <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black via-transparent to-transparent w-full pointer-events-none" />
        </div>
    );
};

export const SkeletonTwo = () => {
    
    return (
        <div>
            <Example />
        </div>
    );
};
