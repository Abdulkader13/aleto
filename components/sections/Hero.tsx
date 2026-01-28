import type { ReactNode } from "react";
import Surface from "@/components/ui/Surface";
import Button from "@/components/Button";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero({
  eyebrow,
  title,
  highlight,
  subtitle,
  primaryCta,
  secondaryCta,
  media,
  align = "center",
  variant = "brand",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  highlight?: ReactNode;
  subtitle?: ReactNode;
  primaryCta?: { href: string; label: ReactNode };
  secondaryCta?: { href: string; label: ReactNode };
  media?: ReactNode;
  align?: "center" | "left";
  variant?: "glass" | "brand" | "accent" | "solid";
}) {
  const hasMedia = Boolean(media);
  const isCenter = align === "center" && !hasMedia;

  return (
    <Surface
      variant={variant}
      className={cn("relative overflow-hidden", isCenter && "text-center")}
    >
      {/* Systemized blobs (so you stop copy/pasting them per page) */}
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl bg-[color:rgba(79,110,247,0.18)]" />
      <div className="absolute -bottom-28 -left-24 h-96 w-96 rounded-full blur-3xl bg-[color:rgba(44,177,166,0.14)]" />
      <div className="absolute bottom-[-160px] left-1/2 -translate-x-1/2 h-72 w-72 rounded-full blur-3xl bg-[color:rgba(244,183,64,0.10)]" />

      <div
        className={cn(
          "relative px-8 py-16 md:px-14 md:py-20",
          hasMedia && "grid lg:grid-cols-2 gap-10 items-center text-left"
        )}
      >
        <div className={cn(!hasMedia && "max-w-3xl mx-auto")}>
          {eyebrow ? (
            <p className="text-sm uppercase tracking-widest inline-flex items-center gap-2 text-[var(--color-primary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
              {eyebrow}
            </p>
          ) : null}

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-playfair font-bold leading-tight">
            {title}{" "}
            {highlight ? (
              <span className="text-[var(--color-primary)]">{highlight}</span>
            ) : null}
          </h1>

          {subtitle ? (
            <p className="mt-5 text-lg sm:text-xl text-[var(--color-foreground)]/70 max-w-2xl">
              {subtitle}
            </p>
          ) : null}

          {(primaryCta || secondaryCta) ? (
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {primaryCta ? (
                <Button href={primaryCta.href} className="px-8 py-4 text-base sm:text-lg">
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="secondary" className="px-8 py-4 text-base sm:text-lg">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>

        {hasMedia ? <div className="relative">{media}</div> : null}
      </div>
    </Surface>
  );
}
