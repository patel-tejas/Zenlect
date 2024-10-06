import { HoverEffect } from '@/components/ui/card-hover-effect'
import React from 'react'

const page = () => {
    return (
        <div className='min-h-screen gap-5 px-5 md:px-20 py-20 w-full'>

            <HoverEffect items={projects} className='w-full'/>


        </div>
    )
}
export const projects = [
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