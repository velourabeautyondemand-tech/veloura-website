export type MarketStatus = 'active' | 'expanding' | 'planned';

export interface City {
  name: string;
  slug: string;
  stateName: string;
  stateCode: string;
  marketStatus: MarketStatus;
  introduction: string;
  localHighlights: string[];
  neighborhoods: string[];
  nearbyCitySlugs: string[];
  venueTypes: string[];
  uniqueFAQs: { q: string; a: string }[];
}

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  customerIntent: string;
  benefits: string[];
  suitableFor: string[];
  preparationTips: string[];
  relatedServiceSlugs: string[];
}

export interface PageCombination {
  citySlug: string;
  serviceSlug: string;
  enabled: boolean;
  uniqueIntro: string;
  uniqueLocalDetails: string;
  customTitle?: string;
  customDescription?: string;
  customFAQs?: { q: string; a: string }[];
}

export const CITIES: City[] = [
  {
    name: "Pasadena",
    slug: "pasadena",
    stateName: "California",
    stateCode: "CA",
    marketStatus: "active",
    introduction: "Known for its historic charm and vibrant culture, Pasadena is a hub for elegance in the San Gabriel Valley. VÉLOURA brings elite beauty talent to the 'Rose City', serving residents from the Arroyo Seco to the foot of the San Gabriel Mountains.",
    localHighlights: [
      "Historic Old Town Pasadena luxury apartments",
      "Bridal prep in the Langham Huntington and other historic hotels",
      "Event styling for Rose Bowl events and local galas"
    ],
    neighborhoods: ["Old Town", "South Pas", "Bungalow Heaven", "San Marino", "Madison Heights"],
    nearbyCitySlugs: ["beverly-hills", "santa-monica"],
    venueTypes: ["Private Homes", "Historic Estates", "Luxury Hotels", "Corporate Offices"],
    uniqueFAQs: [
      { q: "Do you serve the San Marino area?", a: "Yes, our Pasadena-based professionals regularly serve San Marino and the surrounding neighborhoods." }
    ]
  },
  {
    name: "Beverly Hills",
    slug: "beverly-hills",
    stateName: "California",
    stateCode: "CA",
    marketStatus: "active",
    introduction: "The global standard for luxury and glamour. In Beverly Hills, VÉLOURA delivers a level of service that matches the high expectations of 90210. Our professionals are trained to provide red-carpet-ready results in the privacy of your home or hotel suite.",
    localHighlights: [
      "Red-carpet prep for awards season and industry events",
      "Luxury suite services at the Beverly Hills Hotel and the Waldorf Astoria",
      "High-discretion home visits for high-profile clients"
    ],
    neighborhoods: ["The Flats", "Trousdale Estates", "Golden Triangle", "Beverly Crest"],
    nearbyCitySlugs: ["santa-monica", "pasadena"],
    venueTypes: ["Mansions", "Penthouse Suites", "Production Sets", "Executive Offices"],
    uniqueFAQs: [
      { q: "Can you accommodate high-profile security protocols?", a: "Yes, our professionals are experienced in working with high-discretion clients and following specific property security requirements." }
    ]
  },
  {
    name: "Manhattan",
    slug: "manhattan",
    stateName: "New York",
    stateCode: "NY",
    marketStatus: "active",
    introduction: "The city that never sleeps moves fast, and VÉLOURA keeps up. We bring elite beauty services to the heart of NYC, from Upper East Side brownstones to SoHo lofts, ensuring you look your best without the stress of cross-town traffic.",
    localHighlights: [
      "Quick-turnaround styling for corporate leaders in Midtown",
      "Fashion Week prep and editorial-style glam",
      "Brownstone home services in Chelsea and the Village"
    ],
    neighborhoods: ["Upper East Side", "Midtown", "SoHo", "Chelsea", "Upper West Side"],
    nearbyCitySlugs: [],
    venueTypes: ["Apartments", "Lofts", "Corporate Headquarters", "Boutique Hotels"],
    uniqueFAQs: [
      { q: "How fast can I book in Manhattan?", a: "We recommend booking at least 24 hours in advance, but the app shows real-time availability for last-minute needs." }
    ]
  },
  {
    name: "Miami",
    slug: "miami",
    stateName: "Florida",
    stateCode: "FL",
    marketStatus: "active",
    introduction: "Where vibrant energy meets coastal luxury. VÉLOURA brings top-tier beauty and photography talent to Miami's most iconic locations, from Brickell's high-rises to private waterfront estates.",
    localHighlights: [
      "Sun-kissed beach wedding glam",
      "Corporate event styling in the Design District",
      "Photography-ready looks for private yacht events"
    ],
    neighborhoods: ["Brickell", "Coconut Grove", "Coral Gables", "Design District"],
    nearbyCitySlugs: ["miami-beach", "fort-lauderdale"],
    venueTypes: ["Luxury Condos", "Waterfront Homes", "Hotels", "Yachts"],
    uniqueFAQs: []
  }
];

