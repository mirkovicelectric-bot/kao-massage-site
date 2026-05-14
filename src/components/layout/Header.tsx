'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const onLightBg = isScrolled || !isHomePage
  const navTextColor =
    isScrolled || !isHomePage ? 'text-sand-700 hover:text-sand-900' : 'text-white/80 hover:text-white'
  const activeNavColor =
    isScrolled || !isHomePage ? 'text-forest-600' : 'text-white'
  const iconColor =
    isScrolled || !isHomePage ? 'bg-sand-900' : 'bg-white'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-sand-50/95 backdrop-blur-md border-b border-sand-200 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-max section-padding">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group" aria-label="Kao Thai Wellness — Home">
              <Image
                src="/logo-horizontal.png"
                alt="Kao Thai Wellness"
                width={1536}
                height={1024}
                priority
                className={`h-24 w-auto transition-all duration-300 ${onLightBg ? '' : 'brightness-0 invert'}`}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors duration-200 ${
                    pathname === link.href ? activeNavColor : navTextColor
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/book"
                className="btn-primary py-2.5 px-6 text-xs"
              >
                Book Now
              </a>
            </nav>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileNavOpen(true)}
              className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
              aria-label="Open navigation menu"
            >
              <span className={`block h-px w-6 transition-colors duration-300 ${iconColor}`} />
              <span className={`block h-px w-4 transition-colors duration-300 ${iconColor}`} />
              <span className={`block h-px w-6 transition-colors duration-300 ${iconColor}`} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        navLinks={navLinks}
      />
    </>
  )
}
