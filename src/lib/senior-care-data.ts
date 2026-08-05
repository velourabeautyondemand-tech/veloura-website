
import { Scissors, HandHeart, Sparkles, Heart, Coffee, Footprints, Smartphone, BookOpen, Music, Home, Calendar, Clock, Star, Gift, ShieldAlert } from 'lucide-react';

export const BOOKING_APP_URL = "https://velourabeautyondemand.com/book";

export const seniorCareContent = {
  hero: {
    title: "VÉLOURA Senior Care",
    subtitle: "Beauty & Wellness Home Services for Seniors",
    tagline: "Beauty, Wellness & Companionship—Delivered to Your Door.",
    intro: [
      "Growing older does not mean giving up the little things that help us feel like ourselves.",
      "A fresh haircut, clean nails, a relaxing facial, or a warm conversation over a cup of tea can brighten an entire day.",
      "VÉLOURA Senior Care brings caring beauty and companionship services directly to the senior’s home, assisted living residence, retirement community, or senior apartment.",
      "Some visits may begin with a haircut and end with laughter over family stories. Others may simply include a relaxing beauty service and a quiet cup of tea.",
      "Because sometimes the best part of an appointment is not only looking better—it is knowing someone cared enough to spend time with you."
    ]
  },
  seniorOffer: {
    heading: "Special Pricing for Seniors",
    text: "VÉLOURA Senior Care offers special service pricing for eligible senior clients. These appointments may include extra time, gentle techniques, and additional patience to create a comfortable experience at home.",
    badge: "Senior Exclusive Offer"
  },
  beautyCategories: [
    {
      id: "hair",
      title: "Hair Care",
      icon: Scissors,
      description: "Professional hair services adapted for comfort and mobility.",
      services: [
        "Senior Care Haircut",
        "Senior Care Shampoo & Blow Dry",
        "Senior Care Weekly Hair Wash",
        "Senior Care Hair Coloring—Gray Coverage",
        "Senior Care Perm",
        "Senior Care Scalp Massage",
        "Senior Care Scalp Treatment",
        "Senior Care Beard Trim",
        "Senior Care Mustache Trim"
      ]
    },
    {
      id: "nails",
      title: "Nail Care",
      icon: HandHeart,
      description: "Gentle manicures and pedicures focusing on hand and foot wellness.",
      services: [
        "Senior Care Basic Manicure",
        "Senior Care Gentle Pedicure",
        "Senior Care Nail Trimming",
        "Senior Care Hand Massage",
        "Senior Care Foot Massage",
        "Senior Care Nail Polish",
        "Senior Care Hand Moisturizing Treatment"
      ]
    },
    {
      id: "skin",
      title: "Skin Care",
      icon: Sparkles,
      description: "Nourishing facials and treatments for mature, sensitive skin.",
      services: [
        "Senior Care Gentle Facial",
        "Senior Care Hydrating Facial",
        "Senior Care Sensitive Skin Treatment",
        "Senior Care Face Massage",
        "Senior Care Moisturizing Mask",
        "Senior Care Anti-Aging Facial",
        "Senior Care Hand & Arm Treatment"
      ]
    },
    {
      id: "makeup",
      title: "Makeup",
      icon: Star,
      description: "Soft, natural application for daily confidence or events.",
      services: [
        "Senior Care Everyday Makeup",
        "Senior Care Family Gathering Makeup",
        "Senior Care Birthday Makeup",
        "Senior Care Anniversary Makeup",
        "Senior Care Professional Photo Makeup"
      ]
    },
    {
      id: "brows-lashes",
      title: "Eyebrows & Lashes",
      icon: Heart,
      description: "Framing the face with gentle tinting and shaping.",
      services: [
        "Senior Care Eyebrow Shaping",
        "Senior Care Eyebrow Tint",
        "Senior Care Lash Tint",
        "Senior Care Lash Lift"
      ],
      note: "Service is offered only when appropriate for the client and may be declined by the professional for comfort or safety reasons."
    },
    {
      id: "massage",
      title: "Massage & Relaxation",
      icon: Sparkles,
      description: "Gentle, non-medical relaxation services.",
      services: [
        "Senior Care Head Massage",
        "Senior Care Neck & Shoulder Massage",
        "Senior Care Hand Massage"
      ]
    },
    {
      id: "special",
      title: "Special Occasion Beauty",
      icon: Gift,
      description: "Looking your best for life's meaningful milestones.",
      services: [
        "Senior Care Birthday Preparation",
        "Senior Care Wedding Guest Styling",
        "Senior Care Family Reunion Beauty",
        "Senior Care Holiday Beauty Package"
      ]
    }
  ],
  companionServices: [
    {
      id: "tea",
      title: "Tea & Chat Companion",
      icon: Coffee,
      description: "Enjoy tea, coffee, conversation, simple games, or a friendly visit in the comfort of home."
    },
    {
      id: "walking",
      title: "Walking Companion",
      icon: Footprints,
      description: "A friendly companion for a neighborhood walk, fresh air, or gentle activity at the senior’s preferred pace.",
      note: "The companion does not provide physical lifting, mobility assistance, medical supervision, or fall-prevention care."
    },
    {
      id: "tech",
      title: "Tech Help",
      icon: Smartphone,
      description: "Patient assistance with smartphones, FaceTime, texting, photos, email, tablets, and staying connected with family.",
      note: "VÉLOURA companions will not request passwords, banking information, payment details, or access to financial accounts."
    },
    {
      id: "reading",
      title: "Reading Companion",
      icon: BookOpen,
      description: "Spend time reading books, newspapers, magazines, letters, or looking through family photo albums together."
    },
    {
      id: "music",
      title: "Music & Memory Sessions",
      icon: Music,
      description: "Listen to favorite music, share stories, look through photos, and enjoy gentle activities that encourage conversation."
    },
    {
      id: "relaxation",
      title: "Relaxation Massage",
      icon: Sparkles,
      description: "Gentle relaxation massage for the hands and head only.",
      note: "This is a non-medical relaxation service. It is not massage therapy, physical therapy, pain treatment, or medical care."
    },
    {
      id: "wellness",
      title: "Wellness Visits",
      icon: Home,
      description: "Friendly visits focused on companionship, conversation, and helping older adults feel socially connected.",
      isComingSoon: true
    }
  ],
  perfectFor: [
    { text: "Seniors living independently", icon: Home },
    { text: "Older adults who prefer beauty services at home", icon: Scissors },
    { text: "Assisted living residents", icon: Heart },
    { text: "Retirement community residents", icon: Sparkles },
    { text: "Families arranging services for a parent or grandparent", icon: HandHeart },
    { text: "Seniors preparing for birthdays, weddings, holidays, or family photos", icon: Gift },
    { text: "Older adults who enjoy friendly conversation and social connection", icon: Coffee },
    { text: "Seniors who find salon travel inconvenient", icon: Footprints }
  ],
  whyChoose: [
    "Beauty and companionship services delivered to the door",
    "Friendly and patient professionals",
    "Comfortable in-home appointments",
    "Flexible scheduling",
    "Senior-friendly service options",
    "Extra time and gentle techniques",
    "Convenient booking for family members",
    "Clear non-medical service boundaries"
  ],
  guidelines: [
    "Professionals may decline any service that appears unsafe or outside their qualifications.",
    "Customers must disclose relevant allergies, skin sensitivities, recent procedures, mobility concerns, or other information that may affect the selected service.",
    "Professionals do not diagnose conditions or provide medical advice.",
    "Companions are not permitted to handle medications, money, banking, legal documents, or financial accounts.",
    "A responsible family member or caregiver should remain available when the senior requires supervision or personal assistance.",
    "Services may be stopped if the environment is unsafe, threatening, unsanitary, or materially different from the booking information.",
    "Service availability depends on location and professional availability."
  ]
};
