export type Experience = {
  slug: string;
  title: string;
  body: string;
  image: string;
  overview: string;
  details: string[];
  gallery: string[];
};

export const experiences: Experience[] = [
  {
    slug: 'sunset-garden-walks',
    title: 'Sunset Garden Walks',
    body: 'Explore landscaped paths and serene viewpoints around the resort grounds.',
    image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Take gentle evening walks through curated greenery, stone pathways, and quiet corners designed for rest and reflection.',
    details: [
      'Guided and self-paced routes available daily.',
      'Best enjoyed between 5:30 PM and 7:00 PM.',
      'Photo-friendly viewpoints across the gardens.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    slug: 'farm-to-table-dining',
    title: 'Farm-to-Table Dining',
    body: 'Enjoy seasonal menus inspired by local produce and regional flavor.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Our chefs prepare fresh dishes with local ingredients, balancing comfort classics and contemporary East African flavor.',
    details: [
      'Seasonal breakfast, lunch, and dinner menus.',
      'Vegetarian and family-friendly options available.',
      'Private dining can be arranged with advance booking.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    slug: 'private-event-spaces',
    title: 'Private Event Spaces',
    body: 'Host weddings, retreats, and celebrations in elegant indoor and outdoor venues.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    overview:
      'From intimate celebrations to corporate retreats, our spaces are designed for flexibility, ambience, and smooth coordination.',
    details: [
      'Indoor halls and outdoor lawn setups available.',
      'Support for decor, seating, and event flow.',
      'Suitable for weddings, conferences, and private functions.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    slug: 'quiet-wellness-moments',
    title: 'Quiet Wellness Moments',
    body: 'Recharge with calm lounge areas, sunrise yoga lawns, and restorative atmosphere.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Slow down with restful spaces, gentle morning routines, and a calm environment that supports physical and mental reset.',
    details: [
      'Open-air breathing and stretching areas.',
      'Quiet lounge corners for reading and reflection.',
      'Peaceful mornings with garden views.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1400&q=80'
    ]
  }
];
