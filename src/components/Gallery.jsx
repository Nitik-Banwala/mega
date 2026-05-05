"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCoverflow } from 'swiper/modules'
import { GALLERY } from '@/utils/helper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

export default function Gallery() {
    const [slidesPerView, setSlidesPerView] = useState(2.9)
    const loopCards = GALLERY.length < 6 ? [...GALLERY, ...GALLERY, ...GALLERY] : GALLERY

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesPerView(1.2)
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(1.8)
            } else {
                setSlidesPerView(2.9)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className='bg-[#02011D] -mt-1'>
            <div className="relative w-full max-w-full lg:max-w-[1617.1px] mx-auto py-12 md:py-16 lg:py-20 overflow-x-hidden overflow-y-visible px-4 md:px-6 lg:px-0">
                <h2 className='text-4xl md:text-5xl lg:text-[72px] text-white leading-[100%] font-normal text-center mb-8 md:mb-10 lg:mb-12'>GALL<span className='text-[#EE252B]'>ERY</span></h2>
                <button className="prev-btn absolute left-0 md:left-2 lg:left-0 top-1/2 -translate-y-1/2 z-30 cursor-pointer">
                    <Image
                        src="/assets/images/png/prev.png"
                        width={124}
                        height={85}
                        alt="prev"
                        className='w-16 h-12 md:w-20 md:h-16 lg:w-[124px] lg:h-[85px]'
                    />
                </button>
                <button className="next-btn absolute right-0 md:right-2 lg:right-0 top-1/2 -translate-y-1/2 z-30 cursor-pointer">
                    <Image
                        src="/assets/images/png/next.png"
                        width={124}
                        height={85}
                        alt="next"
                        className='w-16 h-12 md:w-20 md:h-16 lg:w-[124px] lg:h-[85px]'
                    />
                </button>

                <Swiper
                    modules={[Navigation, EffectCoverflow]}
                    navigation={{
                        nextEl: '.next-btn',
                        prevEl: '.prev-btn',
                    }}
                    effect="coverflow"
                    centeredSlides={true}
                    slidesPerView={slidesPerView}
                    loop={true}
                    loopedSlides={loopCards.length}
                    speed={800}
                    pointerCursor={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: -40,
                        depth: 100,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    className="characterSwiper max-w-330 overflow-hidden!"
                >
                    {loopCards.map((card, index) => (
                        <SwiperSlide key={`${card.id}-${index}`}>
                            {({ isActive }) => (
                                <div className="flex justify-center items-center">
                                    <div
                                        className="relative overflow-hidden transition-all duration-500"
                                        style={{
                                            width: window.innerWidth < 768 ? 280 : window.innerWidth < 1024 ? 350 : 463,
                                            height: window.innerWidth < 768 ? 393 : window.innerWidth < 1024 ? 490 : 648,
                                            border: isActive
                                                ? '3px solid #d4a000'
                                                : '2px solid rgba(255,255,255,0.15)',
                                            background: 'linear-gradient(160deg,#e87020,#883300)',
                                        }}
                                    >
                                        {isActive && (
                                            <>
                                                <span className="absolute top-2 left-2 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 border-t-[3px] border-l-[3px] border-[#d4a000] rounded-tl z-10" />
                                                <span className="absolute top-2 right-2 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 border-t-[3px] border-r-[3px] border-[#d4a000] rounded-tr z-10" />
                                                <span className="absolute bottom-2 left-2 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 border-b-[3px] border-l-[3px] border-[#d4a000] rounded-bl z-10" />
                                                <span className="absolute bottom-2 right-2 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 border-b-[3px] border-r-[3px] border-[#d4a000] rounded-br z-10" />
                                            </>
                                        )}

                                        <Image
                                            src={card.label}
                                            alt={`card-${card.id}`}
                                            width={369}
                                            height={525}
                                            className="object-contain w-full h-full p-2"
                                        />
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}