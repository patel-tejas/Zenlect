import {  FeaturesSectionMain } from '@/components/FeatureSectionMain'
import { HeroSection } from '@/components/HeroSection'
import React from 'react'

const page = () => {
  return (
    <div className='font-sans'>
      <div className=''>
        <HeroSection />
        <FeaturesSectionMain />
        {/* <StepsTimeline /> */}
        {/* <Vision /> */}
      </div>
    </div>
  )
}

export default page