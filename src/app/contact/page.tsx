import type { Metadata } from 'next'
import Image from 'next/image'
import {
  ADDRESS,
  CITY_STATE_ZIP,
  PHONE,
  EMAIL,
  BUSINESS_HOURS,
  INSTAGRAM_URL,
} from '@/lib/services'
import MapSection from '@/components/sections/MapSection'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Kao Thai Massage in Cupertino, CA. Find our address, hours, phone, email, and directions. Book online or contact us directly.',
  alternates: {
    canonical: 'https://kaomassage.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 bg-sand-100 border-b border-sand-200">
        <div className="container-max section-padding text-center">
          <p className="eyebrow text-forest-600 mb-4">Get In Touch</p>
          <h1 className="heading-lg text-sand-900 mb-4">Contact Us</h1>
          <p className="text-sand-500 text-lg font-light max-w-lg mx-auto">
            We&apos;d love to hear from you. Stop in, call, or reach out by email.
          </p>
        </div>
      </section>

      {/* Contact details */}
      <section className="section-gap bg-sand-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Visit */}
            <div className="bg-white border border-sand-200 p-8">
              <div className="text-gold-500 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" />
                  <circle cx="12" cy="9" r="3" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-sand-900 mb-2">Visit</h3>
              <address className="not-italic text-sand-600 text-sm leading-relaxed">
                {ADDRESS}<br />
                {CITY_STATE_ZIP}
              </address>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS + ', ' + CITY_STATE_ZIP)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-forest-600 text-sm hover:text-forest-700 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Call / Email */}
            <div className="bg-white border border-sand-200 p-8">
              <div className="text-gold-500 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18C.01.61.49.01 1.09.01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L5.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-sand-900 mb-2">Call or Email</h3>
              <a
                href={`tel:${PHONE}`}
                className="block text-sand-600 text-sm hover:text-forest-600 transition-colors mb-2"
              >
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="block text-sand-600 text-sm hover:text-forest-600 transition-colors"
              >
                {EMAIL}
              </a>
            </div>

            {/* Social / Book */}
            <div className="bg-white border border-sand-200 p-8">
              <div className="text-gold-500 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-sand-900 mb-2">Follow Along</h3>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sand-600 text-sm hover:text-forest-600 transition-colors mb-4"
              >
                @kaothaimassage
              </a>
              <a
                href="/book"
                className="btn-primary text-xs px-5 py-2.5"
              >
                Book Online
              </a>
            </div>
          </div>

          {/* Studio location photo */}
          <div className="max-w-5xl mx-auto mt-12 relative h-56 sm:h-72 overflow-hidden">
            <Image
              src="/building-sola.jpeg"
              alt="Sola Salon Studios building at 20540 Stevens Creek Blvd, Cupertino — home of Kao Thai Massage"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-5 left-6">
              <p className="text-white/90 text-sm font-medium tracking-wide">Sola Salon Studios · Studio 26</p>
              <p className="text-white/60 text-xs mt-0.5">20540 Stevens Creek Blvd, Cupertino</p>
            </div>
          </div>

          {/* Hours */}
          <div className="max-w-lg mx-auto mt-14">
            <div className="bg-white border border-sand-200 p-8">
              <h3 className="font-cormorant text-2xl text-sand-900 mb-6">Business Hours</h3>
              <ul className="space-y-3">
                {BUSINESS_HOURS.map(({ day, hours }) => (
                  <li
                    key={day}
                    className="flex items-center justify-between text-sm border-b border-sand-50 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sand-500">{day}</span>
                    <span className="text-sand-800 font-medium">{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Direct booking prompt */}
          <div className="text-center mt-14">
            <p className="text-sand-600 mb-4 text-sm">
              Ready to book? Submit a request and we&apos;ll confirm your session.
            </p>
            <a
              href="/book"
              className="btn-primary py-4 px-10"
            >
              Book Your Session
            </a>
          </div>
        </div>
      </section>

      <MapSection />
    </>
  )
}
