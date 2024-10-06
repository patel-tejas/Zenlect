"use client";



import { MdAutoAwesome } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdAutoGraph } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa6";
import { TbShieldSearch } from "react-icons/tb";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';

const MobileTechnologies = () => {

  return (
    <div className='xs:mt-[100px] relative mb-10 rounded-xl py-10 px-4 bg-transparent shadow-2xl outline-none'>
     
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="w-[210px] sm:w-[250px] h-[250px] sm:h-[300px]  mt-10 bg-transparent shadow-2xl rounded-full block"
        autoplay={{
          disableOnInteraction: false,
        }}

      >

        <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-black to-gray-900  text-white border-[1px] border-slate-800'>
        <MdAutoAwesome className='w-12 h-12 text-white' /> 
          <h2>AI Automation</h2>
        </SwiperSlide>
        <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-black to-gray-900  text-white border-[1px] border-slate-800'>
            <HiOutlineLightBulb className='w-12 h-12 text-white' />
          <h2>AI Innovation</h2>
        </SwiperSlide>
        <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-black to-gray-900  text-white border-[1px] border-slate-800'>
          <MdAutoGraph className='w-12 h-12 text-white' />
          <h2>Predictive Analytics</h2>
        </SwiperSlide>
        <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-black to-gray-900  text-white border-[1px] border-slate-800'>
          <FaUserAstronaut className='w-12 h-12 text-white' />
          <h2>AI Personalization</h2>
        </SwiperSlide>
        <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-black to-gray-900  text-white border-[1px] border-slate-800'>
          <TbShieldSearch className='w-12 h-12 text-white' />
          <h2>Fault Detection</h2>
        </SwiperSlide>
        
        
      </Swiper>

    </div >
  )
}

export default MobileTechnologies