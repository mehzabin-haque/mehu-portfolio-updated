'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, profile, quickLinks } from '@/lib/data';
import Image from 'next/image';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const Seal = () => (
  <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#1E2430]">
    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#1E2430]">
      <span className="font-serif text-xl tracking-wide text-[#1E2430]">{initials(profile.name)}</span>
    </div>
  </div>
);

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-[#D9D4C7] bg-[#F7F5F0] px-6 py-4 md:hidden">
        <Link href="/" className="font-serif text-lg font-semibold text-[#1E2430]">
          {profile.name}
        </Link>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-9 w-9 items-center justify-center border border-[#1E2430] text-[#1E2430]"
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 1l14 14M15 1L1 15" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 3h14M1 8h14M1 13h14" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <div className="sticky top-[57px] z-40 border-b border-[#D9D4C7] bg-[#F7F5F0] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item, i) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`font-mono text-sm ${active ? 'text-[#7A2E2E]' : 'text-[#565A63]'}`}
                >
                  {ROMAN[i]}. {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Desktop fixed sidebar */}
      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:flex md:w-72 md:flex-col md:justify-between md:border-r md:border-[#D9D4C7] md:px-8 md:py-12">
        <div>
          <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border border-[#1E2430]">
  <Image src="/profile.png" alt={profile.name} fill className="object-cover" />
</div>

          <h1 className="mt-6 text-center font-serif text-2xl font-semibold leading-tight text-[#1E2430]">
            {profile.name}
          </h1>
          <p className="mt-2 text-center text-sm italic text-[#3C3F45]">{profile.title}</p>
          <p className="text-center text-sm italic text-[#7A2E2E]">{profile.subtitle}</p>
          <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-widest text-[#8A8578]">
            {profile.affiliation}
          </p>

          <div className="mt-8 border-t border-double border-t-4 border-[#D9D4C7] pt-6">
            <ul className="space-y-2 font-mono text-[11px] uppercase tracking-widest">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-[#565A63] transition-colors hover:text-[#7A2E2E]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="mt-8 border-double border-t-4 border-[#D9D4C7] pt-6">
            <ul className="space-y-3">
              {NAV_ITEMS.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-baseline gap-3 text-sm transition-colors ${
                        active ? 'text-[#7A2E2E]' : 'text-[#3C3F45] hover:text-[#7A2E2E]'
                      }`}
                    >
                      <span className="font-mono text-[11px] text-[#8A8578]">{ROMAN[i]}.</span>
                      <span className={active ? 'font-semibold' : ''}>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <p className="text-center font-mono text-[10px] uppercase tracking-widest text-[#8A8578]">
          {profile.location}
        </p>
      </aside>
    </>
  );
}
