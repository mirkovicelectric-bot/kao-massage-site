import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import IntroSection from '@/components/sections/IntroSection'
import FeaturedServices from '@/components/sections/FeaturedServices'
import Benefits from '@/components/sections/Benefits'
import Testimonials from '@/components/sections/Testimonials'
import BookingCTA from '@/components/sections/BookingCTA'
import MapSection from '@/components/sections/MapSection'

export const metadata: Metadata = {
  title: 'Kao Thai Wellness | Authentic Thai Massage in Cupertino, CA',
  description:
    'Experience authentic Thai massage, deep tissue, hot stone, and wellness therapies at Kao Thai Wellness in Cupertino, California. Book online today.',
  alternates: {
    canonical: 'https://kaomassage.com',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturedServices />
      <Benefits />
      <Testimonials />
      <BookingCTA />
      <MapSection />
    </>
  )
}
