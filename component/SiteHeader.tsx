'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // voorkom scrollen onder het opengeklapte menu
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container mx-auto max-w-6xl flex items-center justify-between gap-3 px-4 py-3">
        {/* Logo + naam */}
        <Link href="/" className="flex min-w-0 items-center gap-2">
          {/* mobiel: staand logo */}
          <Image src="/logo.png" alt="Turbo Services" width={40} height={40} className="h-10 w-10" priority />
          {/* naam verbergen op xs om overflow te vermijden */}
          <span className="hidden sm:inline font-extrabold text-lg whitespace-nowrap">Turbo Services</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/diensten" className="hover:text-slate-900">Diensten</Link>
          <Link href="/prijzen" className="hover:text-slate-900">Prijzen</Link>
          <Link href="/over-ons" className="hover:text-slate-900">Over ons</Link>
          <Link href="/blog" className="hover:text-slate-900">Weetjes</Link>
        </nav>

        {/* Rechter controls: CTA + hamburger altijd zichtbaar */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/boeken"
            className="inline-flex items-center rounded-lg bg-[var(--turbo-red,#E34D35)] px-3 py-2 text-white text-sm hover:opacity-90"
          >
            Aanvraag 24u
          </Link>

          {/* Hamburger (alleen op mobiel) */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300"
            aria-label="Menu"
            aria-expanded={open}
          >
            {/* icoon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobiel uitklapmenu (onder de header) */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-[60vh] border-t' : 'max-h-0'}`}>
        <nav className="flex flex-col gap-3 p-4 text-base">
          <Link href="/diensten" onClick={() => setOpen(false)}>Diensten</Link>
          <Link href="/prijzen" onClick={() => setOpen(false)}>Prijzen</Link>
          <Link href="/over-ons" onClick={() => setOpen(false)}>Over ons</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Weetjes</Link>
          <Link
            href="/boeken"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-lg bg-[var(--turbo-red,#E34D35)] px-3 py-2 text-center text-white"
          >
            Aanvraag 24u
          </Link>
        </nav>
      </div>
    </header>
  );
}
