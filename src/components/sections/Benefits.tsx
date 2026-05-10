const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4C14 4 7 7 7 14C7 21 14 24 14 24C14 24 21 21 21 14C21 7 14 4 14 4Z" />
        <path d="M14 10V18M10 14H18" />
      </svg>
    ),
    title: 'Stress Relief',
    description:
      'Activate your parasympathetic nervous system and dissolve the physical manifestation of daily stress.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="10" />
        <path d="M14 8v6l4 2" />
      </svg>
    ),
    title: 'Improved Circulation',
    description:
      'Skilled pressure and movement encourage blood flow, oxygenating tissues and accelerating natural recovery.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 21C7 21 5 17 5 13C5 9 8.5 6 14 6C19.5 6 22 9 22 13C22 17 20 21 20 21" />
        <path d="M10 21h8M14 6v3" />
        <path d="M9 13c0-2.76 2.24-5 5-5s5 2.24 5 5" />
      </svg>
    ),
    title: 'Muscle Recovery',
    description:
      'Release lactic acid buildup, reduce inflammation, and restore suppleness to overworked or injured muscles.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4C10 4 7 8 7 12C7 16 10 20 14 24C18 20 21 16 21 12C21 8 18 4 14 4Z" />
        <path d="M14 12v4M12 14h4" />
      </svg>
    ),
    title: 'Energy Balance',
    description:
      'Thai massage works along the body\'s energy meridians to restore vitality and promote holistic wellness.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 14C6 10 10 7 14 7C18 7 22 10 22 14" />
        <path d="M4 18C4 18 6 22 14 22C22 22 24 18 24 18" />
        <path d="M14 7V4" />
      </svg>
    ),
    title: 'Flexibility',
    description:
      'Assisted stretching techniques gradually increase your range of motion and ease chronic stiffness.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 5C14 5 9 8 9 14" />
        <path d="M14 5C14 5 19 8 19 14" />
        <path d="M9 14C9 14 9 20 14 22C19 20 19 14 19 14" />
        <circle cx="14" cy="14" r="2.5" />
      </svg>
    ),
    title: 'Mental Clarity',
    description:
      'Emerge from each session with a quieted mind, sharper focus, and a restored sense of inner peace.',
  },
]

export default function Benefits() {
  return (
    <section className="section-gap bg-sand-50">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="eyebrow text-forest-600 mb-3">The Benefits</p>
          <h2 className="heading-md text-sand-900 max-w-xl mx-auto">
            Healing that reaches deeper than muscle
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="group">
              <div className="text-forest-500 mb-4 transition-colors group-hover:text-forest-600">
                {benefit.icon}
              </div>
              <div className="h-px w-8 bg-gold-400 mb-4 transition-all duration-300 group-hover:w-12" />
              <h3 className="font-cormorant text-xl font-medium text-sand-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sand-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
