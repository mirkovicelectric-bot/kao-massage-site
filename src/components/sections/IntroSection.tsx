export default function IntroSection() {
  return (
    <section className="section-gap bg-sand-50">
      <div className="container-max section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-16 bg-gold-400" />
            <p className="eyebrow text-gold-600 tracking-[0.25em]">Welcome</p>
            <div className="h-px flex-1 max-w-16 bg-gold-400" />
          </div>

          <h2 className="heading-md text-sand-900 mb-6 text-balance">
            A sanctuary where{' '}
            <em className="not-italic text-forest-600">ancient wisdom</em>{' '}
            meets modern calm.
          </h2>

          <p className="text-sand-600 text-lg font-light leading-relaxed mb-6">
            At Kao Thai Wellness, we blend centuries-old Thai healing traditions with
            the mindful precision of modern wellness. Each session is crafted to
            restore balance, release tension, and renew your sense of self.
          </p>

          <p className="text-sand-500 leading-relaxed">
            Nestled in the heart of Cupertino, our studio is a quiet refuge from the
            pace of Silicon Valley — where skilled hands and time-honored techniques
            work together to bring your body and mind back into harmony.
          </p>

          {/* Decorative Thai-inspired divider */}
          <div className="flex items-center justify-center mt-10 gap-3">
            <div className="h-px w-8 bg-sand-300" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-gold-400"
              aria-hidden="true"
            >
              <path
                d="M10 2c0 0-4 2-4 8s4 8 4 8 4-2 4-8-4-8-4-8z"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="10" cy="10" r="2" fill="currentColor" />
            </svg>
            <div className="h-px w-8 bg-sand-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
