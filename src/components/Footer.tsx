import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

const companyLinks = [
  { name: "Services", href: "/services" },
  { name: "Automation Systems", href: "/templates" },
  { name: "About HayaTech", href: "/about" },
  { name: "FAQs", href: "/faqs" },
];

const resourceLinks = [
  { name: "Work & Case Studies", href: "/projects" },
  { name: "D2C Ops Case Study", href: "/projects/d2c-ops-command-center" },
  { name: "HayaTools Case Study", href: "/projects/hayatools" },
  { name: "Automation Library", href: "/library" },
  { name: "Blog", href: "/blog" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c1624] text-white">
      <div className="section-shell py-12 sm:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div className="max-w-sm">
            <BrandLogo inverse />
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Custom AI automation systems that connect apps, data, conversations,
              and people—built around the way your business actually operates.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={16} className="text-emerald-300" aria-hidden="true" />
              Mumbai, India · Available worldwide
            </div>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-white">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-emerald-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-white">
              Learn
            </h2>
            <ul className="mt-5 space-y-3">
              {resourceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-emerald-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-white">
              Start a project
            </h2>
            <div className="mt-5 space-y-3">
              <a
                href="https://wa.me/918828278210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-emerald-300"
              >
                <MessageCircle size={17} aria-hidden="true" />
                +91 88282 78210
              </a>
              <a
                href="mailto:skmaaz8828@gmail.com"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-emerald-300"
              >
                <Mail size={17} aria-hidden="true" />
                skmaaz8828@gmail.com
              </a>
            </div>
            <a
              href="https://wa.me/918828278210?text=Hi%20Maaz,%20I%20want%20to%20discuss%20an%20automation%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-bold text-emerald-300 hover:text-emerald-200"
            >
              Discuss an idea <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HayaTech. Built for work that should run itself.</p>
          <p>AI automation · n8n · integrations · intelligent operations</p>
        </div>
      </div>
    </footer>
  );
}
