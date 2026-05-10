import type { Metadata } from 'next'
import { BOOKING_URL, PHONE, EMAIL } from '@/lib/services'
import VagaroBookingSection from '@/components/sections/VagaroBookingSection'
import BookingCTA from '@/components/sections/BookingCTA'

export const metadata: Metadata = {
  title: 'Book a Session',
  description:
    'Book your Thai massage session at Kao Thai Massage in Cupertino, CA. Online booking available 24/7 through Vagaro.',
  alternates: {
    canonical: 'https://kaomassage.com/book',
  },
}

const steps = [
  {
    number: '01',
    title: 'Choose your treatment',
    description:
      'Browse our full menu of services and select the massage type and duration that fits your needs.',
  },
  {
    number: '02',
    title: 'Pick your time',
    description:
      'Select from available appointment slots that work with your schedule — any day of the week.',
  },
  {
    number: '03',
    title: 'Confirm & arrive',
    description:
      'You\'ll receive a confirmation. Arrive 5 minutes early, and leave the rest to us.',
  },
]

const faqs = [
  {
    q: 'What should I wear for a Thai massage?',
    a: 'Traditional Thai Massage is performed fully clothed in comfortable, loose-fitting attire. We provide clean, comfortable clothing for your session. For oil-based massages (Swedish, Deep Tissue, Aromatherapy), you will be draped with a sheet at all times.',
  },
  {
    q: 'How early should I arrive?',
    a: 'Please arrive 5–10 minutes before your scheduled appointment. This allows time to complete a brief intake form and for your therapist to discuss your preferences and any areas of focus.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'We kindly ask for at least 24 hours notice if you need to cancel or reschedule. Late cancellations or no-shows may be subject to a fee. Please contact us as soon as possible if your plans change.',
  },
  {
    q: 'Can I add enhancements at the time of my session?',
    a: 'Yes — our CBD, Hot Stone, and Aromatherapy add-ons can be requested when you arrive, subject to availability. We recommend mentioning your preference at the time of booking to ensure everything is prepared for you.',
  },
  {
    q: 'Is gratuity included?',
    a: 'Gratuity is not included in the service price and is entirely at your discretion. Tips are always appreciated and go directly to your therapist.',
  },
]

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-sand-900 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=60')",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 container-max section-padding text-center">
          <p className="eyebrow text-gold-400 mb-4">Reserve Your Visit</p>
          <h1 className="heading-lg text-white mb-4">Book a Session</h1>
          <p className="text-sand-300 text-lg font-light max-w-xl mx-auto mb-10">
            Scheduling is easy and instant through Vagaro. Your next moment of calm is just a few clicks away.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-4 px-12 text-base"
          >
            Book Now on Vagaro
          </a>
        </div>
      </section>

      <VagaroBookingSection />

      {/* How it works */}
      <section className="section-gap bg-sand-50">
        <div className="container-max section-padding">
          <div className="text-center mb-14">
            <p className="eyebrow text-forest-600 mb-3">Simple Process</p>
            <h2 className="heading-sm text-sand-900">How it works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <p className="font-cormorant text-6xl text-sand-200 mb-4 leading-none">
                  {step.number}
                </p>
                <h3 className="font-cormorant text-xl text-sand-900 mb-3">{step.title}</h3>
                <p className="text-sand-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-4 px-10"
            >
              Book Your Session
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gap bg-sand-100">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="eyebrow text-forest-600 mb-3">FAQ</p>
              <h2 className="heading-sm text-sand-900">Before your visit</h2>
            </div>

            <div className="space-y-0 divide-y divide-sand-200 border border-sand-200 bg-white">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-6 lg:p-8">
                  <h3 className="font-cormorant text-xl text-sand-900 mb-3">{faq.q}</h3>
                  <p className="text-sand-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sand-500 text-sm mt-8">
              Have another question?{' '}
              <a href={`mailto:${EMAIL}`} className="text-forest-600 hover:text-forest-700 underline underline-offset-4">
                Email us
              </a>
              {' '}or call{' '}
              <a href={`tel:${PHONE}`} className="text-forest-600 hover:text-forest-700">
                {PHONE}
              </a>
            </p>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
