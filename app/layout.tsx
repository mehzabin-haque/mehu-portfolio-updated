import type { Metadata } from "next";
import { Geist_Mono, Source_Serif_4, Playfair_Display } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SwipeNavigator from "@/components/SwipeNavigator";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mehzabin Haque",
  description: "M.S. Student in Software Engineering | HCI & Accessibility Researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${sourceSerif.variable} ${playfair.variable} antialiased bg-[#F7F5F0] text-[#1E2430] font-serif`}
      >
        <SwipeNavigator />
        <div className="md:flex">
          <Sidebar />
          <div className="md:ml-72 flex-1 min-h-screen flex flex-col">
            <div className="flex-1">{children}</div>
            <footer className="border-t border-double border-t-4 border-[#D9D4C7] py-6">
              <div className="mx-auto max-w-2xl px-8 flex items-center justify-between text-[11px] tracking-wide text-[#8A8578] font-mono">
                <span>Curriculum Vitae — Mehzabin Haque</span>
                <span>Updated August 2026</span>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
