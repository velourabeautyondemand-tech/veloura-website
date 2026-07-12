import { SEONode } from './types';

export const SEO_MARKETPLACE_NODES: SEONode[] = [
  {
    id: 'venue-hotels',
    type: 'venue',
    slug: 'hotels',
    isPublished: true,
    metadata: {
      title: 'Hotel Beauty Services On-Demand | VÉLOURA Mobile Glam',
      description: 'Book elite beauty professionals for your hotel suite. On-demand blowouts, makeup, and nails delivered to your room in LA, NYC, and Miami.',
    },
    content: {
      h1: 'Five-Star Beauty, Delivered to Your Hotel Suite',
      intro: 'Traveling shouldn’t mean compromising your self-care routine. VÉLOURA partners with leading hotels to bring licensed beauty professionals directly to your door. Whether you’re preparing for a red-carpet event, a business conference, or simply need a moment of calm, our elite pros arrive fully equipped to transform your suite into a private salon.',
      howItWorks: [
        { title: 'Book Your Suite', text: 'Select your hotel location and desired service through the VÉLOURA app.' },
        { title: 'Match with Talent', text: 'Browse vetted portfolios of professionals available in your area.' },
        { title: 'Suite-Side Delivery', text: 'Your professional arrives at your room, ready to provide a five-star experience.' }
      ],
      faqs: [
        { q: 'Do I need to notify the hotel concierge?', a: 'While not required, it is often helpful. Our professionals are used to working within luxury hotel environments.' },
        { q: 'Can I book for multiple people in one suite?', a: 'Yes, VÉLOURA is perfect for groups getting ready together before an event.' },
        { q: 'What if I don’t have a salon-style chair?', a: 'Our pros are experienced in mobile setups and will adapt to your suite layout and furniture.' }
      ]
    },
    cta: {
      label: 'Find My Match',
      href: '/match'
    }
  },
  {
    id: 'venue-home',
    type: 'venue',
    slug: 'home-service',
    isPublished: true,
    metadata: {
      title: 'At-Home Beauty Services | VÉLOURA Professional Salon Results',
      description: 'Skip the salon commute. VÉLOURA brings licensed beauty experts to your home for manicures, blowouts, and makeup. Professional, safe, and convenient.',
    },
    content: {
      h1: 'Professional Salon Services in the Comfort of Your Home',
      intro: 'Your home is your sanctuary. VÉLOURA brings the luxury of a high-end studio to your living room, eliminating the stress of traffic, parking, and waiting rooms. Our mobile-first platform connects you with the top 10% of local talent, ensuring you receive personalized, one-on-one attention in the environment where you feel most relaxed.',
      howItWorks: [
        { title: 'Request Service', text: 'Choose your beauty service and set your home address in the app.' },
        { title: 'Choose Your Pro', text: 'Review ratings and verified work samples from local experts.' },
        { title: 'Relax at Home', text: 'Your pro arrives with everything needed for a salon-quality result.' }
      ],
      faqs: [
        { q: 'How much space do I need?', a: 'A standard chair and access to a power outlet is usually all that is required for most services.' },
        { q: 'Is it safe to have a professional in my home?', a: 'Yes. Every VÉLOURA pro undergoes multi-step background and identity verification.' },
        { q: 'Do you clean up after the service?', a: 'Absolutely. Our professionals are trained to leave your space exactly as they found it.' }
      ]
    },
    cta: {
      label: 'Book at Home',
      href: '/match'
    }
  },
  {
    id: 'occasion-weddings',
    type: 'occasion',
    slug: 'weddings',
    isPublished: true,
    metadata: {
      title: 'Wedding Beauty Services | VÉLOURA Luxury Bridal Glam',
      description: 'Elite bridal beauty that comes to you. Book mobile makeup artists and hairstylists for brides and bridal parties in LA, NYC, and Miami.',
    },
    content: {
      h1: 'Luxury Wedding Beauty That Comes to You',
      intro: 'Your wedding morning should be as beautiful as the ceremony itself. VÉLOURA provides comprehensive on-site beauty support for brides and bridal parties, ensuring a stress-free environment while you get ready. Our elite network specializes in long-wear, photo-ready glam that honors your unique style.',
      howItWorks: [
        { title: 'Bridal Consultation', text: 'Connect with our team to discuss your bridal vision and headcount.' },
        { title: 'Professional Match', text: 'We match you with specialists who excel in wedding and event styling.' },
        { title: 'Wedding Day Support', text: 'A coordinated team arrives at your venue or suite for seamless execution.' }
      ],
      faqs: [
        { q: 'How early should I book for my wedding?', a: 'We recommend booking 3-6 months in advance to secure your preferred professional.' },
        { q: 'Can you handle large bridal parties?', a: 'Yes, VÉLOURA can deploy multiple professionals to ensure everyone is ready on time.' },
        { q: 'Do you provide on-site touch-ups?', a: 'Yes, many of our bridal packages include optional touch-up support through photos.' }
      ]
    },
    cta: {
      label: 'Inquire About Bridal Talent',
      href: 'mailto:support@velourabeautyondemand.com?subject=Bridal%20Service%20Inquiry'
    }
  },
  {
    id: 'solution-seniors',
    type: 'solution',
    slug: 'seniors',
    isPublished: true,
    metadata: {
      title: 'Senior Beauty Services | VÉLOURA Accessible On-Demand Beauty',
      description: 'Professional, gentle beauty services for seniors and individuals with limited mobility. Licensed pros providing nails, hair, and care at home.',
    },
    content: {
      h1: 'Accessible Beauty Services for Seniors',
      intro: 'Self-care is a vital part of dignity and well-being at every age. VÉLOURA offers specialized beauty services designed specifically for seniors and those with limited mobility. Our professionals are trained to be gentle, patient, and respectful, providing essential grooming and uplifting experiences right at home.',
      howItWorks: [
        { title: 'Gentle Match', text: 'We match the client with a professional experienced in mobility-limited care.' },
        { title: 'Safe Environment', text: 'Services are adapted to the client’s comfort and physical needs.' },
        { title: 'Dignified Results', text: 'Professional care that restores confidence and routine without the stress of travel.' }
      ],
      faqs: [
        { q: 'Are the products safe for sensitive skin?', a: 'Yes, our professionals prioritize fragrance-free and non-toxic formulas suitable for mature skin.' },
        { q: 'Can you provide services in assisted living?', a: 'Yes, we can visit private residences or approved senior living communities.' },
        { q: 'Is this a medical service?', a: 'No, VÉLOURA provides non-medical beauty and lifestyle services. We do not provide nursing or healthcare services.' }
      ]
    },
    cta: {
      label: 'Contact Care Team',
      href: '/contact'
    }
  }
];
