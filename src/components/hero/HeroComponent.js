import React from 'react'
import BackgroundComponent from './BackgroundComponent'
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

export default function HeroComponent() {
    const [text, count] = useTypewriter({
        words: ['Hello, World!', 'Thank you for stopping by', 'My name is Daniel', 'I am a full stack developer'],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen justify-center flex flex-col bg-opacity-80 w-10/12 max-w-1xl lg:max-w-6xl mx-auto  bg-[#182126] pt-10'>
            <BackgroundComponent />

            <h2 className='text-[#657374] tracking-[15px] uppercase text-center ml-3 mt-8
                            md:text-2xl  sm:mt-10 lg:mt-12'>Software Developer</h2>
            <div className=' text-center text-2xl sm:text-2xl md:text-4xl ml-2 p-6 text-white h-20 my-6'>{text}<span className='animate-pulse'>|</span></div>


            <div className='mx-auto grid grid-cols-3 gap-2 '>

                <a href='#about'>
                    <button
                        className='text-xs sm:text-lg text-[#657374] px-4 uppercase rounded-xl tracking-widest transition-all
                        sm:px-6 py-2   
                        
                        hover:border-[#657374]/40 hover:text-white/ hover:bg-cyan-900/40'
                    >About
                    </button>
                </a>
                <a href='#skills'>
                    <button
                        className='text-xs sm:text-lg text-[#657374] px-4 uppercase rounded-xl tracking-widest transition-all
                        sm:px-6 py-2   
                        
                        hover:border-[#657374]/40 hover:text-white/ hover:bg-cyan-900/40'
                    >skills
                    </button>
                </a>               
                 <a href='#builds'>
                    <button
                        className='text-xs sm:text-lg text-[#657374] px-4 uppercase rounded-xl tracking-widest transition-all
                        sm:px-6 py-2     
                        hover:border-[#657374]/40 hover:text-white/ hover:bg-cyan-900/40'
                    >Builds
                    </button>
                </a>







            </div>

        </div>

    )
}
