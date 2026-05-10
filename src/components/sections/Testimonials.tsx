const testimonials = [
  {
    quote:
      "The best Thai massage I've ever experienced outside of Thailand. The therapists have an extraordinary sensitivity — they found tension I didn't even know I was carrying. I leave every session feeling completely renewed.",
    name: 'Sarah M.',
    title: 'Regular client, Cupertino',
    rating: 5,
  },
  {
    quote:
      "I've tried many massage studios in the Bay Area. Kao is on another level. The space is serene, the technique is authentic, and the results are lasting. My chronic neck pain has improved significantly after just a few sessions.",
    name: 'James L.',
    title: 'Monthly client, San Jose',
    rating: 5,
  },
  {
    quote:
      "Finally — a massage that actually addresses the kind of tension tech workers carry. The 90-minute deep tissue session is my reset button. I wish I'd found this place years ago.",
    name: 'Priya K.',
    title: 'Bi-weekly client, Sunnyvale',
    rating: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="currentColor"
          className="text-gold-400"
        >
          <path d="M7 1l1.545 3.09 3.455.504-2.5 2.431.59 3.43L7 8.845l-3.09 1.61.59-3.43L2 4.594l3.455-.504L7 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-gap bg-forest-700">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="eyebrow text-forest-200/60 mb-3">Client Stories</p>
          <h2 className="heading-md text-white">What our guests say</h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 flex flex-col"
            >
              <StarRating count={t.rating} />
              <blockquote className="flex-1 mt-5">
                <p className="text-white/80 text-sm leading-relaxed font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white font-medium text-sm">{t.name}</p>
                <p className="text-forest-200/50 text-xs mt-0.5">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-forest-200/40 text-xs tracking-wide mt-10">
          Placeholder testimonials — replace with real reviews from Google or Vagaro
        </p>
      </div>
    </section>
  )
}
