import Link from 'next/link'
import Image from 'next/image'
import {
  BOOKING_URL,
  PHONE,
  EMAIL,
  ADDRESS,
  CITY_STATE_ZIP,
  INSTAGRAM_URL,
  BUSINESS_HOURS,
} from '@/lib/services'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/book', label: 'Book Now' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sand-900 text-sand-300">
      {/* Main footer */}
      <div className="container-max section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="Kao Thai Wellness — Home">
              <Image
                src="/logo-mark.png"
                alt="Kao Thai Wellness"
                width={586}
                height={366}
                className="h-14 w-auto brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-sand-400 text-sm leading-relaxed mt-4 max-w-xs">
              Ancient healing traditions, refined for modern life. Your sanctuary of calm in Cupertino.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="eyebrow text-sand-400 mb-5">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="eyebrow text-sand-400 mb-5">Hours</h4>
            <ul className="space-y-2">
              {BUSINESS_HOURS.map(({ day, hours }) => (
                <li key={day} className="flex items-start justify-between gap-4 text-sm">
                  <span className="text-sand-500 w-24 shrink-0">{day}</span>
                  <span className="text-sand-300 text-right">{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow text-sand-400 mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-sand-500 text-xs uppercase tracking-wider mb-1">Address</p>
                <address className="not-italic text-sand-300 leading-relaxed">
                  {ADDRESS}<br />
                  {CITY_STATE_ZIP}
                </address>
              </li>
              <li>
                <p className="text-sand-500 text-xs uppercase tracking-wider mb-1">Phone</p>
                <a href={`tel:${PHONE}`} className="text-sand-300 hover:text-white transition-colors">
                  {PHONE}
                </a>
              </li>
              <li>
                <p className="text-sand-500 text-xs uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${EMAIL}`} className="text-sand-300 hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>
            <Link
              href={BOOKING_URL}
              className="inline-block mt-6 btn-primary text-xs px-6 py-3"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sand-800">
        <div className="container-max section-padding py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sand-500 text-xs tracking-wide">
            © {currentYear} Kao Thai Wellness. All rights reserved.
          </p>
          <p className="text-sand-600 text-xs">
            Site by{' '}
            <a
              href="https://visionsf.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand-400 hover:text-white transition-colors"
            >
              VisionSF
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
