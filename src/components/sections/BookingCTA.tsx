import { BOOKING_URL } from '@/lib/services'

export default function BookingCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-sand-900">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url('/room-candles.jpeg')",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-max section-padding text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold-500/50" />
            <p className="eyebrow text-gold-400 tracking-[0.25em]">Reserve Your Time</p>
            <div className="h-px w-12 bg-gold-500/50" />
          </div>

          <h2 className="heading-lg text-white mb-6">
            Your moment of calm
            <br />
            <em className="not-italic text-gold-400">awaits.</em>
          </h2>

          <p className="text-sand-300 text-lg font-light leading-relaxed mb-10">
            Book online in minutes through Vagaro. Choose your treatment,
            duration, and therapist — then simply arrive and let go.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-4 px-12 text-base inline-block"
          >
            Book Now
          </a>

          <p className="text-sand-500 text-sm mt-6">
            Questions?{' '}
            <a href="/contact" className="text-sand-300 hover:text-white transition-colors underline underline-offset-4">
              Contact us
            </a>
            {' '}— we&apos;re happy to help.
          </p>
        </div>
      </div>
    </section>
  )
}
