
"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/Cart";
import CartDrawer from "@/components/cart/CartDrawer";
import { getCartCount } from "@/lib/cart";
import { businessInfo } from "@/data/business";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Nasi Goreng", href: "#menu" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cart } = useCart();
  const cartCount = getCartCount(cart);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/95 backdrop-blur-md">
        <nav
          className="container flex h-20 items-center justify-between gap-3"
          aria-label="Navigasi utama"
        > 
          {/* Logo */}
          <a
            href="#beranda"
            className="shrink-0 text-lg font-bold text-white sm:text-2xl"
            aria-label={`${businessInfo.name} - Beranda`}
          >
            Nasi Goreng{" "}
            <span className="text-amber-500">Pinggiran</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-300 transition hover:text-amber-500"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Cart Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Buka keranjang, ${cartCount} item`}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-amber-500/50 hover:text-amber-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-bold text-black">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            {/* Desktop CTA */}
            <a
              href="#menu"
              className="hidden rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-amber-400 lg:block"
            >
              Pesan Sekarang
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((previous) => !previous)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-amber-500/50 hover:text-amber-500 lg:hidden"
            >
              {isMenuOpen ? (
                <span className="text-xl" aria-hidden="true">
                  ×
                </span>
              ) : (
                <span aria-hidden="true">☰</span>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/10 bg-[#0b0b0b] lg:hidden"
          >
            <div className="container flex flex-col py-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-white/5 py-4 text-sm text-zinc-300 transition hover:text-amber-500"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#menu"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 rounded-full bg-amber-500 px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-amber-400"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}