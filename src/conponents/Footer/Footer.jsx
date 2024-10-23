import React from 'react'
import logo from '../../assets/Footer/logo.png'
import facebook from '../../assets/Footer/facebook.png'
import instagram from '../../assets/Footer/instagram.png'
import linkedin from '../../assets/Footer/linkedin.png'
import twitter from '../../assets/Footer/twitter.png'

function Footer() {
  return (
    <div>
        <div className='w-full  bg-gray-800 '>
            <div className='mx-auto py-5 container items-center flex justify-between'>
                <div className='flex items-center gap-2'>
                    <img 
                        src={logo} 
                        alt="" 
                        className=' w-8 ' 
                    />
                    <span className='text-2xl font-bold text-white'>Portwind.</span>
                </div>
               <span className='hidden md:block text-white fontmedium'>Copyright 2024 Portwind. Design with by Kamron Dev </span>
              <div className='flex gap-2'>
                <img className='w-4 cursor-pointer' src={facebook} alt="" />  
                <img className='w-4 cursor-pointer' src={instagram} alt="" />  
                <img className='w-4 cursor-pointer' src={twitter} alt="" />  
                <img className='w-4 cursor-pointer' src={linkedin} alt="" />  
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer