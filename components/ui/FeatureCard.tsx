import type { ReactNode } from "react";
import Surface from "@/components/ui/Surface";
import { cn } from "@/components/ui/cn";

type Tone = "primary" | "secondary" | "accent";

export default function FeatureCard({
  icon,
  title,
  desc,
  tone = "primary",
  className,
}: {
  icon: ReactNode;
  title: ReactNode;
  desc: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const tint =
    tone === "secondary"
      ? "bg-[var(--color-secondary-tint)] border-[color:rgba(44,177,166,0.30)]"
      : tone === "accent"
      ? "bg-[var(--color-accent-tint)] border-[color:rgba(244,183,64,0.40)]"
      : "bg-[var(--color-primary-tint)] border-[color:rgba(79,110,247,0.30)]";

  const iconColor =
    tone === "secondary"
      ? "text-[var(--color-secondary)]"
      : tone === "accent"
      ? "text-[var(--color-accent)]"
      : "text-[var(--color-primary)]";

  return (
    <Surface className={cn("p-8 hover:shadow-md transition", className)}>
      <div
        className={cn(
          "h-12 w-12 rounded-2xl flex items-center justify-center border",
          tint
        )}
      >
        <div className={cn("h-6 w-6", iconColor)}>{icon}</div>
      </div>

      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-[var(--color-foreground)]/65 leading-relaxed">
        {desc}
      </p>
    </Surface>
  );
}
