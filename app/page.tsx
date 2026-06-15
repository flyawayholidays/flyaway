import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { destinations } from "@/data/destinations";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-600 to-brand-700 pb-24 pt-16 sm:pb-32 sm:pt-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Find your next adventure
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base text-brand-50 sm:text-lg">
            Compare hotel and flight deals across the world&apos;s best
            destinations, all in one place.
          </p>

          <div className="mt-8">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Flight Search Widget */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Search Cheap Flights
          </h2>

          <Script
            async
            strategy="afterInteractive"
            src="https://tpwdgt.com/content?currency=usd&trs=540087&shmarker=740010&powered_by=true&locale=en&show_header=true&limit=3&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&campaign_id=111&promo_id=4478"
          />
        </div>
      </section>

      {/* Popular destinations */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Popular destinations
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Hand-picked cities with the best hotel and flight deals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination: any) => (
            <Link
              key={destination.slug}
              href={`/${destination.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-card transition hover:shadow-cardHover"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={destination.heroImage}
                  alt={destination.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {destination.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {destination.shortTagline}
                </p>

                <p className="mt-3 text-sm font-semibold text-brand-600">
                  From $
                  {Math.min(
                    ...destination.hotels.map((h: any) => h.pricePerNight)
                  )}{" "}
                  / night
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6">
          <ValueProp
            title="Best price guarantee"
            description="We compare deals across top travel providers so you don't have to."
          />

          <ValueProp
            title="Curated destinations"
            description="Every destination page is packed with hotels, flights, and local tips."
          />

          <ValueProp
            title="Book with confidence"
            description="All bookings happen securely on trusted partner sites like Booking.com and Skyscanner."
          />
        </div>
      </section>
    </div>
  );
}

function ValueProp({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 p-6">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <CheckIcon />
      </div>

      <h3 className="text-base font-semibold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}