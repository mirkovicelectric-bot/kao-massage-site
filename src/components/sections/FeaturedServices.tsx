import Link from 'next/link'
import ServiceCard from '@/components/ui/ServiceCard'
import { featuredServices } from '@/lib/services'

export default function FeaturedServices() {
  return (
    <section className="section-gap bg-sand-100">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow text-forest-600 mb-3">Our Treatments</p>
            <h2 className="heading-md text-sand-900">
              Healing for every need
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-forest-600 hover:text-forest-700 font-medium tracking-wide transition-colors group"
          >
            View all services
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M3.333 8h9.334M9.333 5l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
