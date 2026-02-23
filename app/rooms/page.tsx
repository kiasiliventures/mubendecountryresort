import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { detailedRooms, rooms } from '@/app/rooms/data';

export default function RoomsPage() {
  const detailedRoomSlugs = new Set(detailedRooms.map((room) => room.slug));

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
                {detailedRoomSlugs.has(room.slug) && (
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="mt-4 inline-flex rounded-full border border-oliveMuted-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-oliveMuted-600 transition hover:bg-oliveMuted-500 hover:text-white"
                  >
                    View Details
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
