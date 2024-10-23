import React from 'react'

function Cards({icon}) {
  return (
    // <iv>
        <div className='w-full md:w-5/12 rounded-lg shadow-xl p-5 flex flex-col gap-3'>
                <img className='w-10' src={icon} alt="" />
                <h1 className='text-lg font-medium'>UI / UX Design</h1>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <a  className='text-indigo-600 font-semibold text-sm' href="#"> Read More </a>
            </div>
    // </iv>
  )
}

export default Cards