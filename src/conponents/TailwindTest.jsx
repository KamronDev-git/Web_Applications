import React from 'react'
import img from "../assets/img2.jpg"

const TailwindTest = () => {
  return (
    <div className='bg-blue-300 h-screen flex items-center justify-center p-4'>
        <div className='bg-white p-4 sm:p-0  rounded-md shadow-2xl sm:flex sm:items-center sm:gap-20 '>
            <div className='flex gap-4 sm:flex items-center'>
                <img className='h-10 w-10 sm:h-full sm:w-36 object-cover sm:rounded-none rounded-full'  src={img} alt="" />
                <span>Kaptue Naho</span>
            </div>
            <div className='mt-2'> 
                <p className='italic font-thin '>
                    "Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Vitae hic repudiandae non 
                    autem pariatur aperiam sed ullam eligendi 
                    doloremque nesciunt, ad tempora explicabo 
                    quaerat a facere molestiae magni blanditiis eius?"
                </p> 
                <span className='text-sm text-gray-400'>Maried to Demteli</span>
            </div>
        </div>
    </div>
  )
}

export default TailwindTest