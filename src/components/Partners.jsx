import React from 'react'
import { PARTNERS } from '@/utils/helper'
import Image from 'next/image'
const Partners = () => {
    return (
        <div className='bg-dark -mt-1 pt-[280.1px] pb-[140.1px]'>
            <h2 className='text-custom-7xl text-white leading-100 font-normal text-center mb-12 '>PART<span className='text-blacky '>NERS</span></h2>
            <div className='flex flex-row flex-wrap justify-center px-4 max-w-330 mx-auto md:justify-between'>
                {PARTNERS.map((item, index) => {
                    return (
                        <div key={index}>
                            <Image
                                src={item.label}
                                width={312}
                                height={224}
                                alt='partners'
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Partners
