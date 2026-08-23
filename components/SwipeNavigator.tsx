'use client';

import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/data';

const SWIPE_THRESHOLD = 60; // minimum horizontal distance (px) to count as a swipe
const VERTICAL_RESTRAINT = 80; // max vertical drift (px) allowed — otherwise it's a scroll, not a swipe

export default function SwipeNavigator() {
  const router = useRouter();
  const pathname = usePathname();
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      startX.current = e.touches[0].clientX;
      startY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (startX.current === null || startY.current === null) return;
      const dx = e.changedTouches[0].clientX - startX.current;
      const dy = e.changedTouches[0].clientY - startY.current;
      startX.current = null;
      startY.current = null;

      if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dy) > VERTICAL_RESTRAINT) return;

      const currentIndex = NAV_ITEMS.findIndex((item) => item.href === pathname);
      if (currentIndex === -1) return;

      // Swipe left (finger moves right-to-left, dx < 0) -> advance to next page.
      // Swipe right (finger moves left-to-right, dx > 0) -> go back to previous page.
      if (dx < 0 && currentIndex < NAV_ITEMS.length - 1) {
        router.push(NAV_ITEMS[currentIndex + 1].href);
      } else if (dx > 0 && currentIndex > 0) {
        router.push(NAV_ITEMS[currentIndex - 1].href);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [pathname, router]);

  return null;
}
