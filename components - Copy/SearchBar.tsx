"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    const slug = trimmed.toLowerCase().replace(/\s+/g, "-");
    router.push(`/${slug}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-3xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-cardHover sm:flex-row sm:items-center sm:gap-2 sm:p-2"
    >
      <div className="flex flex-1 items-center gap-3 rounded-xl px-3 py-3 sm:px-4">
        <SearchIcon />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Where do you want to go?"
          className="w-full bg-transparent text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
          aria-label="Destination"
        />
      </div>

      <div className="flex gap-2 border-t border-gray-100 px-3 pt-3 sm:border-l sm:border-t-0 sm:px-4 sm:pt-0">
        <div className="flex flex-1 flex-col">
          <label className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
            Check-in
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="bg-transparent text-sm text-gray-700 focus:outline-none"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <label className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
            Check-out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="bg-transparent text-sm text-gray-700 focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full shrink-0 rounded-xl bg-accent px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-500 sm:w-auto"
      >
        Search
      </button>
    </form>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 text-gray-400"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
