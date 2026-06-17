"use client";

import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src =
      "https://tpwdgt.com/content?currency=usd&trs=540087&shmarker=740010&locale=en&powered_by=true&limit=3&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&campaign_id=111&promo_id=3411";
    script1.async = true;
    script1.charset = "utf-8";
    const container1 = document.getElementById("affiliate-widget-1");
    if (container1) {
      container1.appendChild(script1);
    }
  }, []);

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