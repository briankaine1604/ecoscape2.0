"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import EcoButton from './UI/ecobutton';
import Hamburger from './UI/hamburgernav';
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
    const [toggle, setToggle]= useState(false);


    const onclick =()=>{
      setToggle((prev)=>!prev);
    }
  
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
    <div className='text-white overflow-hidden'>
      <EcoButton toggle={toggle} />
      <div className={`slide-in-top flex justify-between items-center lg:grid grid-cols-12 group navhead ${isSticking ? 'sticking' : ''} 
      ${isSticking2 ? 'sticking2' : ''}`}>
        <div className='col-span-2 justify-center flex bitter items-center text-white text-4xl'>
          <Link href='/' className={`ml-5  ${!isSticking ? 'hidden' : 'flex'}`}>Ecoscape.</Link></div>
        <div className='col-span-8 lg:grid grid-cols-6 text justify-center'>
          {/* Hamburger navigation */}
          <Hamburger toggle={toggle} onclick={onclick} navlinks={navlinks} />
          {/* Hamburger navigation end */}
          {navlinks.map(({name,id,link})=>(
            <div key={id} className='text-md lg:text-lg xl:text-xl lg:flex justify-center items-center relative hidden'>
            <Link
              className='hover:border-b focus:border-b font-medium '
              href={link}
            >
              {name}
            </Link>
           
          </div>
          
          ))}
          
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