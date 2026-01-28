import type { ReactNode } from "react";
import Surface from "@/components/ui/Surface";
import Button from "@/components/Button";
import { cn } from "@/components/ui/cn";

type Tone = "accent" | "secondary" | "brand";

export default function Callout({
  title,
  subtitle,
  tone = "accent",
  cta,
  className,
  icon,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  tone?: Tone;
  cta?: { href: string; label: ReactNode; variant?: "primary" | "secondary" | "accent" | "ghost" };
  icon?: ReactNode;
  className?: string;
}) {
  const variant =
    tone === "secondary" ? "brand" : tone === "brand" ? "brand" : "accent";

  const topBorder =
    tone === "secondary"
      ? "border-[color:rgba(44,177,166,0.30)]"
      : tone === "brand"
      ? "border-[color:rgba(79,110,247,0.30)]"
      : "border-[color:rgba(244,183,64,0.45)]";

  return (
    <Surface
      variant={variant}
      className={cn(
        "p-10 md:p-14 relative overflow-hidden",
        "border",
        topBorder,
        className
      )}
    >
      <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full blur-3xl bg-[color:rgba(79,110,247,0.12)]" />
      <div className="absolute -bottom-28 -left-24 h-96 w-96 rounded-full blur-3xl bg-[color:rgba(44,177,166,0.10)]" />
      {tone === "accent" ? (
        <div className="absolute bottom-[-180px] right-[10%] h-[420px] w-[420px] rounded-full blur-3xl bg-[color:rgba(244,183,64,0.18)]" />
      ) : null}

      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            {icon ? (
              <div className="h-12 w-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center">
                {icon}
              </div>
            ) : null}
            <h2 className="text-2xl md:text-3xl font-playfair font-bold">
              {title}
            </h2>
          </div>

          {subtitle ? (
            <p className="mt-4 text-lg text-[var(--color-foreground)]/70 leading-relaxed">
              {subtitle}
            </p>
          ) : null}
        </div>

        {cta ? (
          <div className="shrink-0">
            <Button
              href={cta.href}
              variant={cta.variant ?? (tone === "accent" ? "accent" : "secondary")}
              className="px-8 py-4 text-base md:text-lg"
            >
              {cta.label}
            </Button>
          </div>
        ) : null}
      </div>
    </Surface>
  );
}
