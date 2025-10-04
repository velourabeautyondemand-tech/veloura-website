export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  imageId: string;
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
  { id: '1', name: 'Classic Manicure', description: 'A timeless classic. Includes shaping, cuticle care, a relaxing hand massage, and polish.', price: 35, duration: 45, imageId: 'service_1' },
  { id: '2', name: 'Gel Manicure', description: 'A long-lasting manicure with gel polish that stays flawless for weeks.', price: 50, duration: 60, imageId: 'service_2' },
  { id: '3', name: 'Spa Pedicure', description: 'Indulge your feet with an exfoliating scrub, mask, massage, and perfect polish.', price: 60, duration: 75, imageId: 'service_3' },
  { id: '4', name: 'Nail Art', description: 'Express yourself with custom nail art. Price varies based on complexity.', price: 20, duration: 30, imageId: 'service_4' },
  { id: '5', name: 'Acrylic Full Set', description: 'Durable and beautiful acrylic extensions for your desired length and shape.', price: 75, duration: 90, imageId: 'service_5' },
  { id: '6', name: 'Dip Powder Nails', description: 'A strong, durable alternative to gel and acrylics, with a wide range of colors.', price: 55, duration: 70, imageId: 'service_6' },
  { id: '7', name: 'Nail Repair', description: 'Fix a chipped or broken nail to restore your perfect manicure.', price: 10, duration: 15, imageId: 'service_7' },
  { id: '8', name: 'Polish Change', description: 'A quick color update for your hands or feet.', price: 20, duration: 20, imageId: 'service_8' },
  { id: '9', name: 'Deluxe Pedicure', description: 'An upgraded spa pedicure with paraffin wax and extended massage.', price: 80, duration: 90, imageId: 'service_9' },
  { id: '10', name: 'Paraffin Wax Treatment', description: 'Deeply moisturizes and softens skin on hands or feet.', price: 25, duration: 20, imageId: 'service_10' },
  { id: '11', name: 'French Manicure', description: 'The iconic clean and classic look with white tips.', price: 45, duration: 50, imageId: 'service_11' },
  { id: '12', name: 'Gel-X Extensions', description: 'Lightweight, pre-shaped extensions for a perfect set every time.', price: 85, duration: 90, imageId: 'service_12' },
  { id: '13', name: 'Men\'s Sport Manicure', description: 'A clean and neat look for men, focusing on shaping and cuticle care.', price: 30, duration: 30, imageId: 'service_13' },
  { id: '14', name: 'Cuticle Care', description: 'Intensive treatment to nourish and maintain healthy cuticles.', price: 15, duration: 15, imageId: 'service_14' },
  { id: '15', name: 'Hand Massage', description: 'A relaxing 15-minute massage to relieve tension.', price: 20, duration: 15, imageId: 'service_15' },
];

export const technicians: Technician[] = [
  {
    id: '1',
    name: 'Jessica Lee',
    bio: 'With over 10 years of experience, Jessica is a master of intricate nail art and long-lasting gel manicures. She brings a creative touch to every appointment.',
    rating: 4.9,
    reviewsCount: 134,
    baseLocation: 'Downtown',
    services: ['1', '2', '4', '6', '11', '12'],
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
    services: ['3', '8', '9', '10', '13', '15'],
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
    services: ['1', '5', '7', '12', '14'],
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
    services: ['1', '8', '13', '14', '15'],
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
    services: ['1', '2', '6', '8'],
    avatarId: 'tech_avatar_5',
    reviews: [
        { reviewer: 'Quinn', comment: 'Sarah was so sweet and did a fantastic job on my dip nails.', rating: 5 },
        { reviewer: 'Rupert', comment: 'Great service! She is still learning but has a lot of potential.', rating: 4 }
    ]
  },
];

export const bookings: Booking[] = [
    { id: '1', customerId: 'c1', customerName: 'Alice Johnson', technicianId: '1', technicianName: 'Jessica Lee', serviceId: '2', serviceName: 'Gel Manicure', date: '2024-08-15', time: '10:00 AM', status: 'upcoming', price: 50 },
    { id: '2', customerId: 'c2', customerName: 'Bob Williams', technicianId: '3', technicianName: 'Chloe Nguyen', serviceId: '5', serviceName: 'Acrylic Full Set', date: '2024-08-16', time: '02:00 PM', status: 'upcoming', price: 75 },
    { id: '3', customerId: 'c3', customerName: 'Charlie Brown', technicianId: '2', technicianName: 'Maria Garcia', serviceId: '3', serviceName: 'Spa Pedicure', date: '2024-07-20', time: '11:00 AM', status: 'completed', price: 60 },
    { id: '4', customerId: 'c1', customerName: 'Alice Johnson', technicianId: '1', technicianName: 'Jessica Lee', serviceId: '4', serviceName: 'Nail Art', date: '2024-07-10', time: '03:00 PM', status: 'completed', price: 20 },
    { id: '5', customerId: 'c4', customerName: 'Diana Prince', technicianId: '4', technicianName: 'Ben Carter', serviceId: '13', serviceName: 'Men\'s Sport Manicure', date: '2024-08-18', time: '09:00 AM', status: 'upcoming', price: 30 },
    { id: '6', customerId: 'c5', customerName: 'Eve Adams', technicianId: '5', technicianName: 'Sarah Kim', serviceId: '6', serviceName: 'Dip Powder Nails', date: '2024-08-01', time: '01:00 PM', status: 'completed', price: 55 },
    { id: '7', customerId: 'c1', customerName: 'Alice Johnson', technicianId: '3', technicianName: 'Chloe Nguyen', serviceId: '7', serviceName: 'Nail Repair', date: '2024-06-30', time: '04:00 PM', status: 'cancelled', price: 10 },
];
