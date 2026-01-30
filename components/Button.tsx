"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode, MouseEventHandler } from "react";

type Variant = "primary" | "secondary" | "accent" | "ghost";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const LOCALES = ["en", "ar", "ru", "fr", "tr"] as const;

function getLocaleFromPath(pathname: string | null): string {
  const seg = (pathname ?? "/").split("/").filter(Boolean)[0];
  return seg && (LOCALES as readonly string[]).includes(seg) ? seg : "en";
}

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("//")
  );
}

function prefixLocale(locale: string, href: string) {
  if (!href.startsWith("/")) return href;
  if (href === "/") return `/${locale}`;
  const first = href.split("/").filter(Boolean)[0];
  if (first && (LOCALES as readonly string[]).includes(first as any)) return href;
  return `/${locale}${href}`;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  type,
  onClick,
  disabled = false,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 " +
    "text-sm sm:text-base font-medium transition " +
    "focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] " +
    "focus:ring-offset-2 focus:ring-offset-transparent " +
    "active:translate-y-[0.5px]";

  const styles: Record<Variant, string> = {
    primary:
      "text-white bg-[var(--color-primary)] hover:opacity-95 " +
      "shadow-sm shadow-[color:rgba(79,110,247,0.28)]",

    secondary:
      "text-white bg-[var(--color-secondary)] hover:opacity-95 " +
      "shadow-sm shadow-[color:rgba(44,177,166,0.28)]",

    accent:
      "text-[var(--color-foreground)] bg-[var(--color-accent)] hover:opacity-95 " +
      "shadow-sm shadow-[color:rgba(244,183,64,0.35)]",

    ghost:
      "text-[var(--color-foreground)]/80 " +
      "hover:text-[var(--color-secondary)] " +
      "hover:bg-[var(--color-secondary-tint)]",
  };

  const disabledClasses =
    "opacity-50 cursor-not-allowed pointer-events-none active:translate-y-0";

  const classes = cn(base, styles[variant], disabled && disabledClasses, className);

  // Link button
  if (href) {
    const finalHref = isExternalHref(href) ? href : prefixLocale(locale, href);

    // Next/link doesn't support "disabled". We simulate it.
    if (disabled) {
      return (
        <span aria-disabled="true" className={classes}>
          {children}
        </span>
      );
    }

    return (
      <Link href={finalHref} className={classes}>
        {children}
      </Link>
    );
  }

  // Normal button
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
