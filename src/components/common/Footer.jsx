import React from 'react'
import Icons from './Icons'
import Image from 'next/image'
const Footer = () => {
  return (
    <>
      <div className='bg-[#02001F] pt-[215.1px] px-4 pb-6 -mt-1'>
        <div className='max-w-[545.1px] mx-auto flex flex-col items-center  '>
          <Image
            src={'/assets/images/png/navlogo.png'}
            width={125}
            height={125}
            alt='logo'
          />
          <h2 className='text-white text-center mt-6.5'>Cras bibendum orci sed ex condimentum blandit. Nam et vestibulum mi. Cras viverra iaculis </h2>
          <div className='flex flex-row gap-7 my-9.25'>
            <a href='' className='w-9.25 h-9.25 border border-white rounded-full flex justify-center items-center'><Icons icon={'tiweter'}/> </a>
            <a href='' className='w-9.25 h-9.25 border border-white rounded-full flex justify-center items-center'><Icons icon={'yann'}/> </a>
            <a href='' className='w-9.25 h-9.25 border border-white rounded-full flex justify-center items-center'><Icons icon={'discord'}/> </a>
          </div>
          <p className='text-white'>
            ©copyright{new Date().getFullYear()} 
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
