import React from 'react'
import headshot from '../../assets/headshot.jpg'

export default function
    () {
    return (
        <div className='relative h-screen flex flex-col bg-opacity-80 w-10/12  mx-auto justify-evenly  bg-[#182126] pt-10 items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-[#657374] ml-3'>about</h3>
            <div className='flex flex-col items-center justify-center'>
                <img
                    src={headshot}

                    className=' rounded-full object-contain mt-20 mb-2 flex-shrink-0 
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

                                lg:text-xl lg:px-16 lg:pb-8 
                                xl:text-3xl
                                '> My coursework in fullstack web development has equipped me with strong foundational skills, and my knowledge in C#, JavaScript, React, and Typescript would be valuable assets to your team. My experience as a chef in a fast-paced kitchen environment has enabled me to hone my collaboration skills. Through years working with a team, I have learned how to communicate complex ideas effectively, actively lis.</p>
                </div>

            </div>
        </div>
    )
}
