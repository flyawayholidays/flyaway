export interface AffiliateLink {
  /** Display name of the provider, e.g. "Booking.com" */
  provider: string;
  /** Placeholder affiliate URL - swap for real tracking links later */
  url: string;
}

export interface Hotel {
  id: string;
  name: string;
  area: string;
  rating: number; // out of 5, e.g. 4.5
  reviewCount: number;
  pricePerNight: number;
  currency: string;
  image: string;
  affiliate: AffiliateLink;
}

export interface FlightDeal {
  id: string;
  origin: string;
  destination: string;
  airline: string;
  price: number;
  currency: string;
  tripType: "Round trip" | "One way";
  affiliate: AffiliateLink;
}

export interface ThingToDo {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  shortTagline: string;
  description: string;
  heroImage: string;
  seoTitle: string;
  seoDescription: string;
  hotels: Hotel[];
  flights: FlightDeal[];
  thingsToDo: ThingToDo[];
}
