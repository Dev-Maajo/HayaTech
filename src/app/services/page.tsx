import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  Braces,
  FileSearch,
  HeartHandshake,
  MessageCircle,
  RefreshCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Webhook,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";

import ContactBand from "@/components/ContactBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "AI Automation Services",
  description:
    "Custom AI agents, n8n workflows, WhatsApp automation, ecommerce operations, document intelligence, and API integrations from HayaTech.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    icon: Bot,
    title: "Custom AI agents",
    intro:
      "Purpose-built agents that understand context, use business tools, and act inside clear boundaries.",
    points: [
      "Lead qualification and routing",
      "Knowledge-aware customer assistance",
      "Research, summarisation, and decision support",
      "Human approval and confidence fallbacks",
    ],
    tint: "bg-[#e8f8f1] text-[#087f5b]",
  },
  {
    icon: Workflow,
    title: "n8n workflow automation",
    intro:
      "Reliable multi-step workflows that connect triggers, logic, actions, and recovery paths.",
    points: [
      "Branching logic, loops, and schedules",
      "Retries, alerts, logging, and error handling",
      "Database and spreadsheet operations",
      "Cloud or self-hosted deployment support",
    ],
    tint: "bg-[#eaf0ff] text-[#315fc4]",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp, chat & voice",
    intro:
      "Conversational systems that help customers take action—not chatbots that only produce text.",
    points: [
      "Bookings, enquiries, and order flows",
      "Lead capture and follow-up",
      "Customer support triage",
      "Conversation-to-CRM automation",
    ],
    tint: "bg-[#e8fbf5] text-[#07835e]",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce automation",
    intro:
      "Operational flows for stores that need faster handoffs across orders, customers, inventory, and reporting.",
    points: [
      "Shopify order and fulfilment flows",
      "Inventory and low-stock alerts",
      "Review, support, and customer messaging",
      "Product data and report automation",
    ],
    tint: "bg-[#fff3e5] text-[#a85806]",
  },
  {
    icon: FileSearch,
    title: "Document intelligence",
    intro:
      "Turn unstructured PDFs, emails, forms, and attachments into validated, usable business data.",
    points: [
      "Invoice and receipt extraction",
      "Document classification and routing",
      "Structured output for sheets or CRMs",
      "Validation and exception queues",
    ],
    tint: "bg-[#f5edff] text-[#7843ad]",
  },
  {
    icon: Braces,
    title: "APIs & custom integrations",
    intro:
      "When there is no ready-made connector, I work directly with APIs, webhooks, and custom logic.",
    points: [
      "REST API and webhook connections",
      "Authentication and data transformation",
      "Internal tools and custom endpoints",
      "Legacy-to-modern workflow bridges",
    ],
    tint: "bg-[#e9f5ff] text-[#17649b]",
  },
  {
    icon: RefreshCcw,
    title: "Operations automation",
    intro:
      "Automate the repetitive coordination that slows down sales, finance, support, and internal teams.",
    points: [
      "CRM hygiene and pipeline updates",
      "Email and inbox operations",
      "Approvals, reminders, and escalations",
      "Daily summaries and team reporting",
    ],
    tint: "bg-[#eef4ed] text-[#41623e]",
  },
  {
    icon: Wrench,
    title: "Monitoring & improvement",
    intro:
      "Keep important automations observable, maintainable, and adaptable as the business changes.",
    points: [
      "Workflow health and failure alerts",
      "Bug fixes and integration updates",
      "Performance and cost optimisation",
      "New steps, channels, and scale support",
    ],
    tint: "bg-[#f2f2f2] text-[#4a5560]",
  },
];

const stack = [
  "n8n",
  "OpenAI",
  "Gemini",
  "WhatsApp",
  "Shopify",
  "Gmail",
  "Google Sheets",
  "Google Drive",
  "Calendars",
  "CRMs",
  "Slack",
  "REST APIs",
  "Webhooks",
  "Databases",
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Automation capabilities"
        title="From one repetitive task to an entire operating system."
        description="HayaTech designs custom automation around the exact process you already use. Start with a bottleneck, a broken handoff, or an idea—the technical architecture comes after the business problem is clear."
      >
        <a
          href="https://wa.me/918828278210?text=Hi%20Maaz,%20I%20want%20to%20explore%20automation%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#10211b] px-6 py-3.5 font-extrabold text-white hover:-translate-y-0.5 hover:bg-[#18332a]"
        >
          Map my workflow <ArrowRight size={18} aria-hidden="true" />
        </a>
      </PageHero>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="What can be built"
            title="A broad automation toolkit, applied with focus."
            description="The goal is not to use every tool. It is to assemble the smallest dependable system that solves the workflow end to end."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map(({ icon: Icon, title, intro, points, tint }) => (
              <article
                key={title}
                className="rounded-[1.5rem] border border-[#dbe4de] bg-[#f9fbf9] p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${tint}`}>
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-xl font-black tracking-[-0.03em] text-[#10211b] sm:text-2xl">
                      {title}
                    </h2>
                    <p className="mt-3 leading-7 text-[#607169]">{intro}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 border-t border-[#e0e8e3] pt-6 sm:grid-cols-2">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm font-semibold text-[#42564d]"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101b2b] px-4 py-20 text-white sm:px-6 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Can it be automated?"
              title="If your team follows steps, moves information, or repeats decisions—the answer is usually yes."
              description="Even when the full process should not be automated, the repetitive parts around it often can be."
              inverse
            />
            <div className="mt-7 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs font-bold text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-5 sm:p-7">
            <div className="grid gap-3">
              {[
                { icon: Webhook, text: "A message, form, order, email, file, or schedule starts the process." },
                { icon: Sparkles, text: "Rules or AI interpret the context and choose a bounded next step." },
                { icon: Zap, text: "Apps are updated, responses are sent, and records stay in sync." },
                { icon: ShieldCheck, text: "Exceptions pause, alert, or route to a human instead of failing silently." },
                { icon: HeartHandshake, text: "Your team sees the outcome and stays in control of important decisions." },
              ].map(({ icon: Icon, text }, index) => (
                <div
                  key={text}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#0c1624] p-4"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-300/10 text-emerald-300">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-black tracking-[0.15em] text-slate-600">
                      STEP {index + 1}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="section-shell grid gap-8 rounded-[2rem] border border-[#d6e0da] bg-white p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Not sure where to start?</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.04em] text-[#10211b]">
              Describe the manual process—not the technology you think you need.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#607169]">
              A voice note, screen recording, or simple list of steps is enough for
              the first conversation.
            </p>
          </div>
          <Link
            href="/faqs"
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-[#c8d8cf] px-6 py-3.5 font-extrabold text-[#10211b] hover:border-[#9fbaa9]"
          >
            Read common questions
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
