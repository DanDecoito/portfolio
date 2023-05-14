import React from 'react'
import headshot from '../../assets/headshot.jpg'

export default function
    () {
    return (
        <div className='relative h-screen flex flex-col bg-opacity-80 w-10/12  mx-auto justify-center  bg-[#182126] pt-10 items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-[#657374] ml-3'>about</h3>
            <div className='flex flex-col items-center justify-center'>
                <img
                    src={headshot}

                    className=' rounded-full object-cover mb-2 flex-shrink-0  sm:mt-10
                                w-24
                                sm:w-[220px] sm:h-[220px] sm:rounded-2xl
                                md:w-[280px] md:h-[280px]
                                lg:w-[340px] lg:h-[340px] 
                                 '
                />
                <div>
                    <p className='text-white text-center text-xl font-semibold mb-4 mt-4
                                    sm:mt-5 lg:text-3xl'>Here is a little background</p>
                    <p className='px-4 text-sm text-center text-white
                                sm:text- sm:px-24
                                md:text-sm

                                lg:text-xl lg:px-[15%] lg:pb-8 
                                
                                '>As a FullStack Developer, I am passionate about coding and love to learn. With a focus on project-oriented development, I strive to continuously improve my skills and deliver high-quality solutions. I am a detail-oriented and analytical problem solver with experience in multiple languages, including React, TypeScript, and mySQL. I am driven, committed, and excited to advance my career as a software engineer.</p>
                </div>

            </div>
        </div>
    )
}
