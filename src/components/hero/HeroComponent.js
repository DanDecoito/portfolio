import React from 'react'
import BackgroundComponent from './BackgroundComponent'
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

export default function HeroComponent() {
    const [text, count] = useTypewriter({
        words: ['Hello, World', 'My name is Daniel Decoito', 'I am a Full Stack Developer'],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen justify-center flex flex-col bg-opacity-80 w-10/12 max-w-1xl lg:max-w-6xl mx-auto  bg-[#182126] pt-10'>
            <BackgroundComponent />
            
             <h2 className='text-[#657374] tracking-[15px] uppercase text-sm md:text-2xl mx-auto mt-16 sm:mt-10 text-center'>Software Developer</h2>
            <div className=' text-center sm:text-xl md:text-5xl ml-2 p-6 text-white'>{text}<span className='animate-pulse'>|</span></div>
            
            
            <div className='mx-auto grid grid-cols-3 gap-2'>
              
                <a href='#about'>
                    <button
                        className='text-xs sm:text-lg text-[#657374] px-4 sm:px-6 py-2 border  border-black uppercase rounded-full tracking-widest transition-all hover:border-white/40 hovert:text-white/40'>About
                    </button>
                </a>
                <a href='#skills'>
                    <button
                        className='text-xs sm:text-lg text-[#657374] px-4 sm:px-6 py-2 border  border-black uppercase rounded-full tracking-widest transition-all hover:border-white/40 hovert:text-white/40'>Skills
                    </button>
                </a>
                <a href='#builds'>
                    <button
                        className='text-xs sm:text-lg text-[#657374] px-4 sm:px-6 py-2 border  border-black uppercase rounded-full tracking-widest transition-all hover:border-white/40 hovert:text-white/40'>Builds
                    </button>
                </a>







            </div>

        </div>

    )
}
