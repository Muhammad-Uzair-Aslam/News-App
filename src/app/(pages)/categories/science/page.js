import ScienceSection from '@/components/scienceSection/ScienceSection'
import React from 'react'

export default function page() {
  return (
    <div className="bg-gray-900 ">
    <h1 className="text-4xl text-center font-bold py-5 text-gray-200">Science News</h1>
    <div className="">
      <ScienceSection/>
   </div>
  </div>
  )
}
