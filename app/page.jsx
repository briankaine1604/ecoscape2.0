"use client"
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [isSticking, setIsSticking] = useState(false);

  useEffect(() => {
    const card = document.querySelector('.suspect');

    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      setIsSticking(!entry.isIntersecting);
    }, {
      threshold: 0
    });

    observer.observe(card);

    return () => {
      // Cleanup the observer when the component unmounts
      observer.unobserve(card);
    };
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='suspect'></div>
      <div className={`navhead ${isSticking ? 'sticking' : ''}`}>sticky</div>
      <div className='w-full h-screen bg-slate-400 relative z-10 top-0'></div>

      <div className='grid grid-cols-2 w-full min-h-screen'>
        <div className='bg-slate-100'></div>
        <div className='bg-white'></div>
      </div>
      <div className='bg-purple-400 w-full h-screen'></div>
    </div>
  );
};

export default Page;
