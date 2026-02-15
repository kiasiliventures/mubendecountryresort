import Reveal from '@/components/Reveal';

const amenities = [
  {
    icon: 'POOL',
    title: 'Swimming Pool',
    description: 'Relax by the poolside with sun loungers, refreshments, and peaceful views.'
  },
  {
    icon: 'DINE',
    title: 'Dining & Bar',
    description: 'Fresh local cuisine, continental favorites, and a cozy evening lounge bar.'
  },
  {
    icon: 'EVENT',
    title: 'Events & Weddings',
    description: 'Flexible indoor and outdoor venues for celebrations, conferences, and retreats.'
  },
  {
    icon: 'WIFI',
    title: 'High-Speed Wi-Fi',
    description: 'Reliable connectivity throughout guest rooms, event areas, and lounge spaces.'
  },
  {
    icon: 'PARK',
    title: 'Ample Parking',
    description: 'Secure on-site parking with convenient access for private and group travel.'
  },
  {
    icon: 'WELL',
    title: 'Wellness Spaces',
    description: 'Quiet lawns and serene corners for yoga, meditation, and restorative downtime.'
  }
];

export default function AmenitiesPage() {
  return (
    <section className="section-space bg-stoneWarm-100/40 dark:bg-zinc-900/30">
      <div className="section-shell">
        {/* Amenities heading */}
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-oliveMuted-500">Comfort & Convenience</p>
          <h1 className="mt-2 font-heading text-4xl sm:text-5xl">Amenities</h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
            Every stay includes thoughtful amenities to make your time with us effortless and memorable.
          </p>
        </Reveal>

        {/* Amenity cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => (
            <Reveal key={amenity.title} className="rounded-3xl border border-stoneWarm-200 bg-white p-6 shadow-soft dark:border-zinc-800 dark:bg-zinc-900">
              <span className="inline-flex rounded-full bg-stoneWarm-100 px-3 py-1 text-xs font-bold tracking-wide text-oliveMuted-600 dark:bg-zinc-800 dark:text-stoneWarm-200" aria-hidden>
                {amenity.icon}
              </span>
              <h2 className="mt-4 font-heading text-2xl">{amenity.title}</h2>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{amenity.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
