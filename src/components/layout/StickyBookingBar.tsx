import { BOOKING_URL } from '@/lib/services'

export default function StickyBookingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-forest-700 safe-pb">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 py-4 text-white font-sans font-medium text-sm tracking-wide"
      >
        <span>Book Your Session</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3.333 8h9.334M9.333 5l3 3-3 3"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  )
}
