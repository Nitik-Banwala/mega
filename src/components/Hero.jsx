import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <div className=" px-4 bg-[url('/assets/images/png/hero-bg.png')] bg-cover bg-center bg-no-repeat w-full min-h-[1004.1px] ">
                <div className='flex-row flex justify-between pr-50 max-w-[1720.1px] min-h-[1004.1px] h-full  items-center mx-auto'>
                    <div className='max-w-[920.1px] w-full mt-[78.1px]'>
                        <h1 className='max-w-[720.1px] pl-50 w-full text-[144px] font-normal text-white leading-[76%]  '>MEGA <span className='text-[#EE252B]'>MARTIANS</span></h1>
                        <p className='max-w-[731.1px] text-lg font-normal leading-[150%] text-white mt-5.25' >Created by EXcom, NFT collectable figurines on the Ethereum ecosystem. Aims to introduce a membership attainable via MEGA MARTIANS collection.</p>
                        <div className='pl-50 mt-5.25'>
                            <Image
                                src={'/assets/images/png/whitepaper.png'}
                                width={199}
                                height={122}
                                alt='paper'

                            />
                        </div>
                    </div>
                    <div >
                        <Image
                            src={'/assets/images/png/mint-now.png'}
                            width={422}
                            height={593}
                            alt='mint' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
