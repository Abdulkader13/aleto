"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

import Hero from "@/components/sections/Hero";

import Surface from "@/components/ui/Surface";
import Callout from "@/components/ui/Callout";
import Badge from "@/components/ui/Badge";
import { cn } from "@/components/ui/cn";

import { ArrowRight, HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need prior knowledge of Arabic?",
    a: "No. Programs are available from A1 (beginner) to B2/C1. During the application, we check your level and place you correctly.",
  },
  {
    q: "Which dialect do you teach?",
    a: "You can choose Modern Standard Arabic (MSA) or spoken dialects such as Levantine or Egyptian. The recommendation depends on your goals (work, daily life, relocation, etc.).",
  },
  {
    q: "I studied Arabic before but can’t speak. Is this for me?",
    a: "Yes — this is exactly the profile the program is designed for. Many learners know grammar and vocabulary but struggle to speak. The methodology focuses on activating what you already know.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most learners feel a clear difference after 3–4 weeks: faster recall, less translating in the head, and more confidence speaking. Progress speed depends on consistency and level.",
  },
  {
    q: "How are lessons structured?",
    a: "Each lesson includes focused vocabulary, a short text or dialogue, guided speaking tasks, and immediate correction. Speaking is the core — not an extra.",
  },
  {
    q: "Do you focus a lot on grammar?",
    a: "Grammar is used only when it helps communication. We avoid long theoretical explanations and focus on patterns you can actually use while speaking.",
  },
  {
    q: "What’s the difference between private and group classes?",
    a: "Private classes are fully personalized and flexible. Group classes (3–5 learners) follow a fixed structure and are more affordable, while still guaranteeing speaking time.",
  },
  {
    q: "How often are classes held?",
    a: "Typical formats are 1–2 sessions per week. Group programs usually run for 8 weeks. Private classes are scheduled individually.",
  },
  {
    q: "Are lessons online or in person?",
    a: "All lessons are online via Zoom or Google Meet. This allows flexible scheduling and learners from different time zones.",
  },
  {
    q: "Will I get homework?",
    a: "Yes, but it’s practical: short speaking tasks, vocabulary reuse, or preparation for the next topic. No busywork.",
  },
  {
    q: "Is there a placement test?",
    a: "There is no formal exam. Placement is done through your application answers and, if needed, a short conversation.",
  },
  {
    q: "Can I switch levels or formats later?",
    a: "Yes. If your level or needs change, adjustments can be made between program cycles or during private study.",
  },
  {
    q: "Do you offer certificates?",
    a: "Not yet. Certificates may be introduced later, but the focus is currently on real speaking ability rather than paperwork.",
  },
  {
    q: "How do I pay?",
    a: "Currently, payment is handled manually after confirmation (bank transfer, Wise, PayPal). Integrated checkout may be added later.",
  },

];

export default function FAQPage({
  params,
}: {
  params: { locale: string };
}) {
  void params;

  const [openIndex, setOpenIndex] = useState<number | null>(0); // open first by default

  return (
    <section className="space-y-20 md:space-y-28">
      {/* HERO */}
      <FadeIn>
        <Hero
          eyebrow="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Clear answers to common questions — so you can decide confidently."
          primaryCta={{
            href: "/apply",
            label: (
              <>
                Apply <ArrowRight className="h-4 w-4" />
              </>
            ),
          }}
          secondaryCta={{
            href: "/programs",
            label: "View programs",
          }}
          variant="brand"
          media={
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] backdrop-blur p-8">
              <p className="text-sm uppercase tracking-widest text-[var(--color-secondary)]">
                Quick notes
              </p>

              <h3 className="mt-3 text-2xl font-playfair font-bold">
                The important bits
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                <Badge tone="secondary">Online</Badge>
                <Badge tone="primary">Speaking-first</Badge>
                <Badge tone="accent">Reply 24–48h</Badge>
              </div>

              <p className="mt-5 text-[var(--color-foreground)]/70 leading-relaxed">
                If you don’t see your question here, apply or contact us — we’ll reply
                with the best format and next steps.
              </p>
            </div>
          }
        />
      </FadeIn>

      {/* FAQ LIST */}
      <FadeIn delay={0.12}>
        <Surface className="p-8 md:p-10">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-[var(--color-primary)]">
                Answers
              </p>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                Everything you might ask
              </h2>
              <p className="text-[var(--color-foreground)]/65 text-lg">
                Click a question to expand. Keep it simple.
              </p>
            </div>

            <div className="hidden md:block">
              <span className="text-sm text-[var(--color-foreground)]/65">
                {faqs.length} questions
              </span>
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <Surface
                  key={idx}
                  variant="solid"
                  className={cn(
                    "p-6 md:p-8 transition hover:shadow-md",
                    isOpen && "border-[color:rgba(244,183,64,0.45)]"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-start gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <div
                      className={cn(
                        "h-10 w-10 rounded-2xl border flex items-center justify-center flex-shrink-0",
                        isOpen
                          ? "bg-[var(--color-accent-tint)] border-[color:rgba(244,183,64,0.45)]"
                          : "bg-[var(--color-primary-tint)] border-[color:rgba(79,110,247,0.30)]"
                      )}
                    >
                      <HelpCircle
                        className={cn(
                          "h-5 w-5",
                          isOpen
                            ? "text-[var(--color-accent)]"
                            : "text-[var(--color-primary)]"
                        )}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.q}</h3>
                    </div>

                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-[var(--color-foreground)]/55 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-200",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-4 text-[var(--color-foreground)]/65 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </Surface>
              );
            })}
          </div>


        </Surface>
      </FadeIn>

      {/* FINAL CTA */}
      <FadeIn delay={0.3}>
        <Callout
          tone="accent"
          title="Still unsure? Apply anyway."
          subtitle="Applying doesn’t lock you in. It helps us understand your level and recommend the best option."
          cta={{
            href: "/apply",
            label: (
              <>
                Apply now <ArrowRight className="h-5 w-5" />
              </>
            ),
            variant: "accent",
          }}
        />


      </FadeIn>
    </section>
  );
}
