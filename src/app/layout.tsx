import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://hayatech.dev"),
  title: {
    default: "HayaTech | AI Automation Systems",
    template: "%s | HayaTech",
  },
  description:
    "Custom AI agents, n8n workflows, WhatsApp automation, ecommerce systems, and business integrations built around the way your team actually works.",
  keywords: [
    "AI automation",
    "n8n automation",
    "custom AI agents",
    "WhatsApp automation",
    "business workflow automation",
    "Shopify automation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "HayaTech | AI Automation Systems",
    description:
      "If a business process repeats, HayaTech can design a reliable system to automate it.",
    url: "https://hayatech.dev",
    siteName: "HayaTech",
    type: "website",
    images: [
      {
        url: "/whatsapp-bot.png",
        width: 1280,
        height: 720,
        alt: "HayaTech automation workflow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HayaTech | AI Automation Systems",
    description:
      "Custom automation systems that connect your apps, data, AI, and team.",
    images: ["/whatsapp-bot.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "HayaTech",
  url: "https://hayatech.dev",
  description:
    "Custom AI automation, n8n workflow, WhatsApp bot, and business integration services.",
  founder: {
    "@type": "Person",
    name: "Maaz Shaikh",
  },
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  email: "skmaaz8828@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EW2BT26CPP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EW2BT26CPP');
          `}
        </Script>
        <Script
          id="hayatech-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <Navbar />
        <div className="pt-[72px]">{children}</div>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
