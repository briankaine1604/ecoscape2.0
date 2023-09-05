import React from 'react'

const StandardButton = ({content,border,bgColor}) => {
  return (
    <button className={`w-52 h-10 ${bgColor} ${border} border-black antic flex justify-center items-center text-sm hover:bg-slate-900 text-slate-900 hover:text-white`}>
        {content}
    </button>
  )
}

export default StandardButton