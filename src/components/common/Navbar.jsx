import React from 'react'
import { NAV_LINKS } from '@/utils/helper'
import Image from 'next/image'
const Navbar = () => {
    return (
        <div>
            {/* <div className='flex flex-row
 '>
                <div>
                    <Image
                    src={'/assets/images/png/logo.png'}
                    height={68}
                    width={68}
                    alt='logo'/>
                </div>
                <div> <div className="flex gap-10  p-4">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={link.path}
                            className="text-white font-bold hover:text-red-500"
                        >
                            {link.label}
                        </a>
                    ))}
                </div></div>
                <div></div>
            </div> */}
        </div>
    )
}

export default Navbar
