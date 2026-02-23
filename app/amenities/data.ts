export type Amenity = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  overview: string;
  highlights: string[];
  gallery: string[];
};

export const amenities: Amenity[] = [
  {
    slug: 'swimming-pool',
    icon: 'POOL',
    title: 'Swimming Pool',
    description: 'Relax by the poolside with sun loungers, refreshments, and peaceful views.',
    overview:
      'Our swimming pool area offers a calm daytime retreat with comfortable seating and a clean, family-friendly atmosphere.',
    highlights: [
      'Well-maintained pool and lounging areas.',
      'Poolside refreshment service available.',
      'Ideal for both morning and evening relaxation.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    slug: 'dining-and-bar',
    icon: 'DINE',
    title: 'Dining & Bar',
    description: 'Fresh local cuisine, continental favorites, and a cozy evening lounge bar.',
    overview:
      'The dining experience blends local flavor and familiar classics in a warm space suited for both casual and special meals.',
    highlights: [
      'Breakfast, lunch, and dinner service.',
      'Local and continental menu selection.',
      'Relaxed evening lounge bar ambience.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    slug: 'events-and-weddings',
    icon: 'EVENT',
    title: 'Events & Weddings',
    description: 'Flexible indoor and outdoor venues for celebrations, conferences, and retreats.',
    overview:
      'From weddings to corporate gatherings, our event spaces are adaptable, elegant, and supported by an experienced team.',
    highlights: [
      'Indoor and outdoor venue options.',
      'Support for layout, decor, and guest flow.',
      'Suitable for social and corporate events.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    slug: 'high-speed-wifi',
    icon: 'WIFI',
    title: 'High-Speed Wi-Fi',
    description: 'Reliable connectivity throughout guest rooms, event areas, and lounge spaces.',
    overview:
      'Stay connected across the resort with stable internet access designed for both leisure browsing and work tasks.',
    highlights: [
      'Coverage in rooms, lounges, and event areas.',
      'Suitable for meetings and remote work needs.',
      'Consistent connection quality across guest zones.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    slug: 'ample-parking',
    icon: 'PARK',
    title: 'Ample Parking',
    description: 'Secure on-site parking with convenient access for private and group travel.',
    overview:
      'Guests enjoy easy arrivals and departures with spacious, secure parking close to accommodation and key resort areas.',
    highlights: [
      'On-site parking with easy entry and exit.',
      'Suitable for private vehicles and group transport.',
      'Convenient access to main guest areas.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    slug: 'wellness-spaces',
    icon: 'WELL',
    title: 'Wellness Spaces',
    description: 'Quiet lawns and serene corners for yoga, meditation, and restorative downtime.',
    overview:
      'Our wellness spaces are designed to support rest, breathing, and gentle movement in a naturally calm setting.',
    highlights: [
      'Quiet open-air spaces for mindfulness.',
      'Comfortable corners for reflection and reading.',
      'Peaceful atmosphere for low-impact routines.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1400&q=80'
    ]
  }
];
