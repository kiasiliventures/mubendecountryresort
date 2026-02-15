import Image from 'next/image';
import Reveal from '@/components/Reveal';

const galleryImages = [
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1501117716987-c8e1ecb210d9?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80'
];

export default function GalleryPage() {
  return (
    <section className="section-space">
      <div className="section-shell">
        {/* Gallery heading */}
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-oliveMuted-500">Visual Tour</p>
          <h1 className="mt-2 font-heading text-4xl sm:text-5xl">Gallery</h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
            A glimpse into the ambience, spaces, and moments that define your stay at Mubende Country Resort.
          </p>
        </Reveal>

        {/* Masonry-like column layout */}
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <Reveal key={`${image}-${index}`} className="mb-4 overflow-hidden rounded-3xl">
              <Image
                src={image}
                alt={`Resort gallery ${index + 1}`}
                width={900}
                height={1200}
                className="h-auto w-full object-cover transition duration-500 hover:scale-[1.03]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
