import type { Metadata } from 'next'
import { PHONE, EMAIL } from '@/lib/services'
import BookingRequestForm from '@/components/sections/BookingRequestForm'

export const metadata: Metadata = {
  title: 'Book a Session',
  description:
    'Request a Thai massage appointment at Kao Thai Massage in Cupertino, CA. Fill out our booking request form and we will confirm your session.',
  alternates: {
    canonical: 'https://kaomassage.com/book',
  },
}

const steps = [
  {
    number: '01',
    title: 'Submit your request',
    description:
      'Fill out the form with your preferred service, date, and time. It only takes a minute.',
  },
  {
    number: '02',
    title: 'We confirm availability',
    description:
      'We will reach out by phone or email within one business day to confirm your appointment.',
  },
  {
    number: '03',
    title: 'Arrive and let go',
    description:
      'Come 5 minutes early, leave your stress at the door, and let the healing begin.',
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
    a: 'Yes — our CBD, Hot Stone, and Aromatherapy add-ons can be requested when you arrive, subject to availability. We recommend mentioning your preference in the notes field when requesting your booking.',
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
          style={{ backgroundImage: "url('/room.jpeg')" }}
          aria-hidden="true"
        />
        <div className="relative z-10 container-max section-padding text-center">
          <p className="eyebrow text-gold-400 mb-4">Reserve Your Visit</p>
          <h1 className="heading-lg text-white mb-4">Book a Session</h1>
          <p className="text-sand-300 text-lg font-light max-w-xl mx-auto">
            Submit a request and we will reach out to confirm your appointment.
            No payment required.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="section-gap bg-white" id="booking-form">
        <div className="container-max section-padding">
          <BookingRequestForm />
        </div>
      </section>

      {/* Alternative contact strip */}
      <section className="py-10 bg-sand-50 border-y border-sand-100">
        <div className="container-max section-padding text-center">
          <p className="text-sand-500 text-sm mb-4">
            Prefer to reach us directly? We&apos;re available by phone or text.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 text-forest-600 hover:text-forest-700 font-medium transition-colors text-base"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13.3 10.7c-.4-.4-1-.4-1.4 0l-1 1c-.7-.4-2.1-1.4-3.4-2.7C6.2 7.7 5.2 6.3 4.8 5.6l1-1c.4-.4.4-1 0-1.4L4.4 1.8C4 1.4 3.4 1.4 3 1.8l-.8.8C1.8 3 1.5 3.6 1.5 4.2c0 4 4.3 8.3 8.3 8.3.6 0 1.2-.3 1.6-.7l.8-.8c.4-.4.4-1 0-1.3h.1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Call or text {PHONE}
            </a>
            <span className="hidden sm:inline text-sand-300">·</span>
            <a
              href={`mailto:${EMAIL}`}
              className="text-forest-600 hover:text-forest-700 font-medium transition-colors text-base"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

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
            <a href="#booking-form" className="btn-primary py-4 px-10">
              Fill Out the Form
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
    </>
  )
}
