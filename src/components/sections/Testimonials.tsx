const YELP_URL = 'https://www.yelp.com/biz/kao-thai-massage-cupertino-2'

function Stars() {
  return (
    <div className="flex items-center justify-center gap-1.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="22" height="22" viewBox="0 0 22 22" fill="currentColor" className="text-[#FF1A1A]" aria-hidden="true">
          <path d="M11 1.5l2.472 4.95 5.528.805-4 3.9.944 5.495L11 14.02l-4.944 2.63.944-5.495-4-3.9 5.528-.805z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-gap bg-forest-700">
      <div className="container-max section-padding">
        <div className="max-w-2xl mx-auto text-center">

          {/* Eyebrow */}
          <p className="eyebrow text-forest-200/60 mb-10 tracking-[0.25em]">
            Trusted by local clients in Cupertino
          </p>

          {/* Rating */}
          <Stars />

          <p className="font-cormorant text-7xl text-white mt-4 leading-none tracking-tight">
            5.0
          </p>
          <p className="text-forest-200/60 text-sm mt-2 tracking-wide">
            rating on Yelp
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-10">
            <div className="h-px w-16 bg-white/10" />
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1" className="text-white/20" />
              <path d="M14 8v4M14 16v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="text-white/30" />
            </svg>
            <div className="h-px w-16 bg-white/10" />
          </div>

          {/* CTA */}
          <a
            href={YELP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-white/20 px-7 py-3.5 text-white text-sm tracking-wide hover:bg-white/10 transition-colors duration-200"
          >
            <YelpLogo />
            Read our Yelp reviews
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  )
}

function YelpLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-label="Yelp" role="img">
      <path
        d="M7.16 9.29l-1.9.7c-.5.19-.75-.1-.58-.6l1.14-3.3c.17-.5.57-.52.84-.05l1.06 1.83c.28.47.05.94-.56 1.42zM9.5 10.1l-1.96-.54c-.52-.14-.62-.6-.2-.94l1.6-1.3c.43-.34.84-.13.87.48l.17 2.06c.02.61-.25.88-.48.24zM8.84 5.27L7.32 3.9c-.4-.35-.82-.18-.88.4L6.1 7.6c-.06.57.25.77.67.42l2.04-1.66c.43-.34.43-.74.03-1.09zM9.15 11.4l.65 1.97c.17.5.6.56.93.12l1.53-2.08c.33-.45.14-.83-.42-.83H9.67c-.56 0-.7.32-.52.82zM6.28 11.45L4.7 12.73c-.44.35-.38.78.13.93l2.06.6c.51.15.77-.14.6-.64l-.66-2c-.16-.5-.11-.55-.55-.17z"
        fill="#FF1A1A"
      />
    </svg>
  )
}
