import type { Metadata } from 'next'
import Image from 'next/image'
import BookingCTA from '@/components/sections/BookingCTA'
import StudioGallery from '@/components/sections/StudioGallery'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Kao Thai Massage — our story, philosophy, and commitment to authentic Thai healing traditions in Cupertino, California.',
  alternates: {
    canonical: 'https://kaomassage.com/about',
  },
}

const values = [
  {
    title: 'Authenticity',
    description:
      'Our therapists train in genuine Thai massage techniques rooted in centuries of healing tradition — not watered-down imitations.',
  },
  {
    title: 'Intention',
    description:
      'Every session begins with listening. We tailor each treatment to your specific needs, not a one-size-fits-all approach.',
  },
  {
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standards — in technique, in presence, and in the environment we create for you.',
  },
  {
    title: 'Calm',
    description:
      'From the moment you arrive, we take care of everything. Your only task is to release, rest, and restore.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-16 bg-forest-700 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&q=70&auto=format&fit=crop')",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 container-max section-padding text-center">
          <p className="eyebrow text-forest-200/60 mb-4">Our Story</p>
          <h1 className="heading-lg text-white mb-4">About Kao Thai Massage</h1>
          <p className="text-forest-100/70 text-lg font-light max-w-xl mx-auto">
            Born from a love of authentic healing. Built for the modern world.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="section-gap bg-sand-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="relative h-80 lg:h-[540px] overflow-hidden">
              <Image
                src="/hall-front.jpeg"
                alt="Welcoming hallway inside Kao Thai Massage studio at Sola Salon Studios, Cupertino"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div>
              <div className="divider-line mb-6" />
              <p className="eyebrow text-forest-600 mb-4">Who We Are</p>
              <h2 className="heading-sm text-sand-900 mb-6">
                A quiet place for profound healing
              </h2>
              <div className="space-y-4 text-sand-600 leading-relaxed">
                <p>
                  Kao Thai Massage was founded with a single conviction: that the ancient
                  healing arts of Thailand deserve to be practiced with full integrity in
                  the modern world — not abbreviated, not diluted, and not reduced to
                  a commodity.
                </p>
                <p>
                  Our studio on Stevens Creek Blvd is a deliberate departure from the
                  noise of the Bay Area. We designed every detail — from the warm
                  lighting to the careful selection of our therapists — with one goal
                  in mind: to give you a genuine experience of healing.
                </p>
                <p>
                  &ldquo;Kao&rdquo; (เก้า) carries multiple meanings in Thai culture,
                  evoking both forward movement and the number nine — a symbol of
                  prosperity, completeness, and good fortune. It reflects our wish for
                  each client: that they leave whole.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-gap bg-sand-100">
        <div className="container-max section-padding">
          <div className="text-center mb-14">
            <p className="eyebrow text-forest-600 mb-3">Our Philosophy</p>
            <h2 className="heading-sm text-sand-900">What we stand for</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 border border-sand-200">
                <div className="divider-line mb-4" />
                <h3 className="font-cormorant text-2xl text-sand-900 mb-3">{value.title}</h3>
                <p className="text-sand-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kao */}
      <section className="section-gap bg-sand-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <p className="eyebrow text-forest-600 mb-4">Why Choose Kao</p>
              <h2 className="heading-sm text-sand-900 mb-6">
                The difference you can feel
              </h2>
              <ul className="space-y-5">
                {[
                  'Therapists trained in authentic Thai massage traditions',
                  'No rush — sessions begin and end exactly as scheduled',
                  'Customized pressure and focus for every individual',
                  'Private, serene studio environment',
                  'Premium oils, stones, and therapeutic materials',
                  'Easy online booking requests — we confirm within one business day',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sand-700 text-sm">
                    <svg
                      className="shrink-0 mt-0.5 text-forest-500"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 lg:h-[480px] overflow-hidden">
              <Image
                src="/studio-door.jpeg"
                alt="Private studio entrance at Kao Thai Massage inside Sola Salon Studios, Cupertino"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <StudioGallery />
      <BookingCTA />
    </>
  )
}
