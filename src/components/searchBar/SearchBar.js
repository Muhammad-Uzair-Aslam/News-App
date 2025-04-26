'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [value, setValue] = useState('');
  const router = useRouter();

  const searchHandler = () => {
    if (value) {
      console.log('Navigating to:', `/search?q=${value}`);
      router.push(`/search?q=${value}`);
      setValue('')
    }
  };

  return (
    <div className='flex h-12'>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className='px-2 w-52 bg-gray-700 rounded-l-xl outline-none text-white'
        type='text'
        placeholder='Explore News'
      />
      <button
        onClick={searchHandler}
        className='px-2 bg-blue-600 text-white rounded-r-xl'
      >
        Search
      </button>
    </div>
  );
}