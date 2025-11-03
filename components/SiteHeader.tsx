'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // body lock wanneer menu open staat (voorkomt scrollen eronder)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">

        {/* Logo links */}
        <Link href="/" className="flex items-center gap-2 min-w-0">
          {/* Desktop: liggend logo + merknaam ernaast */}
          <span className="hidden md:flex items-center gap-2">
            <Image
              src="/logo-horizontal.png"
              alt="Turbo Services – RioolExpert"
              width={220}
              height={48}
              priority
            />
            <span className="font-extrabold text-xl leading-none tracking-tight whitespace-nowrap">
              Turbo Services
            </span>
          </span>

          {/* Mobiel: compact logo + gestapelde naam */}
          <span className="md:hidden flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Turbo Services – RioolExpert"
              width={42}
              height={42}
            />
            <span className="font-extrabold text-base leading-tight">
              <span className="block">Turbo</span>
              <span className="block">Services</span>
            </span>
          </span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/diensten" className="hover:text-slate-900">Diensten</Link>
          <Link href="/prijzen" className="hover:text-slate-900">Prijzen</Link>
          <Link href="/over-ons" className="hover:text-slate-900">Over mij</Link>
          <Link href="/blog" className="hover:text-slate-900">Weetjes</Link>
        </nav>

        {/* Rechts: call/cta + hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Belknop */}
          <a
            href="tel:+32485031877"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            <svg className="h-4 w-4 md:mr-1" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3 5c0-1.1.9-2 2-2h2a1 1 0 0 1 1 .8l.7 3a1 1 0 0 1-.3.9L7.6 9.2a12.8 12.8 0 0 0 7.2 7.2l1.5-1.8a1 1 0 0 1 .9-.3l3 .7a1 1 0 0 1 .8 1v2a2 2 0 0 1-2 2h-1C9.7 21 3 14.3 3 6V5z"
                fill="currentColor"
              />
            </svg>
            <span className="hidden md:inline">Bel 24/7</span>
            <span className="sr-only md:not-sr-only md:hidden">Bel</span>
          </a>

          <Link
            href="/boeken"
            className="inline-flex items-center rounded-lg bg-[var(--turbo-red,#E34D35)] px-3 py-2 text-white text-sm hover:opacity-90"
          >
            Aanvraag 24u
          </Link>

          {/* Hamburger alleen op mobiel */}
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300"
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobiel uitklapmenu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? 'max-h-[60vh] border-t' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-3 p-4 text-base">
          <Link href="/diensten" onClick={() => setOpen(false)}>Diensten</Link>
          <Link href="/prijzen" onClick={() => setOpen(false)}>Prijzen</Link>
          <Link href="/over-ons" onClick={() => setOpen(false)}>Over mij</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Weetjes</Link>

          <a
            href="tel:+32485031877"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-center text-slate-800"
          >
            Bel 24/7
          </a>

          <Link
            href="/boeken"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-[var(--turbo-red,#E34D35)] px-3 py-2 text-center text-white"
          >
            Aanvraag 24u
          </Link>
        </nav>
      </div>
    </header>
  );
}
