import type { Metadata } from "next";

import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How HayaTech handles enquiries, analytics information, third-party services, and privacy requests.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information we may collect",
    body: "When you contact HayaTech through WhatsApp, email, or another linked service, we may receive the information you choose to provide, including your name, contact details, company information, and enquiry. We may also receive limited technical and usage information such as device type, browser type, approximate location, referring page, pages visited, and interaction events through analytics technologies.",
  },
  {
    title: "How we use information",
    body: "Information is used to respond to enquiries, discuss and deliver requested services, maintain and improve the website, understand site performance, protect the website from misuse, and meet applicable legal obligations. HayaTech does not sell personal information.",
  },
  {
    title: "Analytics",
    body: "HayaTech uses Google Analytics to understand website usage. Google may process browser, device, interaction, and approximate location information through cookies or similar technologies under its own terms. You can restrict cookies through your browser and may use Google's analytics opt-out tools where available.",
  },
  {
    title: "Cookies and similar technologies",
    body: "Cookies or similar technologies may support essential functionality, security, analytics, and preference storage. You can restrict or delete cookies using browser controls, although blocking certain technologies may affect website behaviour.",
  },
  {
    title: "Third-party services and links",
    body: "The website uses or links to services such as Google Analytics, WhatsApp, email providers, hosting services, Gumroad, and external learning resources. Those services process information under their own terms and privacy policies. HayaTech is not responsible for the practices of external websites.",
  },
  {
    title: "HayaTools",
    body: "HayaTools is available at tools.hayatech.dev and provides browser-based utility tools. Its file-processing practices and service-specific information are explained in the separate Privacy Policy available on the HayaTools website. This policy applies to the main HayaTech website.",
  },
  {
    title: "Data retention and security",
    body: "Enquiry and business communication information is retained only as long as reasonably needed to respond, provide services, maintain necessary records, resolve disputes, or meet legal obligations. Reasonable safeguards are used, but no internet transmission or storage method is completely secure.",
  },
  {
    title: "Your privacy choices",
    body: "Depending on your location, you may have rights related to access, correction, deletion, objection, restriction, or withdrawal of consent. Contact HayaTech using the email below to make a request. Identity verification may be required before completing it.",
  },
  {
    title: "Children’s privacy",
    body: "HayaTech is intended for business and general audiences and is not directed to children under 13. If you believe a child has provided personal information, contact us so it can be reviewed and removed where appropriate.",
  },
  {
    title: "Changes to this policy",
    body: "This policy may be updated when the website, services, or legal obligations change. The current version will be posted on this page with a revised effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy explains how HayaTech handles information when you visit hayatech.dev or contact us about automation services."
      >
        <p className="text-sm font-bold text-[#788981]">Effective: 26 July 2026</p>
      </PageHero>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24">
        <article className="section-shell max-w-4xl">
          <div className="space-y-4">
            {sections.map((section, index) => (
              <section
                key={section.title}
                className="rounded-2xl border border-[#dbe4de] bg-[#f8faf7] p-6 sm:p-8"
              >
                <p className="font-mono text-xs font-bold text-[#0b9d72]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-xl font-black text-[#10211b]">
                  {section.title}
                </h2>
                <p className="mt-3 leading-7 text-[#607169]">{section.body}</p>
              </section>
            ))}

            <section className="rounded-2xl bg-[#101b2b] p-6 text-white sm:p-8">
              <p className="font-mono text-xs font-bold text-emerald-300">11</p>
              <h2 className="mt-3 text-xl font-black">Contact</h2>
              <p className="mt-3 leading-7 text-slate-300">
                For privacy questions or requests, email{" "}
                <a
                  href="mailto:skmaaz8828@gmail.com"
                  className="font-bold text-emerald-300 underline decoration-emerald-300/40 underline-offset-4 hover:text-emerald-200"
                >
                  skmaaz8828@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
