import type { Metadata } from "next";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BellRing,
  Bot,
  Boxes,
  Check,
  ExternalLink,
  PackageSearch,
  RefreshCcw,
  RotateCcw,
  ShoppingCart,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ContactBand from "@/components/ContactBand";

export const metadata: Metadata = {
  title: "D2C Ops Command Center Case Study",
  description:
    "A HayaTech concept demonstrating how ecommerce operations data can be unified into one actionable command center for orders, inventory, returns, alerts, and executive visibility.",
  alternates: { canonical: "/projects/d2c-ops-command-center" },
  openGraph: {
    title: "D2C Ops Command Center — HayaTech Case Study",
    description:
      "A unified operational intelligence concept for modern D2C teams.",
    url: "/projects/d2c-ops-command-center",
    type: "article",
    images: [
      {
        url: "/d2c-ops-command-center.png",
        width: 1363,
        height: 781,
        alt: "D2C Ops Command Center dashboard",
      },
    ],
  },
};

const capabilities = [
  {
    icon: ShoppingCart,
    title: "Orders at risk",
    text: "Surface fulfilment delays, priority orders, delivery exceptions, and other orders that need attention.",
  },
  {
    icon: Boxes,
    title: "Inventory intelligence",
    text: "Track stock, velocity, days of cover, reorder pressure, and products approaching critical inventory levels.",
  },
  {
    icon: RotateCcw,
    title: "Returns & RTO",
    text: "Monitor return behaviour and RTO movement alongside the rest of the operating picture.",
  },
  {
    icon: BellRing,
    title: "Smart alerts",
    text: "Convert operational conditions into focused alerts instead of asking teams to continuously watch reports.",
  },
  {
    icon: TrendingUp,
    title: "Revenue visibility",
    text: "Keep revenue momentum and channel contribution visible next to the operational issues affecting performance.",
  },
  {
    icon: Bot,
    title: "AI-ready daily brief",
    text: "Demonstrate how business signals can be condensed into an executive summary of what changed and what needs review.",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Recharts",
  "Vercel",
  "Responsive UI",
  "Synthetic demo data",
];

export default function D2COpsCaseStudy() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#101b2b] px-4 py-16 text-white sm:px-6 sm:py-24">
        <div className="automation-grid absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-3.5 py-2 text-xs font-black uppercase tracking-[0.13em] text-blue-200">
              <Sparkles size={15} aria-hidden="true" />
              HayaTech concept / demonstration system
            </div>

            <p className="mt-8 text-xs font-black tracking-[0.17em] text-emerald-300">
              PRODUCT THINKING · ECOMMERCE OPERATIONS · SOFTWARE DEVELOPMENT
            </p>

            <h1 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              One command center for the{" "}
              <span className="text-blue-300">daily operating picture.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              The D2C Ops Command Center is a live HayaTech demonstration of how
              ecommerce teams could bring revenue, risky orders, inventory pressure,
              returns, and operational alerts into one focused workspace.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://d2c-ops-command-center.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-emerald-300 px-6 py-3.5 font-extrabold text-[#10211b] hover:bg-emerald-200"
              >
                Open live demo <ExternalLink size={18} aria-hidden="true" />
              </a>
              <Link
                href="#case-study"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-extrabold text-white hover:bg-white/5"
              >
                Explore the concept <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.2rem] bg-gradient-to-br from-blue-400/20 to-emerald-300/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-2.5 shadow-2xl">
              <Image
                src="/d2c-ops-command-center.png"
                width={1363}
                height={781}
                alt="D2C Ops Command Center overview screen"
                className="h-auto w-full rounded-[1.2rem]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div id="case-study">
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="section-shell grid gap-5 md:grid-cols-2">
            <article className="rounded-[1.6rem] border border-[#e2ded9] bg-[#fff8f2] p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b35c23]">
                The operational problem
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#10211b]">
                The data exists, but the operating picture is fragmented.
              </h2>
              <p className="mt-5 leading-7 text-[#607169]">
                D2C teams often monitor orders in one platform, inventory in another,
                returns elsewhere, and then assemble updates manually through
                spreadsheets, inboxes, and chat. The result is slower awareness and
                more time spent interpreting reports.
              </p>
            </article>

            <article className="rounded-[1.6rem] border border-[#cce5d8] bg-[#eefaf4] p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#087f5b]">
                The product direction
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#10211b]">
                Bring the signals that matter into one actionable workspace.
              </h2>
              <p className="mt-5 leading-7 text-[#52635c]">
                The concept centralizes the key operational questions: how revenue is
                moving, which orders need attention, where inventory is under
                pressure, how returns are behaving, and what the team should review
                first.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-[#f4f7f2] px-4 py-20 sm:px-6 sm:py-24">
          <div className="section-shell">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                ["1", "Unified workspace"],
                ["5", "Core operating areas"],
                ["Live", "Interactive demo"],
                ["Ready", "For real integrations"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[#dbe4de] bg-white p-5 sm:p-6"
                >
                  <strong className="block text-2xl font-black text-[#087f5b] sm:text-3xl">
                    {value}
                  </strong>
                  <span className="mt-2 block text-xs font-bold text-[#6a7b73] sm:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
              <div>
                <p className="eyebrow">What the concept demonstrates</p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#10211b] sm:text-4xl">
                  Move from reporting screens to operational signals.
                </h2>
                <p className="mt-5 leading-7 text-[#607169]">
                  The interface is designed around attention: the most important
                  numbers remain visible, risk areas are separated from healthy
                  operations, and each module can become a destination for deeper
                  action once live integrations are connected.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {capabilities.map(({ icon: Icon, title, text }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-[#dbe4de] bg-white p-5"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e5f8ef] text-[#087f5b]">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-black text-[#10211b]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#607169]">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="section-shell">
            <div className="overflow-hidden rounded-[2rem] border border-[#dbe4de]">
              <div className="grid gap-8 bg-[#101b2b] p-7 text-white sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
                <div>
                  <p className="eyebrow !text-emerald-300">From demo to production</p>
                  <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                    The dashboard is the interface. The real value comes from the
                    integrations behind it.
                  </h2>
                </div>
                <p className="leading-7 text-slate-300">
                  A production implementation would replace synthetic demo data with
                  authorized business data and connect the dashboard to the systems a
                  brand already uses.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: PackageSearch,
                    label: "Commerce",
                    text: "Shopify, WooCommerce, marketplaces",
                  },
                  {
                    icon: RefreshCcw,
                    label: "Operations",
                    text: "ERP, inventory, fulfilment, returns",
                  },
                  {
                    icon: BarChart3,
                    label: "Data layer",
                    text: "APIs, databases, scheduled sync",
                  },
                  {
                    icon: AlertTriangle,
                    label: "Action layer",
                    text: "Email, WhatsApp, Slack, internal alerts",
                  },
                ].map(({ icon: Icon, label, text }, index) => (
                  <div
                    key={label}
                    className="border-b border-[#dbe4de] p-6 last:border-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r"
                  >
                    <Icon size={22} className="text-[#087f5b]" aria-hidden="true" />
                    <span className="mt-5 block font-mono text-xs font-bold text-[#9aaba2]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-2 font-black text-[#10211b]">{label}</h3>
                    <p className="mt-1 text-sm text-[#607169]">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#dbe4de] bg-[#eef2ef] p-2">
              <Image
                src="/d2c-ops-command-center.png"
                width={1363}
                height={781}
                alt="D2C Ops Command Center dashboard showing revenue, orders at risk, and revenue by channel"
                className="h-auto w-full rounded-xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#f4f7f2] px-4 py-20 sm:px-6 sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Technology</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#10211b]">
                A modern frontend foundation designed to grow into a real system.
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#d1ddd5] bg-white px-3.5 py-2 text-xs font-bold text-[#52635c]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {[
                {
                  icon: Check,
                  title: "Clear information hierarchy",
                  text: "Executive KPIs, trend views, and exception areas are separated so the user can understand the day quickly.",
                },
                {
                  icon: BellRing,
                  title: "Action-oriented modules",
                  text: "The structure anticipates live alerts and drill-down workflows instead of stopping at static reporting.",
                },
                {
                  icon: Sparkles,
                  title: "AI as an optional intelligence layer",
                  text: "The product can add summaries and anomaly explanations where they help, without making AI the entire interface.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl border border-[#dbe4de] bg-white p-5"
                >
                  <Icon
                    size={21}
                    className="shrink-0 text-[#087f5b]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-black text-[#10211b]">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#607169]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
          <div className="section-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] bg-[#10211b] p-7 text-white sm:p-10">
              <p className="eyebrow !text-emerald-300">Production possibilities</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Adapt the command center to the way a real D2C team operates.
              </h2>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Live Shopify / WooCommerce sync",
                  "Role-based access",
                  "Multi-store support",
                  "WhatsApp / email operational alerts",
                  "Custom business rules",
                  "AI-generated daily management brief",
                  "Historical trend analysis",
                  "Internal task assignment",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4 text-sm font-bold text-slate-200"
                  >
                    <Check
                      size={17}
                      className="mt-0.5 shrink-0 text-emerald-300"
                      aria-hidden="true"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#dbe4de] bg-[#f4f7f2] p-7 sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#3977f6]">
                Important project note
              </p>
              <h2 className="mt-4 text-2xl font-black tracking-[-0.035em] text-[#10211b]">
                This is a HayaTech concept — not a fabricated client result.
              </h2>
              <p className="mt-4 leading-7 text-[#607169]">
                The live environment uses synthetic demonstration data. It exists to
                show a product direction, interaction model, and implementation
                capability. No real brand performance, customer metrics, or claimed
                ROI is represented on this page.
              </p>
              <a
                href="https://d2c-ops-command-center.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-extrabold text-[#087f5b] hover:gap-3"
              >
                Explore the live concept <ExternalLink size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f7f2] px-4 py-20 sm:px-6 sm:py-24">
          <div className="section-shell rounded-[2rem] bg-white px-6 py-12 text-center shadow-xl shadow-emerald-950/5 sm:px-10">
            <p className="eyebrow justify-center">Live demonstration</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#10211b] sm:text-5xl">
              Explore the working command center.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#607169]">
              Browse the overview, order-risk, inventory, returns, and smart-alert
              screens using synthetic demonstration data.
            </p>
            <a
              href="https://d2c-ops-command-center.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#10211b] px-6 py-3.5 font-extrabold text-white hover:bg-[#18332a]"
            >
              Open live demo <ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <ContactBand
          title="Want this kind of operational visibility around your own business?"
          description="HayaTech can connect the systems you already use and build a tailored command center around the signals your team actually needs."
        />
      </div>
    </main>
  );
}
