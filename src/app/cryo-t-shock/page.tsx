import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BookingCTA from '@/components/sections/BookingCTA'
import { BOOKING_URL } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Cryo T Shock',
  description:
    'Cryo T Shock in Cupertino — a non-invasive thermal therapy using alternating cold and warm temperatures for body contouring, cellulite reduction, skin toning, and facial rejuvenation at Kao Thai Wellness.',
  alternates: {
    canonical: 'https://kaomassage.com/cryo-t-shock',
  },
}

const treatments = [
  {
    name: 'Body Slimming',
    description:
      'Thermal shock targets stubborn fat pockets — abdomen, flanks, thighs, arms — by triggering the body’s natural fat-cell breakdown.',
    sessions: [
      { label: 'Single area · 45 min', price: 250 },
      { label: 'Two areas · 60 min', price: 320 },
      { label: 'Package of 5', price: 1100 },
    ],
  },
  {
    name: 'Body Toning & Tightening',
    description:
      'A firming protocol that uses controlled warmth and cold to stimulate collagen and tighten loose or post-pregnancy skin.',
    sessions: [
      { label: 'Single area · 30 min', price: 200 },
      { label: 'Two areas · 50 min', price: 280 },
      { label: 'Package of 5', price: 900 },
    ],
  },
  {
    name: 'Cellulite Reduction',
    description:
      'Smooths the appearance of dimpled skin by improving microcirculation and lymphatic drainage in problem areas.',
    sessions: [
      { label: 'Single area · 45 min', price: 230 },
      { label: 'Package of 5', price: 1000 },
    ],
  },
  {
    name: 'Facial Lifting & Rejuvenation',
    description:
      'A gentler facial protocol that boosts collagen, brightens the complexion, and softens the look of fine lines — with zero downtime.',
    sessions: [
      { label: 'Single session · 30 min', price: 150 },
      { label: 'Package of 5', price: 650 },
    ],
  },
]

const benefits = [
  {
    title: 'Non-Invasive',
    description:
      'No needles, no incisions, no downtime. Return to your day immediately after your session.',
  },
  {
    title: 'Targeted',
    description:
      'Sculpt specific areas — abdomen, hips, arms, thighs, or jawline — with precise thermal control.',
  },
  {
    title: 'Natural',
    description:
      'Stimulates your body’s own fat metabolism, collagen production, and lymphatic flow — no chemicals, no synthetics.',
  },
  {
    title: 'Visible Results',
    description:
      'Most clients see noticeable contour and tone changes within 3–5 sessions, with results that continue to improve over weeks.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Warming Phase',
    description:
      'The treatment begins with gentle warmth (~40°C) applied to the area. This dilates blood vessels, prepares the tissue, and primes the response of fat cells.',
  },
  {
    number: '02',
    title: 'Cooling Phase',
    description:
      'Temperature drops rapidly to cold (~-8°C), triggering controlled stress on fat cells (apoptosis) while the surrounding skin and tissue remain unharmed.',
  },
  {
    number: '03',
    title: 'Warming Recovery',
    description:
      'A final warming phase restores circulation and accelerates the lymphatic system, helping the body flush released fat and toxins naturally over the following days.',
  },
]

const faqs = [
  {
    q: 'Is Cryo T Shock painful?',
    a: 'No. Most clients describe the sensation as warm at first, then refreshingly cool. There is no pain, no anesthesia, and no recovery time.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'Most clients see meaningful results in 5 sessions, spaced about 10–14 days apart. Maintenance sessions every few months keep results looking their best.',
  },
  {
    q: 'How soon will I see results?',
    a: 'You may notice tighter, smoother skin after the first session. Fat-reduction results become most visible 2–4 weeks after each treatment as your body metabolizes released fat cells.',
  },
  {
    q: 'Who is not a candidate?',
    a: 'Cryo T Shock is not recommended during pregnancy, for clients with Raynaud’s, cold urticaria, severe cardiovascular conditions, or active skin infections in the treatment area. We’ll review your health history at your first visit.',
  },
  {
    q: 'Can I combine it with massage?',
    a: 'Yes — many clients pair Cryo T Shock with one of our massage services for a complete wellness experience. Ask us when booking and we’ll coordinate the timing.',
  },
]

