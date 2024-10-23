import React from 'react'
import icon from "../../assets/Services/icon.png"
import Cards from './Cards'

    const dataServices = [
        {
            id: 1,
            img:icon,
            title: "UI / UX Design",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            contentLink: "Read More",
        },
        {
            id: 2,
            img:icon,
            title: "UI / UX Design",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            contentLink: "Read More",
        },
        {
            id: 3,
            img:icon,
            title: "UI / UX Design",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            contentLink: "Read More",
        },
        {
            id: 4,
            img:icon,
            title: "UI / UX Design",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            contentLink: "Read More",
        },
        {
            id: 5,
            img:icon,
            title: "UI / UX Design",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            contentLink: "Read More",
        },
        {
            id: 6,
            img:icon,
            title: "UI / UX Design",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            contentLink: "Read More",
        },
    ];
const Services = () => {
  return (
    <div id='sercices' className='countainer mx-auto'>
        {/* Top */}
        <div className='flex flex-col gap-3 items-center'>
            <h1 className='text-indigo-600 font-bold'> SERVICES </h1>
            <h1 className='text-3xl dark:text-white'> What do I offer </h1>
            <p className='w-1/2 text-center text-gray-400'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nulla odit consequatur atque incidunt, ipsum ex iure natus animi. 
            </p>
            
        </div>
        {/* Bottom */}
        <div className='p-5 sm:p-0 flex flex-wrap mx-10 justify-center '>
            {/* Card */}
            {/* {
                dataServices.map((item)=>(
                    <div>
                    <Cards icon={icon}/>
                    </div>
                ))
            } */}
            <div className='w-full md:w-4/12 dark:text-white rounded-lg shadow-xl p-5 my-3 md:my-10 flex flex-col gap-3'>
                <img className='w-10' src={icon} alt="" />
                <h1 className='text-lg font-medium'>UI / UX Design</h1>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <a  className='text-indigo-600 font-semibold text-sm' href="#"> Read More </a>
            </div>
            <div className='w-full md:w-4/12 dark:text-white rounded-lg shadow-xl p-5 my-3 md:my-10 flex flex-col gap-3'>
                <img className='w-10' src={icon} alt="" />
                <h1 className='text-lg font-medium'>UI / UX Design</h1>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <a  className='text-indigo-600 font-semibold text-sm' href="#"> Read More </a>
            </div>
            <div className='w-full md:w-4/12 dark:text-white rounded-lg shadow-xl p-5 my-3 md:my-10 flex flex-col gap-3'>
                <img className='w-10' src={icon} alt="" />
                <h1 className='text-lg font-medium'>UI / UX Design</h1>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <a  className='text-indigo-600 font-semibold text-sm' href="#"> Read More </a>
            </div>
            <div className='w-full md:w-4/12 dark:text-white rounded-lg shadow-xl p-5 my-3 md:my-10 flex flex-col gap-3'>
                <img className='w-10' src={icon} alt="" />
                <h1 className='text-lg font-medium'>UI / UX Design</h1>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <a  className='text-indigo-600 font-semibold text-sm' href="#"> Read More </a>
            </div>
            <div className='w-full md:w-4/12 dark:text-white rounded-lg shadow-xl p-5 my-3 md:my-10 flex flex-col gap-3'>
                <img className='w-10' src={icon} alt="" />
                <h1 className='text-lg font-medium'>UI / UX Design</h1>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <a  className='text-indigo-600 font-semibold text-sm' href="#"> Read More </a>
            </div>
            <div className='w-full md:w-4/12 dark:text-white rounded-lg shadow-xl p-5 my-3 md:my-10 flex flex-col gap-3'>
                <img className='w-10' src={icon} alt="" />
                <h1 className='text-lg font-medium'>UI / UX Design</h1>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <a  className='text-indigo-600 font-semibold text-sm' href="#"> Read More </a>
            </div>
        </div>
    </div>
  )
}

export default Services