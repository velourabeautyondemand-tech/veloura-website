
export type Service = {
  id: string;
  name: string;
  description: string;
  price?: number;
  duration?: string;
  imageId: string;
  category: 'NAILs' | 'Pedicures' | 'Nail Enhancements' | 'Extras' | 'Makeup' | 'Hair' | 'VIP Packages' | 'Glow & Skin Wellness' | 'Photography';
};

export type Technician = {
  id: string;
  name: string;
  bio: string;
  rating: number;
  reviewsCount: number;
  baseLocation: string;
  services: string[]; // array of service ids
  avatarId: string;
  reviews: { reviewer: string; comment: string; rating: number }[];
};

export type Booking = {
  id: string;
  customerId: string;
  customerName: string;
  technicianId: string;
  technicianName: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  price: number;
};

export const services: Service[] = [
  // Manicures
  { id: 'mani-classic', name: 'Classic Manicure', description: 'Nail shaping, cuticle care & polish of your choice hand massage.', price: 80, duration: '45-60 mins', imageId: 'service_1', category: 'NAILs' },
  { id: 'mani-gel', name: 'Gel Manicure', description: 'Glossy, chip-free color that lasts up to 2 weeks. Includes hand massage.', price: 100, duration: '60-75 mins', imageId: 'service_2', category: 'NAILs' },
  { id: 'mani-spa', name: 'Spa Manicure', description: 'An elevated manicure experience. Includes exfoliation, a hydrating mask, hot towel wrap, and an extended relaxing massage.', price: 120, duration: '75-90 mins', imageId: 'service_spa_mani', category: 'NAILs' },
  
  // Pedicures
  { id: 'pedi-classic', name: 'Classic Pedicure', description: 'Soak, exfoliate & polish for clean, refreshed feet. Includes massage.', price: 80, duration: '60 mins', imageId: 'service_3', category: 'Pedicures' },
  { id: 'pedi-gel', name: 'Gel Pedicure', description: 'Durable, high-shine finish perfect for sandal season.', price: 100, duration: '60-75 mins', imageId: 'service_9', category: 'Pedicures' },
  { id: 'pedi-spa', name: 'Spa Pedicure', description: 'The ultimate pedicure indulgence. Includes exfoliation, a hydrating mask, hot towel wrap, and an extended relaxing massage for tired feet.', price: 120, duration: '75-90 mins', imageId: 'service_spa_pedi', category: 'Pedicures' },

  // Nail Enhancements
  { id: 'nails-acrylic', name: 'Acrylic Full Set', description: 'Add instant length & strength with a flawless finish.', price: 80, duration: '1.5-2 hours', imageId: 'service_5', category: 'Nail Enhancements' },
  { id: 'nails-dip', name: 'Dip Powder Nails', description: 'Lightweight & long-lasting, no UV light needed. Service includes extensions, bespoke nail art, or luxury add-ons.', price: 60, duration: '1-1.5 hours', imageId: 'service_6', category: 'Nail Enhancements' },

  // Glow & Skin Wellness
  { id: 'facial-hydrating', name: 'Hydrating Facial', description: 'Intensely moisturizes and revitalizes dry, dull skin for a radiant glow.', price: 130, duration: '60 mins', imageId: 'facial_hydrating', category: 'Glow & Skin Wellness' },
  { id: 'facial-cleansing', name: 'Deep Cleansing Facial', description: 'Purifies congested pores, removes impurities, and clarifies skin for a fresh, clean feel.', price: 140, duration: '60 mins', imageId: 'facial_cleansing', category: 'Glow & Skin Wellness' },
  { id: 'facial-anti-aging', name: 'Anti-Aging Facial', description: 'Firms, lifts, and reduces the appearance of fine lines and wrinkles for a youthful complexion.', price: 160, duration: '75 mins', imageId: 'facial_anti_aging', category: 'Glow & Skin Wellness' },
  { id: 'waxing-face-body', name: 'Waxing (Face & Body)', description: 'Professional and hygienic hair removal for smooth, silky skin. Price varies by area.', price: 50, duration: 'Varies', imageId: 'waxing', category: 'Glow & Skin Wellness' },
  { id: 'brows-microblading', name: 'Brows & Microblading', description: 'Premium brow services including microblading, shading, tinting, and brow design.', price: 450, duration: '2-3 hours', imageId: 'brows_microblading', category: 'Glow & Skin Wellness' },
  { id: 'lashes-classic', name: 'Classic Lash Extensions', description: 'Enhance your natural lashes with a full set of classic extensions for added length and volume.', price: 200, duration: '2 hours', imageId: 'lashes_classic', category: 'Glow & Skin Wellness' },
  { id: 'lashes-refill', name: 'Lash Refill / Touch-up', description: 'Maintain your lash extensions with a professional refill to keep them looking full and fresh.', price: 80, duration: '60-75 mins', imageId: 'lashes_refill', category: 'Glow & Skin Wellness' },

  // Extras
  { id: 'extra-art', name: 'Nail Art / Design', description: 'From minimalist chic to bold creative designs. Price is per nail.', price: 13, duration: 'Varies', imageId: 'service_4', category: 'Extras' },

  // Makeup
  { id: 'makeup-everyday', name: 'Everyday Glam Essentials', description: 'Soft, natural makeup for daytime wear or casual events.', price: 150, duration: '60 mins', imageId: 'makeup_1', category: 'Makeup' },
  { id: 'makeup-event', name: 'Event Glam / Prom Makeup', description: 'Elegant, long-wear look for parties, proms, or special school events - bold, glowy, and camera-ready.', price: 150, duration: '75-90 mins', imageId: 'makeup_2', category: 'Makeup' },
  { id: 'makeup-bridal', name: 'Bridal Makeup - Wedding Day', description: 'A flawless, radiant look designed to last. Includes full-face custom makeup tailored to your unique style for a timeless, photo-ready glow.', price: 290, duration: '90-120 mins', imageId: 'makeup_3', category: 'Makeup' },
  { id: 'makeup-trial', name: 'Makeup Trial', description: 'Discover your perfect look before the big day. This session includes a personalized consultation, skin prep, and a full makeup application.', price: 110, duration: '75-90 mins', imageId: 'makeup_4', category: 'Makeup' },
  { id: 'makeup-bridesmaids', name: 'Bridesmaids Makeup', description: 'Elegant, camera-ready makeup designed to complement the bride\'s look. Includes full-face application and false lashes.', price: 150, duration: '60 mins per person', imageId: 'makeup_5', category: 'Makeup' },
  { id: 'makeup-full-day-bridal', name: 'Full-Day Bridal Makeup Experience', description: 'Luxury beauty support with your own personal bridal beauty assistant on-site for 5 hours. Includes initial application and touch-ups.', price: 600, duration: '5 hours', imageId: 'makeup_6', category: 'Makeup' },

  // Hair
  { id: 'hair-glam', name: 'Simple Glam', description: 'Choose from a blowout, curls, waves, or a sleek straight finish for a modern glam vibe.', price: 110, duration: '45-60 mins', imageId: 'hair_1', category: 'Hair' },
  { id: 'hair-formal', name: 'Event & Formal Styling', description: 'Elegant updos or intricate styles for weddings and special events.', price: 150, duration: '60-90 mins', imageId: 'hair_2', category: 'Hair' },
  { id: 'hair-bridal', name: 'Bridal Hair', description: 'Customized bridal styling, including prep and wedding-day touch-ups.', price: 290, duration: '90-120 mins', imageId: 'hair_3', category: 'Hair' },
  { id: 'hair-trial', name: 'Hair Trial', description: 'Test any look for your event. Includes consultation and full styling to refine your desired look.', price: 110, duration: '75-90 mins', imageId: 'hair_4', category: 'Hair' },
  { id: 'hair-bridesmaids', name: 'Bridesmaids Hairstyling', description: 'Elegant, photo-ready hairstyles tailored to complement the bridal look. Choose from soft curls, romantic waves, sleek straight styles, or chic updos.', price: 150, duration: 'Per person', imageId: 'hair_5', category: 'Hair' },

  // VIP Packages
  { id: 'vip-glam-essentials', name: 'Glam Essentials Package (Makeup & Hair)', description: 'A complete package for your beauty needs, combining makeup and hair styling for a polished look.', price: 350, duration: '120-180 mins', imageId: 'vip_1', category: 'VIP Packages' },
  { id: 'vip-events', name: 'Wedding/Fashion Shows/Events (Makeup & Hair)', description: 'A comprehensive makeup and hair package for major events, ensuring you look your best.', price: 550, duration: '180-200 mins', imageId: 'vip_2', category: 'VIP Packages' },
  { id: 'vip-full-day', name: 'Wedding/Fashion Shows/Events Day Package (Makeup, Hair & Nails)', description: 'The ultimate all-inclusive package with makeup, hair, and nails. We recommend booking with 2-3 technicians for the best experience. Team work: 180 min. Solo: 120 min per service.', price: 700, duration: 'Varies', imageId: 'vip_3', category: 'VIP Packages' },

  // Photography
  { id: 'photo-event', name: 'Event Photography', description: 'Capture the essence of your VIP events, parties, and celebrations with professional coverage.', price: 250, duration: '2 hours', imageId: 'photo_1', category: 'Photography' },
  { id: 'photo-portrait', name: 'Portrait Session', description: 'Professional individual or family portraits at your chosen location, including high-res digital files.', price: 150, duration: '60 mins', imageId: 'photo_2', category: 'Photography' },
  { id: 'photo-glam', name: 'Glamour Shoot', description: 'The ultimate showcase for your VÉLOURA beauty look. A dedicated session focusing on high-fashion style.', price: 200, duration: '90 mins', imageId: 'photo_3', category: 'Photography' },
];

