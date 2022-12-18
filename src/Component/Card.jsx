import React from 'react'

function Card({children}) {
  return (
    <div className='hover:scale-105 last:w-full bg-white h-auto drop-shadow-2xl rounded-lg p-6 ease-in-out duration-500'>
        {children}
    </div>
  )
}

export default Card