"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Harga", href: "#pricing" },
  { label: "Layanan", href: "#services" },
  { label: "Tentang", href: "#about" },
  { label: "Booking", href: "#booking" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--surface)_82%,var(--brand)_18%),var(--surface))]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo/lightproduction-logo.png"
              alt="Lightstudio logo"
              width={64}
              height={64}
              className="h-[34px] w-[34px] object-contain"
              priority
            />
            <span className="font-display text-3xl">Lightstudio</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] md:flex">
            {navItems.map((item) => (
              <a key={item.href} className="transition hover:text-[var(--text)]" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#booking"
              className="hidden shrink-0 rounded-full border border-[var(--brand)] bg-[var(--brand)] px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-ink)] shadow-[0_8px_26px_-12px_color-mix(in_oklab,var(--brand)_66%,black)] sm:inline-flex"
            >
              Booking now
            </a>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-[var(--line)] bg-[var(--surface)] px-5 py-4 sm:px-8 md:hidden">
            <nav className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] hover:text-[var(--text)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-[var(--brand)] bg-[var(--brand)] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-ink)]"
              >
                Booking now
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <div className="h-[84px]" aria-hidden />
    </>
  );
}
