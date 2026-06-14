# Flyaway — Travel Affiliate Website MVP

A production-ready MVP for a travel search & destination affiliate website,
built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Features

- **Homepage** with hero search bar ("Where do you want to go?")
- **Dynamic destination pages** (`/paris`, `/london`, `/tokyo`, `/rome`) with:
  - Hero image
  - Description
  - Top hotels (affiliate cards)
  - Cheap flights (affiliate cards)
  - Best things to do
- **Search** that redirects to the matching destination page, or a
  **"destination not found"** page if there's no match
- **Affiliate-ready**: every hotel/flight "View deal" button uses a
  placeholder URL (`https://affiliate-link.com/example?ref=...`) that you
  can swap for real affiliate tracking links
- **SEO**: per-page metadata, Open Graph tags, `sitemap.xml`, `robots.txt`
- Responsive, mobile-first UI with Inter font, blue + orange theme,
  rounded cards and soft shadows

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Static JSON-like data (no database/backend required)

## Project structure

```
flyaway/
├── app/
│   ├── [slug]/page.tsx     # Dynamic destination page (/paris, /london, ...)
│   ├── layout.tsx          # Root layout (Header, Footer, font)
│   ├── page.tsx             # Homepage
│   ├── not-found.tsx        # "Destination not found" page
│   ├── sitemap.ts            # Auto-generated sitemap
│   ├── robots.ts             # robots.txt
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SearchBar.tsx
│   ├── HotelCard.tsx
│   ├── FlightCard.tsx
│   └── RatingBadge.tsx
├── data/
│   └── destinations.ts      # All destination, hotel, flight, and "things to do" data
├── lib/
│   └── types.ts              # Shared TypeScript types
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Running locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

4. Build for production:

   ```bash
   npm run build
   npm run start
   ```

## Adding a new destination

Open `data/destinations.ts` and add a new object to the `destinations`
array. Each destination needs:

```ts
{
  slug: "barcelona",        // becomes the URL: /barcelona
  name: "Barcelona",
  country: "Spain",
  shortTagline: "...",
  description: "...",
  heroImage: "https://...",
  seoTitle: "...",
  seoDescription: "...",
  hotels: [ ... ],
  flights: [ ... ],
  thingsToDo: [ ... ],
}
```

The page is automatically generated at `/barcelona` — no routing code
needed. It's also automatically added to `sitemap.xml`.

## Swapping in real affiliate links

Every hotel and flight entry has an `affiliate` object:

```ts
affiliate: {
  provider: "Booking.com",
  url: "https://affiliate-link.com/example?ref=paris-hotel-1",
}
```

Replace `url` with your real affiliate tracking link (Booking.com Partner
Hub, Skyscanner Partners, Expedia/Travelpayouts, etc.). The `provider`
field is just a display label shown under each "View deal" button.

All affiliate links open in a new tab with
`rel="nofollow sponsored noopener noreferrer"`, which is the recommended
practice for affiliate links (tells search engines not to pass ranking
credit, and protects against tab-nabbing).

## Updating images

All images currently use Unsplash URLs (configured as an allowed remote
pattern in `next.config.js`). To use your own images:

1. Add them to a `public/images/` folder
2. Reference them as `/images/your-image.jpg` in `data/destinations.ts`

## Notes / next steps for a real launch

- Replace placeholder affiliate URLs with real, approved affiliate links
- Add real destination descriptions, prices, and images
- Add an `og:image` per destination (already wired up via `heroImage`)
- Consider adding a blog/content section for additional SEO traffic
- Add analytics (e.g. Plausible, GA4) to `app/layout.tsx`
- Update `sitemap.ts` / `robots.ts` with your real production domain
