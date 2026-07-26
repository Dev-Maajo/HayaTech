import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, Bot, FileSearch, Mail, MessageCircle } from "lucide-react";

import ContactBand from "@/components/ContactBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Automation Resource Library",
  description:
    "Practical guides and references for n8n workflows, AI agents, inbox automation, document processing, and WhatsApp systems.",
  alternates: { canonical: "/library" },
};

const resources = [
  {
    icon: MessageCircle,
    title: "Build a WhatsApp Reservation Bot with n8n",
    description:
      "A practical workflow for receiving requests, checking calendar availability, and sending booking confirmations.",
    meta: "n8n workflow guide",
    link: "https://n8n.io/workflows/2465-building-your-first-whatsapp-chatbot/",
  },
  {
    icon: Mail,
    title: "Classify Gmail Emails Using AI",
    description:
      "Use an email trigger, AI classification, labels, and connected tools to organise an inbox automatically.",
    meta: "AI inbox automation",
    link: "https://n8n.io/workflows/3772-automatically-classify-and-label-gmail-emails-with-google-gemini-ai/",
  },
  {
    icon: Bot,
    title: "Build an AI Agent with Memory",
    description:
      "Learn how memory and tools can help an agent maintain context and perform actions across a workflow.",
    meta: "AI agent architecture",
    link: "https://n8n.io/workflows/6270-build-your-first-ai-agent/",
  },
  {
    icon: FileSearch,
    title: "Extract Invoice Data from PDFs",
    description:
      "Turn invoice documents into structured records, spreadsheets, and notifications with an automated pipeline.",
    meta: "Document intelligence",
    link: "https://n8n.io/workflows/4763-extract-invoice-data-from-pdfs-with-ai-google-sheets-email-alerts/",
  },
];

export default function LibraryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Automation library"
        title="Learn the systems behind the buzzwords."
        description="A curated starting point for understanding how useful automation is structured—from triggers and AI decisions to actions, records, and human fallbacks."
      />

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="section-shell grid gap-5 md:grid-cols-2">
          {resources.map(({ icon: Icon, title, description, meta, link }, index) => (
            <article
              key={title}
              className="group flex flex-col rounded-[1.5rem] border border-[#dbe4de] bg-[#f8faf7] p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5 sm:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e2f7ed] text-[#087f5b]">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="font-mono text-xs font-bold text-[#9aaba2]">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-6 text-[10px] font-black uppercase tracking-[0.15em] text-[#0b9d72]">
                {meta}
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.035em] text-[#10211b]">
                {title}
              </h2>
              <p className="mt-3 flex-1 leading-7 text-[#607169]">{description}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-extrabold text-[#087f5b] group-hover:gap-3"
              >
                Open guide <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#101b2b] px-4 py-20 text-white sm:px-6 sm:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <BookOpen size={28} className="text-emerald-300" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Learn enough to ask better questions. Then build what matters.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              The library explains patterns. Your business still needs a system
              designed around its own data, tools, risks, and decisions.
            </p>
          </div>
          <a
            href="https://wa.me/918828278210?text=Hi%20Maaz,%20I%20want%20help%20designing%20an%20automation%20system."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-emerald-300 px-6 py-3.5 font-extrabold text-[#10211b] hover:bg-emerald-200"
          >
            Ask about your use case
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
