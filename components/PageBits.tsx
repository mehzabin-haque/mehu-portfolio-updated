'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export const Reveal = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    className={className}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ title }: { title: string }) => (
  <div className="mb-10">
    <h2 className="font-serif text-xl font-semibold tracking-wide text-[#1E2430]">{title}</h2>
    <div className="mt-2 h-px w-full border-t border-double border-t-4 border-[#D9D4C7]" />
  </div>
);

export const PageShell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const index = NAV_ITEMS.findIndex((item) => item.href === pathname);
  const prev = index > 0 ? NAV_ITEMS[index - 1] : null;
  const next = index !== -1 && index < NAV_ITEMS.length - 1 ? NAV_ITEMS[index + 1] : null;

  return (
    <main className="mx-auto max-w-2xl px-8 py-16 md:py-20">
      {children}

      {(prev || next) && (
        <div className="mt-16 flex items-center justify-between border-t border-[#D9D4C7] pt-4 font-mono text-[11px] uppercase tracking-widest text-[#8A8578] md:hidden">
          {prev ? (
            <Link href={prev.href} className="hover:text-[#7A2E2E]">
              ‹ {prev.label}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={next.href} className="hover:text-[#7A2E2E]">
              {next.label} ›
            </Link>
          ) : (
            <span />
          )}
        </div>
      )}
    </main>
  );
};
