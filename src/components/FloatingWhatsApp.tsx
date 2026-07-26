"use client";

import { MessageCircle } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function FloatingWhatsApp() {
  const handleClick = () => {
    window.gtag?.("event", "whatsapp_click", {
      event_category: "contact",
      event_label: "floating_automation_consultation",
      value: 1,
    });
  };

  return (
    <a
      href="https://wa.me/918828278210?text=Hi%20Maaz,%20I%20want%20to%20discuss%20an%20automation%20for%20my%20business."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuss an automation project on WhatsApp"
      title="Discuss your automation"
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-[#11a978] text-white shadow-xl shadow-emerald-950/20 hover:-translate-y-1 hover:bg-[#0d9268] sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
