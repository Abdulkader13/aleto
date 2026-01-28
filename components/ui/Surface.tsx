import type { ReactNode, HTMLAttributes } from "react";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

type Variant = "glass" | "brand" | "accent" | "solid";

type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: Variant;
};

export default function Surface({
  children,
  className,
  variant = "glass",
  ...props
}: SurfaceProps) {
  const variants: Record<Variant, string> = {
    glass: "glass rounded-3xl shadow-sm",
    brand: "brand-surface rounded-3xl shadow-sm",
    accent: "glass-accent rounded-3xl shadow-sm",
    solid:
      "rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] shadow-sm",
  };

  return (
    <div {...props} className={cn(variants[variant], className)}>
      {children}
    </div>
  );
}
