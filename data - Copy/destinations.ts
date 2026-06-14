import { Destination } from "./types";

/**
 * ---------------------------------------------------------------------
 * FLYAWAY DESTINATION DATA
 * ---------------------------------------------------------------------
 * This is the single source of truth for all destination pages.
 *
 * To add a new destination:
 * 1. Copy one of the objects below.
 * 2. Update `slug` (this becomes the URL, e.g. "rome" -> /rome).
 * 3. Update name, country, description, images, hotels, flights, etc.
 * 4. Replace affiliate.url placeholders with your real affiliate links.
 *
 * All affiliate URLs are placeholders (https://affiliate-link.com/...).
 * Swap these for real Booking.com / Skyscanner / Expedia affiliate
 * tracking links when ready. The `provider` field controls the label
 * shown on the "View deal" button.
 * ---------------------------------------------------------------------
 */

export const destinations: Destination[] = [
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    shortTagline: "The City of Light",
    description:
      "Paris is a city of timeless elegance, from the iron lattice of the Eiffel Tower to the quiet courtyards of Le Marais. Wander along the Seine, sip espresso at a corner cafe, and lose yourself in world-class museums. Whether it's your first visit or your tenth, Paris always has something new to fall in love with.",
    heroImage:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Paris Travel Guide 2026 - Best Hotels, Flights & Things to Do",
    seoDescription:
      "Plan your trip to Paris with Flyaway. Compare top hotel deals, find cheap flights, and discover the best things to do in the City of Light.",
    hotels: [
      {
        id: "paris-hotel-1",
        name: "Hôtel Lumière Saint-Germain",
        area: "Saint-Germain-des-Prés",
        rating: 4.6,
        reviewCount: 1284,
        pricePerNight: 189,
        currency: "USD",
        image:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
        affiliate: {
          provider: "Booking.com",
          url: "https://affiliate-link.com/example?ref=paris-hotel-1",
        },
      },
      {
        id: "paris-hotel-2",
        name: "Le Marais Boutique Stay",
        area: "Le Marais",
        rating: 4.4,
        reviewCount: 892,
        pricePerNight: 142,
        currency: "USD",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        affiliate: {
          provider: "Booking.com",
          url: "https://affiliate-link.com/example?ref=paris-hotel-2",
        },
      },
      {
        id: "paris-hotel-3",
        name: "Tour Eiffel View Suites",
        area: "16th Arrondissement",
        rating: 4.8,
        reviewCount: 2031,
        pricePerNight: 265,
        currency: "USD",
        image:
          "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80",
        affiliate: {
          provider: "Expedia",
          url: "https://affiliate-link.com/example?ref=paris-hotel-3",
        },
      },
    ],
    flights: [
      {
        id: "paris-flight-1",
        origin: "New York (JFK)",
        destination: "Paris (CDG)",
        airline: "Air France",
        price: 412,
        currency: "USD",
        tripType: "Round trip",
        affiliate: {
          provider: "Skyscanner",
          url: "https://affiliate-link.com/example?ref=paris-flight-1",
        },
      },
      {
        id: "paris-flight-2",
        origin: "London (LHR)",
        destination: "Paris (CDG)",
        airline: "British Airways",
        price: 98,
        currency: "USD",
        tripType: "Round trip",
        affiliate: {
          provider: "Skyscanner",
          url: "https://affiliate-link.com/example?ref=paris-flight-2",
        },
      },
      {
        id: "paris-flight-3",
        origin: "Los Angeles (LAX)",
        destination: "Paris (CDG)",
        airline: "Delta",
        price: 545,
        currency: "USD",
        tripType: "Round trip",
        affiliate: {
          provider: "Expedia",
          url: "https://affiliate-link.com/example?ref=paris-flight-3",
        },
      },
    ],
    thingsToDo: [
      {
        id: "paris-todo-1",
        title: "Visit the Eiffel Tower",
        description:
          "Take the elevator to the summit for sweeping views over the city, especially magical at sunset.",
        image:
          "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "paris-todo-2",
        title: "Explore the Louvre",
        description:
          "Home to the Mona Lisa and thousands of other masterpieces - book tickets in advance to skip the line.",
        image:
          "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "paris-todo-3",
        title: "Stroll Montmartre",
        description:
          "Wander cobbled streets up to Sacré-Cœur and enjoy panoramic views and street artists at every turn.",
        image:
          "https://images.unsplash.com/photo-1542310503-fff8c3b0fafe?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    shortTagline: "Historic charm meets modern energy",
    description:
      "London blends centuries of history with a thriving modern pulse. From the Tower of London to the South Bank's street food markets, the city rewards both careful planning and aimless wandering. Catch a West End show, browse world-famous museums for free, or simply enjoy a proper afternoon tea.",
    heroImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "London Travel Guide 2026 - Best Hotels, Flights & Things to Do",
    seoDescription:
      "Plan your trip to London with Flyaway. Compare top hotel deals, find cheap flights, and discover the best things to do across the city.",
    hotels: [
      {
        id: "london-hotel-1",
        name: "The Riverside Kensington",
        area: "Kensington",
        rating: 4.5,
        reviewCount: 1540,
        pricePerNight: 178,
        currency: "USD",
        image:
          "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80",
        affiliate: {
          provider: "Booking.com",
          url: "https://affiliate-link.com/example?ref=london-hotel-1",
        },
      },
      {
        id: "london-hotel-2",
        name: "Shoreditch Loft Rooms",
        area: "Shoreditch",
        rating: 4.3,
        reviewCount: 760,
        pricePerNight: 134,
        currency: "USD",
        image:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
        affiliate: {
          provider: "Booking.com",
          url: "https://affiliate-link.com/example?ref=london-hotel-2",
        },
      },
      {
        id: "london-hotel-3",
        name: "Westminster Grand Hotel",
        area: "Westminster",
        rating: 4.7,
        reviewCount: 2210,
        pricePerNight: 245,
        currency: "USD",
        image:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
        affiliate: {
          provider: "Expedia",
          url: "https://affiliate-link.com/example?ref=london-hotel-3",
        },
      },
    ],
    flights: [
      {
        id: "london-flight-1",
        origin: "New York (JFK)",
        destination: "London (LHR)",
        airline: "Virgin Atlantic",
        price: 389,
        currency: "USD",
        tripType: "Round trip",
        affiliate: {
          provider: "Skyscanner",
          url: "https://affiliate-link.com/example?ref=london-flight-1",
        },
      },
      {
        id: "london-flight-2",
        origin: "Dublin (DUB)",
        destination: "London (LHR)",
        airline: "Ryanair",
        price: 62,
        currency: "USD",
        tripType: "Round trip",
        affiliate: {
          provider: "Skyscanner",
          url: "https://affiliate-link.com/example?ref=london-flight-2",
        },
      },
      {
        id: "london-flight-3",
        origin: "Toronto (YYZ)",
        destination: "London (LHR)",
        airline: "Air Canada",
        price: 478,
        currency: "USD",
        tripType: "Round trip",
        affiliate: {
          provider: "Expedia",
          url: "https://affiliate-link.com/example?ref=london-flight-3",
        },
      },
    ],
    thingsToDo: [
      {
        id: "london-todo-1",
        title: "Tour the Tower of London",
        description:
          "See the Crown Jewels and learn centuries of royal history within these ancient walls.",
        image:
          "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "london-todo-2",
        title: "Ride the London Eye",
        description:
          "Get a bird's-eye view of the Thames and the city skyline from this iconic giant wheel.",
        image:
          "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "london-todo-3",
        title: "Explore the British Museum",
        description:
          "Wander through thousands of years of human history and culture - entry is free.",
        image:
          "https://images.unsplash.com/photo-1574643156929-51fa098b0394?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    shortTagline: "Where tradition meets the future",
    description:
      "Tokyo is a dazzling mix of neon-lit skyscrapers, ancient temples, and impeccable hospitality. Spend a morning at a quiet shrine, an afternoon in a bustling electronics district, and an evening sampling some of the best food on the planet. Efficient trains make it easy to explore every corner of this endlessly fascinating city.",
    heroImage:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Tokyo Travel Guide 2026 - Best Hotels, Flights & Things to Do",
    seoDescription:
      "Plan your trip to Tokyo with Flyaway. Compare top hotel deals, find cheap flights, and discover the best things to do in Japan's capital.",
    hotels: [
      {
        id: "tokyo-hotel-1",
        name: "Shinjuku Skyline Hotel",
        area: "Shinjuku",
        rating: 4.6,
        reviewCount: 1870,
        pricePerNight: 152,
        currency: "USD",
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        affiliate: {
          provider: "Booking.com",
          url: "https://affiliate-link.com/example?ref=tokyo-hotel-1",
        },
      },
      {
        id: "tokyo-hotel-2",
        name: "Asakusa Traditional Inn",
        area: "Asakusa",
        rating: 4.4,
        reviewCount: 645,
        pricePerNight: 98,
        currency: "USD",
        image:
          "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
        affiliate: {
          provider: "Booking.com",
          url: "https://affiliate-link.com/example?ref=tokyo-hotel-2",
        },
      },
      {
        id: "tokyo-hotel-3",
        name: "Ginza Premier Suites",
        area: "Ginza",
        rating: 4.8,
        reviewCount: 1320,
        pricePerNight: 298,
        currency: "USD",
        image:
          "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
        affiliate: {
          provider: "Expedia",
          url: "https://affiliate-link.com/example?ref=tokyo-hotel-3",
        },
      },
    ],
    flights: [
      {
        id: "tokyo-flight-1",
        origin: "Los Angeles (LAX)",
        destination: "Tokyo (HND)",
        airline: "ANA",
        price: 678,
        currency: "USD",
        tripType: "Round trip",
        affiliate: {
          provider: "Skyscanner",
          url: "https://affiliate-link.com/example?ref=tokyo-flight-1",
        },
      },
      {
        id: "tokyo-flight-2",
        origin: "Seoul (ICN)",
        destination: "Tokyo (NRT)",
        airline: "Japan Airlines",
        price: 145,
        currency: "USD",
        tripType: "Round trip",
        affiliate: {
          provider: "Skyscanner",
          url: "https://affiliate-link.com/example?ref=tokyo-flight-2",
        },
      },
      {
        id: "tokyo-flight-3",
        origin: "Sydney (SYD)",
        destination: "Tokyo (NRT)",
        airline: "Qantas",
        price: 512,
        currency: "USD",
        tripType: "Round trip",
        affiliate: {
          provider: "Expedia",
          url: "https://affiliate-link.com/example?ref=tokyo-flight-3",
        },
      },
    ],
    thingsToDo: [
      {
        id: "tokyo-todo-1",
        title: "Visit Senso-ji Temple",
        description:
          "Explore Tokyo's oldest temple in Asakusa, complete with a lively market street leading to its gates.",
        image:
          "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "tokyo-todo-2",
        title: "Experience Shibuya Crossing",
        description:
          "Stand at the world's busiest pedestrian crossing and soak in the energy of central Tokyo.",
        image:
          "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "tokyo-todo-3",
        title: "Day trip to Mount Fuji",
        description:
          "Take a scenic train or bus ride to the Fuji Five Lakes region for iconic views of Japan's tallest peak.",
        image:
          "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    slug: "rome",
    name: "Rome",
    country: "Italy",
    shortTagline: "The Eternal City",
    description:
      "Rome is a living museum where ancient ruins sit alongside bustling piazzas and world-class trattorias. Toss a coin in the Trevi Fountain, marvel at the scale of the Colosseum, and end each day with pasta and a glass of local wine. Every street corner reveals another layer of history.",
    heroImage:
      "https://images.unsplash.com/photo-1552832230-c0198dd9f5c1?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Rome Travel Guide 2026 - Best Hotels, Flights & Things to Do",
    seoDescription:
      "Plan your trip to Rome with Flyaway. Compare top hotel deals, find cheap flights, and discover the best things to do in the Eternal City.",
    hotels: [
      {
        id: "rome-hotel-1",
        name: "Trastevere Charm Hotel",
        area: "Trastevere",
        rating: 4.5,
        reviewCount: 980,
        pricePerNight: 121,
        currency: "USD",
        image:
          "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80",
        affiliate: {
          provider: "Booking.com",
          url: "https://affiliate-link.com/example?ref=rome-hotel-1",
        },
      },
      {
        id: "rome-hotel-2",
        name: "Colosseo View Rooms",
        area: "Monti",
        rating: 4.6,
        reviewCount: 1410,
        pricePerNight: 168,
        currency: "USD",
        image:
          "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=800&q=80",
        affiliate: {
          provider: "Booking.com",
          url: "https://affiliate-link.com/example?ref=rome-hotel-2",
        },
      },
      {
        id: "rome-hotel-3",
        name: "Spanish Steps Boutique",
        area: "Piazza di Spagna",
        rating: 4.7,
        reviewCount: 1670,
        pricePerNight: 224,
        currency: "USD",
        image:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
        affiliate: {
          provider: "Expedia",
          url: "https://affiliate-link.com/example?ref=rome-hotel-3",
        },
      },
    ],
    flights: [
      {
        id: "rome-flight-1",
        origin: "New York (JFK)",
        destination: "Rome (FCO)",
        airline: "ITA Airways",
        price: 456,
        currency: "USD",
        tripType: "Round trip",
        affiliate: {
          provider: "Skyscanner",
          url: "https://affiliate-link.com/example?ref=rome-flight-1",
        },
      },
      {
        id: "rome-flight-2",
        origin: "Paris (CDG)",
        destination: "Rome (FCO)",
        airline: "Air France",
        price: 84,
        currency: "USD",
        tripType: "Round trip",
        affiliate: {
          provider: "Skyscanner",
          url: "https://affiliate-link.com/example?ref=rome-flight-2",
        },
      },
      {
        id: "rome-flight-3",
        origin: "Chicago (ORD)",
        destination: "Rome (FCO)",
        airline: "United",
        price: 512,
        currency: "USD",
        tripType: "Round trip",
        affiliate: {
          provider: "Expedia",
          url: "https://affiliate-link.com/example?ref=rome-flight-3",
        },
      },
    ],
    thingsToDo: [
      {
        id: "rome-todo-1",
        title: "Explore the Colosseum",
        description:
          "Step into the arena that once hosted gladiatorial contests in front of 50,000 spectators.",
        image:
          "https://images.unsplash.com/photo-1552832230-c0198dd9f5c1?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "rome-todo-2",
        title: "Visit Vatican City",
        description:
          "See St. Peter's Basilica and the Sistine Chapel's breathtaking Michelangelo ceiling.",
        image:
          "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "rome-todo-3",
        title: "Toss a coin in the Trevi Fountain",
        description:
          "Legend says a coin tossed over your shoulder guarantees a return trip to Rome.",
        image:
          "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

/** Lookup a destination by its URL slug (case-insensitive). */
export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(
    (d) => d.slug.toLowerCase() === slug.toLowerCase()
  );
}

/**
 * Search destinations by name or country. Returns the best match's slug,
 * or null if nothing matches closely enough.
 */
export function findDestinationSlug(query: string): string | null {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return null;

  // Exact name or slug match first
  const exact = destinations.find(
    (d) =>
      d.name.toLowerCase() === normalized || d.slug.toLowerCase() === normalized
  );
  if (exact) return exact.slug;

  // Partial match on name, country, or slug
  const partial = destinations.find(
    (d) =>
      d.name.toLowerCase().includes(normalized) ||
      d.country.toLowerCase().includes(normalized) ||
      d.slug.toLowerCase().includes(normalized) ||
      normalized.includes(d.name.toLowerCase())
  );
  return partial ? partial.slug : null;
}
