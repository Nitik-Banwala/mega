import Image from 'next/image'
import React from 'react'

const Utility = () => {
    return (
        <div className='bg-[#02001F] px-4 -mt-1 pb-[265.1px]'>
            <div className=' flex flex-col text-center items-center md:text-start md:items-start md:flex-row gap-6 max-w-330 mx-auto pt-32.5 '>
                <div> 
                    <Image 
                    src={'/assets/images/png/blue-mint.png'}
                    width={312}
                    height={436}
                    alt='mint-blue'/>
                </div>
                <div className='mt-20'>
                    <Image 
                    src={'/assets/images/png/gold-mint.png'}
                    width={312}
                    height={436}
                    alt='mint-gold'/>
                </div>
                <div className='mt-20'>
                    <h2 className='text-[72px] text-white leading-[100%] font-normal '>UTI<span className='text-[#EE252B]'>LITY</span></h2>
                    <p className='text-white max-w-[648.1px] mt-4.5'>Quisque vitae venenatis augue. Aenean dignissim tortor eget gravida imperdiet. Proin facilisis ultrices neque, quis dictum dui feugiat non. Morbi sapien leo, pharetra et orci sed, congue vehicula velit. Fusce id nisi ut ligula porta malesuada at non ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec volutpat porta rhoncus. Fusce at lacus accumsan, fermentum orci in, sagittis nisi. In quis congue sem. Maecenas finibus aliquet ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sollicitudin, augue fermentum pretium pretium, eros diam cursus ex,</p>
                </div>
            </div>
        </div>
    )
}

export default Utility
