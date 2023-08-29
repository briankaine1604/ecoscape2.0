import Link from 'next/link'
import React from 'react'


const EcoButton = ({toggle}) => {
  return (
    <div>
    <Link href='/' className={`slide-in-top suspect justify-center ${!toggle ? 'flex' : 'hidden'} bitter items-center text-white text-5xl transition-left duration-700 ease-in-out `}>
    ECOSCAPE.
    </Link>
    </div>
  )
}

export default EcoButton