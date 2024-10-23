import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import lightbutton from '../../assets/dartmode/moon.png'
import man from '../../assets/man.png'

const Navbar = () => {

    const [style, setStyle] = useState(false)
   
    // console.log(style);

    let handleStyle = () =>{
        setStyle(!style)
        console.log("Click: ", style);
    }
    const handleLinks = ()=>{
        setStyle(false)
    }

  return (
    <div >
        {/* The Nav Bar */}
        <nav className='w-full top-0 fixed bg-white z-10 dark:bg-slate-900'>
            <div className='mx-auto py-5 container items-center flex justify-between'>
                <div className='flex items-center gap-2'>
                    <img 
                        src={logo} 
                        alt="" 
                        className='dh-8 w-8 rounhded-xl' 
                    />
                    <span className='text-2xl font-bold text-indigo-600 dark:text-white' >Portwind.</span>
                </div>
                <ul className='hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase'>
                    <li className=' hover:text-gray-400'>
                        <a href="#">HomePage</a>
                    </li>
                    <li className=' hover:text-gray-400'>
                        <a href="#about">about me</a>
                    </li>
                    <li className=' hover:text-gray-400'>
                        <a href="#sercices">Services</a>
                    </li>
                    <li className=' hover:text-gray-400'>
                        <a href="#works">Works</a>
                    </li>
                    <li className=' hover:text-gray-400'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                {/* <img  src={lightbutton} alt="" className='w-16 hidden md:block cursor-pointer'/> */}
                <img  src={lightbutton} alt="" className='w-5 hidden md:block cursor-pointer'/>
                <div onClick={handleStyle} className='space-y-2 md:hidden cursor-pointer z-50'>
                    <div className='w-6 h-0.5 bg-black'></div>
                    <div className='w-6 h-0.5 bg-black'></div>
                    <div className='w-6 h-0.5 bg-black'></div>
                </div>
               
                <ul 
                     className={`${style  ? '' : 'hidden'} bg-indigo-900 absolute left-0 top-0 w-full p-10 space-y-10 text-white text-center rounded-b-3xl`}
                    >
                    <li>
                        <a onClick={handleStyle} href="#">HomePage</a>
                    </li>
                    <li>
                        <a onClick={handleStyle}  href="#about">about me</a>
                    </li>
                    <li>
                        <a onClick={handleStyle} href="#sercices">Services</a>
                    </li>
                    <li>
                        <a onClick={handleStyle} href="#works">Works</a>
                    </li>
                    <li>
                        <a onClick={handleStyle} href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        {/* Content Page */}
        <div className=''>
            <img 
                src={man}
                alt=""
                className='absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover '
            />
            {/* Forme Cercle */}
            <div className='hidden lg:block absolute -bottom-1/4 left-0 right-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10'></div>
            {/* Animeded Text */}
            <div className='absolute top-1/3 left-5 text-xl sm:left-5 sm:text-4xl md:left-1/6 md:text-6xl lg:left-5 xl:left-40 xl:text-7xl font-bold'>
                <span className='text-gray-600'>Freelance</span>
                <p className='text-red-500'>Developer</p>
            </div>
            {/* Presention Text  */}
            <div 
            className='hidden  lg:flex flex-col gap-5 shadow-md dark:shadow-slate-800 rounded-md absolute top-0 bottom-0 m-auto mt-24 right-10 p-6 bg-white dark:bg-slate-900 h-fit w-1/3'
            >
                <h1 className='text-4xl font-bold text-indigo-900'>I'm Demteli Emmanuel</h1>
                <p className=' text-gray-500'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas eveniet rerum sequi dolores! Tenetur placeat itaque possimus 
                </p>
                <a className='bg-indigo-600 text-white text-xl w-fit font-semibold py-2 px-3 rounded-sm' href="#contact">Hire Me</a>
            </div>
        </div>
       
    </div>
  )
}

export default Navbar 