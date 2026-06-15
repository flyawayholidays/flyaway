export type Hotel = {
  id: string;
  name: string;
  image: string;
  rating: number;
  pricePerNight: number;
};

export type Flight = {
  id: string;
  airline: string;
  from: string;
  to: string;
  price: number;
  duration: string;
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
  heroImage: string;
  shortTagline: string;
  description: string;
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
    heroImage:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    shortTagline: "City of Light and romance",
    description:
      "Paris is known for art, fashion, gastronomy, and culture. Explore the Eiffel Tower, Louvre, and charming streets.",
    seoTitle: "Paris Travel Guide - FlyAway Holidays",
    seoDescription: "Discover hotels, flights, and things to do in Paris.",

    hotels: [
      {
        id: "h1",
        name: "Hotel Paris Central",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        rating: 4.5,
        pricePerNight: 180,
      },
      {
        id: "h2",
        name: "Eiffel View Hotel",
        image:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        rating: 4.7,
        pricePerNight: 240,
      },
    ],

    flights: [
      {
        id: "f1",
        airline: "Air France",
        from: "London",
        to: "Paris",
        price: 90,
        duration: "1h 15m",
      },
      {
        id: "f2",
        airline: "British Airways",
        from: "London",
        to: "Paris",
        price: 95,
        duration: "1h 20m",
      },
    ],

    thingsToDo: [
      {
        id: "t1",
        title: "Eiffel Tower",
        description: "Visit the iconic landmark of Paris.",
        image:
          "https://images.unsplash.com/photo-1543340713-1bf5c2a0c1d6",
      },
      {
        id: "t2",
        title: "Louvre Museum",
        description: "See world-famous art including the Mona Lisa.",
        image:
          "https://images.unsplash.com/photo-1566133109642-ff1b7d7b8f36",
      },
      {
        id: "t3",
        title: "Seine River Cruise",
        description: "Relax on a scenic river cruise.",
        image:
          "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f",
      },
    ],
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}