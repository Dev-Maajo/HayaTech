import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  ExternalLink,
  FileImage,
  Gauge,
  LockKeyhole,
  Search,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ContactBand from "@/components/ContactBand";

export const metadata: Metadata = {
  title: "HayaTools Product Case Study",
  description:
    "How HayaTech designed and shipped a privacy-first suite of browser-based image and PDF tools.",
  alternates: { canonical: "/projects/hayatools" },
  openGraph: {
    title: "HayaTools Product Case Study",
    description:
      "From product idea to a responsive suite of browser-based file tools.",
    url: "/projects/hayatools",
    type: "article",
    images: [
      {
        url: "/hayatools-home-desktop.png",
        width: 1349,
        height: 636,
        alt: "HayaTools desktop homepage",
      },
    ],
  },
};

const tools = [
  "Image to PDF",
  "Compress Image",
  "Resize Image",
  "JPG / PNG to WebP",
  "Merge PDF",
  "PNG to JPG",
  "JPG to PNG",
  "Crop Image",
  "Rotate & Flip Image",
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Canvas API",
  "jsPDF",
  "pdf-lib",
  "Vercel",
  "Search Console",
];

export default function HayaToolsCaseStudy() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#101b2b] px-4 py-16 text-white sm:px-6 sm:py-24">
        <div className="automation-grid absolute inset-0 opacity-40" />
        <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3.5 py-2 text-xs font-black uppercase tracking-[0.13em] text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Live product case study
            </div>
            <p className="mt-8 text-xs font-black tracking-[0.17em] text-blue-300">
              PRODUCT STRATEGY · DEVELOPMENT · DEPLOYMENT
            </p>
            <h1 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              A focused utility product,{" "}
              <span className="text-emerald-300">shipped end to end.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              HayaTools is a free collection of browser-based image and PDF tools.
              The project shows HayaTech&apos;s ability to move from product idea to
              architecture, interface, privacy model, launch, and ongoing operation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://tools.hayatech.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-emerald-300 px-6 py-3.5 font-extrabold text-[#10211b] hover:bg-emerald-200"
              >
                Open HayaTools <ExternalLink size={18} aria-hidden="true" />
              </a>
              <Link
                href="#case-study"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-extrabold text-white hover:bg-white/5"
              >
                Explore the build <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute -inset-5 rounded-[2.2rem] bg-gradient-to-br from-blue-400/20 to-emerald-300/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl">
              <Image
                src="/hayatools-home-mobile.png"
                width={321}
                height={495}
                alt="HayaTools mobile homepage"
                className="mx-auto h-auto max-h-[520px] w-auto rounded-[1.4rem]"
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
                The problem
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#10211b]">
                Basic file tasks often create unnecessary friction.
              </h2>
              <p className="mt-5 leading-7 text-[#607169]">
                Many utility sites require accounts, upload files to remote servers,
                add watermarks, or interrupt a simple task with unnecessary steps.
              </p>
            </article>
            <article className="rounded-[1.6rem] border border-[#cce5d8] bg-[#eefaf4] p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#087f5b]">
                The solution
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#10211b]">
                Focused tools with a browser-first privacy model.
              </h2>
              <p className="mt-5 leading-7 text-[#52635c]">
                Each page solves one task. Supported transformations run in browser
                memory and return a temporary local download without an account flow.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-[#f4f7f2] px-4 py-20 sm:px-6 sm:py-24">
          <div className="section-shell">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                ["9", "Live tools"],
                ["0", "Accounts required"],
                ["0", "HayaTools watermarks"],
                ["Local", "Browser-first processing"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-[#dbe4de] bg-white p-5 sm:p-6">
                  <strong className="block text-2xl font-black text-[#087f5b] sm:text-3xl">
                    {value}
                  </strong>
                  <span className="mt-2 block text-xs font-bold text-[#6a7b73] sm:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="eyebrow">What shipped</p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#10211b] sm:text-4xl">
                  Nine focused tools in one consistent product system.
                </h2>
                <p className="mt-5 leading-7 text-[#607169]">
                  Shared foundations keep metadata, instructions, validation,
                  responsive behaviour, and the processing experience consistent.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-3 rounded-xl border border-[#dbe4de] bg-white p-4"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#e5f8ef] text-[#087f5b]">
                      <Check size={16} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-bold text-[#33473f]">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
          <div className="section-shell">
            <div className="overflow-hidden rounded-[2rem] border border-[#dbe4de]">
              <div className="grid gap-8 bg-[#101b2b] p-7 text-white sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
                <div>
                  <p className="eyebrow !text-emerald-300">Privacy architecture</p>
                  <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                    The supported file stays on the user&apos;s device.
                  </h2>
                </div>
                <p className="leading-7 text-slate-300">
                  Native browser APIs and client-side libraries perform the
                  transformations without a HayaTools application-server upload path.
                </p>
              </div>
              <div className="grid md:grid-cols-4">
                {[
                  { icon: FileImage, label: "Select", text: "Choose a local file" },
                  { icon: LockKeyhole, label: "Validate", text: "Check type in browser" },
                  { icon: Gauge, label: "Process", text: "Transform in memory" },
                  { icon: ArrowRight, label: "Download", text: "Create the local result" },
                ].map(({ icon: Icon, label, text }, index) => (
                  <div
                    key={label}
                    className="border-b border-[#dbe4de] p-6 last:border-0 md:border-b-0 md:border-r"
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

            <div className="mt-8 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="overflow-hidden rounded-2xl border border-[#dbe4de] bg-[#eef2ef] p-2">
                <Image
                  src="/hayatools-home-desktop.png"
                  width={1349}
                  height={636}
                  alt="HayaTools desktop homepage"
                  className="h-auto w-full rounded-xl"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-[#dbe4de] bg-[#eef2ef] p-2">
                <Image
                  src="/hayatools-image-to-pdf.png"
                  width={1093}
                  height={640}
                  alt="HayaTools Image to PDF interface"
                  className="h-full w-full rounded-xl object-cover object-left"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f7f2] px-4 py-20 sm:px-6 sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Technology</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#10211b]">
                A production-ready web stack.
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
                  icon: Search,
                  title: "Search foundation",
                  text: "Route metadata, canonical URLs, structured navigation, sitemap, and Search Console setup.",
                },
                {
                  icon: Gauge,
                  title: "Quality checks",
                  text: "Linting, type checks, production builds, responsive testing, and representative processing tests.",
                },
                {
                  icon: Smartphone,
                  title: "Responsive experience",
                  text: "The same focused workflow is available across desktop and mobile.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-[#dbe4de] bg-white p-5">
                  <Icon size={21} className="shrink-0 text-[#087f5b]" aria-hidden="true" />
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
          <div className="section-shell rounded-[2rem] bg-[#10211b] px-6 py-12 text-center text-white sm:px-10">
            <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">
              Try the finished product.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              HayaTools is live and free to use across desktop and mobile.
            </p>
            <a
              href="https://tools.hayatech.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-emerald-300 px-6 py-3.5 font-extrabold text-[#10211b] hover:bg-emerald-200"
            >
              Open HayaTools <ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <ContactBand
          title="Need an internal tool or automation product built end to end?"
          description="HayaTech can take a clear operational problem from workflow map to working, responsive system."
        />
      </div>
    </main>
  );
}