export const SERVICES: Service[] = [
  {
    name: "Mobile Makeup Artist",
    slug: "mobile-makeup-artist",
    shortDescription: "Professional on-site makeup for everyday glam, events, and photoshoots.",
    customerIntent: "Get a high-quality, professional makeup look without traveling to a studio.",
    benefits: [
      "Customized looks tailored to your skin type and style",
      "Use of professional-grade, long-wear products",
      "Personalized, one-on-one attention"
    ],
    suitableFor: ["Parties", "Gala Events", "Professional Headshots", "Dates", "Self-Care"],
    preparationTips: [
      "Cleanse and moisturize your face before the artist arrives",
      "Have a space with good natural light available",
      "Gather reference photos of your desired look"
    ],
    relatedServiceSlugs: ["mobile-hairstylist", "bridal-makeup"]
  },
  {
    name: "Mobile Hairstylist",
    slug: "mobile-hairstylist",
    shortDescription: "Expert hair styling, blowouts, and updos delivered to your door.",
    customerIntent: "Skip the salon chair and get professional styling in your own space.",
    benefits: [
      "Long-lasting blowouts and event styling",
      "Expertise in all hair textures",
      "Time-saving convenience"
    ],
    suitableFor: ["Meetings", "Events", "Night Out", "Weddings", "Photoshoots"],
    preparationTips: [
      "Wash hair 30-60 minutes prior to blowout services",
      "Have a chair near a power outlet",
      "Keep dry hair free of heavy products for updos"
    ],
    relatedServiceSlugs: ["mobile-makeup-artist", "wedding-hair"]
  },
  {
    name: "Bridal Makeup",
    slug: "bridal-makeup",
    shortDescription: "Exquisite, camera-ready makeup for your wedding day.",
    customerIntent: "Ensure a flawless, long-lasting look for the most important day.",
    benefits: [
      "High-definition, photo-friendly finish",
      "Stress-free application in your bridal suite",
      "Coordinated looks for the entire bridal party"
    ],
    suitableFor: ["Brides", "Bridesmaids", "Mother of the Bride", "Rehearsal Dinners"],
    preparationTips: [
      "Schedule a trial session weeks before the wedding",
      "Wear a button-down shirt or robe during application",
      "Stay hydrated for a natural skin glow"
    ],
    relatedServiceSlugs: ["wedding-hair", "mobile-makeup-artist"]
  },
  {
    name: "Wedding Hair",
    slug: "wedding-hair",
    shortDescription: "Professional bridal hair styling for a timeless wedding look.",
    customerIntent: "Achieve the perfect wedding hairstyle in a relaxed environment.",
    benefits: [
      "Expert placement of veils and hair accessories",
      "Styles built to last from ceremony to last dance",
      "On-site support for the whole group"
    ],
    suitableFor: ["Brides", "Bridal Parties", "Special Guests"],
    preparationTips: [
      "Ensure hair is completely dry unless a blowout is requested",
      "Wash hair the night before for better hold in updos",
      "Bring any hair extensions or accessories to the session"
    ],
    relatedServiceSlugs: ["bridal-makeup", "mobile-hairstylist"]
  }
];

export const PAGE_COMBINATIONS: PageCombination[] = [
  {
    citySlug: "pasadena",
    serviceSlug: "mobile-makeup-artist",
    enabled: true,
    uniqueIntro: "Elevate your look in the Rose City. Our Pasadena makeup artists bring professional glam directly to your doorstep in Old Town or the surrounding historic neighborhoods.",
    uniqueLocalDetails: "Whether you're prepping for a gala at the Pasadena Convention Center or a refined evening in San Marino, our local pros deliver five-star results."
  },
  {
    citySlug: "beverly-hills",
    serviceSlug: "hotel-makeup-artist",
    enabled: true,
    uniqueIntro: "Luxury suite-side glam in 90210. Our specialized hotel makeup artists are experienced in working within the finest Beverly Hills properties to prepare you for any high-profile event.",
    uniqueLocalDetails: "From the Beverly Wilshire to the Maybourne, we transform your hotel room into a private glam studio with professional lighting and elite artistry."
  },
  {
    citySlug: "manhattan",
    serviceSlug: "mobile-hairstylist",
    enabled: true,
    uniqueIntro: "Skip the NYC traffic and bring the stylist to your Upper East Side brownstone or Financial District loft.",
    uniqueLocalDetails: "In a city that moves at lightning speed, VÉLOURA provides the efficiency and expertise Manhattan professionals demand for meetings, galas, and media appearances."
  }
];
