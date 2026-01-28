"use client";

import { useState } from "react";

import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

import Hero from "@/components/sections/Hero";
import Surface from "@/components/ui/Surface";
import FeatureCard from "@/components/ui/FeatureCard";
import Callout from "@/components/ui/Callout";
import Image from "next/image";

import {
  ArrowRight,
  Download,
  Lock,
  FileText,
  Sparkles,
  CheckCircle2,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";

import { freeMaterials } from "@/lib/materials/free";

const paidItems = [
  {
    title: "8-week speaking program pack (B1)",
    desc: "8 topics • vocab lists • dialogues • homework • speaking tasks (ready-to-use).",
    meta: "Bundle • Paid",
  },
  {
    title: "Work Arabic: meetings & emails (B1–B2)",
    desc: "Practical phrases + templates + role-play scenarios for professional contexts.",
    meta: "Module • Paid",
  },
  {
    title: "Dialect starter pack (Levantine / Egyptian)",
    desc: "Essential phrases + dialogues + practice prompts for real-life situations.",
    meta: "Pack • Paid",
  },
];

export default function MaterialsPage({
  params,
}: {
  params: { locale: string };
}) {
  void params;
  
  const [showAllFree, setShowAllFree] = useState(false);

  const visibleFree = showAllFree
    ? freeMaterials
    : freeMaterials.slice(0, 3);
const featuredFree = freeMaterials.slice(0, 6);

  return (
    <section className="space-y-20 md:space-y-28">
      {/* HERO */}
      <FadeIn>
        <Hero
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Materials
            </span>
          }
          title="Practice-ready"
          highlight="resources"
          subtitle="Free and paid materials designed for speaking: vocabulary in context, short texts, prompts, and structured homework."
          primaryCta={{
            href: "/apply",
            label: (
              <>
                Apply & get a recommendation <ArrowRight className="h-4 w-4" />
              </>
            ),
          }}
          secondaryCta={{
            href: "/programs",
            label: "Explore programs",
          }}
          variant="brand"
          media={
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] backdrop-blur p-8">
              <p className="text-sm uppercase tracking-widest text-[var(--color-secondary)]">
                What you’ll find here
              </p>

              <h3 className="mt-3 text-2xl font-playfair font-bold">
                Materials that create speaking
              </h3>

              <p className="mt-3 text-[var(--color-foreground)]/70 leading-relaxed">
                Not “PDFs to read”. These are designed to be used: speak, get
                corrected, repeat, improve.
              </p>

              <div className="mt-6 space-y-3 text-[var(--color-foreground)]/80">
                {[
                  "Vocabulary sets tied to real situations",
                  "Short texts / dialogues (usable language)",
                  "Speaking prompts + role-play tasks",
                  "Homework that reinforces speaking",
                ].map((x, idx) => (
                  <div key={x} className="flex items-start gap-2">
                    <CheckCircle2
                      className={
                        idx % 2 === 0
                          ? "h-5 w-5 text-[var(--color-primary)] mt-0.5"
                          : "h-5 w-5 text-[var(--color-secondary)] mt-0.5"
                      }
                    />
                    <span>{x}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[color:rgba(244,183,64,0.45)] bg-[var(--color-accent-tint)] p-4 text-sm text-[var(--color-foreground)]/80">
                Payment is currently handled manually after confirmation (Wise /
                PayPal / bank transfer). Checkout can be added later.
              </div>
            </div>
          }
        />
      </FadeIn>

      {/* HOW TO USE */}
      <FadeIn delay={0.12}>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            tone="primary"
            icon={<BookOpen className="h-6 w-6" />}
            title="Choose a goal"
            desc="Daily life, work, relocation, or a specific dialect — pick what matches your real use."
          />
          <FeatureCard
            tone="secondary"
            icon={<ClipboardCheck className="h-6 w-6" />}
            title="Use it actively"
            desc="These materials are built to be spoken out loud, not silently read."
          />
          <FeatureCard
            tone="primary"
            icon={<FileText className="h-6 w-6" />}
            title="Repeat weekly"
            desc="Consistency beats intensity. One strong topic per week creates momentum."
          />
        </div>
      </FadeIn>

      {/* FREE MATERIALS */}
      <FadeIn delay={0.22}>
        <Surface className="p-10 md:p-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-[var(--color-secondary)]">
                Free
              </p>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                Free materials
              </h2>
              <p className="text-lg text-[var(--color-foreground)]/65 max-w-2xl">
                Quick resources you can use immediately to start speaking.
              </p>
            </div>

            <Button href="/apply" variant="secondary" className="self-start">
              Get a level recommendation <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

<div className="mt-10 grid gap-6 md:grid-cols-3">
  {visibleFree.map((x, idx) => (
    <div
      key={x.id}
      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 hover:shadow-md transition"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-foreground)]/60">
          {x.meta} • {x.level}
        </p>

        <a
          href={x.file}
          download
          aria-label={`Download ${x.title}`}
          className={
            idx % 2 === 0
              ? "h-10 w-10 rounded-2xl bg-[var(--color-primary-tint)] border border-[color:rgba(79,110,247,0.30)] flex items-center justify-center hover:opacity-90 transition"
              : "h-10 w-10 rounded-2xl bg-[var(--color-secondary-tint)] border border-[color:rgba(44,177,166,0.30)] flex items-center justify-center hover:opacity-90 transition"
          }
        >
          <Download
            className={
              idx % 2 === 0
                ? "h-5 w-5 text-[var(--color-primary)]"
                : "h-5 w-5 text-[var(--color-secondary)]"
            }
          />
        </a>
      </div>

      {x.thumb && (
        <div className="mt-5 mb-4 flex justify-center">
          <img
            src={x.thumb}
            alt=""
            width={80}
            height={80}
            className="h-20 w-20 rounded-xl border border-[var(--color-border)] object-cover bg-[var(--color-surface-strong)]"
          />
        </div>
      )}

      <h3 className="mt-0 text-lg font-semibold">{x.title}</h3>
      <p className="mt-2 text-[var(--color-foreground)]/65 leading-relaxed">
        {x.desc}
      </p>

      <div className="mt-6 flex items-center gap-4">
        <a
          href={x.file}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)]/75 hover:text-[var(--color-primary)] transition"
        >
          Preview <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  ))}
</div>


{freeMaterials.length > 3 && (
  <div className="mt-10 flex justify-center">
    <Button href="/materials/free" variant="secondary">
      Browse all free materials <ArrowRight className="h-4 w-4" />
    </Button>
  </div>
)}


        </Surface>
      </FadeIn>

      {/* PAID MATERIALS */}
      <FadeIn delay={0.32}>
        <Surface className="p-10 md:p-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-[var(--color-primary)]">
                Paid
              </p>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                Paid packs & bundles
              </h2>
              <p className="text-lg text-[var(--color-foreground)]/65 max-w-2xl">
                Ready-to-use resources for serious learners. Designed to support
                structured weekly practice.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[color:rgba(244,183,64,0.55)] bg-[var(--color-accent-tint)] px-4 py-2 text-sm text-[var(--color-foreground)]/80">
              <Lock className="h-4 w-4 text-[var(--color-accent)]" />
              Payment handled manually for now
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {paidItems.map((x, idx) => (
              <div
                key={x.title}
                className={
                  idx === 1
                    ? "rounded-2xl border border-[color:rgba(244,183,64,0.65)] bg-[var(--color-surface)] p-7 hover:shadow-md transition relative overflow-hidden"
                    : "rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 hover:shadow-md transition"
                }
              >
                {idx === 1 ? (
                  <>
                    <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full blur-3xl bg-[var(--color-secondary-tint)]" />
                    <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full blur-3xl bg-[var(--color-accent-tint)]" />
                    <div className="relative inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3 py-1 border bg-[var(--color-accent-tint)] border-[color:rgba(244,183,64,0.55)]">
                      <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                      Most popular (example)
                    </div>
                  </>
                ) : null}

                <p className="relative mt-3 text-xs font-semibold uppercase tracking-widest text-[var(--color-foreground)]/60">
                  {x.meta}
                </p>

                <h3 className="relative mt-4 text-lg font-semibold">{x.title}</h3>
                <p className="relative mt-2 text-[var(--color-foreground)]/65 leading-relaxed">
                  {x.desc}
                </p>

                <div className="relative mt-6">
                  <Button href="/apply" variant="accent" className="w-full">
                    Ask for pricing / access <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Surface>
      </FadeIn>

      {/* FINAL CTA */}
      <FadeIn delay={0.42}>
        <Callout
          tone="accent"
          title="Want the right materials for your level?"
          subtitle="Apply in under 2 minutes. We’ll recommend the best format and suggest the right packs for your goal."
          cta={{
            href: "/apply",
            label: (
              <>
                Apply for recommendation <ArrowRight className="h-5 w-5" />
              </>
            ),
            variant: "accent",
          }}
        />
      </FadeIn>
    </section>
  );
}
