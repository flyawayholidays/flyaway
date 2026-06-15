export type AffiliateLink = {
  provider: string;
  url: string;
};

export type Hotel = {
  id: string;
  name: string;
  area: string;
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  currency: string;
  image: string;
  affiliate: AffiliateLink;
};

export type Flight = {
  id: string;
  origin: string;
  destination: string;
  airline: string;
  price: number;
  currency: string;
  tripType: string;
  affiliate: AffiliateLink;
};

export type ThingToDo = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type Destination = {
  slug: string;
  name: string;
  country: string;
  shortTagline: string;
  description: string;
  heroImage: string;
  seoTitle: string;
  seoDescription: string;
  hotels: Hotel[];
  flights: Flight[];
  thingsToDo: ThingToDo[];
};

export const destinations: Destination[] = [
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    shortTagline: "The City of Light",
    description:
      "Paris is a city of timeless elegance, from the Eiffel Tower to the quiet courtyards of Le Marais.",
    heroImage:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Paris Travel Guide - Best Hotels, Flights & Things to Do",
    seoDescription:
      "Compare Paris hotels, flights, and things to do with Flyaway.",
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
    ],
    flights: [
      {
        id: "paris-flight-1",
        origin: "London (LHR)",
        destination: "Paris (CDG)",
        airline: "British Airways",
        price: 98,
        currency: "USD",
        tripType: "Round trip",
        affiliate: {
          provider: "Skyscanner",
          url: "https://affiliate-link.com/example?ref=paris-flight-1",
        },
      },
    ],
    thingsToDo: [
      {
        id: "paris-todo-1",
        title: "Visit the Eiffel Tower",
        description: "Enjoy amazing views over Paris.",
        image:
          "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(
    (destination) => destination.slug.toLowerCase() === slug.toLowerCase()
  );
}

export function findDestinationSlug(query: string): string | null {
  const normalized = query.trim().toLowerCase();

  if (!normalized) return null;

  const match = destinations.find(
    (destination) =>
      destination.name.toLowerCase().includes(normalized) ||
      destination.country.toLowerCase().includes(normalized) ||
      destination.slug.toLowerCase().includes(normalized)
  );

  return match ? match.slug : null;
}