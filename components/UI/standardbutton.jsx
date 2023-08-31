import React from 'react'

const StandardButton = ({content}) => {
  return (
    <button className='w-48 h-8 bg-white antic flex justify-center items-center text-sm hover:bg-slate-900 text-slate-900 hover:text-white'>
        {content}
    </button>
  )
}

export default StandardButton