/**
 * CLONE A UNISEX SALON - WEBSITE CONFIGURATION
 * -------------------------------------------------------------
 * This configuration file allows the salon owner or developer to update
 * salon information, contact details, social links, and services in one single place.
 * 
 * NOTE FOR SALON OWNER:
 * All information marked with "to be confirmed" can be customized below.
 */

const SALON_CONFIG = {
  business: {
    name: "Clone A Unisex Salon",
    tagline: "Your Style. Your Confidence.",
    subtitle: "Professional beauty and grooming services in the heart of Greater Noida.",
    category: "Unisex Beauty Salon & Grooming Studio",
    locationShort: "Jagat Farm • Greater Noida",
    fullAddress: "Jagat Farm / Gamma 1, Greater Noida, Uttar Pradesh, India",
    addressStatus: "Address to be confirmed with the salon before publication.",
    timingsStatus: "Timings to be confirmed with salon",
    disclaimer: "Demo website — business information, services, and pricing to be verified before publication.",
  },
  contact: {
    phoneDisplay: "089201 86082",
    phoneTel: "+918920186082",
    whatsappNumber: "918920186082",
    whatsappDefaultMsg: "Hello Clone A Unisex Salon! I would like to enquire about your services and appointment availability.",
    mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Clone+A+Unisex+Salon+Gamma+1+Greater+Noida",
  },
  services: [
    {
      id: "hair-care",
      title: "Hair Care & Styling",
      tagline: "Precision Cuts & Treatments",
      description: "From precision haircuts and custom styling to rejuvenating hair spa and nourishing treatments for all hair types.",
      items: ["Haircuts & Beard Styling", "Hair Spa & Conditioning", "Coloring & Highlights", "Keratin & Smoothening"],
      icon: "hair",
    },
    {
      id: "skin-care",
      title: "Skin & Facial Care",
      tagline: "Radiant, Healthy Complexion",
      description: "Customized cleanups, deep cleansing, and restorative facial therapies designed to refresh and revitalize your skin.",
      items: ["Deep Cleansing & Glow Facials", "Skin Brightening Therapy", "Exfoliating Cleanups", "Detox & Hydration"],
      icon: "skin",
    },
    {
      id: "nails",
      title: "Nails & Care",
      tagline: "Manicure & Pedicure Essentials",
      description: "Complete nail pampering, shape & buff, hygienic manicures and pedicures delivered with meticulous care.",
      items: ["Classic & Spa Manicure", "Relaxing Pedicure", "Nail Shaping & Polish", "Cuticle Health & Care"],
      icon: "nail",
    },
    {
      id: "hair-removal",
      title: "Hair Removal",
      tagline: "Smooth & Clean Grooming",
      description: "Hygienic threading, waxing, and gentle grooming solutions for defined brows and smooth, clear skin.",
      items: ["Eyebrow Threading & Shaping", "Full Body & Targeted Waxing", "Beard Shaping & Line-up", "Facial Threading"],
      icon: "grooming",
    },
    {
      id: "makeup",
      title: "Makeup & Occasions",
      tagline: "Celebration & Event Artistry",
      description: "Tasteful makeup looks for parties, weddings, festivities, and special occasions tailored to your individual style.",
      items: ["Party & Evening Makeup", "Festive & Traditional Looks", "Light Day Styling", "Hairstyling for Events"],
      icon: "makeup",
    },
  ],
  gallery: [
    {
      id: "interior",
      label: "Salon Interior",
      category: "Ambiance",
      caption: "Spacious, hygienic, and modern salon setting crafted for comfortable pampering.",
    },
    {
      id: "hair-styling",
      label: "Hair Styling",
      category: "Hair Artistry",
      caption: "Tailored cuts and modern hairstyles for both men and women.",
    },
    {
      id: "beauty",
      label: "Skin & Beauty",
      category: "Skin Wellness",
      caption: "Revitalizing skin therapies, glow cleanups, and rejuvenation sessions.",
    },
    {
      id: "makeup",
      label: "Makeup Artistry",
      category: "Special Occasions",
      caption: "Flawless finishes and customized party looks for your biggest celebrations.",
    },
    {
      id: "nails",
      label: "Nails & Care",
      category: "Hand & Foot Care",
      caption: "Precision manicures, relaxing pedicures, and nail health treatments.",
    },
    {
      id: "salon-experience",
      label: "Salon Experience",
      category: "Unisex Grooming",
      caption: "Dedicated, attentive grooming care delivered in Jagat Farm, Greater Noida.",
    },
  ],
};
