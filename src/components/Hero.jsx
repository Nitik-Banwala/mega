import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <div className="px-4 md:px-6 lg:px-4 bg-[url('/assets/images/png/hero-bg.png')] bg-cover bg-center bg-no-repeat w-full min-h-[600px] md:min-h-[800px] lg:min-h-[1004.1px]">
                <div className='flex flex-col min-[1500px]:flex-row pt-30 lg:justify-between lg:pr-50 max-w-full lg:max-w-[1720.1px] min-h-[600px] md:min-h-[800px] lg:min-h-[1004.1px] h-full lg:items-center mx-auto lg:gap-0 gap-8'>
                    <div className='max-w-full lg:max-w-[920.1px] w-full mt-8 md:mt-16 lg:mt-[78.1px]'>
                        <h1 className='max-w-full lg:max-w-[720.1px] pl-0 md:pl-0 lg:pl-50 w-full text-4xl md:text-6xl lg:text-[144px] font-normal text-white leading-[1.2] md:leading-[1.3] lg:leading-[76%]'>MEGA <span className='text-[#EE252B]'>MARTIANS</span></h1>
                        <p className='max-w-full lg:max-w-[731.1px] text-base md:text-lg lg:text-lg font-normal leading-[150%] text-white mt-4 md:mt-6 lg:mt-5.25'>Created by EXcom, NFT collectable figurines on the Ethereum ecosystem. Aims to introduce a membership attainable via MEGA MARTIANS collection.</p>
                        <div className='pl-0 md:pl-0 lg:pl-50 mt-6 md:mt-8 lg:mt-5.25'>
                            <Image
                                src={'/assets/images/png/whitepaper.png'}
                                width={199}
                                height={122}
                                alt='paper'
                                className='w-auto h-auto'
                            />
                        </div>
                    </div>
                    <div className='flex justify-center lg:justify-end '>
                        <Image
                            src={'/assets/images/png/mint-now.png'}
                            width={422}
                            height={593}
                            alt='mint'
                            className='w-[422.1px]  h-auto'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
