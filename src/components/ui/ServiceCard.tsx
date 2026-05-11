import Image from 'next/image'
import Link from 'next/link'
import type { Service } from '@/lib/services'

interface ServiceCardProps {
  service: Service
  compact?: boolean
}

export default function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const startingPrice = service.durations[0].price

  return (
    <Link
      href={`/services#${service.id}`}
      className="group block bg-white border border-sand-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sand-300/30"
    >
      <div className={`relative overflow-hidden ${compact ? 'h-48' : 'h-64'}`}>
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {service.tag && (
          <div className="absolute top-4 left-4">
            <span className="eyebrow text-white bg-forest-600 px-3 py-1 text-[10px]">
              {service.tag}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="heading-sm mb-2 text-sand-900 group-hover:text-forest-600 transition-colors">
          {service.name}
        </h3>
        <p className="text-sand-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {service.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-sand-100">
          <div>
            <span className="text-xs text-sand-500 tracking-wide">Starting from</span>
            <p className="font-cormorant text-2xl text-sand-900">${startingPrice}</p>
          </div>
          <span className="text-forest-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            View Details
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform"
            >
              <path
                d="M2.917 7h8.166M8.167 4.083 11.083 7l-2.916 2.917"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
