import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BookingCTA from '@/components/sections/BookingCTA'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Cryo T-Shock Cupertino',
  description:
    'Cryo T-Shock thermal therapy in Cupertino, CA — Italian-engineered cryo for body contouring, cellulite reduction, skin tightening, and facial rejuvenation. Non-invasive, no downtime.',
  alternates: {
    canonical: 'https://kaomassage.com/cryo-t-shock',
  },
}

const benefits = [
  {
    icon: <BodyIcon />,
    title: 'Body Contouring',
    description: 'Targets stubborn fat in specific areas',
  },
  {
    icon: <SparkleIcon />,
    title: 'Skin Tightening',
    description: 'Stimulates collagen for firmer skin',
  },
  {
    icon: <FaceIcon />,
    title: 'Facial Rejuvenation',
    description: 'Brightens and refreshes the complexion',
  },
  {
    icon: <CheckIcon />,
    title: 'No Downtime',
    description: 'Resume normal activity immediately',
  },
  {
    icon: <CellulitIcon />,
    title: 'Cellulite Reduction',
    description: 'Smooths the appearance of dimpling',
  },
  {
    icon: <CycleIcon />,
    title: 'Warm-Cold Cycle',
    description: 'Italian-engineered alternating thermal therapy',
  },
]

const treatments = [
  {
    name: 'Cryo Slimming',
    target: 'Belly · Hips · Thighs · Arms',
    description:
      'Alternating warm-cold cycles trigger apoptosis — controlled fat-cell breakdown — in targeted areas. Most clients see results across a series of 5–10 sessions.',
  },
  {
    name: 'Cryo Toning',
    target: 'Body · Arms · Legs',
    description:
      'Sustained cold tightens skin and increases collagen production. Best for firming loose skin after weight loss or pregnancy.',
  },
  {
    name: 'Cellulite Reduction',
    target: 'Thighs · Buttocks · Backs of arms',
    description:
      'The thermal contrast breaks up fibrotic tissue and smooths the dimpled appearance of cellulite. Progressive results over consecutive sessions.',
  },
  {
    name: 'Cryo Facial',
    target: 'Face · Neck · Décolleté',
    description:
      'Gentle, targeted cold tightens pores, brightens skin, reduces puffiness, and stimulates collagen — a non-invasive alternative to traditional facials.',
  },
]

// TODO: confirm final pricing with owner
const pricingRows = [
  { label: 'Single session', price: '$300' },
  { label: 'Package of 5', price: '$1,400' },
  { label: 'Package of 10', price: '$2,700' },
]

const relatedSlugs = ['hot-stone', 'aromatherapy', 'deep-tissue']
const relatedServices = relatedSlugs
  .map((id) => services.find((s) => s.id === id))
  .filter((s): s is NonNullable<typeof s> => Boolean(s))

