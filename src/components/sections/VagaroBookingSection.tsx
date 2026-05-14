import { BOOKING_URL, PHONE, EMAIL } from '@/lib/services'

// Swap BOOKING_URL in src/lib/services.ts to go live.
// Format: https://www.vagaro.com/your-business-name
const IS_PLACEHOLDER = BOOKING_URL.includes('placeholder')

export default function VagaroBookingSection() {
  return (
    <section className="section-gap bg-sand-50" id="vagaro-booking">
      <div className="container-max section-padding">
        <div className="text-center mb-10">
          <p className="eyebrow text-forest-600 mb-3">Online Booking</p>
          <h2 className="heading-sm text-sand-900">Reserve your session</h2>
          <p className="text-sand-500 text-sm mt-3 max-w-md mx-auto">
            Secure, instant booking powered by Vagaro. No account required.
          </p>
        </div>

        {IS_PLACEHOLDER ? <PlaceholderState /> : <LiveState />}
      </div>
    </section>
  )
}

function LiveState() {
  return (
    <div className="max-w-xl mx-auto">
      {/* Primary booking gateway card */}
      <div className="bg-white border border-sand-200 overflow-hidden">
        {/* Branded header strip */}
        <div className="bg-forest-700 px-8 py-5 flex items-center justify-between">
          <div>
            <p className="text-white font-cormorant text-xl font-medium">Kao Thai Wellness</p>
            <p className="text-forest-200/60 text-xs tracking-wide mt-0.5">
              Cupertino, CA · Vagaro Booking
            </p>
          </div>
          <VagaroWordmark />
        </div>

        {/* Body */}
        <div className="px-8 py-8 text-center">
          <p className="text-sand-600 text-sm leading-relaxed mb-8">
            Select your treatment, preferred date and time, and complete your
            booking securely through Vagaro. You&apos;ll receive an instant
            confirmation.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center py-4 text-base"
          >
            Open Booking Calendar
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9.5 4.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <p className="text-sand-400 text-xs mt-5">
            Opens in a new tab &middot; Secured by Vagaro
          </p>
        </div>

        {/* Divider + alt contact */}
        <div className="border-t border-sand-100 px-8 py-5 bg-sand-50 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <span className="text-sand-400 text-xs uppercase tracking-wider">Prefer to call?</span>
          <a
            href={`tel:${PHONE}`}
            className="text-forest-600 hover:text-forest-700 font-medium transition-colors"
          >
            {PHONE}
          </a>
          <span className="hidden sm:inline text-sand-300">·</span>
          <a
            href={`mailto:${EMAIL}`}
            className="text-forest-600 hover:text-forest-700 font-medium transition-colors"
          >
            {EMAIL}
          </a>
        </div>
      </div>

      {/* Vagaro trust line */}
      <p className="text-center text-sand-400 text-xs mt-5 tracking-wide">
        Booking managed via{' '}
        <a
          href="https://www.vagaro.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-sand-600 transition-colors"
        >
          Vagaro
        </a>
        {' '}· No Vagaro account required
      </p>
    </div>
  )
}

function PlaceholderState() {
  return (
    <div className="max-w-xl mx-auto">
      {/* Placeholder card */}
      <div className="bg-white border-2 border-dashed border-sand-300 overflow-hidden">
        {/* Header strip */}
        <div className="bg-sand-200 px-8 py-5 flex items-center justify-between">
          <div>
            <p className="text-sand-700 font-cormorant text-xl font-medium">Kao Thai Wellness</p>
            <p className="text-sand-500 text-xs tracking-wide mt-0.5">
              Vagaro Booking · Not yet configured
            </p>
          </div>
          <VagaroWordmark muted />
        </div>

        {/* Setup instructions */}
        <div className="px-8 py-8">
          <div className="flex items-start gap-3 bg-gold-50 border border-gold-200 p-4 mb-6 text-left">
            <svg
              className="shrink-0 mt-0.5 text-gold-500"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
              <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <div>
              <p className="text-gold-800 text-xs font-medium mb-1">Booking widget — setup required</p>
              <p className="text-gold-700 text-xs leading-relaxed">
                Open <code className="bg-gold-100 px-1 rounded text-[11px]">src/lib/services.ts</code> and replace{' '}
                <code className="bg-gold-100 px-1 rounded text-[11px]">BOOKING_URL</code> with your Vagaro
                business URL (e.g.{' '}
                <code className="bg-gold-100 px-1 rounded text-[11px]">https://www.vagaro.com/kaothaimassage</code>
                ).
              </p>
            </div>
          </div>

          <button
            disabled
            aria-disabled="true"
            className="w-full flex items-center justify-center gap-2 py-4 text-base font-medium bg-sand-200 text-sand-400 cursor-not-allowed"
          >
            Open Booking Calendar
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9.5 4.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Temp contact fallback */}
        <div className="border-t border-sand-100 px-8 py-5 bg-sand-50 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <span className="text-sand-400 text-xs uppercase tracking-wider">Book by phone or email:</span>
          <a
            href={`tel:${PHONE}`}
            className="text-forest-600 hover:text-forest-700 font-medium transition-colors"
          >
            {PHONE}
          </a>
          <span className="hidden sm:inline text-sand-300">·</span>
          <a
            href={`mailto:${EMAIL}`}
            className="text-forest-600 hover:text-forest-700 font-medium transition-colors"
          >
            {EMAIL}
          </a>
        </div>
      </div>

      <p className="text-center text-sand-400 text-xs mt-5 tracking-wide">
        This placeholder is only visible during development &mdash; not in production once{' '}
        <code className="text-sand-500">BOOKING_URL</code> is set.
      </p>
    </div>
  )
}

function VagaroWordmark({ muted = false }: { muted?: boolean }) {
  return (
    <div
      className={`text-right ${muted ? 'opacity-40' : 'opacity-60'}`}
      aria-label="Vagaro"
    >
      <p className={`text-[10px] uppercase tracking-[0.2em] ${muted ? 'text-sand-600' : 'text-white/70'}`}>
        Powered by
      </p>
      <p className={`font-sans font-semibold text-sm ${muted ? 'text-sand-700' : 'text-white'}`}>
        Vagaro
      </p>
    </div>
  )
}