export const technicians: Technician[] = [
  {
    id: '1',
    name: 'Jessica Lee',
    bio: 'With over 10 years of experience, Jessica is a master of intricate nail art and long-lasting gel manicures. She brings a creative touch to every appointment.',
    rating: 4.9,
    reviewsCount: 134,
    baseLocation: 'Downtown',
    services: ['mani-gel', 'nails-acrylic', 'extra-art'],
    avatarId: 'tech_avatar_1',
    reviews: [
      { reviewer: 'Alice', comment: 'Jessica is absolutely amazing! Her nail art is a masterpiece.', rating: 5 },
      { reviewer: 'Bob', comment: 'Very professional and my gel manicure lasted for a whole month!', rating: 5 },
      { reviewer: 'Charlie', comment: 'Good service, but was a bit late.', rating: 4 },
      { reviewer: 'Diana', comment: 'Incredible attention to detail. Best manicure I have ever had. She is a true artist and very professional.', rating: 5},
      { reviewer: 'Eve', comment: 'The results were nice, but the process felt rushed. I expected a more relaxing experience for the price.', rating: 3}
    ],
  },
  {
    id: '2',
    name: 'Maria Garcia',
    bio: 'Maria specializes in creating a relaxing spa experience. Her pedicures are legendary, leaving you feeling refreshed and pampered.',
    rating: 4.8,
    reviewsCount: 98,
    baseLocation: 'Uptown',
    services: ['pedi-classic', 'pedi-gel'],
    avatarId: 'tech_avatar_2',
    reviews: [
      { reviewer: 'Frank', comment: 'Maria gives the best pedicures in town. Period.', rating: 5 },
      { reviewer: 'Grace', comment: 'So relaxing, I almost fell asleep. My feet have never been softer.', rating: 5 },
      { reviewer: 'Heidi', comment: 'A wonderful experience, although a bit pricey.', rating: 4}
    ],
  },
  {
    id: '3',
    name: 'Chloe Nguyen',
    bio: 'Chloe is an expert in nail health and extensions. She can transform your nails with durable and stunning acrylic or Gel-X sets.',
    rating: 4.9,
    reviewsCount: 210,
    baseLocation: 'Midtown',
    services: ['mani-classic', 'nails-acrylic', 'nails-dip'],
    avatarId: 'tech_avatar_3',
    reviews: [
      { reviewer: 'Ivan', comment: 'My acrylics have never looked better. Chloe is a true professional.', rating: 5 },
      { reviewer: 'Judy', comment: 'She saved my broken nail right before my wedding!', rating: 5 },
      { reviewer: 'Mallory', comment: 'Very talented technician, but booking can be difficult.', rating: 4},
      { reviewer: 'Walter', comment: 'The application of the acrylic was uneven in some spots and began to lift after only a week. Disappointed with the quality.', rating: 2 }
    ]
  },
  {
    id: '4',
    name: 'Ben Carter',
    bio: 'Ben provides a clean, precise, and professional service, specializing in men\'s grooming and classic manicures. He is known for his punctuality and efficiency.',
    rating: 4.7,
    reviewsCount: 75,
    baseLocation: 'East Side',
    services: ['mani-classic', 'pedi-classic'],
    avatarId: 'tech_avatar_4',
    reviews: [
        { reviewer: 'Oscar', comment: 'Ben is great. Professional, quick, and my hands look great.', rating: 5 },
        { reviewer: 'Peggy', comment: 'A perfect classic manicure. Very neat and professional.', rating: 5 }
    ]
  },
  {
    id: '5',
    name: 'Sarah Kim',
    bio: 'As a new talent, Sarah brings fresh energy and is quickly becoming known for her dip powder techniques and friendly service.',
    rating: 4.6,
    reviewsCount: 45,
    baseLocation: 'West Side',
    services: ['mani-classic', 'mani-gel', 'nails-dip'],
    avatarId: 'tech_avatar_5',
    reviews: [
        { reviewer: 'Quinn', comment: 'Sarah was so sweet and did a fantastic job on my dip nails.', rating: 5 },
        { reviewer: 'Rupert', comment: 'Great service! She is still learning but has a lot of potential.', rating: 4 }
    ]
  },
];

