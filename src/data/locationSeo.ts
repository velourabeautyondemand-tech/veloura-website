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
    name: "Los Angeles",
    slug: "los-angeles",
    stateName: "California",
    stateCode: "CA",
    marketStatus: "active",
    introduction: "VÉLOURA connects Los Angeles clients with mobile beauty professionals for appointments at homes, hotels, offices, weddings, photoshoots, and approved event locations across the city.",
    localHighlights: ["Hotel and suite appointments", "Wedding and red-carpet preparation", "On-location beauty for productions and events"],
    neighborhoods: ["Downtown Los Angeles", "Hollywood", "West Hollywood", "Los Feliz", "Silver Lake", "Century City"],
    nearbyCitySlugs: ["beverly-hills", "santa-monica", "pasadena"],
    venueTypes: ["Private Homes", "Hotels", "Production Sets", "Corporate Offices"],
    uniqueFAQs: [
      { q: "Where are mobile beauty appointments available in Los Angeles?", a: "Availability varies by professional and appointment time. Customers can use the VÉLOURA app to request service at eligible homes, hotels, offices, weddings, and event locations across Los Angeles." },
      { q: "Can I request hair and makeup at a Los Angeles hotel?", a: "Yes. Hotel and suite requests are supported where the property permits outside beauty professionals and the appointment can be completed safely." }
    ]
  },
  {
    name: "Pasadena",
    slug: "pasadena",
    stateName: "California",
    stateCode: "CA",
    marketStatus: "active",
    introduction: "Known for its historic charm and vibrant culture, Pasadena is a hub for elegance in the San Gabriel Valley. VÉLOURA brings elite beauty talent to the 'Rose City'.",
    localHighlights: ["Old Town luxury apartments", "The Langham bridal prep", "Rose Bowl event styling"],
    neighborhoods: ["Old Town", "South Pas", "Bungalow Heaven", "San Marino", "Madison Heights"],
    nearbyCitySlugs: ["beverly-hills", "santa-monica"],
    venueTypes: ["Private Homes", "Historic Estates", "Luxury Hotels"],
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
    introduction: "The global standard for luxury and glamour. VÉLOURA delivers a level of service that matches the high expectations of 90210.",
    localHighlights: ["Red-carpet awards season prep", "Luxury suite transformations", "High-discretion home visits"],
    neighborhoods: ["The Flats", "Trousdale Estates", "Golden Triangle", "Beverly Crest"],
    nearbyCitySlugs: ["santa-monica", "pasadena"],
    venueTypes: ["Mansions", "Penthouse Suites", "Production Sets"],
    uniqueFAQs: [
      { q: "Can you accommodate high-profile security protocols?", a: "Yes, our professionals are experienced in working with high-discretion clients." }
    ]
  },
  {
    name: "Santa Monica",
    slug: "santa-monica",
    stateName: "California",
    stateCode: "CA",
    marketStatus: "active",
    introduction: "Beachside beauty at its finest. VÉLOURA brings relaxed luxury to the Westside.",
    localHighlights: ["Beachfront wedding glam", "Coastal hotel suite service", "Tech-hub office visits"],
    neighborhoods: ["Ocean Park", "North of Montana", "Sunset Park", "Main Street"],
    nearbyCitySlugs: ["beverly-hills"],
    venueTypes: ["Beachfront Homes", "Boutique Hotels", "Modern Lofts"],
    uniqueFAQs: []
  },
  {
    name: "Manhattan",
    slug: "manhattan",
    stateName: "New York",
    stateCode: "NY",
    marketStatus: "active",
    introduction: "The city that never sleeps moves fast, and VÉLOURA keeps up. We bring elite beauty services to the heart of NYC.",
    localHighlights: ["Midtown corporate styling", "SoHo loft transformations", "Upper East Side home service"],
    neighborhoods: ["Upper East Side", "Midtown", "SoHo", "Chelsea", "Upper West Side"],
    nearbyCitySlugs: [],
    venueTypes: ["Apartments", "Lofts", "Corporate Headquarters", "Boutique Hotels"],
    uniqueFAQs: [
      { q: "How fast can I book in Manhattan?", a: "We recommend booking at least 24 hours in advance, but the app shows real-time availability." }
    ]
  },
  {
    name: "Miami",
    slug: "miami",
    stateName: "Florida",
    stateCode: "FL",
    marketStatus: "active",
    introduction: "Where vibrant energy meets coastal luxury. VÉLOURA brings top-tier talent to Miami's most iconic locations.",
    localHighlights: ["Brickell high-rise glam", "Design District event styling", "Waterfront estate visits"],
    neighborhoods: ["Brickell", "Coconut Grove", "Coral Gables", "Design District"],
    nearbyCitySlugs: ["miami-beach", "fort-lauderdale"],
    venueTypes: ["Luxury Condos", "Waterfront Homes", "Yachts"],
    uniqueFAQs: []
  }
];

