import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import HotelCard from "@/components/HotelCard";
import FlightCard from "@/components/FlightCard";

interface DestinationPageProps {
  params: { slug: string };
}

/**
 * Pre-render all known destination pages at build time for performance
 * and SEO. Add a new destination to data/destinations.ts and it will
 * automatically get its own static page here.
 */
export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export function generateMetadata({
  params,
}: DestinationPageProps): Metadata {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    return {
      title: "Destination not found",
      description: "We couldn't find the destination you're looking for.",
    };
  }

  return {
    title: destination.seoTitle,
    description: destination.seoDescription,
    openGraph: {
      title: destination.seoTitle,
      description: destination.seoDescription,
      images: [{ url: destination.heroImage }],
    },
  };
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    notFound();
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 w-full sm:h-96">
        <Image
          src={destination.heroImage}
          alt={`${destination.name}, ${destination.country}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-4 pb-8 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-wide text-brand-100">
              {destination.country}
            </p>
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              {destination.name}
            </h1>
            <p className="mt-1 text-base text-gray-100 sm:text-lg">
              {destination.shortTagline}
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          About {destination.name}
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
          {destination.description}
        </p>
      </section>

      {/* Top hotels */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Top hotels in {destination.name}
            </h2>
          </div>
          <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 no-scrollbar sm:-mx-6 sm:px-6">
            {destination.hotels.map((hotel: any) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* Cheap flights */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Cheap flights to {destination.name}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {destination.flights.map((flight: any) => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>
        </div>
      </section>

      {/* Things to do */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Best things to do in {destination.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {destination.thingsToDo.map((item: any) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl bg-white shadow-card"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
