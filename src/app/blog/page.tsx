import type { Metadata } from "next";
import { ArrowRight, Bot, LockKeyhole, Workflow } from "lucide-react";
import Link from "next/link";

import ContactBand from "@/components/ContactBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Automation Notes",
  description:
    "Practical notes about AI automation, n8n workflows, custom agents, and privacy-aware software from HayaTech.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="HayaTech notes"
        title="Useful thinking for people building smarter operations."
        description="No trend summaries or filler. This space is for clear explanations of how automation, AI systems, integrations, and privacy-aware software work in practice."
      />

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="section-shell">
          <article className="overflow-hidden rounded-[2rem] border border-[#dbe4de] bg-[#f8faf7]">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="automation-grid flex min-h-[280px] items-center justify-center bg-[#101b2b] p-10">
                <div className="grid h-36 w-36 place-items-center rounded-[2rem] border border-emerald-300/20 bg-emerald-300/10 text-emerald-300 shadow-2xl shadow-emerald-950/30">
                  <LockKeyhole size={60} aria-hidden="true" />
                </div>
              </div>
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap gap-2">
                  {["Privacy architecture", "Browser technology", "8 min read"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#d7e2db] bg-white px-3 py-1.5 text-xs font-bold text-[#52635c]"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
                <h2 className="mt-6 text-3xl font-black leading-tight tracking-[-0.045em] text-[#10211b] sm:text-4xl">
                  How Browser-Based File Tools Protect Your Privacy
                </h2>
                <p className="mt-5 leading-7 text-[#607169]">
                  Understand what local browser processing changes, where file data
                  goes, and which privacy questions still matter when evaluating an
                  online utility.
                </p>
                <Link
                  href="/blog/how-browser-based-file-tools-protect-your-privacy"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#10211b] px-6 py-3.5 font-extrabold text-white hover:bg-[#18332a]"
                >
                  Read the guide <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Workflow,
                title: "Workflow design",
                text: "Triggers, branching, actions, failure paths, and the architecture behind dependable automation.",
              },
              {
                icon: Bot,
                title: "AI agents",
                text: "Where agents help, how tools and memory change them, and when a normal workflow is better.",
              },
              {
                icon: LockKeyhole,
                title: "Responsible systems",
                text: "Practical guardrails for data, privacy, approvals, and human control inside automated operations.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-[#dbe4de] bg-[#f8faf7] p-6">
                <Icon size={22} className="text-[#087f5b]" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-black text-[#10211b]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#607169]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBand
        title="Reading about automation is useful. Mapping your own process is better."
        description="Send the workflow you are dealing with and I’ll help identify the most valuable place to start."
      />
    </main>
  );
}