export const SERVICES: Service[] = [
  {
    name: "Mobile Makeup Artist",
    slug: "mobile-makeup-artist",
    shortDescription: "Professional on-site makeup for everyday glam, events, and photoshoots.",
    customerIntent: "Get a high-quality makeup look without traveling.",
    benefits: ["Customized styles", "Long-wear products", "One-on-one attention"],
    suitableFor: ["Parties", "Gala Events", "Photoshoots"],
    preparationTips: ["Cleanse and moisturize your face", "Have a space with good natural light"],
    relatedServiceSlugs: ["mobile-hairstylist", "bridal-makeup"]
  },
  {
    name: "Mobile Hairstylist",
    slug: "mobile-hairstylist",
    shortDescription: "Expert hair styling, blowouts, and updos delivered to your door.",
    customerIntent: "Professional styling in your own space.",
    benefits: ["Long-lasting blowouts", "All hair textures", "Time-saving"],
    suitableFor: ["Meetings", "Events", "Night Out"],
    preparationTips: ["Wash hair 30-60 mins prior for blowouts", "Have a chair near a power outlet"],
    relatedServiceSlugs: ["mobile-makeup-artist", "wedding-hair"]
  },
  {
    name: "Bridal Makeup",
    slug: "bridal-makeup",
    shortDescription: "Exquisite, camera-ready makeup for your wedding day.",
    customerIntent: "Flawless bridal glam.",
    benefits: ["High-definition finish", "Stress-free suite application"],
    suitableFor: ["Brides", "Bridesmaids"],
    preparationTips: ["Schedule a trial session first", "Stay hydrated"],
    relatedServiceSlugs: ["wedding-hair", "mobile-makeup-artist"]
  },
  {
    name: "Wedding Hair",
    slug: "wedding-hair",
    shortDescription: "Professional bridal hair styling for a timeless wedding look.",
    customerIntent: "Perfect wedding hairstyle.",
    benefits: ["Veil placement", "Styles built to last"],
    suitableFor: ["Brides", "Bridal Parties"],
    preparationTips: ["Ensure hair is completely dry", "Bring accessories"],
    relatedServiceSlugs: ["bridal-makeup", "mobile-hairstylist"]
  }
];

export const PAGE_COMBINATIONS: PageCombination[] = [
  {
    citySlug: "los-angeles",
    serviceSlug: "mobile-makeup-artist",
    enabled: true,
    uniqueIntro: "Request professional mobile makeup in Los Angeles for events, photoshoots, weddings, hotel stays, and everyday appointments without traveling to a salon.",
    uniqueLocalDetails: "VÉLOURA supports eligible appointments across Los Angeles neighborhoods, hotels, private residences, offices, and approved production or event locations.",
    customTitle: "Mobile Makeup Artist Los Angeles | VÉLOURA",
    customDescription: "Request a mobile makeup artist in Los Angeles for home, hotel, wedding, event, and photoshoot appointments through VÉLOURA."
  },
  {
    citySlug: "los-angeles",
    serviceSlug: "mobile-hairstylist",
    enabled: true,
    uniqueIntro: "Request a mobile hairstylist in Los Angeles for blowouts, styling, updos, events, hotel stays, and special occasions at an eligible location.",
    uniqueLocalDetails: "Appointments may be requested for Los Angeles homes, hotels, offices, weddings, productions, and approved event venues based on professional availability.",
    customTitle: "Mobile Hair Stylist Los Angeles | VÉLOURA",
    customDescription: "Request a mobile hairstylist in Los Angeles for home, hotel, wedding, event, and special-occasion appointments through VÉLOURA."
  },
  {
    citySlug: "pasadena",
    serviceSlug: "mobile-makeup-artist",
    enabled: true,
    uniqueIntro: "Elevate your look in the Rose City. Our Pasadena makeup artists bring professional glam directly to your doorstep in Old Town.",
    uniqueLocalDetails: "Whether you're prepping for a gala at the Pasadena Convention Center or a refined evening in San Marino, our local pros deliver."
  },
  {
    citySlug: "beverly-hills",
    serviceSlug: "mobile-hairstylist",
    enabled: true,
    uniqueIntro: "Red-carpet ready in 90210. Our stylists transform your Beverly Hills home or suite into a private salon.",
    uniqueLocalDetails: "From The Flats to Trousdale Estates, we provide the elite styling required for the city's highest profile events."
  },
  {
    citySlug: "manhattan",
    serviceSlug: "mobile-hairstylist",
    enabled: true,
    uniqueIntro: "Skip the NYC traffic and bring the stylist to your Upper East Side brownstone or Financial District loft.",
    uniqueLocalDetails: "In a city that moves at lightning speed, VÉLOURA provides the efficiency Manhattan professionals demand."
  }
];
