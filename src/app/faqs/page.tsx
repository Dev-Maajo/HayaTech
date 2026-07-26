"use client";

import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

import PageHero from "@/components/PageHero";

const faqs = [
  {
    question: "What can HayaTech automate?",
    answer:
      "Any structured process is worth exploring: lead handling, email operations, WhatsApp conversations, document processing, ecommerce workflows, CRM updates, scheduling, notifications, reporting, approvals, and custom app-to-app integrations. The first step is mapping the real process and its exceptions.",
  },
  {
    question: "Do I need to know whether I need n8n, an AI agent, or custom code?",
    answer:
      "No. Start with the business problem. The solution might use n8n, AI, APIs, a database, custom code, or a simpler rule-based workflow. The architecture should follow the use case—not the other way around.",
  },
  {
    question: "Will an AI agent make important decisions on its own?",
    answer:
      "Only within the boundaries we define. Important steps can use validation rules, confidence thresholds, approvals, exception queues, or direct human handoff. Automation should increase control, not remove it.",
  },
  {
    question: "Can you connect tools that do not have a native integration?",
    answer:
      "Often, yes. If the platform provides an API, webhook, export, email trigger, or another reliable interface, a custom integration may be possible. I review the available access and limitations before proposing the build.",
  },
  {
    question: "How long does a custom automation take?",
    answer:
      "It depends on the number of systems, decision paths, data rules, and testing scenarios. After the workflow-mapping conversation, you receive a clear scope and realistic delivery plan before work begins.",
  },
  {
    question: "How is pricing decided?",
    answer:
      "Custom systems are scoped around complexity, integrations, AI usage, testing, deployment, and ongoing support. You receive a transparent project quote after the process is understood. Ready-made systems have fixed prices on the Automation Systems page.",
  },
  {
    question: "What happens if an automation fails?",
    answer:
      "Critical workflows can include retries, logs, alerts, validation, and a fallback path. The exact recovery design depends on what is at risk and how quickly your team needs to respond.",
  },
  {
    question: "Will I understand the system after delivery?",
    answer:
      "Yes. The goal is a maintainable handover, not a black box. The workflow, important rules, connected services, and operational responsibilities are documented clearly.",
  },
  {
    question: "Can an existing workflow be improved instead of rebuilt?",
    answer:
      "Yes. Existing n8n workflows and automation systems can be audited for reliability, cost, speed, error handling, data quality, and maintainability before deciding what should change.",
  },
  {
    question: "How do we start?",
    answer:
      "Send a WhatsApp message with the repetitive process, the tools involved, and the outcome you want. A simple voice note or screen recording is enough for the first review.",
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Clear answers before we automate anything."
        description="You do not need to arrive with a technical plan. These answers explain how projects are scoped, built, controlled, and handed over."
      />

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Still unsure?</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#10211b]">
              Ask with a voice note.
            </h2>
            <p className="mt-4 leading-7 text-[#607169]">
              Explain the repetitive task in plain language. I&apos;ll tell you what
              looks automatable and what information is needed next.
            </p>
            <a
              href="https://wa.me/918828278210?text=Hi%20Maaz,%20I%20have%20a%20question%20about%20automation."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#10211b] px-6 py-3.5 font-extrabold text-white hover:bg-[#18332a]"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Ask Maaz directly
            </a>
          </aside>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-[#dbe4de] bg-[#f8faf7]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-black leading-6 text-[#10211b]">
                      {faq.question}
                    </span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#e4f7ee] text-[#087f5b]">
                      <ChevronDown
                        size={19}
                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="border-t border-[#dbe4de] px-5 py-5 sm:px-6">
                      <p className="max-w-3xl leading-7 text-[#607169]">{faq.answer}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
