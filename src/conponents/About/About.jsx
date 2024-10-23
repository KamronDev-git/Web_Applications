import React from 'react'
import dots from '../../assets/About/dots.png'
import portrait from '../../assets/About/portrait.png'

const About = () => {
  return (
    <div id='about' className='countainer mx-auto py-40 px-10 flex flex-col-reverse md:flex-row items-center  gap-20'>
        {/* Left */}
        <div className='relative'>
            <img className='h-1/4 wd-1/4 absolute top-0 left-0 -z-10' src={dots} alt="" />
            <div className='h-full rounded-full w-fit overflow-hidden '>
                <img className='' src={portrait} alt="" />
            </div>
        </div>
        {/* right */}
        <div className='my-auto flex flex-col gap-3'>
        <h1 className='text-indigo-600 font-bold'>ABOUT ME</h1>
        <h1 className='text-3xl font-medium dark:text-white'>Better Experience</h1>
        <h1 className='text-3xl font-medium dark:text-white'>Better Design</h1>
        <p className='text-gray-400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi officiis quibusdam odio culpa, sit doloremque tenetur iure expedita suscipit rerum repellat 
        </p>
        {/* Bar de progression */}
        <h2 className='text-gray-400 font-medium'>HTML</h2>
        <div className='w-full h-1.5 bg-gray-200 rounded-md' >
            <div className='w-full h-1.5 bg-indigo-600 rounded-md' ></div>

        </div>
        <h2 className='text-gray-400 font-medium'>Java Script</h2>
        <div className='w-full h-1.5 bg-gray-200 rounded-md' >
            <div className='w-4/6 h-1.5 bg-indigo-600 rounded-md' ></div>

        </div>
        <h2 className='text-gray-400 font-medium'>ReactJs</h2>
        <div className='w-full h-1.5 bg-gray-200 rounded-md' >
            <div className='w-5/6 h-1.5 bg-indigo-600 rounded-md ' ></div>

        </div>
        </div>
    </div>
  )
}

export default About