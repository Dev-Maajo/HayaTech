import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  CheckCircle2,
  FileSearch,
  Gauge,
  MessageCircle,
  Orbit,
  RefreshCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ContactBand from "@/components/ContactBand";
import SectionHeading from "@/components/SectionHeading";

const capabilities = [
  {
    icon: Bot,
    title: "Custom AI agents",
    text: "Agents that understand context, use your tools, make bounded decisions, and hand off to a human when needed.",
    className: "lg:col-span-2",
  },
  {
    icon: Workflow,
    title: "n8n workflows",
    text: "Multi-step automations with logic, retries, alerts, approvals, and clean error handling.",
    className: "",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & chat",
    text: "Lead capture, support routing, booking, follow-ups, and status updates across customer channels.",
    className: "",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce operations",
    text: "Order routing, catalog updates, review flows, inventory alerts, customer messaging, and reporting.",
    className: "",
  },
  {
    icon: FileSearch,
    title: "Document intelligence",
    text: "Extract, validate, classify, and route information from invoices, forms, PDFs, and email attachments.",
    className: "",
  },
  {
    icon: Braces,
    title: "APIs & custom integrations",
    text: "Connect the tools you already use—even when there is no ready-made connector.",
    className: "lg:col-span-2",
  },
];

const systems = [
  {
    title: "WhatsApp Reservation Bot",
    category: "CONVERSATIONAL AUTOMATION",
    description:
      "Understands booking requests, checks availability, confirms the slot, and keeps a human path open for exceptions.",
    image: "/whatsapp-bot.png",
    outcome: "Message → decision → calendar → confirmation",
  },
  {
    title: "AI Invoice Processor",
    category: "DOCUMENT OPERATIONS",
    description:
      "Reads invoice files, extracts structured fields, logs clean data, and alerts the right person when action is needed.",
    image: "/invoice-processor.png",
    outcome: "PDF → AI extraction → sheet → notification",
  },
  {
    title: "Gmail Smart Automation",
    category: "INBOX INTELLIGENCE",
    description:
      "Classifies incoming mail, captures important details, saves attachments, and prepares the next step automatically.",
    image: "/gmail-automation.png",
    outcome: "Email → classify → route → record",
  },
];

