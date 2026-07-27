
export type ProfessionalSpecialty = 'Photography' | 'Beauty';

export interface PublicProfessional {
  id: string;
  slug: string;
  firstName: string;
  lastInitial: string;
  title: string;
  city: string;
  state: string;
  specialty: ProfessionalSpecialty;
  maskedCredential: string;
  description: string;
}

// Map of state codes to full names for cleaning
const stateMap: Record<string, string> = {
  'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
  'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
  'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
  'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
  'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
  'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
  'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
  'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
  'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
  'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming',
  'DC': 'District of Columbia'
};

/**
 * Sanitized data source for VÉLOURA Professionals.
 * Created from validated CSV records where Status is 'Approved'.
 * Private information (Email, Phone, raw License, raw Location) is excluded.
 */
export const VÉLOURA_PROFESSIONALS: PublicProfessional[] = [
  {
    id: "1",
    slug: "ashanti-n-frisco",
    firstName: "Ashanti",
    lastInitial: "N.",
    title: "Beauty Professional",
    city: "Frisco",
    state: "Texas",
    specialty: "Beauty",
    maskedCredential: "••••023",
    description: "Ashanti is an approved VÉLOURA professional serving clients in Frisco, Texas. Service and credential details are being verified. Booking is available through the VÉLOURA Beauty on Demand app."
  },
  {
    id: "2",
    slug: "adele-t-jupiter-island",
    firstName: "Adele",
    lastInitial: "T.",
    title: "Beauty Professional",
    city: "Jupiter Island",
    state: "Florida",
    specialty: "Beauty",
    maskedCredential: "CL•••051",
    description: "Adele is an approved VÉLOURA professional serving clients in Jupiter Island, Florida. Service and credential details are being verified. Booking is available through the VÉLOURA Beauty on Demand app."
  },
  {
    id: "3",
    slug: "natalie-c-corpus-christi",
    firstName: "Natalie",
    lastInitial: "C.",
    title: "Beauty Professional",
    city: "Corpus Christi",
    state: "Texas",
    specialty: "Beauty",
    maskedCredential: "••••970",
    description: "Natalie is an approved VÉLOURA professional serving clients in Corpus Christi, Texas. Service and credential details are being verified. Booking is available through the VÉLOURA Beauty on Demand app."
  },
  {
    id: "4",
    slug: "shavaughn-b-dallas",
    firstName: "Shavaughn",
    lastInitial: "B.",
    title: "Beauty Professional",
    city: "Dallas",
    state: "Texas",
    specialty: "Beauty",
    maskedCredential: "••••305",
    description: "Shavaughn is an approved VÉLOURA professional serving clients in Dallas, Texas. Service and credential details are being verified. Booking is available through the VÉLOURA Beauty on Demand app."
  },
  {
    id: "5",
    slug: "saday-c-albuquerque",
    firstName: "Saday",
    lastInitial: "C.",
    title: "Beauty Professional",
    city: "Albuquerque",
    state: "New Mexico",
    specialty: "Beauty",
    maskedCredential: "BCB-•••075",
    description: "Saday is an approved VÉLOURA professional serving clients in Albuquerque, New Mexico. Service and credential details are being verified. Booking is available through the VÉLOURA Beauty on Demand app."
  },
  {
    id: "6",
    slug: "ralphann-f-williamsburg",
    firstName: "Ralphann",
    lastInitial: "F.",
    title: "Beauty Professional",
    city: "Williamsburg",
    state: "Virginia",
    specialty: "Beauty",
    maskedCredential: "••••116",
    description: "Ralphann is an approved VÉLOURA professional serving clients in Williamsburg, Virginia. Service and credential details are being verified. Booking is available through the VÉLOURA Beauty on Demand app."
  },
  {
    id: "7",
    slug: "brooklyn-r-dallas",
    firstName: "Brooklyn",
    lastInitial: "R.",
    title: "Beauty Professional",
    city: "Dallas",
    state: "Texas",
    specialty: "Beauty",
    maskedCredential: "••••387",
    description: "Brooklyn is an approved VÉLOURA professional serving clients in Dallas, Texas. Service and credential details are being verified. Booking is available through the VÉLOURA Beauty on Demand app."
  },
  {
    id: "8",
    slug: "lauren-p-west-covina",
    firstName: "Lauren",
    lastInitial: "P.",
    title: "Beauty Professional",
    city: "West Covina",
    state: "California",
    specialty: "Beauty",
    maskedCredential: "Z•••845",
    description: "Lauren is an approved VÉLOURA professional serving clients in West Covina, California. Service and credential details are being verified. Booking is available through the VÉLOURA Beauty on Demand app."
  },
  {
    id: "9",
    slug: "alyssia-y-marietta",
    firstName: "Alyssia",
    lastInitial: "Y.",
    title: "Beauty Professional",
    city: "Marietta",
    state: "Georgia",
    specialty: "Beauty",
    maskedCredential: "ES•••624",
    description: "Alyssia is an approved VÉLOURA professional serving clients in Marietta, Georgia. Service and credential details are being verified. Booking is available through the VÉLOURA Beauty on Demand app."
  },
  {
    id: "10",
    slug: "nathaniel-w-atlanta",
    firstName: "Nathaniel",
    lastInitial: "W.",
    title: "Professional Photographer",
    city: "Atlanta",
    state: "Georgia",
    specialty: "Photography",
    maskedCredential: "PH•••520",
    description: "Nathaniel provides professional on-location photography services for portraits, events, lifestyle sessions, personal branding, and special occasions. Booking is available through the VÉLOURA Beauty on Demand app."
  },
  {
    id: "11",
    slug: "eva-z-thousand-oaks",
    firstName: "Eva",
    lastInitial: "Z.",
    title: "Beauty Professional",
    city: "Thousand Oaks",
    state: "California",
    specialty: "Beauty",
    maskedCredential: "••••0",
    description: "Eva is an approved VÉLOURA professional serving clients in Thousand Oaks, California. Service and credential details are being verified. Booking is available through the VÉLOURA Beauty on Demand app."
  },
  {
    id: "12",
    slug: "hannah-t-pasadena",
    firstName: "Hannah",
    lastInitial: "T.",
    title: "Beauty Professional",
    city: "Pasadena",
    state: "California",
    specialty: "Beauty",
    maskedCredential: "Z•••904",
    description: "Hannah is an approved VÉLOURA professional serving clients in Pasadena, California. Service and credential details are being verified. Booking is available through the VÉLOURA Beauty on Demand app."
  },
  {
    id: "13",
    slug: "rosa-l-marysville",
    firstName: "Rosa",
    lastInitial: "L.",
    title: "Beauty Professional",
    city: "Marysville",
    state: "Washington",
    specialty: "Beauty",
    maskedCredential: "••••398",
    description: "Rosa is an approved VÉLOURA professional serving clients in Marysville, Washington. Service and credential details are being verified. Booking is available through the VÉLOURA Beauty on Demand app."
  },
  {
    id: "14",
    slug: "rachel-d-lynchburg",
    firstName: "Rachel",
    lastInitial: "D.",
    title: "Beauty Professional",
    city: "Lynchburg",
    state: "Virginia",
    specialty: "Beauty",
    maskedCredential: "••••793",
    description: "Rachel is an approved VÉLOURA professional serving clients in Lynchburg, Virginia. Service and credential details are being verified. Booking is available through the VÉLOURA Beauty on Demand app."
  },
  {
    id: "15",
    slug: "cyion-r-atlanta",
    firstName: "Cyion",
    lastInitial: "R.",
    title: "Professional Photographer",
    city: "Atlanta",
    state: "Georgia",
    specialty: "Photography",
    maskedCredential: "PH•••520",
    description: "Cyion provides professional on-location photography services for portraits, events, lifestyle sessions, personal branding, and special occasions. Booking is available through the VÉLOURA Beauty on Demand app."
  }
];
