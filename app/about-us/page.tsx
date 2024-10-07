import React from 'react'

const page = () => {
    return (
        <div className='min-h-screen gap-5 px-5 md:px-20 py-20 w-full font-poppins'>

            <h1 className='text-2xl md:text-4xl font-bold text-center w-full'>About Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>

                {projects.map((project, index) => (
                    <div key={index} className='rounded-2xl h-full w-full p-6 md:p-8 overflow-hidden bg-gray-950/40 border border-white/[0.2] hover:border-slate-700 relative z-20 hover:bg-gray-900/60 duration-200'>
                        <h2 className='text-2xl font-bold py-3 text-center md:text-left'>{project.title}</h2>
                        <p className='text-gray-500 text-[15px] md:text-lg leading-relaxed text-center md:text-left'>{project.description}</p>
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