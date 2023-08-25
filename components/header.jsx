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
      <div className={`grid border grid-cols-12 navhead ${isSticking ? 'sticking' : ''} 
      ${isSticking2 ? 'sticking2' : ''}`}>
        <div className='col-span-2 justify-center flex bitter items-center text-white text-4xl'>
          <div className={` ${!isSticking ? 'hidden' : 'flex'}`}>Ecoscape.</div></div>
        <div className='col-span-8 grid grid-cols-6 text'>
          {navlinks.map(({name,id,link})=>(
            <div key={id} className='text-xl flex justify-center items-center'>
              <Link className='' href={link}>{name}</Link>
            </div>
          ))}
          </div>
      </div>
      <div className='suspect2'>
        <Image
        fill={true}
        style={{objectFit:"cover"}}
        src={`/images/EcoLanding.png`}
        alt='green trees in a forest'
        loading="lazy"
        />
      </div>
    </div>
  )
}

export default Header