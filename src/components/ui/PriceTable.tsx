import Link from 'next/link'
import { BOOKING_URL } from '@/lib/services'
import type { ServiceDuration } from '@/lib/services'

interface PriceTableProps {
  durations: ServiceDuration[]
  serviceName: string
}

export default function PriceTable({ durations, serviceName }: PriceTableProps) {
  return (
    <div className="border border-sand-200 divide-y divide-sand-100">
      {durations.map(({ duration, price }) => (
        <div
          key={duration}
          className="flex items-center justify-between px-5 py-4 hover:bg-sand-50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <span className="text-sm text-sand-600 w-16">{duration}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-cormorant text-2xl text-sand-900">${price}</span>
            <Link
              href={BOOKING_URL}
              aria-label={`Book ${serviceName} – ${duration}`}
              className="text-xs eyebrow text-forest-600 border border-forest-200 px-3 py-1.5 hover:bg-forest-600 hover:text-white hover:border-forest-600 transition-all duration-200"
            >
              Book
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
