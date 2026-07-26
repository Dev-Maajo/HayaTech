import type { Metadata } from "next";
import { ArrowRight, Check, Download, Layers3, ShieldCheck } from "lucide-react";
import Image from "next/image";

import ContactBand from "@/components/ContactBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ready-to-Deploy Automation Systems",
  description:
    "Explore practical n8n automation templates for Gmail, WhatsApp reservations, and AI invoice processing.",
  alternates: { canonical: "/templates" },
};

const systems = [
  {
    title: "Gmail Smart Automation",
    label: "Inbox operations",
    image: "/gmail-automation.png",
    description:
      "Classify incoming emails with AI, log important messages, save attachments, and prepare the next action.",
    steps: ["Gmail trigger", "AI classification", "Sheets logging", "Drive storage"],
    price: "₹799",
    link: "https://hayatechh.gumroad.com/l/ctryac",
  },
  {
    title: "WhatsApp Reservation Bot",
    label: "Conversational booking",
    image: "/whatsapp-bot.png",
    description:
      "Handle booking requests, check availability, confirm reservations, and keep the conversation moving.",
    steps: ["WhatsApp trigger", "AI response", "Calendar check", "Confirmation"],
    price: "₹3,599",
    link: "https://hayatechh.gumroad.com/l/knzpdh",
  },
  {
    title: "AI Invoice Processor",
    label: "Document operations",
    image: "/invoice-processor.png",
    description:
      "Extract invoice data from PDFs, record structured fields, and notify the right person automatically.",
    steps: ["PDF input", "AI extraction", "Sheets logging", "Team alert"],
    price: "₹3,599",
    link: "https://hayatechh.gumroad.com/l/ymqcea",
  },
];

export default function TemplatesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Deployable systems"
        title="Start with a proven workflow. Adapt it to your operation."
        description="These n8n systems are built for practical use cases. Deploy them yourself, study the architecture, or ask HayaTech to customise the flow around your tools and rules."
      />

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="section-shell grid gap-6 lg:grid-cols-3">
          {systems.map((system) => (
            <article
              key={system.title}
              className="group flex overflow-hidden rounded-[1.7rem] border border-[#dbe4de] bg-[#f8faf7] shadow-sm transition-all hover:-translate-y-1.5 hover:bg-white hover:shadow-2xl hover:shadow-emerald-950/10"
            >
              <div className="flex w-full flex-col">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#101b2b]">
                  <Image
                    src={system.image}
                    alt={`${system.title} automation workflow`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#101b2b]/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-200 backdrop-blur">
                    {system.label}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-2xl font-black tracking-[-0.035em] text-[#10211b]">
                    {system.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#607169]">
                    {system.description}
                  </p>
                  <ul className="mt-6 grid gap-2">
                    {system.steps.map((step) => (
                      <li
                        key={step}
                        className="flex items-center gap-2.5 text-sm font-semibold text-[#42564d]"
                      >
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-[#dff8ec] text-[#087f5b]">
                          <Check size={12} strokeWidth={3} aria-hidden="true" />
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-end justify-between gap-5 border-t border-[#dbe4de] pt-6">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#788981]">
                        Template price
                      </p>
                      <p className="mt-1 text-2xl font-black text-[#10211b]">
                        {system.price}
                      </p>
                    </div>
                    <a
                      href={system.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#10211b] px-5 py-3 font-extrabold text-white hover:bg-[#18332a]"
                    >
                      Get system <Download size={17} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f7f2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="section-shell">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Layers3,
                title: "Understand the architecture",
                text: "Each system represents a complete trigger-to-outcome workflow, not an isolated AI prompt.",
              },
              {
                icon: ShieldCheck,
                title: "Adapt the guardrails",
                text: "Change approvals, validation rules, destinations, and fallbacks to match your process.",
              },
              {
                icon: ArrowRight,
                title: "Extend when needed",
                text: "Connect more channels, databases, APIs, or human steps as the workflow grows.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-[#dbe4de] bg-white p-6">
                <Icon size={22} className="text-[#087f5b]" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-black text-[#10211b]">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#607169]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBand
        title="Need the workflow built around your exact business?"
        description="Use a template as the starting point or skip templates entirely. I can map, build, and integrate a custom system around your tools and decision rules."
      />
    </main>
  );
}
