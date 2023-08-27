"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Header = () => {

  const navlinks=[
    {id:'1',link:'#',name:'Home'},
    {id:'2',link:'#',name:'Blog'},
    {id:'3',link:'#',name:'Explore Nature'},
    {id:'4',link:'#',name:'Gallery'},
    {id:'5',link:'#',name:'Our products'},
    {id:'6',link:'#',name:'Contact us'},
  ]
    const [isSticking, setIsSticking] = useState(false);
    const [isSticking2, setIsSticking2] = useState(false);
  
    useEffect(() => {
      const card = document.querySelector('.suspect');
      const card2 = document.querySelector('.suspect2');
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.target === card) {
            setIsSticking(!entry.isIntersecting);
          } else if (entry.target === card2) {
            setIsSticking2(!entry.isIntersecting);
          }
        });
      }, {
        threshold: 0
      });
  
      observer.observe(card);
      observer.observe(card2);
  
      return () => {
        // Cleanup the observer when the component unmounts
        observer.unobserve(card);
        observer.unobserve(card2);
      };
    }, []);
  return (
    <div className='text-white'>
    <div className='suspect justify-center flex bitter items-center text-white text-5xl'>ECOSCAPE.</div>
      <div className={`grid grid-cols-12 group navhead ${isSticking ? 'sticking' : ''} 
      ${isSticking2 ? 'sticking2' : ''}`}>
        <div className='col-span-2 justify-center flex bitter items-center text-white text-4xl'>
          <div className={` ${!isSticking ? 'hidden' : 'flex'}`}>Ecoscape.</div></div>
        <div className='col-span-8 grid grid-cols-6 text  relative justify-center group'>
          {navlinks.map(({name,id,link})=>(
            <div key={id} className='text-xl flex justify-center items-center group relative'>
            <Link
              className='hover:border-b focus:border-b font-medium '
              href={link}
            >
              {name}
            </Link>
            <div className='w-full absolute hidden group-hover:flex  min-w-full top-16 h-56'></div>
          </div>
          
          ))}
          <div className='hidden group-hover:flex absolute border  min-w-full top-16 h-56 bg-slate-900 bg-opacity-80 transition ease-in-out delay-700 duration-500 '>
            
          </div>
          </div>
          <div className='hidden group-hover:flex absolute border  min-w-full top-16 h-56 bg-slate-900 bg-opacity-80 transition ease-in-out delay-700 duration-500 '>
            
            </div>
      </div>
      <div className='suspect2'>
        <Image
        fill={true}
        style={{objectFit:"cover"}}
        src={`/images/eco2.jpg`}
        alt='green trees in a forest'
        loading="lazy"
        
        />
        
      </div>
      <div className='bg-slate-900 w-full h-screen absolute justify-center top-0 items-center flex bg-opacity-40 z-20 text-white uppercase'>
        <div className='flex-col text-center text-3xl font-semibold'><div>"Exploring nature's beauty:</div> <div>Your Journey through the Ecoscape"</div> </div></div>
    </div>
  )
}

export default Header