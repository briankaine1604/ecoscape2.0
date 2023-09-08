"use client"
import Image from 'next/image'
import React from 'react'
import HeaderText from './headerText'


const HeaderBackground = ({showtext= true, showimage= true} ) => {

  return (
    <>
    
   <div className='suspect2'>
   {showimage &&
    <Image
    fill={true}
    style={{objectFit:"cover"}}
    src={`/images/eco2.jpg`}
    alt='green trees in a forest'
    loading="lazy"
    
    />  }
  </div>
  
      <div className='bg-slate-900 w-full h-screen absolute justify-center top-0 items-center flex bg-opacity-40 z-20 text-white uppercase'>
      {showtext && <HeaderText/>}
        </div>
    </>
  )
}

export default HeaderBackground