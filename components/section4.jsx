import React from 'react'
import StandardButton from './UI/standardbutton'
import Image from 'next/image'

const Section4 = () => {
  return (
    <div className='md:grid grid-cols-2 min-h-screen w-full'>
        <div className='bg-white flex justify-center py-20'>
          <div className='flex flex-col  w-11/12 sm:w-8/12 '>
          <div className='w-full bg-black h-[230px] relative'>
          <Image
            fill={true}
            style={{objectFit:"cover"}}
            src={`/images/empower.png`}
            alt='meadow filled with flowers'
            loading="lazy"
            className='transit'
            />
          </div>
          <div className='heading1 my-5'>Empowerment Through Support</div>
          <div className='mb-5 text-justify'>At EcoScape, we are proud to stand as a beacon of hope and support for a diverse array of causes and initiatives, each with its own unique legacy and purpose. 
             We harbor a collective of missions that strive to make the world a better place.</div>
            <StandardButton content={'Learn More'} bgColor={'bg-none'} border={'border'}/>
          </div>
        </div>
        <div className='bg-slate-100 flex justify-center items-center py-20'>
        <div className='flex flex-col w-11/12 sm:w-8/12 '>
          <div className='w-full bg-black h-[230px] relative'>
          <Image
            fill={true}
            style={{objectFit:"cover"}}
            src={`/images/gallery.png`}
            alt='meadow filled with flowers'
            loading="lazy"
            className='transit'
            />
            <div className='opac h-[230px] w-full'></div>
          </div>
          <div className='heading1 my-5'>Our Gallery</div>
          <div className='mb-5 text-justify'>Immerse Yourself in Nature's Canvas. Step into a world where beauty knows no bounds and inspiration awaits at every turn. Our "Visit Our Gallery" section is a portal to the heart of nature's artistry, a place where the exquisite meets the extraordinary.</div>
            <div className='mb-5'><StandardButton content={'Learn More'} bgColor={'bg-none'} border={'border'}/></div>
            <div><StandardButton content={'Visit our gallery'} bgColor={'bg-none'} border={'border'}/></div>
          </div>
        </div>
    </div>
  )
}

export default Section4