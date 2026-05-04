import React from 'react'
import Image from 'next/image'
const Team = () => {
    return (
        <div>
            <div className=" bg-[url('/assets/images/png/team-bg.png')] py-[183.1px] w-full bg-center bg-cover bg-no-repeat min-h-[1091.1px]">
            <h2 className='text-[72px] text-white leading-[100%] font-normal text-center mb-12 '>Te<span className='text-[#EE252B]'>am</span></h2>
                <div className='max-w-330 mx-auto grid grid-cols-3'>
                    <Image
                        src={'/assets/images/png/ceo.png'}
                        width={424}
                        height={594}
                        alt='mint-blue' />
                    <Image
                        src={'/assets/images/png/maneger.png'}
                        width={424}
                        height={594}
                        alt='mint-blue' />
                    <Image
                        src={'/assets/images/png/manager-2.png'}
                        width={424}
                        height={594}
                        alt='mint-blue' />
                </div>
            </div>
        </div>
    )
}

export default Team
