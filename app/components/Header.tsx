import React from "react";
import { Tangerine } from "next/font/google";

// Load the Tangerine font
const tangerine = Tangerine({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="w-full flex  items-center justify-between px-5">
        <div>Links</div>
        <div className={`${tangerine.className} text-4xl`}>
          Karly Mendoza Photography
        </div>
        <div>Pricing Contact and Language Switcher</div>
      </nav>
    </header>
  );
}
