
import { MarketNode } from './types';

export const MARKETPLACE_NODES: MarketNode[] = [
  // VENUES
  {
    id: 'venue-hotels',
    type: 'venue',
    slug: 'hotels',
    isPublished: true,
    score: 95,
    metadata: {
      title: 'Hotel Beauty Services On-Demand | Mobile Glam to Your Suite',
      description: 'Book elite beauty professionals for appointments at your hotel. On-demand blowouts, makeup, and nails delivered directly to your suite in LA, NYC, and Miami.',
    },
    content: {
      h1: 'Five-Star Beauty, Delivered to Your Hotel Suite',
      intro: 'Traveling shouldn’t mean compromising your self-care routine. VÉLOURA partners with leading hotels to bring licensed beauty professionals directly to your door. Whether you’re preparing for a red-carpet event, a business conference, or simply need a moment of calm, our elite pros arrive fully equipped to transform your suite into a private salon.',
      howItWorks: [
        { title: 'Book Your Suite', text: 'Select your hotel location and desired service through the app.' },
        { title: 'Match with Talent', text: 'Browse vetted portfolios of professionals available in your area.' },
        { title: 'Suite-Side Delivery', text: 'Your professional arrives at your room, ready to provide a five-star experience.' }
      ],
      faqs: [
        { q: 'Do I need to notify the hotel concierge?', a: 'While not required, it is often helpful. Our professionals are used to working within luxury hotel environments.' },
        { q: 'Can I book for multiple people in one suite?', a: 'Yes, VÉLOURA is perfect for groups getting ready together before an event.' },
        { q: 'What if I don’t have a table or chair?', a: 'Our pros are experienced in mobile setups and will adapt to your suite layout.' }
      ]
    },
    relationships: {
      relatedServiceIds: ['makeup', 'hair', 'nails'],
      relatedVenueIds: ['home-service'],
      relatedOccasionIds: ['weddings', 'corporate'],
      relatedSolutionIds: ['busy-professionals']
    }
  },
  {
    id: 'venue-home',
    type: 'venue',
    slug: 'home-service',
    isPublished: true,
    score: 90,
    metadata: {
      title: 'At-Home Beauty Services | Professional Salon Results at Home',
      description: 'Skip the salon commute. VÉLOURA brings licensed beauty experts to your home for manicures, blowouts, and makeup. Professional, safe, and convenient.',
    },
    content: {
      h1: 'Professional Salon Services in the Comfort of Your Home',
      intro: 'Your home is your sanctuary. VÉLOURA brings the luxury of a high-end studio to your living room, eliminating the stress of traffic, parking, and waiting rooms. Our mobile-first platform connects you with the top 10% of local talent, ensuring you receive personalized, one-on-one attention in the environment where you feel most relaxed.',
      howItWorks: [
        { title: 'Request Service', text: 'Choose your beauty service and set your home address.' },
        { title: 'Choose Your Pro', text: 'Review ratings and verified work samples from local experts.' },
        { title: 'Relax at Home', text: 'Your pro arrives with everything needed for a salon-quality result.' }
      ],
      faqs: [
        { q: 'How much space do I need?', a: 'A standard chair and access to a power outlet is usually all that is required.' },
        { q: 'Is it safe to have a professional in my home?', a: 'Yes. Every VÉLOURA pro undergoes multi-step background and identity verification.' },
        { q: 'Do you clean up after the service?', a: 'Absolutely. Our professionals are trained to leave your space exactly as they found it.' }
      ]
    },
    relationships: {
      relatedServiceIds: ['nails', 'skincare', 'hair'],
      relatedVenueIds: ['hotels'],
      relatedOccasionIds: ['graduation', 'birthday'],
      relatedSolutionIds: ['seniors', 'mothers']
    }
  },
  // OCCASIONS
  {
    id: 'occasion-weddings',
    type: 'occasion',
    slug: 'weddings',
    isPublished: true,
    score: 100,
    metadata: {
      title: 'On-Demand Wedding Beauty Services | Mobile Bridal Hair & Makeup',
      description: 'Elite bridal beauty for your special day. Book mobile makeup artists and hairstylists for brides and bridal parties. On-site luxury wedding glam.',
    },
    content: {
      h1: 'Luxury Wedding Beauty That Comes to You',
      intro: 'Your wedding morning should be as beautiful as the ceremony itself. VÉLOURA provides comprehensive on-site beauty support for brides and bridal parties, ensuring a stress-free environment while you get ready. Our elite network specializes in long-wear, photo-ready glam that honors your unique style.',
      howItWorks: [
        { title: 'Consultation', text: 'Connect with a specialist to discuss your bridal vision and headcount.' },
        { title: 'Trial Session', text: 'Book a trial to perfect your look before the big day.' },
        { title: 'Wedding Day Support', text: 'A coordinated team arrives at your venue or suite for full-day support.' }
      ],
      faqs: [
        { q: 'How early should I book for my wedding?', a: 'We recommend booking 3-6 months in advance to secure your preferred professional.' },
        { q: 'Can you handle large bridal parties?', a: 'Yes, our Talent Agency can deploy multiple pros to ensure everyone is ready on time.' },
        { q: 'Do you provide on-site touch-ups?', a: 'Yes, many of our bridal packages include optional touch-up support through the photos.' }
      ]
    },
    relationships: {
      relatedServiceIds: ['makeup', 'hair', 'photography'],
      relatedVenueIds: ['hotels', 'home-service'],
      relatedOccasionIds: ['engagement'],
      relatedSolutionIds: ['brides']
    }
  },
  // SOLUTIONS
  {
    id: 'solution-seniors',
    type: 'solution',
    slug: 'seniors',
    isPublished: true,
    score: 85,
    metadata: {
      title: 'In-Home Beauty for Seniors | Accessible Care & Dignity',
      description: 'Professional, gentle beauty services for seniors and people with limited mobility. Licensed pros providing haircuts, nails, and care at home.',
    },
    content: {
      h1: 'Accessible Beauty & Personal Care for Seniors',
      intro: 'Self-care is a vital part of dignity and well-being at every age. VÉLOURA offers specialized "Care Beauty" services designed specifically for seniors and those with limited mobility. Our professionals are trained to be gentle, patient, and respectful, providing essential grooming and uplifting experiences right at home.',
      howItWorks: [
        { title: 'Gentle Assessment', text: 'We match you with a pro experienced in mobility-limited care.' },
        { title: 'Safe Environment', text: 'Services are adapted to the client’s comfort and physical needs.' },
        { title: 'Uplifting Results', text: 'Professional care that restores confidence and routine.' }
      ],
      faqs: [
        { q: 'Are the products safe for sensitive skin?', a: 'Yes, our pros prioritize fragrance-free and non-toxic formulas for mature skin.' },
        { q: 'Can you provide services in assisted living?', a: 'Yes, we can visit private homes or approved senior living communities.' },
        { q: 'Is this covered by insurance?', a: 'VÉLOURA is a private-pay marketplace and does not currently process medical insurance.' }
      ]
    },
    relationships: {
      relatedServiceIds: ['nails', 'hair', 'skincare'],
      relatedVenueIds: ['home-service'],
      relatedOccasionIds: ['birthday'],
      relatedSolutionIds: ['busy-professionals']
    }
  }
];
