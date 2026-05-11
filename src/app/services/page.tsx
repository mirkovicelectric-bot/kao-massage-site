import type { Metadata } from 'next'
import Image from 'next/image'
import { services, addons, BOOKING_URL } from '@/lib/services'
import PriceTable from '@/components/ui/PriceTable'
import BookingCTA from '@/components/sections/BookingCTA'

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'Explore our full menu of Thai massage services in Cupertino. Traditional Thai, Deep Tissue, Swedish, Hot Stone, Aromatherapy, Foot Reflexology, and more. View pricing and book online.',
  alternates: {
    canonical: 'https://kaomassage.com/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-16 bg-sand-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/room-towels.jpg')",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 container-max section-padding text-center">
          <p className="eyebrow text-gold-400 mb-4">Treatments & Pricing</p>
          <h1 className="heading-lg text-white mb-4">Our Services</h1>
          <p className="text-sand-300 text-lg font-light max-w-xl mx-auto">
            Eight carefully curated treatments, each designed to address a
            different dimension of physical and energetic wellbeing.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-gap bg-sand-50">
        <div className="container-max section-padding">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:[direction:rtl]' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative h-72 lg:h-96 overflow-hidden ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                  />
                  {service.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="eyebrow text-white bg-forest-600 px-3 py-1 text-[10px]">
                        {service.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                  <p className="eyebrow text-forest-600 mb-3">Treatment</p>
                  <h2 className="heading-sm text-sand-900 mb-4">{service.name}</h2>
                  <p className="text-sand-500 leading-relaxed mb-6 text-sm">
                    {service.longDescription}
                  </p>
                  <div className="mb-6">
                    <p className="eyebrow text-sand-500 mb-3">Pricing</p>
                    <PriceTable
                      durations={service.durations}
                      serviceName={service.name}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-gap bg-sand-100">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="eyebrow text-forest-600 mb-3">Enhancements</p>
            <h2 className="heading-sm text-sand-900 mb-4">Session Add-Ons</h2>
            <p className="text-sand-500 text-sm leading-relaxed">
              Elevate any treatment with a premium enhancement. Add-ons are
              applied at time of booking or requested at your session.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="bg-white border border-sand-200 p-6 text-center hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                <p className="font-cormorant text-3xl text-sand-900 mb-1">
                  +${addon.price}
                </p>
                <h3 className="text-sm font-medium text-sand-800 mb-2">{addon.name}</h3>
                <p className="text-sand-500 text-xs leading-relaxed">{addon.description}</p>
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
              Book a Session
            </a>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
