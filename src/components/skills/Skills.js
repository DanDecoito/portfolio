import React from 'react'
import {motion} from 'framer-motion'



export default function Skills({ src, percentage }) {
   
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        src={src}
        className='rounded-full border border-gray-500 object-cover w-[44px] h-[44px] p-1 filter
        group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white  rounded-full z-0'>
            <div className='flex items-center justify-center h-[44px] w-[44px]'>
                <p className='text-[8px] font-bold text-black opacity-100 '>{percentage}</p>
            </div>
        </div>
    </div>
  )
}
