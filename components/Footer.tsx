import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-base font-bold text-white">
                F
              </span>
              <span className="text-lg font-bold text-gray-900">Flyaway</span>
            </div>

            <p className="mt-3 max-w-sm text-sm text-gray-500">
              Flyaway helps you find inspiration and great deals for your next
              trip. We partner with trusted booking providers to bring you
              hotel and flight offers.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                Destinations
              </h4>

              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="/paris" className="hover:text-brand-600">
                    Paris
                  </Link>
                </li>

                <li>
                  <Link href="/london" className="hover:text-brand-600">
                    London
                  </Link>
                </li>

                <li>
                  <Link href="/tokyo" className="hover:text-brand-600">
                    Tokyo
                  </Link>
                </li>

                <li>
                  <Link href="/rome" className="hover:text-brand-600">
                    Rome
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                Company
              </h4>

              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="/about" className="hover:text-brand-600">
                    About
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="hover:text-brand-600">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-brand-600"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="/terms" className="hover:text-brand-600">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 text-xs text-gray-400">
          <p>
            Flyaway is an affiliate marketing website. Some links on this site
            are affiliate links, meaning we may earn a commission if you make
            a booking through them, at no extra cost to you.
          </p>

          <p className="mt-2">
            © {new Date().getFullYear()} Flyaway. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
