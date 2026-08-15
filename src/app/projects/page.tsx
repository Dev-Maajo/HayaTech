import type { Metadata } from "next";
import { ArrowRight, ExternalLink, Layers3, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ContactBand from "@/components/ContactBand";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description:
    "Selected HayaTech products, software concepts, and operational systems — with the thinking, architecture, and implementation behind each build.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "HayaTech Work & Case Studies",
    description:
      "Selected HayaTech products and operational software systems.",
    url: "/projects",
    type: "website",
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

const projects = [
  {
    type: "Concept / demonstration system",
    title: "D2C Ops Command Center",
    description:
      "A unified operations dashboard for ecommerce teams to monitor revenue, order risk, inventory pressure, returns, channel mix, and smart alerts from one workspace.",
    image: "/d2c-ops-command-center.png",
    href: "/projects/d2c-ops-command-center",
    liveUrl: "https://d2c-ops-command-center.vercel.app",
    outcome: "Orders · inventory · returns · alerts · AI-ready briefing",
    accent: "blue",
  },
  {
    type: "Live HayaTech product",
    title: "HayaTools",
    description:
      "A privacy-first suite of browser-based image and PDF utilities, designed and shipped end to end with responsive UX, local processing, and production deployment.",
    image: "/hayatools-home-desktop.png",
    href: "/projects/hayatools",
    liveUrl: "https://tools.hayatech.dev",
    outcome: "Product strategy · UX · development · deployment",
    accent: "green",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#101b2b] px-4 py-16 text-white sm:px-6 sm:py-24">
        <div className="automation-grid absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="section-shell relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3.5 py-2 text-xs font-black uppercase tracking-[0.13em] text-emerald-200">
            <Layers3 size={15} aria-hidden="true" />
            Selected work
          </div>

          <h1 className="mt-7 max-w-5xl text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
            Software built around{" "}
            <span className="text-emerald-300">real operational problems.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            These case studies show how HayaTech approaches product thinking,
            interface design, system architecture, automation, and production-ready
            implementation. Concept projects are clearly identified as demonstrations.
          </p>
        </div>
      </section>

      <section className="bg-[#f4f7f2] px-4 py-20 sm:px-6 sm:py-28">
        <div className="section-shell grid gap-7">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-[#d6e0da] bg-white shadow-sm"
            >
              <div className="grid lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
                <div className="relative min-h-[260px] overflow-hidden border-b border-[#dbe4de] bg-[#eef2ef] lg:min-h-[420px] lg:border-b-0 lg:border-r">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-11">
                  <p
                    className={`text-xs font-black uppercase tracking-[0.16em] ${
                      project.accent === "blue"
                        ? "text-[#3977f6]"
                        : "text-[#087f5b]"
                    }`}
                  >
                    {project.type}
                  </p>
                  <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] text-[#10211b] sm:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-5 leading-7 text-[#607169]">
                    {project.description}
                  </p>
                  <div className="mt-6 rounded-xl bg-[#eff5f1] px-4 py-3 text-xs font-bold text-[#33473f]">
                    {project.outcome}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={project.href}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#10211b] px-5 py-3 font-extrabold text-white hover:-translate-y-0.5 hover:bg-[#18332a]"
                    >
                      Read case study <ArrowRight size={17} aria-hidden="true" />
                    </Link>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#c8d8cf] px-5 py-3 font-extrabold text-[#10211b] hover:border-[#9fbaa9] hover:bg-[#f8faf7]"
                    >
                      Open live build <ExternalLink size={17} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div className="mt-4 rounded-[1.6rem] border border-dashed border-[#c7d8ce] bg-white/60 p-7 text-center sm:p-9">
            <Wrench size={22} className="mx-auto text-[#087f5b]" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-black text-[#10211b]">
              More operational systems are being documented.
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#607169]">
              HayaTech also builds private client systems and internal automation that
              may not be publishable as public case studies.
            </p>
          </div>
        </div>
      </section>

      <ContactBand
        title="Have an operational problem that deserves its own system?"
        description="Send the current workflow, bottleneck, or repetitive task. HayaTech can map the problem and build the right software around it."
      />
    </main>
  );
}
