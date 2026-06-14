import { FlightDeal } from "@/lib/types";

export default function FlightCard({ flight }: { flight: FlightDeal }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-card transition hover:shadow-cardHover sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          <PlaneIcon />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {flight.origin}{" "}
            <span className="text-gray-400">&rarr;</span> {flight.destination}
          </p>
          <p className="text-xs text-gray-500">
            {flight.airline} · {flight.tripType}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <div className="text-right">
          <p className="text-xs text-gray-400">From</p>
          <p className="text-lg font-bold text-gray-900">${flight.price}</p>
        </div>
        <a
          href={flight.affiliate.url}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-500"
        >
          View deal
        </a>
      </div>
    </div>
  );
}

function PlaneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
}
