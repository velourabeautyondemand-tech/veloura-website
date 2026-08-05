export interface ServiceHub {
  slug: string;
  name: string;
  h1: string;
  description: string;
  longDescription: string;
  category: string;
  iconName: string;
  seoTitle: string;
  seoDescription: string;
  faqs: { q: string; a: string }[];
}

export interface LocationHub {
  slug: string;
  name: string;
  h1: string;
  description: string;
  areas: string[];
  seoTitle: string;
  seoDescription: string;
}

export const ACTIVE_SERVICES: ServiceHub[] = [
  {
    slug: 'makeup',
    name: 'Makeup Artistry',
    h1: 'Professional Makeup Artist On-Demand',
    description: 'Elite makeup artistry delivered directly to your home, hotel, or office.',
    longDescription: 'Experience five-star glam wherever you are. VÉLOURA connects you with the top 10% of licensed makeup artists specializing in everyday essentials, red-carpet events, and bridal beauty. Our pros arrive fully equipped with premium products to ensure a long-lasting, camera-ready finish.',
    category: 'Makeup',
    iconName: 'Sparkles',
    seoTitle: 'Mobile Makeup Artist Services | Home & Hotel Beauty',
    seoDescription: 'Book professional makeup artists for on-demand glam. At-home and hotel services for weddings, events, and photoshoots in LA, NYC, and Miami.',
    faqs: [
      { q: "Do I need to provide any makeup?", a: "No, our professionals arrive with a full professional kit. If you have specific allergies or a foundation you prefer, feel free to have it ready." },
      { q: "How long does a session take?", a: "Standard glam sessions take approximately 60-90 minutes depending on the complexity of the look." }
    ]
  },
  {
    slug: 'hair',
    name: 'Hair Styling',
    h1: 'Expert Hair Stylists & Blowouts On-Demand',
    description: 'Salon-quality blowouts, updos, and styling at your location.',
    longDescription: 'Skip the salon commute. Whether you need a sleek blowout for a meeting or an intricate updo for a wedding, our mobile hair stylists bring the expertise to you. We specialize in all hair textures and event-ready styles.',
    category: 'Hair',
    iconName: 'Scissors',
    seoTitle: 'Mobile Hair Stylists | At-Home Blowouts & Event Styling',
    seoDescription: 'Professional hair styling delivered to your door. Book blowouts, updos, and bridal hair with licensed stylists in your neighborhood.',
    faqs: [
      { q: "Should my hair be wet or dry?", a: "For blowouts, please have your hair washed and damp. For formal updos, it is often best to have dry, 'day-old' hair for better hold." }
    ]
  },
  {
    slug: 'nails',
    name: 'Nail Services',
    h1: 'Luxury Manicures & Pedicures at Home',
    description: 'Professional nail care, gel manicures, and spa pedicures in your own space.',
    longDescription: 'Transform your living room into a relaxing spa. VÉLOURA offers premium nail services including classic manicures, long-lasting gel, and deluxe pedicures. Perfect for busy professionals, seniors, or a self-care day at home.',
    category: 'NAILs',
    iconName: 'HandHeart',
    seoTitle: 'At-Home Nail Services | Mobile Manicures & Pedicures',
    seoDescription: 'Get salon-quality nails at home. Licensed technicians offering gel manicures, pedicures, and nail art on-demand.',
    faqs: [
      { q: "How do you handle sanitation?", a: "Safety is our priority. Every pro uses hospital-grade disinfectants and single-use files/buffers for every client." }
    ]
  },
  {
    slug: 'skincare',
    name: 'Skincare & Facials',
    h1: 'Mobile Skin Wellness & Hydrating Facials',
    description: 'Expert estheticians providing glow-inducing skincare treatments at home.',
    longDescription: 'Achieve radiant skin without the stress of travel. Our licensed estheticians provide hydrating, deep-cleansing, and anti-aging facials using professional-grade products tailored to your skin type.',
    category: 'Glow & Skin Wellness',
    iconName: 'Flower2',
    seoTitle: 'Mobile Skincare & Facials | At-Home Esthetician Services',
    seoDescription: 'Professional skincare and facials delivered to your home or hotel. Licensed estheticians for glow-inducing treatments.',
    faqs: [
      { q: "What should I prepare for a facial?", a: "Please have a comfortable chair or space to lie down, and access to a sink for the professional to wash their hands." }
    ]
  },
  {
    slug: 'senior-care',
    name: 'Senior Care',
    h1: 'VÉLOURA Senior Care: Beauty & Companionship',
    description: 'Professional, gentle beauty and non-medical companionship services for seniors at home.',
    longDescription: 'VÉLOURA Senior Care brings caring beauty and companionship services directly to the senior’s home, assisted living residence, retirement community, or senior apartment. Our professionals are trained to be gentle, patient, and respectful, providing essential grooming and uplifting social interaction.',
    category: 'Customer Solutions',
    iconName: 'Heart',
    seoTitle: 'Senior Beauty Services at Home | VÉLOURA Senior Care',
    seoDescription: 'Book gentle in-home hair, nail, and companionship services for seniors. VÉLOURA brings professional care directly to the door.',
    faqs: [
      { q: "What are Senior Care services?", a: "These are specially priced and designed services for older adults that may include extra time and gentle techniques." },
      { q: "Do you provide medical care?", a: "No, VÉLOURA provides non-medical companionship and beauty services only." }
    ]
  }
];

export const ACTIVE_LOCATIONS: LocationHub[] = [
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    h1: 'Mobile Beauty Services in Los Angeles',
    description: 'Elite beauty talent delivered to homes and hotels across the LA metro area.',
    areas: ['Santa Monica', 'West Hollywood', 'Beverly Hills', 'Downtown LA', 'Pasadena'],
    seoTitle: 'On-Demand Beauty Services Los Angeles | Mobile Hair & Makeup',
    seoDescription: 'Book licensed beauty professionals in Los Angeles. Mobile hair, makeup, and nail services delivered to your home or hotel suite.'
  },
  {
    slug: 'new-york',
    name: 'New York City',
    h1: 'On-Demand Beauty & Glam in New York City',
    description: 'The premier mobile beauty platform for Manhattan, Brooklyn, and Queens.',
    areas: ['Upper East Side', 'SoHo', 'Midtown', 'Williamsburg', 'Astoria'],
    seoTitle: 'Mobile Beauty Services NYC | At-Home Makeup & Hair New York',
    seoDescription: 'New York City\'s top on-demand beauty marketplace. Licensed professionals for home and hotel appointments in Manhattan and beyond.'
  },
  {
    slug: 'miami',
    name: 'Miami',
    h1: 'Luxury Mobile Beauty Services in Miami',
    description: 'Your choice for red-carpet glam in South Beach, Brickell, and Coral Gables.',
    areas: ['South Beach', 'Brickell', 'Coral Gables', 'Design District', 'Sunny Isles'],
    seoTitle: 'On-Demand Beauty Miami | Mobile Hair, Makeup & Nails FL',
    seoDescription: 'Elite mobile beauty talent in Miami. Book licensed pros for on-site services at your home, hotel, or yacht.'
  }
];