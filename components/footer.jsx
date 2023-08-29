import React from 'react'
import EcoButton from './UI/ecobutton'
import Link from 'next/link'
import {BiLogoFacebook,BiLogoTwitter,BiLogoLinkedinSquare,BiLogoYoutube,BiLogoPinterest,BiLogoInstagram,BiLogoTiktok} from 'react-icons/bi'
import {FiMail} from 'react-icons/fi'
import {FaSearch} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-slate-900 h-56 w-full relative'>
        <div className=''><EcoButton/></div>
       <div className='flex flex-col mt-20 lg:mt-24 text-white text-xl mx-auto'>
       <div className='flex lg:flex-row flex-col w-full sm:w-4/6 lg:justify-between mx-auto items-center'>
        <div className='flex  justify-between items-center w-full lg:w-1/2 px-3'>
        Follow EcoScape 
        <Link href='#' className='hovering2'><BiLogoFacebook/></Link>
        <Link href='#' className='hovering2'><BiLogoTwitter/></Link>
        <Link href='#' className='hovering2'><BiLogoLinkedinSquare/></Link>
        <Link href='#' className='hovering2'><BiLogoYoutube/></Link>
        <Link href='#' className='hovering2'><BiLogoPinterest/></Link>
        <Link href='#' className='hovering2'><BiLogoInstagram/></Link>
        <Link href='#' className='hovering2'><BiLogoTiktok/></Link>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center mt-3 lg:mt-0' ><Link href='#' className='w-full lg:w-3/4 flex items-center group justify-evenly'><div className=''>Suscribe to our newsletter</div><FiMail className='group-hover:hovering'/></Link></div>

       </div>
        <div className='w-full border-t absolute bottom-4 px-2 mr-4 border-gray-400  mt-10 flex text-xs justify-between pt-3'>
            <div className='flex justify-between w-full sm:w-3/4 lg:w-1/2 text-gray-400 items-center'>
            <Link href='#' className='hover:text-white'>legal term </Link>
            <Link href='#' className='hover:text-white'>Personal Data</Link>
            <Link href='#' className='hover:text-white'>Accessibilty</Link>
            <Link href='#' className='hover:text-white'>Contact</Link>
            <Link href='#' className='hover:text-white'>Personal Information</Link>
            </div>
            <div className='group'>
            <Link href='#' className='text-xl hidden sm:block'>
                <FaSearch/>
            </Link>
            </div>
            </div>
       </div>
    </div>
  )
}

export default Footer