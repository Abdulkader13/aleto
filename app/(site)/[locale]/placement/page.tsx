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

      {/* WHY PLACEMENT */}
      <FadeIn delay={0.12}>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            tone="primary"
            icon={<Target className="h-6 w-6" />}
            title="Avoid the wrong level"
            desc="Most learners choose levels based on grammar knowledge, but speaking level is different."
          />
          <FeatureCard
            tone="secondary"
            icon={<MessageSquare className="h-6 w-6" />}
            title="Match your real goal"
            desc="Work, relocation, daily life, or dialect focus — the right target changes the plan."
          />
          <FeatureCard
            tone="primary"
            icon={<ClipboardCheck className="h-6 w-6" />}
            title="Get a clean plan"
            desc="You’ll know exactly what to do next: format, level, and what to focus on first."
          />
        </div>
      </FadeIn>

      {/* HOW IT WORKS */}
      <FadeIn delay={0.22}>
        <Surface className="p-10 md:p-14">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="space-y-4 max-w-2xl">
              <p className="text-sm uppercase tracking-widest text-[var(--color-primary)]">
                How it works
              </p>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                Simple, fast, and accurate
              </h2>
              <p className="text-lg text-[var(--color-foreground)]/65 leading-relaxed">
                You apply once. If we need more clarity, we do a short speaking
                check. Then you receive your recommendation.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button href="/apply">
                  Apply for placement <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/programs" variant="secondary">
                  Explore programs
                </Button>
              </div>
            </div>

            <div className="w-full lg:max-w-md">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 space-y-5">
                {[
                  {
                    Icon: Clock,
                    title: "Step 1: Quick application",
                    desc: "Your level estimate + goal + availability.",
                    tone: "primary",
                  },
                  {
                    Icon: Languages,
                    title: "Step 2: Dialect / MSA choice",
                    desc: "We confirm which path fits your real use.",
                    tone: "secondary",
                  },
                  {
                    Icon: MessageSquare,
                    title: "Step 3: Optional speaking check",
                    desc: "Only if needed — 5–10 minutes.",
                    tone: "primary",
                  },
                ].map(({ Icon, title, desc, tone }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div
                      className={
                        tone === "secondary"
                          ? "h-10 w-10 rounded-2xl bg-[var(--color-secondary-tint)] border border-[color:rgba(44,177,166,0.30)] flex items-center justify-center"
                          : "h-10 w-10 rounded-2xl bg-[var(--color-primary-tint)] border border-[color:rgba(79,110,247,0.30)] flex items-center justify-center"
                      }
                    >
                      <Icon
                        className={
                          tone === "secondary"
                            ? "h-5 w-5 text-[var(--color-secondary)]"
                            : "h-5 w-5 text-[var(--color-primary)]"
                        }
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm text-[var(--color-foreground)]/65">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-3 border-t border-[var(--color-border)] text-sm text-[var(--color-foreground)]/70">
                  You’ll receive a recommendation within <b>24–48 hours</b>.
                </div>
              </div>
            </div>
          </div>
        </Surface>
      </FadeIn>
<Button href="/placement/msa">Start MSA test</Button>
<Button href="/placement/levantine" variant="secondary">Start Levantine test</Button>
<Button href="/placement/egyptian" variant="secondary">Start Egyptian test</Button>

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
