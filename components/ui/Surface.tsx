import type { ReactNode } from "react";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

type Variant = "glass" | "brand" | "accent" | "solid";

export default function Surface({
  children,
  className,
  variant = "glass",
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}) {
  const variants: Record<Variant, string> = {
    // Uses your globals.css utilities :contentReference[oaicite:3]{index=3}
    glass: "glass rounded-3xl shadow-sm",
    brand: "brand-surface rounded-3xl shadow-sm",
    accent: "glass-accent rounded-3xl shadow-sm",
    solid:
      "rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] shadow-sm",
  };

  return <div className={cn(variants[variant], className)}>{children}</div>;
}
