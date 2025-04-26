import GeneralSection from '@/components/generalSection/GeneralSection'
import React from 'react'

export default function general() {
  return (
    <div className="bg-gray-900 ">
      <h1 className="text-4xl text-center font-bold py-5 text-gray-200">General News     </h1>
      <div className="">
        <GeneralSection/>
     </div>
    </div>
  )
}