export default function CryoTShockPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center overflow-hidden bg-forest-800"
        style={{ height: '40vh', minHeight: '420px' }}
      >
        <Image
          src="/cryo-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-forest-900/60" aria-hidden="true" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto pt-16">
          <p className="eyebrow text-gold-400 mb-4">Wellness & Recovery</p>
          <h1 className="heading-lg text-white mb-4">Cryo T-Shock</h1>
          <p className="text-sand-200 text-base font-light leading-relaxed max-w-md mx-auto mb-8">
            Localized cryotherapy for body contouring and skin rejuvenation.
          </p>
          <Link href="/book" className="btn-primary py-4 px-10 text-xs">
            Book Now
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="section-gap bg-sand-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="divider-line mb-6" />
              <p className="eyebrow text-forest-600 mb-3">About This Service</p>
              <h2 className="heading-sm text-sand-900 mb-6">
                Targeted Cold for Sculpting and Skin
              </h2>
              <div className="space-y-5 text-sand-600 leading-relaxed">
                <p>
                  Cryo T-Shock uses the Italian-engineered Cryo T-Shock device
                  to apply alternating cycles of warm and cold to specific
                  areas of the body. The result is a non-invasive treatment
                  that contours fat, tightens skin, and rejuvenates the
                  complexion — all in a single session.
                </p>
                <p>
                  Unlike whole-body cryotherapy, Cryo T-Shock focuses precisely
                  where you want results: belly, hips, thighs, arms, back, or
                  the face. The treatment is comfortable, requires no
                  downtime, and works through a process called apoptosis,
                  where fat cells naturally die off after exposure to
                  controlled cold.
                </p>
                <p>
                  For best results, most clients commit to a series of
                  sessions. We offer single sessions for trial or maintenance,
                  and discounted packages of 5 and 10 sessions for those
                  pursuing a full contouring or skin-tightening protocol.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-[520px] overflow-hidden">
              <Image
                src="/cryo-treatment.jpg"
                alt="Cryo T-Shock thermal therapy session in a quiet treatment room"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-gap bg-sand-100">
        <div className="container-max section-padding">
          <div className="text-center mb-14">
            <p className="eyebrow text-forest-600 mb-3">Why Cryo T-Shock</p>
            <h2 className="heading-sm text-sand-900">
              Real results, without compromise
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white border border-sand-200 p-7 flex flex-col gap-3"
              >
                <span className="text-gold-500">{b.icon}</span>
                <h3 className="font-cormorant text-2xl text-sand-900">
                  {b.title}
                </h3>
                <p className="text-sand-600 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="section-gap bg-sand-50 border-t border-sand-200/60">
        <div className="container-max section-padding">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow text-forest-600 mb-3">Treatment Options</p>
            <h2 className="heading-sm text-sand-900 mb-4">
              Four Targeted Protocols
            </h2>
            <p className="text-sand-500 text-sm leading-relaxed">
              Each session is customized to the area you want addressed. Your
              therapist will recommend the right protocol based on your goals
              during the consultation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {treatments.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-sand-200 p-7 flex flex-col"
              >
                <h3 className="font-cormorant text-2xl text-sand-900 leading-snug mb-1">
                  {t.name}
                </h3>
                <p className="eyebrow text-gold-600 mb-4">{t.target}</p>
                <p className="text-sand-600 text-sm leading-relaxed">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-sand-500 leading-relaxed max-w-2xl">
            New clients receive a complimentary consultation to assess goals
            and recommend a session plan.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-gap bg-sand-50">
        <div className="max-w-2xl mx-auto section-padding">
          <div className="mb-10">
            <p className="eyebrow text-forest-600 mb-3">Pricing</p>
            <h2 className="heading-sm text-sand-900">Book Your Session</h2>
          </div>
          <div className="divide-y divide-sand-200 border-y border-sand-200">
            {pricingRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-4 py-5"
              >
                <span className="text-sm text-sand-700">{row.label}</span>
                <div className="flex items-center gap-5 flex-shrink-0">
                  <span className="font-cormorant text-2xl text-sand-900 tabular-nums">
                    {row.price}
                  </span>
                  <Link
                    href="/book"
                    aria-label={`Book Cryo T-Shock — ${row.label}`}
                    className="text-xs eyebrow text-forest-600 border border-forest-200 px-3 py-1.5 hover:bg-forest-600 hover:text-white hover:border-forest-600 transition-all duration-200"
                  >
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-sand-500 mt-6">
            Pricing is preliminary and may be adjusted at your consultation.
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-gap bg-sand-100 border-t border-sand-200/60">
        <div className="container-max section-padding">
          <div className="mb-12">
            <p className="eyebrow text-forest-600 mb-3">Explore More</p>
            <h2 className="heading-sm text-sand-900">You may also like</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {relatedServices.map((s) => (
              <Link
                key={s.id}
                href={`/services#${s.id}`}
                className="group block bg-white border border-sand-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sand-300/30"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-cormorant text-2xl text-sand-900 group-hover:text-forest-600 transition-colors mb-2">
                    {s.name}
                  </h3>
                  <p className="text-sand-600 text-sm leading-relaxed line-clamp-2">
                    {s.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}

function BodyIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7v6m0 0l-3 4m3-4l3 4M9 11H7m10 0h-2"
      />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
      />
    </svg>
  )
}

function FaceIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 10h.01M15 10h.01M8 15s1.5 2 4 2 4-2 4-2"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

function CellulitIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 8c4-2 8-2 12 0M4 12c4-2 8-2 12 0M4 16c4-2 8-2 12 0M4 20c4-2 8-2 12 0"
      />
    </svg>
  )
}

function CycleIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  )
}
