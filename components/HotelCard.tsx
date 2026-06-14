import Image from "next/image";
import { Hotel } from "@/lib/types";
import RatingBadge from "./RatingBadge";

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="flex w-72 shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-card transition hover:shadow-cardHover sm:w-80">
      <div className="relative h-44 w-full">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700">
          {hotel.area}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            {hotel.name}
          </h3>
          <div className="mt-1">
            <RatingBadge
              rating={hotel.rating}
              reviewCount={hotel.reviewCount}
            />
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-400">From</p>
            <p className="text-lg font-bold text-gray-900">
              ${hotel.pricePerNight}
              <span className="text-sm font-normal text-gray-400">
                {" "}
                / night
              </span>
            </p>
          </div>

          <a
            href={hotel.affiliate.url}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            View deal
          </a>
        </div>
        <p className="text-right text-[11px] text-gray-400">
          via {hotel.affiliate.provider}
        </p>
      </div>
    </div>
  );
}
