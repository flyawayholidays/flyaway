import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { destinations } from "@/data/destinations";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
        404
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Destination not found
      </h1>
      <p className="mx-auto mt-3 max-w-md text-base text-gray-500">
        We couldn&apos;t find a destination that matches your search. Try
        another city, or explore one of our popular destinations below.
      </p>

      <div className="mt-8">
        <SearchBar />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {destinations.map((destination) => (
          <Link
            key={destination.slug}
            href={`/${destination.slug}`}
            className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-brand-600 hover:text-brand-600"
          >
            {destination.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
