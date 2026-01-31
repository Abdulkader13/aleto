import { getDictionary, t } from "@/lib/i18n/translations";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";

import Hero from "@/components/sections/Hero";
import Surface from "@/components/ui/Surface";
import FeatureCard from "@/components/ui/FeatureCard";
import Testimonial from "@/components/ui/Testimonial";
import Callout from "@/components/ui/Callout";

import Image from "next/image";

import {
  ArrowRight,
  BadgeCheck,
  GraduationCap,
  Languages,
  MessageSquare,
  Sparkles,
  Target,
  Users,
  ClipboardList,
  FileText,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "I searched for the right Arabic teacher for a very long time. Abdulqader became the person with whom I finally started speaking Arabic, and I’m incredibly grateful to him for that. He understands 100% what I need and takes my goals into account. Thank you! Highly recommended.",
    name: "Alexey, Russia, 0 → B2+",
    meta: "Focus: professional Arabic and speaking",
  },
  {
    quote:
      "Abdul really helped me start speaking and overcome the language barrier. He also explains grammar in a very clear and understandable way. And most importantly, Abdul is a great conversationalist with a good sense of humor. Lessons with him are easy and interesting.",
    name: "Nikita, Serbia, A1 → B1",
    meta: "Focus: daily communication",
  },
  {
    quote:
      "I chose this teacher because it’s much easier to study with a native speaker. Abdul and I immediately understood each other, and he explained everything clearly. I don’t regret choosing him at all.",
    name: "Maliha, Vietnam B1",
    meta: "Focus: speaking and writing confidence",
  },
];

function ImageBox({
  src,
  alt,
  height = 360,
}: {
  src: string;
  alt: string;
  height?: number;
}) {
  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
      <div style={{ position: "relative", width: "100%", height }}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}

