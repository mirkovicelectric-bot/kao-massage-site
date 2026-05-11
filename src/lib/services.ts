export interface ServiceDuration {
  duration: string
  price: number
}

export interface Service {
  id: string
  name: string
  shortName: string
  description: string
  longDescription: string
  image: string
  imageAlt: string
  durations: ServiceDuration[]
  featured?: boolean
  tag?: string
}

export interface Addon {
  name: string
  description: string
  price: number
}

export const BOOKING_URL = 'https://www.vagaro.com/placeholder'
export const PHONE = '(408) 250-9525'
export const EMAIL = 'bookings@kaomassage.com'
export const ADDRESS = '20540 Stevens Creek Blvd Studio 26'
export const CITY_STATE_ZIP = 'Cupertino, CA 95014'
export const INSTAGRAM_URL = 'https://instagram.com/kaothaimassage'
export const GOOGLE_MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.5!2d-122.0!3d37.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zKao+Thai+Massage!5e0!3m2!1sen!2sus!4v1'

export const BUSINESS_HOURS = [
  { day: 'Monday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Tuesday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Wednesday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Thursday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Friday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 7:00 PM' },
  { day: 'Sunday', hours: '10:00 AM – 6:00 PM' },
]

export const services: Service[] = [
  {
    id: 'traditional-thai',
    name: 'Traditional Thai Massage',
    shortName: 'Thai Massage',
    description: 'A therapeutic art combining acupressure, assisted stretching, and energy work along the body\'s natural healing pathways.',
    longDescription: 'Rooted in ancient Ayurvedic healing traditions, Traditional Thai Massage works along the body\'s energy meridians — known as "Sen" lines — to release tension, improve flexibility, and restore energetic flow. Performed fully clothed on a floor mat, this technique uses rhythmic pressure, joint mobilization, and assisted yoga-like stretches to create a deeply restorative experience unlike any other massage modality.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Therapist performing traditional Thai stretching and acupressure massage',
    featured: true,
    tag: 'Most Popular',
    durations: [
      { duration: '60 min', price: 110 },
      { duration: '90 min', price: 160 },
      { duration: '120 min', price: 210 },
    ],
  },
  {
    id: 'thai-combination',
    name: 'Thai Combination Massage',
    shortName: 'Thai Combination',
    description: 'The best of both worlds — blending traditional Thai techniques with Western massage for total body balance.',
    longDescription: 'Our Thai Combination Massage artfully merges the stretching and pressure-point work of Traditional Thai Massage with the smooth flowing strokes of Swedish relaxation. This balanced approach addresses muscular tension while simultaneously promoting deep calm, making it an ideal choice for those who want both therapeutic and relaxation benefits in a single session.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Calming bodywork session blending Thai and Western massage techniques',
    featured: true,
    durations: [
      { duration: '60 min', price: 105 },
      { duration: '90 min', price: 155 },
      { duration: '120 min', price: 205 },
    ],
  },
  {
    id: 'deep-tissue',
    name: 'Deep Tissue Massage',
    shortName: 'Deep Tissue',
    description: 'Targeted therapeutic work reaching deep muscle layers to dissolve chronic tension and restore mobility.',
    longDescription: 'Our Deep Tissue Massage uses firm, deliberate pressure and slow strokes to reach the deeper layers of muscle and connective tissue. Especially beneficial for chronic pain, postural issues, and areas of persistent tightness, this treatment goes beyond surface relaxation to create lasting relief. Our therapists are trained to listen to your body, adjusting pressure and technique to meet your specific therapeutic needs.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Therapist applying targeted deep pressure to relieve chronic muscle tension',
    featured: true,
    durations: [
      { duration: '60 min', price: 120 },
      { duration: '90 min', price: 175 },
      { duration: '120 min', price: 230 },
    ],
  },
  {
    id: 'swedish',
    name: 'Swedish Relaxation Massage',
    shortName: 'Swedish',
    description: 'The classic full-body relaxation massage, using gentle flowing strokes to melt away stress and tension.',
    longDescription: 'Our Swedish Relaxation Massage uses long, gliding strokes, light kneading, and rhythmic tapping to promote deep relaxation throughout the entire body. This gentle yet effective modality improves circulation, eases muscle tension, and activates the parasympathetic nervous system — leaving you in a state of profound calm. Ideal for first-time massage clients or those simply seeking restorative rest.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Relaxing Swedish massage with long gliding strokes on a spa table',
    durations: [
      { duration: '60 min', price: 105 },
      { duration: '90 min', price: 155 },
      { duration: '120 min', price: 205 },
    ],
  },
  {
    id: 'aromatherapy',
    name: 'Aromatherapy Massage',
    shortName: 'Aromatherapy',
    description: 'Swedish massage elevated with therapeutic essential oils, chosen to balance mind, body, and spirit.',
    longDescription: 'Aromatherapy Massage combines the healing power of touch with the science of plant-based essential oils. Our therapists select from a curated collection of premium oils — including lavender, eucalyptus, and lemongrass — to craft a sensory experience tailored to your needs. Whether you seek stress relief, immune support, or emotional balance, the oils are blended and applied to create a truly holistic healing session.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Therapeutic essential oils and calming aromatherapy massage setup',
    durations: [
      { duration: '60 min', price: 115 },
      { duration: '90 min', price: 165 },
      { duration: '120 min', price: 220 },
    ],
  },
  {
    id: 'hot-stone',
    name: 'Hot Stone Massage',
    shortName: 'Hot Stone',
    description: 'Smooth heated basalt stones melt tension from the deepest muscles for an extraordinary therapeutic experience.',
    longDescription: 'Hot Stone Massage uses polished, heated basalt stones placed on key energy centers of the body and incorporated directly into the massage strokes. The penetrating heat loosens tight muscles, improves circulation, and allows our therapists to work more deeply with less pressure. The result is a profoundly relaxing and therapeutic experience that addresses both physical tension and energetic imbalance.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Smooth heated basalt stones arranged for hot stone massage therapy',
    tag: 'Signature',
    durations: [
      { duration: '60 min', price: 130 },
      { duration: '90 min', price: 185 },
      { duration: '120 min', price: 240 },
    ],
  },
  {
    id: 'foot-reflexology',
    name: 'Foot Reflexology',
    shortName: 'Foot Reflexology',
    description: 'A precise pressure-point therapy on the feet that promotes healing and balance throughout the entire body.',
    longDescription: 'Foot Reflexology is based on the principle that specific points on the feet correspond to organs and systems throughout the body. By applying precise pressure to these reflex points, our therapists stimulate the body\'s natural healing processes, reduce stress, and restore energetic balance. A wonderful standalone treatment or complement to any full-body massage.',
    image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Foot reflexology massage applying precise pressure to reflex points',
    durations: [
      { duration: '30 min', price: 60 },
      { duration: '60 min', price: 95 },
    ],
  },
  {
    id: 'head-neck-shoulder',
    name: 'Head / Neck / Shoulder Relief',
    shortName: 'HNS Relief',
    description: 'Targeted relief for the areas most affected by stress, screen time, and modern life.',
    longDescription: 'Our Head, Neck & Shoulder treatment is a focused, therapeutic session designed to address the most common areas of tension in modern life. Using a combination of acupressure, stretching, and targeted massage techniques, this session releases the compression and tightness that accumulates from long hours at a desk, poor posture, or stress. An excellent express option for those short on time but in need of real relief.',
    image: 'https://images.unsplash.com/photo-1611073615830-9b77e65fd3de?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Therapist providing targeted relief to head, neck and shoulder muscles',
    durations: [
      { duration: '30 min', price: 65 },
    ],
  },
]

export const addons: Addon[] = [
  {
    name: 'CBD Enhancement',
    description: 'Premium CBD-infused oil for deeper anti-inflammatory relief and enhanced relaxation',
    price: 20,
  },
  {
    name: 'Hot Stone Add-On',
    description: 'Add the healing warmth of heated basalt stones to any massage session',
    price: 20,
  },
  {
    name: 'Aromatherapy Add-On',
    description: 'Elevate your session with a custom-blended therapeutic essential oil',
    price: 15,
  },
]

export const featuredServices = services.filter((s) => s.featured)
