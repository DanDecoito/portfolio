import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"


export default function Header() {
    return (
        <header className='sticky top-0 flex items-start w-full justify-between  mx-auto z-20 pt-2 px-5 bg-[#182126] border-black shadow-xl'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 1,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.2,
                }}
                className='flex flex-row items-center'>
                <SocialIcon
                    url="https://www.linkedin.com/in/decoitodan/"
                    fgColor='gray' bgColor='transparent'
                />
                <SocialIcon
                    url="https://github.com/DanDecoito"
                    fgColor='gray' bgColor='transparent'
                />

            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 1,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.2,
                }}

                className='flex flex-row items-center text-gray-300 '>
                <SocialIcon
                    className='currsor-pointer'
                    network='email'
                    fgColor='gray' bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex mr-3'>Contact</p>
            </motion.div>
        </header>
    )
}
