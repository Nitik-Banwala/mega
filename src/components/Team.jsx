import React from 'react'
import Image from 'next/image'
const Team = () => {
    return (
        <div className='-mt-1'>
            <div className="bg-[url('/assets/images/png/teambg.png')] py-16 md:py-24 px-4 lg:py-[183.1px] w-full bg-center bg-cover bg-no-repeat min-h-[600px] md:min-h-[800px] lg:min-h-[1091.1px]">
                <h2 className='text-4xl md:text-5xl lg:text-[72px] text-white leading-[100%] font-normal text-center mb-8 md:mb-10 lg:mb-12'>TE<span className='text-[#EE252B]'>AM</span></h2>
                <div className='max-w-full lg:max-w-330 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 md:px-6 lg:px-0'>
                    <div className='flex justify-center'>
                        <Image
                            src={'/assets/images/png/ceo.png'}
                            width={424}
                            height={594}
                            alt='ceo'
                            className='w-full max-w-xs md:max-w-sm lg:max-w-none h-auto'
                        />
                    </div>
                    <div className='flex justify-center'>
                        <Image
                            src={'/assets/images/png/maneger.png'}
                            width={424}
                            height={594}
                            alt='manager'
                            className='w-full max-w-xs md:max-w-sm lg:max-w-none h-auto'
                        />
                    </div>
                    <div className='flex justify-center'>
                        <Image
                            src={'/assets/images/png/manager2.png'}
                            width={424}
                            height={594}
                            alt='manager-2'
                            className='w-full max-w-xs md:max-w-sm lg:max-w-none h-auto'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
