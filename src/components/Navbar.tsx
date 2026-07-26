"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BrandLogo from "./BrandLogo";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Systems", href: "/templates" },
  { name: "Work", href: "/projects/hayatools" },
  { name: "Resources", href: "/library" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dbe4de]/80 bg-[#f4f7f2]/90 backdrop-blur-xl">
      <nav
        className="section-shell flex h-[72px] items-center justify-between gap-6"
        aria-label="Main navigation"
      >
        <BrandLogo />

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-bold ${
                  active
                    ? "bg-white text-[#10211b] shadow-sm"
                    : "text-[#52635c] hover:bg-white/70 hover:text-[#10211b]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <a
          href="https://wa.me/918828278210?text=Hi%20Maaz,%20I%20want%20to%20automate%20a%20business%20workflow."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-xl bg-[#10211b] px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#18332a] lg:inline-flex"
        >
          Build my automation
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="grid h-11 w-11 place-items-center rounded-xl border border-[#dbe4de] bg-white text-[#10211b] lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-[#dbe4de] bg-[#f4f7f2] px-4 pb-5 pt-3 shadow-xl lg:hidden"
        >
          <div className="section-shell flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`border-b border-[#dbe4de]/70 px-2 py-3.5 font-bold ${
                  pathname === item.href ? "text-[#087f5b]" : "text-[#10211b]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/918828278210?text=Hi%20Maaz,%20I%20want%20to%20automate%20a%20business%20workflow."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#10211b] px-5 py-3 font-extrabold text-white"
            >
              Build my automation
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
