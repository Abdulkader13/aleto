import type { ReactNode } from "react";
import Surface from "@/components/ui/Surface";
import Button from "@/components/Button";
import { cn } from "@/components/ui/cn";

type Tone = "default" | "recommended";

export default function PricingCard({
  title,
  subtitle,
  bullets,
  meta,
  cta,
  tone = "default",
  badge,
  className,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  bullets: ReactNode[];
  meta?: ReactNode; // e.g. "3–5 learners · 8 weeks · 2/wk"
  cta: { href: string; label: ReactNode; variant?: "primary" | "secondary" | "accent" | "ghost" };
  tone?: Tone;
  badge?: ReactNode; // e.g. "Recommended"
  className?: string;
}) {
  const recommended = tone === "recommended";

  return (
    <Surface
      variant={recommended ? "solid" : "glass"}
      className={cn(
        "p-8 relative overflow-hidden hover:shadow-md transition",
        recommended && "border-2 border-[var(--color-accent)]",
        className
      )}
    >
      {recommended ? (
        <>
          <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full blur-3xl bg-[var(--color-secondary-tint)]" />
          <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full blur-3xl bg-[var(--color-accent-tint)]" />
        </>
      ) : null}

      {badge ? (
        <div className="relative inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3 py-1 border bg-[var(--color-accent-tint)] border-[color:rgba(244,183,64,0.55)]">
          {badge}
        </div>
      ) : null}

      <h3 className="relative mt-4 text-xl font-semibold">{title}</h3>
      {subtitle ? (
        <p className="relative mt-2 text-[var(--color-foreground)]/65">
          {subtitle}
        </p>
      ) : null}

      {meta ? (
        <div className="relative mt-5 text-sm text-[var(--color-foreground)]/60">
          {meta}
        </div>
      ) : null}

      <div className="relative mt-6 space-y-3 text-[var(--color-foreground)]/80">
        {bullets.map((b, i) => (
          <div key={i} className="flex items-start gap-2">
            <span
              className={cn(
                "mt-2 h-1.5 w-1.5 rounded-full",
                recommended
                  ? "bg-[var(--color-accent)]"
                  : i % 2 === 0
                  ? "bg-[var(--color-primary)]"
                  : "bg-[var(--color-secondary)]"
              )}
            />
            <div>{b}</div>
          </div>
        ))}
      </div>

      <div className="relative mt-8">
        <Button
          href={cta.href}
          variant={cta.variant ?? (recommended ? "accent" : "primary")}
          className="w-full"
        >
          {cta.label}
        </Button>
      </div>
    </Surface>
  );
}