const process = [
  {
    number: "01",
    title: "Map the real workflow",
    text: "We identify triggers, decisions, edge cases, systems, and the points where a person should remain in control.",
  },
  {
    number: "02",
    title: "Design the automation",
    text: "I turn the process into a clear system architecture with data flow, guardrails, fallbacks, and success criteria.",
  },
  {
    number: "03",
    title: "Build & pressure-test",
    text: "The system is built, tested against real scenarios, and hardened with validation, retries, logs, and alerts.",
  },
  {
    number: "04",
    title: "Launch with clarity",
    text: "You get a working system, documentation, and a straightforward understanding of how it runs and how to manage it.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#f4f7f2] px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
        <div className="pointer-events-none absolute left-[-12rem] top-[-10rem] h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="pointer-events-none absolute right-[-8rem] top-24 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c8d8cf] bg-white/80 px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#255044] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(52,211,153,0.16)]" />
              Automation built around your business
            </div>

            <h1 className="mt-7 max-w-4xl text-[clamp(3rem,7vw,6.4rem)] font-black leading-[0.92] tracking-[-0.065em] text-[#10211b]">
              If it repeats,
              <span className="block text-[#0b9d72]">it can run itself.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#52635c] sm:text-xl">
              I build custom AI agents and automation systems that connect your
              apps, move data, handle conversations, and keep operations running
              without the daily busywork.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/918828278210?text=Hi%20Maaz,%20I%20have%20a%20business%20workflow%20I%20want%20to%20automate."
                target="_blank"
                rel="noopener noreferrer"
                className="shine inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#10211b] px-7 py-4 font-extrabold text-white shadow-xl shadow-slate-900/10 hover:-translate-y-0.5 hover:bg-[#18332a]"
              >
                Show me what&apos;s possible
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <Link
                href="#systems"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-[#c8d8cf] bg-white/75 px-7 py-4 font-extrabold text-[#10211b] hover:border-[#9fbaa9] hover:bg-white"
              >
                See systems I build
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#52635c]">
              {["No platform lock-in", "Human guardrails", "Built for real operations"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2
                      size={17}
                      className="text-[#0b9d72]"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative">
            <div className="float-slow absolute -right-2 -top-5 z-10 rounded-xl border border-[#bcebd8] bg-[#eafff6] px-3.5 py-2 text-xs font-extrabold text-[#087f5b] shadow-lg sm:right-2">
              System healthy
            </div>
            <div className="automation-grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#101b2b] p-4 shadow-2xl shadow-slate-900/25 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[10px] font-black tracking-[0.16em] text-emerald-200">
                  LIVE WORKFLOW
                </span>
              </div>

              <div className="py-6 sm:py-8">
                <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-400/15 text-blue-300">
                        <MessageCircle size={20} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[10px] font-black tracking-[0.14em] text-slate-500">
                          TRIGGER
                        </p>
                        <p className="mt-1 text-sm font-bold text-white">
                          New lead arrives
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flow-line hidden h-[2px] w-8 bg-white/10 sm:block" />
                  <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08] p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-300/15 text-emerald-200">
                        <Sparkles size={20} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[10px] font-black tracking-[0.14em] text-emerald-300/60">
                          AI DECISION
                        </p>
                        <p className="mt-1 text-sm font-bold text-white">
                          Qualify & extract
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-auto my-3 h-8 w-[2px] bg-gradient-to-b from-emerald-300/70 to-blue-300/60" />

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-300/15 text-violet-200">
                        <RefreshCcw size={20} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[10px] font-black tracking-[0.14em] text-slate-500">
                          UPDATE
                        </p>
                        <p className="mt-1 text-sm font-bold text-white">
                          CRM + pipeline
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-300/15 text-amber-200">
                        <Zap size={20} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[10px] font-black tracking-[0.14em] text-slate-500">
                          ACTION
                        </p>
                        <p className="mt-1 text-sm font-bold text-white">
                          Reply + notify team
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
                {[
                  ["4", "steps"],
                  ["1", "human fallback"],
                  ["0", "manual handoffs"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <strong className="block text-lg text-white">{value}</strong>
                    <span className="text-[10px] uppercase tracking-wide text-slate-500">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="section-shell mt-14 border-t border-[#dbe4de] pt-7">
          <p className="text-center text-xs font-black uppercase tracking-[0.17em] text-[#788981]">
            Connecting the tools your business already runs on
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-extrabold text-[#33473f] sm:text-base">
            {[
              "WhatsApp",
              "Shopify",
              "Gmail",
              "Google Sheets",
              "CRMs",
              "Calendars",
              "APIs",
              "AI models",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="What I automate"
                title="Bring me the messy workflow."
                description="No one-size-fits-all package. I study the process, find the repetitive decisions and handoffs, then build the right system around them."
              />
              <Link
                href="/services"
                className="mt-7 inline-flex items-center gap-2 font-extrabold text-[#087f5b] hover:gap-3"
              >
                Explore every capability
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(({ icon: Icon, title, text, className }) => (
                <article
                  key={title}
                  className={`group rounded-2xl border border-[#dbe4de] bg-[#f8faf7] p-6 transition-all hover:-translate-y-1 hover:border-[#aad3bf] hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5 ${className}`}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e1f7ed] text-[#087f5b] transition-colors group-hover:bg-[#10211b] group-hover:text-emerald-300">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-black tracking-[-0.025em] text-[#10211b]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#607169]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#10211b] px-4 py-20 text-white sm:px-6 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <SectionHeading
              eyebrow="The difference"
              title="Automation should remove friction—not create another system to babysit."
              description="A good automation is quiet, observable, and clear about when it needs a person."
              inverse
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Gauge,
                  title: "Less copy-paste",
                  text: "Data moves between tools without repeated manual entry.",
                },
                {
                  icon: Zap,
                  title: "Faster response",
                  text: "Customers and teams get the right next step without waiting.",
                },
                {
                  icon: ShieldCheck,
                  title: "Human control",
                  text: "Approvals and fallbacks stay in the flow where judgment matters.",
                },
                {
                  icon: Orbit,
                  title: "Clean handoffs",
                  text: "Every action reaches the right person, record, and channel.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                >
                  <Icon size={21} className="text-emerald-300" aria-hidden="true" />
                  <h3 className="mt-4 font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="systems" className="bg-[#f4f7f2] px-4 py-20 sm:px-6 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Built systems"
            title="Real workflows, shown as systems."
            description="These examples show how a business trigger becomes a reliable operational outcome—not just a flashy chatbot demo."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {systems.map((system) => (
              <article
                key={system.title}
                className="group overflow-hidden rounded-[1.6rem] border border-[#d6e0da] bg-white shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-950/10"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#101b2b]">
                  <Image
                    src={system.image}
                    alt={`${system.title} workflow`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-black tracking-[0.15em] text-[#0b9d72]">
                    {system.category}
                  </p>
                  <h3 className="mt-3 text-xl font-black tracking-[-0.035em] text-[#10211b]">
                    {system.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#607169]">
                    {system.description}
                  </p>
                  <div className="mt-5 rounded-xl bg-[#eff5f1] px-4 py-3 text-xs font-bold text-[#33473f]">
                    {system.outcome}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 rounded-xl border border-[#c8d8cf] bg-white px-6 py-3.5 font-extrabold text-[#10211b] hover:border-[#9fbaa9]"
            >
              Explore ready-to-deploy systems
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="How it gets built"
            title="From “this wastes hours” to a system that runs."
            description="The process stays practical, transparent, and focused on how your team will use the automation after launch."
            align="center"
          />

          <div className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-[#cbd8d0] lg:block" />
            {process.map((step) => (
              <article
                key={step.number}
                className="relative rounded-2xl border border-[#dbe4de] bg-[#f8faf7] p-6"
              >
                <span className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-[#c7e8d8] bg-[#e9fff5] font-mono text-sm font-black text-[#087f5b] shadow-[0_0_0_8px_#fff]">
                  {step.number}
                </span>
                <h3 className="mt-7 text-lg font-black tracking-[-0.025em] text-[#10211b]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#607169]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf3ef] px-4 py-20 sm:px-6 sm:py-24">
        <div className="section-shell grid gap-8 overflow-hidden rounded-[2rem] border border-[#d4e0d8] bg-white p-6 shadow-xl shadow-emerald-950/5 sm:p-9 lg:grid-cols-[0.68fr_1.32fr] lg:items-center lg:p-12">
          <div className="relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden rounded-[1.6rem] bg-[#223043]">
            <Image
              src="/maaz-founder.png"
              alt="Maaz Shaikh, founder of HayaTech"
              fill
              sizes="300px"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-[#101b2b]/85 px-4 py-3 text-white backdrop-blur">
              <p className="font-black">Maaz Shaikh</p>
              <p className="text-xs text-slate-300">Automation architect · HayaTech</p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Direct builder access</p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.045em] text-[#10211b] sm:text-4xl">
              The person mapping your workflow is the person building it.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-[#52635c]">
              I&apos;m Maaz, an automation builder based in Mumbai. HayaTech exists
              to turn repetitive business processes into dependable systems—without
              hiding the logic behind buzzwords or overcomplicating the solution.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Clear scope", "Practical architecture", "Direct communication", "Documented handover"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#d3dfd7] bg-[#f5f8f6] px-3.5 py-2 text-xs font-bold text-[#42564d]"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 font-extrabold text-[#087f5b] hover:gap-3"
            >
              More about how I work
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Quick answers"
            title="Before you send the first message."
            description="You do not need a technical brief. A screen recording or a plain explanation of the current process is enough to start."
          />
          <div className="grid gap-3">
            {[
              [
                "Can you automate a process that uses several different apps?",
                "Yes. The system can connect APIs, webhooks, databases, spreadsheets, inboxes, ecommerce platforms, and custom tools in one flow.",
              ],
              [
                "Will AI make decisions without control?",
                "Only where it makes sense. Approvals, confidence checks, validation rules, and human fallbacks can be built into every critical step.",
              ],
              [
                "Do I need to know exactly what to build?",
                "No. Start with the repetitive problem. I’ll help map the right automation and tell you honestly what should—and should not—be automated.",
              ],
            ].map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-[#dbe4de] bg-[#f8faf7] p-5 open:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-black text-[#10211b]">
                  {question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e4f6ed] text-[#087f5b] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl pr-8 text-sm leading-6 text-[#607169]">
                  {answer}
                </p>
              </details>
            ))}
            <Link
              href="/faqs"
              className="mt-3 inline-flex items-center gap-2 font-extrabold text-[#087f5b]"
            >
              View all FAQs <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
