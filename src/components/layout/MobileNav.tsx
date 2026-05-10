'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { BOOKING_URL } from '@/lib/services'

interface NavLink {
  href: string
  label: string
}

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  navLinks: NavLink[]
}

export default function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-sand-50 shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-sand-200">
          <div>
            <p className="font-cormorant text-2xl font-semibold tracking-wider text-sand-900">KAO</p>
            <p className="text-xs tracking-[0.2em] uppercase text-sand-500">Thai Massage</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-sand-600 hover:text-sand-900 transition-colors"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col flex-1 px-6 py-8 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-cormorant text-3xl font-light text-sand-800 py-3 border-b border-sand-100 hover:text-forest-600 hover:pl-2 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Book CTA */}
        <div className="px-6 pb-8 pt-4 border-t border-sand-200">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn-primary w-full justify-center text-base py-4"
          >
            Book Your Session
          </a>
          <p className="text-center text-xs text-sand-500 mt-4 tracking-wide">
            20540 Stevens Creek Blvd · Cupertino, CA
          </p>
        </div>
      </div>
    </>
  )
}
