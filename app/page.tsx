import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function HomePage() {
  return (
    <div>
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Popular destinations
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Hand-picked cities with the best hotel and flight deals.
            </p>