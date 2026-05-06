import React from 'react'
import { TRAIT_DATA } from '@/utils/helper'
import Image from 'next/image'
import Traitslider from './common/Traitslider'

const Trait = () => {

    return (
        <div className='-mt-1'>
            <div className="bg-[url('/assets/images/png/acerbg.png')] pt-8 md:pt-12 lg:pt-[27.1px] bg-center bg-cover bg-no-repeat w-full min-h-[600px] md:min-h-[800px] lg:min-h-[1080.1px]">
                <div className='max-w-full lg:max-w-[1617.1px] mx-auto px-4 md:px-6 lg:px-0'>
                    <h2 className='text-3xl md:text-4xl lg:text-[72px] text-white leading-[100%] mb-8 md:mb-12 lg:mb-[76.1px] font-normal text-center'>TRAIT AND <span className='text-[#EE252B]'> RARITY </span></h2>
                    <div className='flex flex-row flex-wrap justify-center md:justify-between max-w-full md:max-w-330 mx-auto gap-6 md:gap-4 lg:gap-0'>
                        {TRAIT_DATA.map((item , index) => {
                            return (
                                <div
                                key={index}
                                className='flex justify-center'>
                                    <Image
                                        src={item.label}
                                        width={217}
                                        height={156}
                                        alt='label'
                                        className=' w-[217.1px] h-auto'
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className='mt-8 md:mt-12 lg:mt-0'>
                        <Traitslider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trait
