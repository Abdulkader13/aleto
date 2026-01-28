import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

import Hero from "@/components/sections/Hero";

import Surface from "@/components/ui/Surface";
import FeatureCard from "@/components/ui/FeatureCard";
import PricingCard from "@/components/ui/PricingCard";
import Callout from "@/components/ui/Callout";
import Badge from "@/components/ui/Badge";

import {
  Clock,
  Users,
  MessageSquare,
  Target,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";

export default function ProgramsPage({
  params,
}: {
  params: { locale: string };
}) {
  void params;

  return (
    <section className="space-y-20 md:space-y-28">
      {/* HERO HEADER */}
      <FadeIn>
        <Hero
          eyebrow="Programs"
          title="Arabic for Real Life"
          highlight="& Work"
          subtitle="Choose the format that fits your goal: private classes, small-group program, and (later) recorded courses — all speaking-first."
          primaryCta={{
            href: "/apply",
            label: (
              <>
                Apply <ArrowRight className="h-4 w-4" />
              </>
            ),
          }}
          secondaryCta={{
            href: "/materials",
            label: "Explore materials",
          }}
          variant="brand"
        />
      </FadeIn>

      {/* FEATURE GRID */}
      <FadeIn delay={0.12}>
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            tone="primary"
            icon={<Target className="h-6 w-6" />}
            title="Program goal"
            desc="Speak Arabic naturally and confidently in work, social, and everyday contexts — without memorization-heavy methods."
          />

          <FeatureCard
            tone="secondary"
            icon={<MessageSquare className="h-6 w-6" />}
            title="How sessions work"
            desc="Real speaking tasks, guided conversation, and immediate correction. You learn through usage, not theory dumps."
          />

          <FeatureCard
            tone="primary"
            icon={<Layers className="h-6 w-6" />}
            title="Materials included"
            desc="Vocabulary lists, short texts, speaking prompts, and structured homework — designed to make speaking automatic."
          />
        </div>
      </FadeIn>

      {/* PROGRAM CARDS */}
      <FadeIn delay={0.22}>
        <Surface className="p-10 md:p-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-widest text-[var(--color-secondary)]">
                Formats
              </p>

              <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                Pick the learning format
              </h2>

              <p className="text-lg max-w-2xl text-[var(--color-foreground)]/65">
                Same methodology. Different structure. Start with what matches
                your life and your budget.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Private */}
            <PricingCard
              title="Private classes"
              subtitle="Best if you want maximum personalization and flexible scheduling."
              bullets={[
                "Personal learning plan",
                "Dialect or MSA focus",
                "Direct correction and fast progress",
              ]}
              cta={{
                href: "/apply",
                label: "Apply for private",
                variant: "primary",
              }}
            />

            {/* Group (Recommended) */}
            <PricingCard
              tone="recommended"
              badge={
                <>
                  <Users className="h-4 w-4 text-[var(--color-accent)]" />
                  Recommended (Core program)
                </>
              }
              title="Small group program"
              subtitle="Structured speaking progression with constant practice and feedback."
              meta="3–5 learners · 8 weeks · 2 sessions/week"
              bullets={[
                "Speaking tasks every session",
                "Vocabulary + text per topic",
                "Correction system that sticks",
              ]}
              cta={{
                href: "/apply",
                label: "Apply for the program",
                variant: "accent",
              }}
            />

            {/* Courses */}
            <PricingCard
              title="Recorded courses"
              subtitle="Coming soon. Built for self-paced learners who want structure."
              bullets={[
                "Dialect series (Levantine / Egyptian)",
                "Work Arabic modules",
                "Listening + speaking prompts",
              ]}
              cta={{
                href: "/apply",
                label: "Join the waitlist",
                variant: "secondary",
              }}
            />
          </div>
        </Surface>
      </FadeIn>

      {/* STRUCTURE */}
      <FadeIn delay={0.32}>
        <div className="grid lg:grid-cols-3 gap-6">
          <FeatureCard
            tone="primary"
            icon={<Users className="h-6 w-6" />}
            title="Group size"
            desc="3–5 learners per group to guarantee real speaking time."
          />

          <FeatureCard
            tone="secondary"
            icon={<Clock className="h-6 w-6" />}
            title="Structure"
            desc="8 weeks · 2 sessions/week · 60 minutes (typical format)."
          />

          <FeatureCard
            tone="accent"
            icon={<MessageSquare className="h-6 w-6" />}
            title="Focus"
            desc="Speaking, listening, correction, and real-life usage."
          />
        </div>
      </FadeIn>

      {/* WHO IT'S FOR */}
      <FadeIn delay={0.42}>
        <Surface className="p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold">
            Who this is for
          </h2>

          <div className="mt-6 grid md:grid-cols-2 gap-4 text-[var(--color-foreground)]/80">
            {[
              "Professionals working with Arabic-speaking clients or teams",
              "Migrants and long-term residents who want independence in daily life",
              "Learners around A2–B2 who know Arabic but struggle to use it",
              "People tired of grammar-heavy, speaking-light courses",
            ].map((x, idx) => (
              <div key={x} className="flex items-start gap-3">
                <span
                  className={
                    idx % 3 === 0
                      ? "mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]"
                      : idx % 3 === 1
                      ? "mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]"
                      : "mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                  }
                />
                <p>{x}</p>
              </div>
            ))}
          </div>
        </Surface>
      </FadeIn>

      {/* FINAL CTA */}
      <FadeIn delay={0.55}>
        <Callout
          tone="accent"
          title="Apply and we’ll recommend the best format"
          subtitle="Tell us your level and your goal. We’ll respond within 24–48 hours."
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

        <div className="mt-4 text-center">
          <Button
  href="/materials"
  variant="secondary"
  className="px-10 py-4 text-base md:text-lg"
>
  Explore materials
</Button>

        </div>
      </FadeIn>
    </section>
  );
}
