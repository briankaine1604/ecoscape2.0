"use client"
import Link from 'next/link'
import React from 'react'
import {CgClose} from 'react-icons/cg'


const Hamburger = ({toggle,onclick,navlinks}) => {
  return (
    <div className='lg:hidden'>
        <button
            className={`h-10 w-10  mr-5 flex-col flex justify-center transition-transform duration-700 ease-in-out transform 
            ${toggle ? 'translate-x-10' : '-translate-x-2'}`}
            onClick={onclick}
          >
            <div className='h-1 w-10 bg-white'></div>
            <div className='h-1 w-10 bg-white my-2'></div>
            <div className='h-1 w-10 bg-white'></div>
          </button>
            {toggle && (
              <div className={`slide-in-bottom w-full h-screen bg-slate-900 fixed z-50 top-0 left-0 pt-5 font-bold trans transition ease-in-out delay-700 duration-1000 overflow-hidden `}>
                <button onClick={onclick} className='text-4xl  absolute right-0 text-white'><CgClose /></button>
                {navlinks.map(({name,id,link})=>(
            <div key={id} className='ml-5 text-xl flex-col items-center mt-10 '>
            <Link
              className=' hover:text-slate-400 focus:text-slate-400 hover:scale-y-110 '
              href={link}
              onClick={onclick}
            >
              {name}
            </Link>
           
          </div>
          
          ))}
              </div>
            )}
          
    </div>
  )
}

export default Hamburger   