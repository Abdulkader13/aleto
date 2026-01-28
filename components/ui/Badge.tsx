import type { ReactNode } from "react";
import { cn } from "@/components/ui/cn";

type Tone = "primary" | "secondary" | "accent";

export default function Badge({
  children,
  tone = "primary",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const styles =
    tone === "secondary"
      ? "border-[color:rgba(44,177,166,0.35)] bg-[var(--color-secondary-tint)]"
      : tone === "accent"
      ? "border-[color:rgba(244,183,64,0.50)] bg-[var(--color-accent-tint)]"
      : "border-[color:rgba(79,110,247,0.35)] bg-[var(--color-primary-tint)]";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border",
        styles,
        className
      )}
    >
      {children}
    </span>
  );
}
