import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

import Hero from "@/components/sections/Hero";
import Surface from "@/components/ui/Surface";
import FeatureCard from "@/components/ui/FeatureCard";
import Callout from "@/components/ui/Callout";

import {
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  MessageSquare,
  Target,
  CheckCircle2,
  Clock,
  Languages,
} from "lucide-react";

const checks = [
  "A short self-assessment + goal questions",
  "If needed: a quick 5–10 minute speaking check",
  "We recommend level + format (private / group) + dialect or MSA path",
  "You get next steps within 24–48 hours",
];

export default function PlacementPage({
  params,
}: {
  params: { locale: string };
}) {
  void params;

  return (
    <section className="space-y-20 md:space-y-28">
      {/* HERO */}
      <FadeIn>
        <Hero
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Placement
            </span>
          }
          title="Get placed"
          highlight="correctly"
          subtitle="No stressful exams. Just a clear way to match your level and goal to the right program — so you don’t waste months in the wrong format."
          primaryCta={{
            href: "/apply",
            label: (
              <>
                Apply for placement <ArrowRight className="h-4 w-4" />
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
                What you get
              </p>

              <h3 className="mt-3 text-2xl font-playfair font-bold">
                A clear recommendation
              </h3>

              <p className="mt-3 text-[var(--color-foreground)]/70 leading-relaxed">
                We place you based on how you actually use Arabic — not what you
                think you know.
              </p>

              <div className="mt-6 space-y-3 text-[var(--color-foreground)]/80">
                {checks.map((x, idx) => (
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

              <div className="mt-8 grid grid-cols-3 gap-3 text-sm">
                {[
                  { label: "Time", value: "5–10 min" },
                  { label: "Reply", value: "24–48h" },
                  { label: "Online", value: "Zoom/Meet" },
                ].map((x) => (
                  <div
                    key={x.label}
                    className="rounded-xl border border-[color:rgba(44,177,166,0.30)] bg-[var(--color-secondary-tint)] p-3"
                  >
                    <p className="text-[var(--color-foreground)]/60">{x.label}</p>
                    <p className="font-semibold">{x.value}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </FadeIn>

  

      {/* CHOOSE A TEST */}
      <FadeIn delay={0.22}>
        <Surface className="p-10 md:p-14">
            <div className="space-y-4 max-w-2xl">
              <p className="text-sm uppercase tracking-widest text-[var(--color-primary)]">
                Start here
              </p>

              <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                Choose your placement test
              </h2>

              <p className="text-lg text-[var(--color-foreground)]/65 leading-relaxed">
                Pick the Arabic you actually want to use. Each test checks real-world
                understanding + practical usage — not memorized grammar.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button href="/apply" variant="ghost">
                  Not sure? Apply and we’ll choose <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="w-full lg:max-w-xl">
              <div className="grid gap-4">



            </div>
          </div>

                 <div className="grid md:grid-cols-3 gap-6">
                {/* MSA */}
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-widest text-[var(--color-secondary)]">
                        Modern Standard Arabic
                      </p>
                      <h3 className="text-xl font-semibold">MSA placement test</h3>
                      <p className="text-sm text-[var(--color-foreground)]/65">
                        Best for study, work, media, reading/writing, formal communication.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[color:rgba(79,110,247,0.30)] bg-[var(--color-primary-tint)] px-3 py-2 text-sm">
                      <p className="text-[var(--color-foreground)]/60">Time</p>
                      <p className="font-semibold">~10 min</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <Button href="/placement/msa">
                      Start MSA test <ArrowRight className="h-4 w-4" />
                    </Button>

                  </div>
                </div>
  {/* Levantine */}
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-widest text-[var(--color-secondary)]">
                        Dialect
                      </p>
                      <h3 className="text-xl font-semibold">Levantine placement test</h3>
                      <p className="text-sm text-[var(--color-foreground)]/65">
                        Best for daily life, travel, relationships, and real conversation.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[color:rgba(44,177,166,0.30)] bg-[var(--color-secondary-tint)] px-3 py-2 text-sm">
                      <p className="text-[var(--color-foreground)]/60">Time</p>
                      <p className="font-semibold">~10 min</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <Button href="/placement/levantine" variant="secondary">
                      Start Levantine test <ArrowRight className="h-4 w-4" />
                    </Button>

                  </div>
                </div>

                {/* Egyptian */}
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-widest text-[var(--color-secondary)]">
                        Dialect
                      </p>
                      <h3 className="text-xl font-semibold">Egyptian placement test</h3>
                      <p className="text-sm text-[var(--color-foreground)]/65">
                        Best for media, pop culture, and everyday conversation.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)]/60 px-3 py-2 text-sm">
                      <p className="text-[var(--color-foreground)]/60">Time</p>
                      <p className="font-semibold">~10 min</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <Button href="/placement/egyptian" variant="secondary">
                      Start Egyptian test <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
        </div>
                      <div className="mt-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)]/60 p-5 text-sm text-[var(--color-foreground)]/70">
                After you finish, you’ll get a recommendation (level + course path). If your
                answers are borderline, we’ll offer a short 5–10 minute speaking check.
              </div>
        </Surface>
      </FadeIn>


      {/* FINAL CTA */}
      <FadeIn delay={0.32}>
        <Callout
          tone="accent"
          title="Want to start with the right level?"
          subtitle="Apply in under 2 minutes. If we need extra clarity, we’ll schedule a short speaking check."
          cta={{
            href: "/apply",
            label: (
              <>
                Apply for placement <ArrowRight className="h-5 w-5" />
              </>
            ),
            variant: "accent",
          }}
        />
      </FadeIn>
    </section>
  );
}