export default function Home({ params }: { params: { locale: string } }) {
  const dict = getDictionary(params.locale);

  return (
    <section className="space-y-20 md:space-y-28">
      {/* HERO */}
      <FadeIn>
        <Hero
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              {t(dict, "home.hero.eyebrow")}
            </span>
          }
          title={t(dict, "home.hero.titleLine1")}
          highlight={t(dict, "home.hero.titleHighlight")}
          subtitle="Speaking-first Arabic for professionals and migrants — built around practice, feedback, and real situations."
          primaryCta={{
            href: "/apply",
            label: (
              <>
                Apply now <ArrowRight className="h-5 w-5" />
              </>
            ),
          }}
          secondaryCta={{
            href: "/programs",
            label: "Explore programs",
          }}
          variant="brand"
          align="center"
          media={
            <div className="space-y-4">
              <ImageBox
                src="/images/home/hero-study.jpg"
                alt="Arabic learning session setup"
                height={420}
              />

              {/* No overlay: simple caption under image */}
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-5">
                <p className="text-sm uppercase tracking-widest text-[var(--color-secondary)]">
                  What you get
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  A clear speaking system
                </h3>
                <p className="mt-2 text-[var(--color-foreground)]/65">
                  Topic materials, guided speaking, and correction — built for real usage.
                </p>
              </div>
            </div>
          }
        />

        {/* Quick signals under hero */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-3 text-sm text-[var(--color-foreground)]/65">
            {[
              { Icon: BadgeCheck, label: "Speaking-focused structure" },
              { Icon: Languages, label: "Dialects + Modern Standard Arabic" },
              { Icon: Users, label: "Small groups or 1-to-1" },
            ].map(({ Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2"
              >
                <Icon className="h-4 w-4 text-[var(--color-primary)]" />
                {label}
              </span>
            ))}
          </div>

          {/* Placement strip (more padding + consistent spacing + no text on image) */}
          <div className="w-full max-w-6xl">
            <Surface className="p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-widest text-[var(--color-secondary)]">
                    Free placement
                  </p>

                  <h3 className="text-2xl md:text-3xl font-playfair font-bold">
                    Free placement tests (MSA + dialects)
                  </h3>

                  <p className="text-[var(--color-foreground)]/65">
                    Get a level recommendation before you apply — fast, clear, and free.
                  </p>

                  <div className="pt-2">
                    <Button href="/placement" variant="secondary">
                      Take the placement test <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
                  <div style={{ position: "relative", width: "100%", height: 300 }}>
                    <Image
                      src="/images/home/placement-preview.png"
                      alt="Placement test preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Surface>
          </div>
        </div>
      </FadeIn>


      {/* VALUE GRID */}
      <FadeIn delay={0.12}>
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            tone="primary"
            icon={<Target className="h-6 w-6" />}
            title="Real communication"
            desc="Arabic as it’s used in work, institutions, and daily life."
          />
          <FeatureCard
            tone="secondary"
            icon={<MessageSquare className="h-6 w-6" />}
            title="Feedback that moves you"
            desc="Immediate correction + better phrasing, in the moment."
          />
          <FeatureCard
            tone="primary"
            icon={<GraduationCap className="h-6 w-6" />}
            title="A simple system"
            desc="Repeatable structure that turns knowledge into speaking."
          />
        </div>
      </FadeIn>

      {/* MATERIALS PREVIEW */}
      <FadeIn delay={0.20}>
        <Surface className="p-10 md:p-14">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-[var(--color-primary)]">
                Materials library
              </p>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                Free + premium materials you can download
              </h2>
              <p className="text-[var(--color-foreground)]/65 text-lg">
                Topic packs, PDFs, and speaking prompts — short, practical, and reusable.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button href="/materials" variant="secondary">
                  Explore materials <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/apply" variant="ghost" className="px-0">
                  Apply to join <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <ImageBox
              src="/images/home/materials-mockup.png"
              alt="Materials pack preview"
              height={360}
            />
          </div>
        </Surface>
      </FadeIn>

      {/* OFFERINGS */}
      <FadeIn delay={0.28}>
        <Surface className="p-10 md:p-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <SectionHeader
              eyebrow="What you can take"
              title={
                <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                  Choose your format
                </h2>
              }
              subtitle="Less theory. More speaking. Built for serious learners."
              className="max-w-2xl"
            />

            <Button href="/programs" variant="secondary" className="self-start">
              View programs <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Private classes",
                icon: <Users className="h-5 w-5 text-[var(--color-primary)]" />,
                points: ["Personal plan", "Flexible schedule", "Fast correction"],
                border: "border-[var(--color-border)]",
              },
              {
                title: "Small group program",
                icon: (
                  <BadgeCheck className="h-5 w-5 text-[var(--color-accent)]" />
                ),
                points: ["3–5 learners", "8-week structure", "Speaking time guaranteed"],
                border: "border-[color:rgba(244,183,64,0.55)]",
                badge: (
                  <span className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3 py-1 border bg-[var(--color-accent-tint)] border-[color:rgba(244,183,64,0.55)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    Recommended
                  </span>
                ),
              },
              {
                title: "Materials (free + paid)",
                icon: (
                  <FileText className="h-5 w-5 text-[var(--color-secondary)]" />
                ),
                points: ["Free packs", "Premium PDFs", "Downloadable topic sets"],
                border: "border-[var(--color-border)]",
                cta: { href: "/materials", label: "Browse materials" },
              },
            ].map((x) => (
              <div
                key={x.title}
                className={`rounded-2xl border ${x.border} bg-[var(--color-surface)] p-8 hover:shadow-md transition`}
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] flex items-center justify-center">
                      {x.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{x.title}</h3>
                  </div>
                  {x.badge ? <div className="shrink-0">{x.badge}</div> : null}
                </div>

                <ul className="mt-6 space-y-2 text-[var(--color-foreground)]/65">
                  {x.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                {x.cta ? (
                  <div className="pt-6">
                    <Button href={x.cta.href} variant="ghost" className="px-0">
                      {x.cta.label} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* Clean reinforcement line */}
          <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)]/60 backdrop-blur p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center">
                  <ClipboardList className="h-5 w-5 text-[var(--color-primary)]" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">Not sure about your level?</p>
                  <p className="text-[var(--color-foreground)]/65">
                    Take the free placement test — we’ll recommend the best path.
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <Button href="/placement" variant="secondary">
                  Placement test <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Surface>
      </FadeIn>

      {/* TESTIMONIALS */}
      <FadeIn delay={0.38}>
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Social proof"
            align="center"
            title={
              <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                Our students' reviews
              </h2>
            }
            subtitle="From all over the world"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((x, idx) => (
              <Testimonial
                key={x.name}
                quote={x.quote}
                name={x.name}
                meta={x.meta}
                tone={idx === 1 ? "secondary" : "default"}
              />
            ))}
          </div>
        </div>
      </FadeIn>

      {/* FINAL CTA */}
      <FadeIn delay={0.48}>
        <Callout
          tone="accent"
          title="Ready to start speaking Arabic?"
          subtitle="Apply in under 2 minutes. We’ll review your level and reply within 24–48 hours."
          cta={{
            href: "/apply",
            label: (
              <>
                Apply to join <ArrowRight className="h-5 w-5" />
              </>
            ),
            variant: "accent",
          }}
        />
      </FadeIn>
    </section>
  );
}
