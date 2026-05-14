import { ADDRESS, CITY_STATE_ZIP, PHONE, EMAIL, BUSINESS_HOURS } from '@/lib/services'

export default function MapSection() {
  const mapsUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.2!2d-122.0372!3d37.3228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5987e1f4bd5%3A0x0!2s20540+Stevens+Creek+Blvd%2C+Cupertino%2C+CA+95014!5e0!3m2!1sen!2sus!4v1700000000000'

  return (
    <section className="bg-sand-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Map */}
        <div className="h-72 lg:h-auto min-h-[420px] relative">
          <iframe
            title="Kao Thai Wellness location"
            src={mapsUrl}
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Info */}
        <div className="px-8 py-14 lg:px-14 lg:py-16 bg-white flex flex-col justify-center">
          <p className="eyebrow text-forest-600 mb-4">Find Us</p>
          <h2 className="heading-sm text-sand-900 mb-8">
            Visit our Cupertino studio
          </h2>

          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="shrink-0 mt-0.5 text-gold-500">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 2C7.239 2 5 4.239 5 7C5 11.5 10 18 10 18C10 18 15 11.5 15 7C15 4.239 12.761 2 10 2Z" />
                  <circle cx="10" cy="7" r="2" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-sand-500 uppercase tracking-wider mb-1">Address</p>
                <address className="not-italic text-sand-800 leading-relaxed">
                  {ADDRESS}<br />{CITY_STATE_ZIP}
                </address>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS + ', ' + CITY_STATE_ZIP)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-600 text-sm hover:text-forest-700 transition-colors mt-1 inline-block"
                >
                  Get directions →
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-4">
              <div className="shrink-0 mt-0.5 text-gold-500">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M18 6l-8 5-8-5" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-sand-500 uppercase tracking-wider mb-1">Contact</p>
                <a href={`tel:${PHONE}`} className="block text-sand-800 hover:text-forest-600 transition-colors">{PHONE}</a>
                <a href={`mailto:${EMAIL}`} className="block text-sand-800 hover:text-forest-600 transition-colors">{EMAIL}</a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="shrink-0 mt-0.5 text-gold-500">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10" cy="10" r="8" />
                  <path d="M10 6v4l2.5 2.5" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-sand-500 uppercase tracking-wider mb-2">Hours</p>
                <ul className="space-y-1">
                  {BUSINESS_HOURS.map(({ day, hours }) => (
                    <li key={day} className="flex gap-4 text-sm">
                      <span className="text-sand-500 w-20 shrink-0">{day}</span>
                      <span className="text-sand-800">{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
