import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">
            F
          </span>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Flyaway
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 sm:flex">
          <Link href="/paris" className="hover:text-brand-600">
            Paris
          </Link>
          <Link href="/london" className="hover:text-brand-600">
            London
          </Link>
          <Link href="/tokyo" className="hover:text-brand-600">
            Tokyo
          </Link>
          <Link href="/rome" className="hover:text-brand-600">
            Rome
          </Link>
        </nav>

        <Link
          href="/"
          className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          Find deals
        </Link>
      </div>
    </header>
  );
}
