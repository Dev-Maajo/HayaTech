import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function ContactBand({
  title = "What would you automate if the busywork disappeared?",
  description = "Send me the messy process. I’ll map what can be automated, what should stay human, and the most practical way to build it.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="section-shell overflow-hidden rounded-[2rem] bg-[#101b2b] px-6 py-10 text-white shadow-2xl shadow-slate-900/10 sm:px-10 sm:py-14 lg:px-14">
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="eyebrow !text-emerald-300">Free workflow consultation</p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              {description}
            </p>
          </div>
          <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="https://wa.me/918828278210?text=Hi%20Maaz,%20I%20want%20to%20discuss%20an%20automation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="shine inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-emerald-300 px-6 py-3.5 font-extrabold text-[#10211b] hover:-translate-y-0.5 hover:bg-emerald-200"
            >
              <MessageCircle size={19} aria-hidden="true" />
              Discuss my workflow
            </a>
            <a
              href="mailto:skmaaz8828@gmail.com?subject=Automation%20project%20enquiry"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-bold text-white hover:border-white/35 hover:bg-white/5"
            >
              Email HayaTech <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
