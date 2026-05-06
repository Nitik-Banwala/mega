"use client"
import React, { useState, useEffect } from 'react'
import { SOCIAL_LINKS } from '@/utils/helper'
import { NAV_LINKS } from '@/utils/helper'
import Image from 'next/image'
import Icons from './Icons'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
     <nav
  className={`fixed top-0 left-0 right-0 z-90 transition-all duration-300 bg-gray`}
>
        <div className="max-w-[1920.1px] mx-auto px-6 xl:px-16 2xl:px-24">
          <div className="flex  justify-between h-24.5">

            {/* Logo */}
            <Link href="/" className="shrink-0 mt-3.75">
              <Image
                src={'/assets/images/png/logo.png'}
                width={68}
                height={68}
                alt='logo'
              />
            </Link>

   
            <div className="hidden lg:flex gap-8 mt-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href=""
                  onClick={() => setActiveLink(link.label)}
                  className={`uppercase font-normal w-fit  ${
                    activeLink === link.label ? 'text-red-500' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex gap-4">
              {SOCIAL_LINKS.map((s, i) => (
                <Link
                  key={i}
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex cursor-pointer items-center mt-7.5 justify-center rounded-full t bg-white"
                >
                  <Icons icon={s.icon}/>
                </Link>
              ))}

              <Link href="/whitepaper" className="px-4 py-1  text-white">
              <Image
              src={'/assets/images/png/whitepaper.png'}
              width={169}
              height={89}
              alt='paper'
              />
              </Link>
            </div>

            <button
              className="lg:hidden relative w-8 h-8 mt-9 flex flex-col justify-center items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className="block w-6 h-[2px] bg-white transition-all duration-300"
                style={{
                  transform: isOpen ? 'rotate(45deg) translateY(6px)' : 'none',
                }}
              />
              <span
                className="block w-6 h-[2px] bg-white my-1 transition-all duration-300"
                style={{
                  opacity: isOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-[2px] bg-white transition-all duration-300"
                style={{
                  transform: isOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
                }}
              />
            </button>

          </div>
        </div>
      </nav>


      <div
        className="fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center gap-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          background: 'black',
          transform: isOpen ? 'translateX(0%)' : 'translateX(100%)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
        }}
      >


        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.label}
            href=""
            onClick={() => setIsOpen(false)}
            className="text-2xl text-white uppercase  hover:text-red-500"
            style={{
              transform: isOpen ? 'translateX(0)' : 'translateX(40px)',
              opacity: isOpen ? 1 : 0,
              transition: `all 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s`,
            }}
          >
            {link.label}
          </Link>
        ))}


        <div className="flex gap-4">
          {SOCIAL_LINKS.map((s, i) => (
            <Link
              key={i}
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex items-center justify-center border rounded-full"
              style={{
                transform: isOpen ? 'scale(1)' : 'scale(0.6)',
                opacity: isOpen ? 1 : 0,
                transition: `all 0.4s cubic-bezier(0.22,1,0.36,1) ${(NAV_LINKS.length + i) * 0.08}s`,
              }}
            >
              <Icons icon={s.icon}/>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href="/whitepaper" className="border px-6 py-2">
          Whitepaper
        </Link>

      </div>
    </>
  )
}