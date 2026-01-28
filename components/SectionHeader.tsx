import type { ReactNode } from "react";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  actions,
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  actions?: ReactNode;
  className?: string;
}) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "space-y-4",
        isCenter ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-sm uppercase tracking-widest inline-flex items-center gap-2",
            "text-[var(--color-primary)]"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
          {eyebrow}
        </p>
      ) : null}

      <div className={isCenter ? "max-w-3xl mx-auto space-y-4" : "space-y-4"}>
        <div className="space-y-2">
          <div className="font-playfair font-bold leading-tight">{title}</div>

          {subtitle ? (
            <p
              className={cn(
                "text-[var(--color-foreground)]/70",
                isCenter ? "text-lg md:text-xl" : "text-lg"
              )}
            >
              {subtitle}
            </p>
          ) : null}
        </div>

        {actions ? <div className="pt-2">{actions}</div> : null}
      </div>
    </div>
  );
}
