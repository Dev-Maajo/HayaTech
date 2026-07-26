import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation FAQs",
  description:
    "Answers about AI automation scope, n8n workflows, custom integrations, human guardrails, delivery, pricing, and support.",
  alternates: { canonical: "/faqs" },
};

export default function FAQsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
