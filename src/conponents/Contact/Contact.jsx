import React from 'react'

function Contact() {
  return (
    <div id='contact' className='container mx-auto py-28'>
        {/* Top */}
        <div className='flex flex-col gap-3 items-center'>
            <h1 className='text-indigo-600 font-bold'> CONTACT </h1>
            <h1 className='text-3xl dark:text-white'> Have a Question ?</h1>
            <p className='w-1/2 text-center text-gray-400'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
            
        </div>
        {/* Bottom */}
        <form className='mt-5 p-8 flex flex-col items-center gap-5 '>
            <input className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white ' type="text" placeholder='Name Sureame' />
            <input className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white' type="email" placeholder='Email' />
            <textarea className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white' cols='30' rows='10' placeholder='Message ...'></textarea>
            <button className='w-1/2 bg-indigo-600 hover:bg-indigo-600/90 font-semibold py-2 px-3 text-white rounded-md text-xl cursor-pointer'>Submit</button>
        </form>
    </div>
  )
}

export default Contact