export default function CryoTShockPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-forest-700 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=70&auto=format&fit=crop')",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 container-max section-padding text-center">
          <p className="eyebrow text-gold-400 mb-4">Advanced Wellness</p>
          <h1 className="heading-lg text-white mb-4">Cryo T Shock</h1>
          <p className="text-forest-100/70 text-lg font-light max-w-xl mx-auto">
            Thermal contouring therapy. Non-invasive body sculpting, skin
            tightening, and facial rejuvenation — with zero downtime.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-gap bg-sand-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="relative h-80 lg:h-[520px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80&auto=format&fit=crop"
                alt="Cryo T Shock thermal therapy device used for body contouring"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div>
              <div className="divider-line mb-6" />
              <p className="eyebrow text-forest-600 mb-4">What It Is</p>
              <h2 className="heading-sm text-sand-900 mb-6">
                Hot. Cold. Transformed.
              </h2>
              <div className="space-y-4 text-sand-600 leading-relaxed">
                <p>
                  Cryo T Shock is an Italian-engineered thermal therapy that
                  rapidly cycles between controlled warmth and cold. The
                  contrast triggers a powerful biological response — breaking
                  down fat cells, boosting collagen production, and stimulating
                  the lymphatic system — all without needles, surgery, or
                  recovery time.
                </p>
                <p>
                  Originally developed for elite athletes and medical recovery,
                  the technology has become a sought-after aesthetic treatment
                  for body sculpting, cellulite reduction, skin tightening, and
                  facial rejuvenation.
                </p>
                <p>
                  At Kao Thai Wellness, every Cryo T Shock session is
                  customized to your goals and paced with the same calm,
                  unhurried attention we bring to every treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-gap bg-sand-100">
        <div className="container-max section-padding">
          <div className="text-center mb-14">
            <p className="eyebrow text-forest-600 mb-3">Why Cryo T Shock</p>
            <h2 className="heading-sm text-sand-900">
              Real results, without compromise
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-8 border border-sand-200"
              >
                <div className="divider-line mb-4" />
                <h3 className="font-cormorant text-2xl text-sand-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sand-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-gap bg-sand-50">
        <div className="container-max section-padding">
          <div className="text-center mb-14">
            <p className="eyebrow text-forest-600 mb-3">The Process</p>
            <h2 className="heading-sm text-sand-900">How a session works</h2>
            <p className="text-sand-500 text-sm leading-relaxed max-w-xl mx-auto mt-4">
              Each session follows a precise thermal cycle. You stay fully
              clothed in loose-fitting attire and remain comfortable
              throughout.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border border-sand-200 bg-white p-8"
              >
                <p className="font-cormorant text-5xl text-gold-500 mb-4">
                  {step.number}
                </p>
                <h3 className="font-cormorant text-2xl text-sand-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sand-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments & Pricing */}
      <section className="section-gap bg-sand-100">
        <div className="container-max section-padding">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="eyebrow text-forest-600 mb-3">Treatments & Pricing</p>
            <h2 className="heading-sm text-sand-900 mb-4">
              Choose your protocol
            </h2>
            <p className="text-sand-500 text-sm leading-relaxed">
              Each protocol is customized at consultation. Package pricing
              reflects the recommended series for visible, lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {treatments.map((treatment) => (
              <div
                key={treatment.name}
                className="bg-white border border-sand-200 p-8"
              >
                <h3 className="font-cormorant text-2xl text-sand-900 mb-3">
                  {treatment.name}
                </h3>
                <p className="text-sand-600 text-sm leading-relaxed mb-6">
                  {treatment.description}
                </p>
                <div className="border border-sand-200 divide-y divide-sand-100">
                  {treatment.sessions.map((session) => (
                    <div
                      key={session.label}
                      className="flex items-center justify-between px-5 py-4 hover:bg-sand-50 transition-colors"
                    >
                      <span className="text-sm text-sand-600">
                        {session.label}
                      </span>
                      <div className="flex items-center gap-6">
                        <span className="font-cormorant text-2xl text-sand-900">
                          ${session.price}
                        </span>
                        <a
                          href={BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Book ${treatment.name} – ${session.label}`}
                          className="text-xs eyebrow text-forest-600 border border-forest-200 px-3 py-1.5 hover:bg-forest-600 hover:text-white hover:border-forest-600 transition-all duration-200"
                        >
                          Book
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sand-500 text-sm mb-6 max-w-xl mx-auto">
              First-time clients receive a complimentary 15-minute consultation
              to map your goals and design the right protocol.
            </p>
            <Link href="/book" className="btn-primary py-4 px-10">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gap bg-sand-50">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="eyebrow text-forest-600 mb-3">Common Questions</p>
              <h2 className="heading-sm text-sand-900">Good to know</h2>
            </div>
            <dl className="space-y-2">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white border border-sand-200"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 list-none">
                    <dt className="font-cormorant text-xl text-sand-900 pr-6">
                      {faq.q}
                    </dt>
                    <span className="shrink-0 text-forest-600 transition-transform duration-200 group-open:rotate-45">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M9 3v12M3 9h12"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <dd className="px-6 pb-5 text-sand-600 text-sm leading-relaxed">
                    {faq.a}
                  </dd>
                </details>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
