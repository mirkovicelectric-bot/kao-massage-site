export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=85&auto=format&fit=crop')",
        }}
        aria-hidden="true"
      />

      {/* Warm overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"
        aria-hidden="true"
      />

      {/* Subtle warm tint */}
      <div
        className="absolute inset-0 bg-amber-950/20"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto pt-20">
        <p className="eyebrow text-white/60 mb-6 animate-fade-in">
          Cupertino · California
        </p>

        <h1 className="heading-display text-white mb-6 text-balance animate-fade-up">
          Ancient healing<br />
          <em className="not-italic font-light text-gold-300">for modern life.</em>
        </h1>

        <p className="text-white/70 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up animate-delay-100">
          Experience the transformative power of authentic Thai massage therapy
          in Cupertino&apos;s most serene wellness sanctuary.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-200">
          <a
            href="/book"
            className="btn-primary py-4 px-9 text-base w-full sm:w-auto"
          >
            Book Your Session
          </a>
          <a
            href="/services"
            className="btn-ghost-light border border-white/30 text-white hover:bg-white/10 inline-flex items-center justify-center gap-2 px-9 py-4 text-base font-sans font-medium tracking-wide transition-all duration-200 w-full sm:w-auto"
          >
            View Services
          </a>
        </div>

        {/* Trust signal */}
        <div className="mt-16 flex items-center justify-center gap-8 animate-fade-up animate-delay-300">
          <div className="text-center">
            <p className="font-cormorant text-3xl text-white">8+</p>
            <p className="text-white/50 text-xs tracking-wider uppercase mt-1">Services</p>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div className="text-center">
            <p className="font-cormorant text-3xl text-white">100%</p>
            <p className="text-white/50 text-xs tracking-wider uppercase mt-1">Authentic</p>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div className="text-center">
            <p className="font-cormorant text-3xl text-white">5★</p>
            <p className="text-white/50 text-xs tracking-wider uppercase mt-1">Rated</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase">Scroll</p>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-white/40">
            <path
              d="M8 0v16M2 10l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
