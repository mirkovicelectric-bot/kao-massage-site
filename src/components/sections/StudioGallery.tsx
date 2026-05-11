import Image from 'next/image'

const photos = [
  {
    src: '/room-candles.jpeg',
    alt: 'Candlelit treatment room at Kao Thai Massage — warm, serene ambiance',
  },
  {
    src: '/room-towels.jpg',
    alt: 'Freshly prepared treatment room with rolled towels and spa essentials',
  },
  {
    src: '/room.jpeg',
    alt: 'Clean and calm private treatment room at Kao Thai Massage',
  },
]

export default function StudioGallery() {
  return (
    <div className="bg-sand-50 py-10 px-6">
      <p className="eyebrow text-sand-400 text-center mb-5 tracking-[0.2em]">Inside Our Studio</p>
      <div className="grid grid-cols-3 gap-2 max-w-3xl mx-auto">
        {photos.map((photo) => (
          <div key={photo.src} className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 320px"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
