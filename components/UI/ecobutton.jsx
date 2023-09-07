import Link from 'next/link'
import React from 'react'


const EcoButton = ({toggle}) => {
  return (
    <div className='w-full flex justify-center'>
    <Link href='/' className={`slide-in-top suspect w-fit justify-center ${!toggle ? 'flex' : 'hidden'} bitter items-center text-white text-5xl transition-left duration-700 ease-in-out `}>
    ECOSCAPE.
    </Link>
    </div>
  )
}

export default EcoButton