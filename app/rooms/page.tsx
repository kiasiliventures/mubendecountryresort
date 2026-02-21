import Image from 'next/image';
import Reveal from '@/components/Reveal';

const rooms = [
  {
    title: 'Garden Deluxe Room',
    description: 'Spacious comfort with a private balcony overlooking landscaped gardens.',
    price: 'From $95 / night',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Executive Suite',
    description: 'An elevated stay with a lounge area, premium bedding, and curated amenities.',
    price: 'From $145 / night',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Family Courtyard Room',
    description: 'Comfortable multi-bed layout designed for shared travel and family retreats.',
    price: 'From $125 / night',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Signature Honeymoon Suite',
    description: 'Romantic ambiance with scenic views and special in-room hospitality touches.',
    price: 'From $175 / night',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Country View Room',
    description: 'A restful room with warm interiors and panoramic countryside scenery.',
    price: 'From $105 / night',
    image: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Private Terrace Suite',
    description: 'Large suite with dedicated terrace space ideal for longer relaxed stays.',
    price: 'From $160 / night',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=80'
  }
];

export default function RoomsPage() {
  return (
    <section className="section-space">
      <div className="section-shell">
        {/* Rooms page header */}
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-oliveMuted-500">Accommodation</p>
          <h1 className="mt-2 font-heading text-4xl sm:text-5xl">Rooms & Rates</h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
            Choose from thoughtfully appointed rooms and suites for business trips, romantic escapes, and family getaways.
          </p>
        </Reveal>

        {/* Responsive room cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <Reveal key={room.title} className="overflow-hidden rounded-3xl border border-stoneWarm-200 bg-white shadow-soft dark:border-zinc-800 dark:bg-zinc-900">
              <div className="relative h-56">
                <Image src={room.image} alt={room.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h2 className="font-heading text-2xl">{room.title}</h2>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{room.description}</p>
                <p className="mt-4 text-sm font-semibold text-oliveMuted-600 dark:text-stoneWarm-200">{room.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
