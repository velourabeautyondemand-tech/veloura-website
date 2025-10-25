export type Service = {
  id: string;
  name: string;
  description: string;
  price?: number;
  duration: string; 
  imageId: string;
  category: 'Manicures' | 'Add Ons';
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
  { id: '1', name: 'Structure Gel Manicure', description: 'This includes Russian manicure, ensuring a clean and safe cuticle area. We use builder gel for a strong foundation, promoting natural nail growth. Includes one gel color.', price: 65, duration: '1.5-2 hours', imageId: 'service_2', category: 'Manicures' },
  { id: '2', name: 'Gel X', description: 'Apres Gel X full set, includes Russian manicure and one gel color. Price may vary based on length.', price: 80, duration: '2-2.5 hours', imageId: 'service_12', category: 'Manicures' },
  { id: '3', name: 'Russian Manicure', description: 'This is a dry manicure, it provides a clean and safe service with an e-file. Includes regular polish.', price: 45, duration: '45 mins-1 hour', imageId: 'service_1', category: 'Manicures' },
  { id: '4', name: 'French', description: 'This can be added to any manicure. Price may vary depending on style.', price: 15, duration: 'Varies', imageId: 'service_11', category: 'Add Ons' },
  { id: '5', name: 'Nail Art', description: 'Price is per nail and varies on intricacy of design.', price: 5, duration: 'Varies', imageId: 'service_4', category: 'Add Ons' },
  { id: '6', name: 'Repair', description: 'Price is per nail.', price: 5, duration: 'Varies', imageId: 'service_7', category: 'Add Ons' },
  { id: '7', name: 'Soak Off', description: "This is for any foreign work, if it's my work then it's free.", price: 10, duration: 'Varies', imageId: 'service_10', category: 'Add Ons' },
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
