import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

import Hero from "@/components/sections/Hero";

import Surface from "@/components/ui/Surface";
import FeatureCard from "@/components/ui/FeatureCard";
import Callout from "@/components/ui/Callout";
import Badge from "@/components/ui/Badge";

import { Globe, Mic, User, ArrowRight, BadgeCheck, Languages } from "lucide-react";

export default function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  void params;

  const textMuted = "text-[var(--color-foreground)]/65";

  return (
    <section className="space-y-16 md:space-y-24">
      {/* HERO */}
      <FadeIn>
        <Hero
          eyebrow="About"
          title="About"
          highlight="Aleto"
          subtitle="Aleto exists to help people use Arabic confidently in real life — not perfectly, not academically, but naturally."
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
                Core focus
              </p>

              <h3 className="mt-3 text-2xl font-playfair font-bold">
                Useful Arabic, not textbook Arabic
              </h3>

              <p className="mt-3 text-[var(--color-foreground)]/70 leading-relaxed">
                You learn to speak for real situations: work, daily life,
                institutions, and social interaction.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge tone="primary">
                  <BadgeCheck className="h-4 w-4 text-[var(--color-primary)]" />
                  Practice over memorization
                </Badge>
                <Badge tone="secondary">
                  <Languages className="h-4 w-4 text-[var(--color-secondary)]" />
                  Dialects + MSA
                </Badge>
              </div>
            </div>
          }
        />
      </FadeIn>

      {/* VALUES */}
      <FadeIn delay={0.15}>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            tone="primary"
            icon={<User className="h-6 w-6" />}
            title="Human-centered"
            desc="Learning is built around real people and real goals — not rigid textbooks."
          />
          <FeatureCard
            tone="secondary"
            icon={<Mic className="h-6 w-6" />}
            title="Speaking first"
            desc="Real communication comes before long grammar explanations."
          />
          <FeatureCard
            tone="primary"
            icon={<Globe className="h-6 w-6" />}
            title="Real Arabic"
            desc="The Arabic people actually use in daily and professional life."
          />
        </div>
      </FadeIn>

      {/* PHILOSOPHY */}
      <FadeIn delay={0.25}>
        <Surface className="p-10 md:p-14">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-[var(--color-primary)]">
                Philosophy
              </p>

              <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                Practice is the method
              </h2>

              <p className={`${textMuted} text-lg leading-relaxed`}>
                Most learners don’t fail because they lack grammar. They fail
                because they never train speaking in realistic conditions. Aleto
                is designed around usage: vocabulary in context, guided speaking
                tasks, correction, and repetition that builds automatic speech.
              </p>

              <p className={`${textMuted} leading-relaxed`}>
                The goal is simple: less translating in your head, more natural
                Arabic in real conversations.
              </p>

              <div className="pt-2">
<Button href="/placement" variant="ghost" className="px-0">
  Take the placement test <ArrowRight className="h-4 w-4" />
</Button>

              </div>
            </div>

            <Surface variant="solid" className="p-8 space-y-5">
              <h3 className="text-lg font-semibold">What you get</h3>

              <ul className="space-y-3 text-[var(--color-foreground)]/80">
                {[
                  "Topic-based materials for every session",
                  "Speaking prompts + structured tasks",
                  "Correction system you can reuse",
                  "Dialect options + Modern Standard Arabic path",
                ].map((x, idx) => (
                  <li key={x} className="flex items-start gap-2">
                    <span
                      className={
                        idx % 2 === 0
                          ? "mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]"
                          : "mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]"
                      }
                    />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Button href="/apply" className="w-full">
                  Apply to join
                </Button>
              </div>
            </Surface>
          </div>
        </Surface>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.35}>
        <Callout
          tone="accent"
          title="Want Arabic that works in real life?"
          subtitle="Apply in under 2 minutes. We’ll recommend the right format and level for your goals."
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
