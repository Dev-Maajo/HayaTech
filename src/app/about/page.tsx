import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, Eye, HeartHandshake, ShieldCheck, Workflow } from "lucide-react";
import Image from "next/image";

import ContactBand from "@/components/ContactBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Maaz Shaikh and learn how HayaTech approaches custom AI automation with practical architecture, clear guardrails, and direct builder support.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: Eye,
    title: "Clear by design",
    text: "You should understand what triggers the system, what it does, where the data goes, and when a person is involved.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable before impressive",
    text: "Validation, error paths, fallbacks, and monitoring matter more than a flashy demo that only works once.",
  },
  {
    icon: HeartHandshake,
    title: "Built with you",
    text: "The workflow is shaped around your team and constraints—not forced into a generic automation package.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About HayaTech"
        title="Practical automation, built by the person you speak with."
        description="HayaTech is a founder-led automation practice focused on turning repetitive work into reliable systems that teams can actually understand and use."
      />

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-[#dff7eb]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-[#223043] shadow-2xl shadow-slate-900/15">
              <Image
                src="/maaz-founder.png"
                alt="Maaz Shaikh, founder and automation architect at HayaTech"
                fill
                sizes="(min-width: 1024px) 430px, 90vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -right-2 rounded-2xl border border-[#d4e1d8] bg-white p-4 shadow-xl sm:right-[-1.5rem]">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#788981]">
                Based in
              </p>
              <p className="mt-1 font-black text-[#10211b]">Mumbai · Working worldwide</p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Hi, I&apos;m Maaz</p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.045em] text-[#10211b] sm:text-5xl">
              I build the systems that make repetitive work disappear.
            </h2>
            <div className="mt-6 space-y-5 leading-8 text-[#52635c]">
              <p>
                My work sits between business operations and technology. I study how
                information enters a business, how decisions are made, where people
                lose time, and how the tools should work together.
              </p>
              <p>
                HayaTech started from a simple belief: automation should solve a real
                operational problem. That can mean an AI agent qualifying leads, a
                workflow processing invoices, a WhatsApp system handling bookings,
                or a custom integration connecting tools that were never designed to
                talk to each other.
              </p>
              <p>
                I work directly on the discovery, architecture, build, testing, and
                handover. The result is not a black box—it is a system with clear
                logic, defined guardrails, and a human path for the cases that need
                judgment.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Direct founder communication",
                "Business-first workflow mapping",
                "Human approvals where needed",
                "Documented, maintainable delivery",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-[#f2f7f4] px-4 py-3 text-sm font-bold text-[#33473f]"
                >
                  <CheckCircle2 size={18} className="text-[#0b9d72]" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/918828278210?text=Hi%20Maaz,%20I%20want%20to%20discuss%20an%20automation%20idea."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#10211b] px-6 py-3.5 font-extrabold text-white hover:-translate-y-0.5 hover:bg-[#18332a]"
            >
              Tell me what you want to automate
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Working principles"
            title="Good automation is calm, transparent, and useful."
            description="These principles shape every system, whether it is one workflow or a connected automation layer."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-[#dbe4de] bg-white p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e4f7ee] text-[#087f5b]">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-black text-[#10211b]">{title}</h3>
                <p className="mt-3 leading-7 text-[#607169]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101b2b] px-4 py-20 text-white sm:px-6 sm:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Workflow size={28} className="text-emerald-300" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-black tracking-[-0.045em] sm:text-4xl">
              Start with the process you wish your team never had to repeat.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            You do not need a technical specification. Explain what happens today,
            where it slows down, and what the ideal outcome looks like. I&apos;ll turn
            that into an automation plan you can evaluate clearly.
          </p>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
