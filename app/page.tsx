import AiForEveryone from '@/components/AiForEveryone'
import { FeaturesSectionMain } from '@/components/FeatureSectionMain'
import { HeroSection } from '@/components/HeroSection'
import MarqueeComponent from '@/components/Marquee';
import React from 'react'


const page = () => {
  return (
    <div className='font-montserrat'>
      <div className=''>
        <HeroSection />
        <FeaturesSectionMain />
        <MarqueeComponent />
        <AiForEveryone />
        {/* <StepsTimeline /> */}
        {/* <Vision /> */}
        
      </div>
    </div>
  )
}

export default page