export const bookings: Booking[] = [
    { id: '1', customerId: 'c1', customerName: 'Alice Johnson', technicianId: '1', technicianName: 'Jessica Lee', serviceId: 'mani-gel', serviceName: 'Gel Manicure', date: '2024-08-15', time: '10:00 AM', status: 'upcoming', price: 100 },
    { id: '2', customerId: 'c2', customerName: 'Bob Williams', technicianId: '3', technicianName: 'Chloe Nguyen', serviceId: 'nails-acrylic', serviceName: 'Acrylic Full Set', date: '2024-08-16', time: '02:00 PM', status: 'upcoming', price: 80 },
    { id: '3', customerId: 'c3', customerName: 'Charlie Brown', technicianId: '2', technicianName: 'Maria Garcia', serviceId: 'pedi-classic', serviceName: 'Classic Pedicure', date: '2024-07-20', time: '11:00 AM', status: 'completed', price: 80 },
    { id: '4', customerId: 'c1', customerName: 'Alice Johnson', technicianId: '1', technicianName: 'Jessica Lee', serviceId: 'extra-art', serviceName: 'Nail Art', date: '2024-07-10', time: '03:00 PM', status: 'completed', price: 13 },
    { id: '5', customerId: 'c4', customerName: 'Diana Prince', technicianId: '4', technicianName: 'Ben Carter', serviceId: 'mani-classic', serviceName: 'Classic Manicure', date: '2024-08-18', time: '09:00 AM', status: 'upcoming', price: 80 },
    { id: '6', customerId: 'c5', customerName: 'Eve Adams', technicianId: '5', technicianName: 'Sarah Kim', serviceId: 'nails-dip', serviceName: 'Dip Powder Nails', date: '2024-08-01', time: '01:00 PM', status: 'completed', price: 60 },
    { id: '7', customerId: 'c1', customerName: 'Alice Johnson', technicianId: '3', technicianName: 'Chloe Nguyen', serviceId: 'extra-art', serviceName: 'Nail Repair', date: '2024-06-30', time: '04:00 PM', status: 'cancelled', price: 13 },
];
