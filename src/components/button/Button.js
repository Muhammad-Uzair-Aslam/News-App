import React from 'react'
import Link from 'next/link'
export default function Button({href}) {
  return (
    <div>
      <button className='px-3 py-2 text-white bg-blue-600 rounded-xl '><Link target='_blank' href={href}>Read more --&gt;</Link></button>
    </div>
  )
}
