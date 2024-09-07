import {  FeaturesSectionMain } from '@/components/FeatureSectionMain'
import { HeroSection } from '@/components/HeroSection'
import { StepsTimeline } from '@/components/StepsTimeline'
import React from 'react'

const page = () => {
  return (
    <div className='font-sans'>
      <div className=''>
        <HeroSection />
        <FeaturesSectionMain />
        <StepsTimeline />
      </div>
    </div>
  )
}

export default page