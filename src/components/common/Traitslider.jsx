"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { CARDS } from '@/utils/helper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

export default function TraitSlider() {
  const [mounted, setMounted] = useState(false)
  const [SwiperComponents, setSwiperComponents] = useState(null)

  useEffect(() => {
    // Load swiper only on client
    const loadSwiper = async () => {
      const swiperReact = await import('swiper/react')
      const swiperModules = await import('swiper/modules')

      setSwiperComponents({
        Swiper: swiperReact.Swiper,
        SwiperSlide: swiperReact.SwiperSlide,
        Navigation: swiperModules.Navigation,
        EffectCoverflow: swiperModules.EffectCoverflow,
      })
    }

    loadSwiper()
    setMounted(true)
  }, [])

  if (!mounted || !SwiperComponents) return null

  const { Swiper, SwiperSlide, Navigation, EffectCoverflow } = SwiperComponents

  const loopCards =
    CARDS.length < 6 ? [...CARDS, ...CARDS, ...CARDS] : CARDS

  return (
    <div className="relative w-full max-w-[1617.1px] mx-auto overflow-x-hidden overflow-y-visible">
      
      <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-30 cursor-pointer">
        <Image
          src="/assets/images/png/prev.png"
          width={124}
          height={85}
          alt="prev"
        />
      </button>

      <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-30 cursor-pointer">
        <Image
          src="/assets/images/png/next.png"
          width={124}
          height={85}
          alt="next"
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
        slidesPerView={2.9}
        loop={true}
        loopedSlides={loopCards.length}
        speed={800}
        coverflowEffect={{
          rotate: 0,
          stretch: -40,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        className="characterSwiper cursor-pointer py-10! max-w-330 overflow-hidden!"
      >
        {loopCards.map((card, index) => (
          <SwiperSlide key={`${card.id}-${index}`}>
            {({ isActive }) => (
              <div className="flex justify-center items-center">
                <div
                  className="relative overflow-hidden transition-all duration-500"
                  style={{
                    width: 463,
                    height: 648,
                    boxShadow: isActive
                      ? '0 0 24px rgba(212,160,0,0.65), inset 0 0 12px rgba(255,200,0,0.1)'
                      : '0 0 14px rgba(0,0,0,0.4)',
                    background: 'linear-gradient(160deg,#e87020,#883300)',
                  }}
                >
                  {isActive && (
                    <>
                      <span className="absolute top-2 left-2 w-7 h-7 border-t-[3px] border-l-[3px] border-whity rounded-tl z-10" />
                      <span className="absolute top-2 right-2 w-7 h-7 border-t-[3px] border-r-[3px] border-whity rounded-tr z-10" />
                      <span className="absolute bottom-2 left-2 w-7 h-7 border-b-[3px] border-l-[3px] border-whity rounded-bl z-10" />
                      <span className="absolute bottom-2 right-2 w-7 h-7 border-b-[3px] border-r-[3px] border-whity rounded-br z-10" />
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
  )
}