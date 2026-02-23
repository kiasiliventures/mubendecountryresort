export type Room = {
  slug: string;
  title: string;
  description: string;
  price: string;
  image: string;
};

export type DetailedRoom = Room & {
  overview: string;
  details: string[];
  amenities: string[];
  diningHours: string[];
  gallery: string[];
};

export const rooms: Room[] = [
  {
    slug: 'garden-deluxe-room',
    title: 'Garden Deluxe Room',
    description: 'Spacious comfort with a private balcony overlooking landscaped gardens.',
    price: 'From $95 / night',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'executive-suite',
    title: 'Executive Suite',
    description: 'An elevated stay with a lounge area, premium bedding, and curated amenities.',
    price: 'From $145 / night',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'family-courtyard-room',
    title: 'Family Courtyard Room',
    description: 'Comfortable multi-bed layout designed for shared travel and family retreats.',
    price: 'From $125 / night',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'signature-honeymoon-suite',
    title: 'Signature Honeymoon Suite',
    description: 'Romantic ambiance with scenic views and special in-room hospitality touches.',
    price: 'From $175 / night',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'country-view-room',
    title: 'Country View Room',
    description: 'A restful room with warm interiors and panoramic countryside scenery.',
    price: 'From $105 / night',
    image: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'private-terrace-suite',
    title: 'Private Terrace Suite',
    description: 'Large suite with dedicated terrace space ideal for longer relaxed stays.',
    price: 'From $160 / night',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=80'
  }
];

export const detailedRooms: DetailedRoom[] = [
  {
    ...rooms[0],
    overview:
      'The Garden Deluxe Room offers generous space, warm neutral interiors, and private outdoor views for a calm, restful stay.',
    details: [
      'Private balcony facing landscaped gardens.',
      'Queen bed with premium linen and blackout curtains.',
      'Comfortable work corner for remote work or planning.'
    ],
    amenities: [
      'Complimentary high-speed Wi-Fi',
      'Smart TV with entertainment channels',
      'Rain shower bathroom',
      'Tea and coffee station',
      'Daily housekeeping'
    ],
    diningHours: [
      'Breakfast: 7:00 AM - 8:00 AM',
      'Lunch: 1:00 PM - 2:00 PM',
      'Dinner: 7:00 PM - 8:00 PM'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    ...rooms[1],
    overview:
      'The Executive Suite is designed for guests who want extra room, a premium finish, and a quiet place to both work and unwind.',
    details: [
      'Dedicated lounge area with comfortable seating.',
      'Premium bed setting with elevated room finishes.',
      'Spacious layout ideal for longer stays.'
    ],
    amenities: [
      'Complimentary high-speed Wi-Fi',
      'Smart TV with entertainment channels',
      'Rain shower bathroom',
      'Tea and coffee station',
      'Daily housekeeping'
    ],
    diningHours: [
      'Breakfast: 7:00 AM - 8:00 AM',
      'Lunch: 1:00 PM - 2:00 PM',
      'Dinner: 7:00 PM - 8:00 PM'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    ...rooms[2],
    overview:
      'The Family Courtyard Room is designed for shared stays, offering practical comfort, easy movement, and a relaxed setting for groups.',
    details: [
      'Flexible sleeping layout for family travel.',
      'Easy access to courtyard and shared outdoor areas.',
      'Spacious interior for comfortable day-to-day use.'
    ],
    amenities: [
      'Complimentary high-speed Wi-Fi',
      'Smart TV with entertainment channels',
      'Rain shower bathroom',
      'Tea and coffee station',
      'Daily housekeeping'
    ],
    diningHours: [
      'Breakfast: 7:00 AM - 8:00 AM',
      'Lunch: 1:00 PM - 2:00 PM',
      'Dinner: 7:00 PM - 8:00 PM'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    ...rooms[3],
    overview:
      'The Signature Honeymoon Suite offers romantic styling, elevated privacy, and warm ambience crafted for memorable couple stays.',
    details: [
      'Elegant suite layout with intimate lounge corner.',
      'Private setting designed for quiet, uninterrupted relaxation.',
      'Ideal for anniversaries, honeymoon escapes, and special occasions.'
    ],
    amenities: [
      'Complimentary high-speed Wi-Fi',
      'Smart TV with entertainment channels',
      'Rain shower bathroom',
      'Tea and coffee station',
      'Daily housekeeping'
    ],
    diningHours: [
      'Breakfast: 7:00 AM - 8:00 AM',
      'Lunch: 1:00 PM - 2:00 PM',
      'Dinner: 7:00 PM - 8:00 PM'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    ...rooms[4],
    overview:
      'The Country View Room combines warm interiors with scenic surroundings, creating a simple and peaceful retreat for everyday comfort.',
    details: [
      'Calm room setting with countryside-facing views.',
      'Comfort-first layout suited for solo or couple stays.',
      'Natural light and restful ambience throughout the day.'
    ],
    amenities: [
      'Complimentary high-speed Wi-Fi',
      'Smart TV with entertainment channels',
      'Rain shower bathroom',
      'Tea and coffee station',
      'Daily housekeeping'
    ],
    diningHours: [
      'Breakfast: 7:00 AM - 8:00 AM',
      'Lunch: 1:00 PM - 2:00 PM',
      'Dinner: 7:00 PM - 8:00 PM'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=80'
    ]
  },
  {
    ...rooms[5],
    overview:
      'The Private Terrace Suite offers extra space and an outdoor terrace for guests who prefer a more open, extended-stay experience.',
    details: [
      'Private terrace area for fresh air and outdoor lounging.',
      'Generous suite layout with flexible living space.',
      'Suitable for longer stays and premium comfort seekers.'
    ],
    amenities: [
      'Complimentary high-speed Wi-Fi',
      'Smart TV with entertainment channels',
      'Rain shower bathroom',
      'Tea and coffee station',
      'Daily housekeeping'
    ],
    diningHours: [
      'Breakfast: 7:00 AM - 8:00 AM',
      'Lunch: 1:00 PM - 2:00 PM',
      'Dinner: 7:00 PM - 8:00 PM'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80'
    ]
  }
];
