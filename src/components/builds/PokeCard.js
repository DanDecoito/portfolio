import React from 'react'
import chef from '../../assets/chef.png'
import { motion } from 'framer-motion'
import tailwind from '../../assets/tailwind.png'

export default function PokeCard() {
    return (
        <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 shadow-2xl rounded-md border-black border-2 w-56 h-96 sm:w-80 lg:h-[500px] lg:w-[400px] p-4 snap-center
                            hover:opacity-100 hover:bg-[#182126] cursor-pointer  overflow-hidden
                            hover:border-[#657374] transition duration-300 ease-in-out
                            '>
            <img
                src={chef} alt='placeholder'
                className='w-20 h-20 object-cover justify-items-center mx-auto'
            />
            <div className='md:px-10'>
                <h4 className='text-[#657374] tracking-[2px] text-center uppercase font-semibold'>PokeAPI</h4>

                <div className='flex space-x-2 my-2'>
                    <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='react'
                        className='h-6 w-6 rounded-full' />
                    <img src='https://img.icons8.com/color/96/000000/typescript.png' alt='react'
                        className='h-6 w-6 rounded-full' />
                    <img src={tailwind} alt='react'
                        className='h-6 w-6 rounded-full' />
                    <img src='https://img.icons8.com/color/96/000000/azure-1.png' alt='react'
                        className='h-6 w-6 rounded-full' />
                </div>
                {/* <ul className='list-disc'>
                    <li>summary points</li>
                    <li>summary points</li>
                    <li>summary points</li>
                </ul> */}
            </div>
            <p className='text-[#657374] mx-2 sm:px-3 tracking-[1px] text-center  overflow-y-auto lg:text-lg '>This project involves using JavaScript to fetch data from the PokéAPI, which provides information on Pokémon. The fetched data is then saved to local storage using the localStorage API for later use. This enables the project to efficiently retrieve and display previously fetched data</p>

        </article>
    )
}
