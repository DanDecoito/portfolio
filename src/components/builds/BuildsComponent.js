import React from 'react'
import BuildCards from './BuildCards'

export default function BuildsComponent() {
  return (
    <div className='relative h-screen flex flex-col bg-opacity-80 w-10/12  mx-auto justify-evenly items-center bg-[#182126] pt-10'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#657374] ml-4'>Builds</h3>


      <div className='text-white w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        <BuildCards />
        <BuildCards />
        <BuildCards />
        <BuildCards />


      </div>


    </div>

  )
}
