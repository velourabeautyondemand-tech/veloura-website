import { SEONode } from './types';

export const SEO_MARKETPLACE_NODES: SEONode[] = [
  // BEAUTY ESSENTIALS
  {
    id: 'service-makeup',
    type: 'service',
    slug: 'makeup',
    displayName: 'Makeup Artistry',
    shortDescription: 'Professional on-site glam for everyday, events, and photoshoots.',
    displayCategory: 'Beauty Essentials',
    filterCategory: 'beauty',
    iconName: 'Sparkles',
    isPublished: true,
    metadata: {
      title: 'Professional Mobile Makeup Artist Services | VÉLOURA',
      description: 'Book elite makeup artists for on-demand glam. At-home and hotel services for weddings, events, and photoshoots in LA, NYC, and Miami.',
    },
    content: {
      h1: 'Professional Makeup Artist On-Demand',
      intro: 'VÉLOURA connects you with the top 10% of licensed makeup artists specializing in everyday essentials, red-carpet events, and bridal beauty.',
      howItWorks: [
        { title: 'Request Look', text: 'Select your style and location in the VÉLOURA app.' },
        { title: 'Artist Match', text: 'Vetted professionals review your request.' },
        { title: 'Glam Delivery', text: 'The pro arrives with a full kit to your door.' }
      ],
      faqs: [
        { q: 'Do I need my own makeup?', a: 'No, pros arrive with fully equipped professional kits.' },
        { q: 'How long does it take?', a: 'Standard sessions are 60-90 minutes.' }
      ]
    },
    cta: { label: 'Explore Makeup', href: '/services/makeup' }
  },
  {
    id: 'service-hair',
    type: 'service',
    slug: 'hair',
    displayName: 'Hair Styling',
    shortDescription: 'Salon-quality blowouts, updos, and expert styling delivered to you.',
    displayCategory: 'Beauty Essentials',
    filterCategory: 'beauty',
    iconName: 'Scissors',
    isPublished: true,
    metadata: {
      title: 'Mobile Hair Stylists | At-Home Blowouts & Styling | VÉLOURA',
      description: 'Professional hair styling delivered to your door. Book blowouts, updos, and bridal hair with licensed stylists.',
    },
    content: {
      h1: 'Expert Hair Stylists & Blowouts On-Demand',
      intro: 'Skip the commute. Whether you need a sleek blowout or an intricate updo, our mobile stylists bring the salon expertise to you.',
      howItWorks: [],
      faqs: []
    },
    cta: { label: 'Explore Hair', href: '/services/hair' }
  },
  {
    id: 'service-nails',
    type: 'service',
    slug: 'nails',
    displayName: 'Nail Services',
    shortDescription: 'Luxury manicures, gel, and spa pedicures in your own space.',
    displayCategory: 'Beauty Essentials',
    filterCategory: 'beauty',
    iconName: 'HandHeart',
    isPublished: true,
    metadata: {
      title: 'At-Home Nail Services | Mobile Manicures & Pedicures | VÉLOURA',
      description: 'Get salon-quality nails at home. Licensed technicians offering gel manicures, pedicures, and nail art.',
    },
    content: {
      h1: 'Luxury Manicures & Pedicures at Home',
      intro: 'Transform your living room into a relaxing spa with premium nail services delivered directly to your door.',
      howItWorks: [],
      faqs: []
    },
    cta: { label: 'Explore Nails', href: '/services/nails' }
  },
  // SPECIAL OCCASIONS
  {
    id: 'occasion-weddings',
    type: 'occasion',
    slug: 'weddings',
    displayName: 'Bridal & Wedding',
    shortDescription: 'Comprehensive on-site beauty support for brides and bridal parties.',
    displayCategory: 'Special Occasions',
    filterCategory: 'wedding-event',
    iconName: 'Heart',
    isPublished: true,
    metadata: {
      title: 'Wedding Beauty Services | VÉLOURA Luxury Bridal Glam',
      description: 'Elite bridal beauty that comes to you. Book mobile makeup artists and hairstylists for brides and bridal parties.',
    },
    content: {
      h1: 'Luxury Wedding Beauty That Comes to You',
      intro: 'Ensure a stress-free wedding morning with elite on-site beauty support tailored to your unique style.',
      howItWorks: [
        { title: 'Bridal Consultation', text: 'Connect with our team to discuss your bridal vision.' },
        { title: 'Trial Session', text: 'Book a trial to perfect your look before the big day.' },
        { title: 'Wedding Day', text: 'A coordinated team arrives at your venue or suite.' }
      ],
      faqs: []
    },
    cta: { label: 'Bridal Services', href: '/occasions/weddings' }
  },
  // LIFESTYLE & CREATIVE
  {
    id: 'service-photography',
    type: 'service',
    slug: 'photography',
    displayName: 'Photography',
    shortDescription: 'Professional event, portrait, and glamour photography on-demand.',
    displayCategory: 'Lifestyle & Creative',
    filterCategory: 'creative',
    iconName: 'Camera',
    isPublished: true,
    metadata: {
      title: 'On-Demand Photographers | Event & Portrait Sessions | VÉLOURA',
      description: 'Book professional photographers for event coverage and portrait sessions. Integrated beauty and photography.',
    },
    content: {
      h1: 'Professional Event & Portrait Photography',
      intro: 'Capture your best moments. VÉLOURA is the first platform to fully integrate elite beauty and professional photography.',
      howItWorks: [],
      faqs: []
    },
    cta: { label: 'Explore Photo', href: '/services/photography' }
  },
  // VENUE-BASED
  {
    id: 'venue-hotels',
    type: 'venue',
    slug: 'hotels',
    displayName: 'Hotel Services',
    shortDescription: 'Five-star beauty delivered directly to your hotel suite.',
    displayCategory: 'Venue-Based Services',
    filterCategory: 'venue',
    iconName: 'Hotel',
    isPublished: true,
    metadata: {
      title: 'Hotel Beauty Services On-Demand | VÉLOURA Mobile Glam',
      description: 'Book elite beauty professionals for your hotel suite. On-demand services in LA, NYC, and Miami.',
    },
    content: {
      h1: 'Five-Star Beauty, Delivered to Your Suite',
      intro: 'Traveling shouldn’t mean compromising your routine. We partner with hotels to bring pros directly to your door.',
      howItWorks: [],
      faqs: []
    },
    cta: { label: 'Hotel Service', href: '/venues/hotels' }
  },
  {
    id: 'venue-home',
    type: 'venue',
    slug: 'home-service',
    displayName: 'At-Home Beauty',
    shortDescription: 'Your home is your sanctuary. We bring the luxury studio to you.',
    displayCategory: 'Venue-Based Services',
    filterCategory: 'venue',
    iconName: 'Home',
    isPublished: true,
    metadata: {
      title: 'At-Home Beauty Services | VÉLOURA Professional Salon Results',
      description: 'Skip the commute. VÉLOURA brings licensed beauty experts to your home for manicures and hair.',
    },
    content: {
      h1: 'Professional Salon Services at Home',
      intro: 'Enjoy personalized, one-on-one attention in the environment where you feel most relaxed.',
      howItWorks: [],
      faqs: []
    },
    cta: { label: 'Home Service', href: '/venues/home-service' }
  },
  // SOLUTIONS
  {
    id: 'solution-seniors',
    type: 'solution',
    slug: 'senior-care',
    displayName: 'VÉLOURA Senior Care',
    shortDescription: 'Gentle, respectful grooming and companionship for seniors at home.',
    displayCategory: 'Customer Solutions',
    filterCategory: 'solution',
    iconName: 'Heart',
    isPublished: true,
    metadata: {
      title: 'Senior Beauty Services at Home | VÉLOURA Senior Care',
      description: 'Professional, gentle beauty and companionship services for seniors and individuals with limited mobility.',
    },
    content: {
      h1: 'VÉLOURA Senior Care: Beauty & Companionship',
      intro: 'Self-care is vital to dignity at every age. Our pros are trained to be gentle, patient, and respectful, providing essential grooming right at home.',
      howItWorks: [
        { title: 'Gentle Assessment', text: 'We match you with a pro experienced in senior care.' },
        { title: 'Comfortable Visit', text: 'Services are adapted to the client’s comfort and pace.' },
        { title: 'Restored Routine', text: 'Professional care that restores confidence and social connection.' }
      ],
      faqs: [
        { q: 'Are the products safe for sensitive skin?', a: 'Yes, our pros prioritize fragrance-free and gentle formulas for mature skin.' },
        { q: 'Can you provide services in assisted living?', a: 'Yes, we visit private homes, assisted living, and retirement communities.' }
      ]
    },
    cta: { label: 'Senior Care Hub', href: '/services/senior-care' }
  }
];