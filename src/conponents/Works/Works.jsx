import React from 'react'
import item from "../../assets/Works/item.png"


const Works = () => {
  return (
    <div>
        <div id='works' className='countainer mx-auto pt-28 '>
        {/* Top */}
        <div className='flex flex-col gap-3 items-center'>
            <h1 className='text-indigo-600 font-bold'> PORTFOLIO </h1>
            <h1 className='text-3xl dark:text-white'> Works & Projects </h1>
            <p className='w-1/2 text-center text-gray-400'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nulla odit consequatur atque incidunt, ipsum ex iure natus animi. 
            </p>
            
        </div>
        {/* Bottom */}
        <div className='p-5 sm:p-0 flex flex-wrap justify-center  '>
            {/* Card */}
            {/* {
                dataServices.map((item)=>(
                    <div>
                    <Cards icon={icon}/>
                    </div>
                ))
            } */}
            <div className='w-fit md:w-5/12 lg:w-1/5 rounded-md shadow-lg hover:shadow-xl my-3 md:my-10 m-5'>
                <img src={item} alt="" />
            </div>
            <div className='w-fit md:w-5/12 lg:w-1/5 rounded-md shadow-lg hover:shadow-xl my-3 md:my-10 m-5'>
                <img src={item} alt="" />
            </div>
            <div className='w-fit md:w-5/12 lg:w-1/5 rounded-md shadow-lg hover:shadow-xl my-3 md:my-10 m-5'>
                <img src={item} alt="" />
            </div>
            <div className='w-fit md:w-5/12 lg:w-1/5 rounded-md shadow-lg hover:shadow-xl my-3 md:my-10 m-5'>
                <img src={item} alt="" />
            </div>
            <div className='w-fit md:w-5/12 lg:w-1/5 rounded-md shadow-lg hover:shadow-xl my-3 md:my-10 m-5'>
                <img src={item} alt="" />
            </div>
            <div className='w-fit md:w-5/12 lg:w-1/5 rounded-md shadow-lg hover:shadow-xl my-3 md:my-10 m-5'>
                <img src={item} alt="" />
            </div>
            <div className='w-fit md:w-5/12 lg:w-1/5 rounded-md shadow-lg hover:shadow-xl my-3 md:my-10 m-5'>
                <img src={item} alt="" />
            </div>
            <div className='w-fit md:w-5/12 lg:w-1/5 rounded-md shadow-lg hover:shadow-xl my-3 md:my-10 m-5'>
                <img src={item} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Works