import React from 'react'
import headshot from '../../assets/headshot.jpg'

export default function
    () {
    return (
        <div className='h-screen flex flex-col bg-opacity-80 w-10/12  mx-auto justify-evenly  bg-[#182126] pt-10'>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='ml-3 uppercase tracking-[20px] text-[#657374] mb-2'>About</h3>
                <img
                    src={headshot}

                    className=' rounded-full object-cover mt-2 mb-2 flex-shrink-0 
                                 w-24 '
                />
                <div>
                    <p className='text-white text-center text-xl font-semibold mb-4 mt-6'>Here is a little background</p>
                    <p className='px-4 leading-4 text-sm text-center text-white'> My coursework in fullstack web development has equipped me with strong foundational skills, and my knowledge in C#, JavaScript, React, and Typescript would be valuable assets to your team. My experience as a chef in a fast-paced kitchen environment has enabled me to hone my collaboration skills. Through years working with a team, I have learned how to communicate complex ideas effectively, actively listen to my peers, and adapt my work style to suit the project's requirements.</p>
                </div>

            </div>
        </div>
    )
}
