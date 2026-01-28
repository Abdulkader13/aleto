"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Mail, Sparkles, ShieldCheck, ArrowUpRight } from "lucide-react";
import { cn } from "@/components/ui/cn";

const LOCALES = ["en", "ar", "ru", "fr", "tr"] as const;
type Locale = (typeof LOCALES)[number];

function getLocaleFromPath(pathname: string | null): Locale {
  const seg = (pathname ?? "/").split("/").filter(Boolean)[0] as Locale | undefined;
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

function prefixLocale(locale: Locale, href: string) {
  if (isExternalHref(href)) return href;
  if (!href.startsWith("/")) return href;

  if (href === "/") return `/${locale}`;

  const first = href.split("/").filter(Boolean)[0] as string | undefined;
  if (first && (LOCALES as readonly string[]).includes(first)) return href;

  return `/${locale}${href}`;
}

export default function Footer() {
  const pathname = usePathname();
  const locale = useMemo(() => getLocaleFromPath(pathname), [pathname]);

  // avoid hydration mismatch while still being correct
  const [year, setYear] = useState<number>(() => new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);

  const linkClass =
    "inline-flex items-center gap-1 transition text-[var(--color-foreground)]/70 hover:text-[var(--color-primary)]";

  const chipClass = cn(
    "text-xs px-3 py-1 rounded-full border border-[var(--color-border)]",
    "text-[var(--color-foreground)]/70 bg-[var(--color-surface)] backdrop-blur"
  );

  const legalLinks = [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/refunds", label: "Refunds" },
  ];

  // keep one source of truth for contact
  const contactEmail = "aleto@edu.com";

  return (
    <footer className="relative mt-16">
      {/* Background color layer */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(79,110,247,0.14),rgba(44,177,166,0.10),rgba(244,183,64,0.05))]" />
        <div className="absolute inset-0 opacity-[0.55] [background-image:radial-gradient(rgba(44,177,166,0.22)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-[color:rgba(79,110,247,0.22)] blur-3xl" />
        <div className="absolute -bottom-40 -left-28 h-[520px] w-[520px] rounded-full bg-[color:rgba(44,177,166,0.18)] blur-3xl" />
      </div>

      {/* Main footer surface */}
      <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5 md:col-span-2">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-playfair font-bold">
                Ale<span className="text-[var(--color-primary)]">to</span>
              </h3>

              <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[color:rgba(44,177,166,0.10)] px-3 py-1 text-xs text-[var(--color-foreground)]/75">
                <Sparkles className="h-3.5 w-3.5 text-[var(--color-secondary)]" />
                Speaking-first
              </span>
            </div>

            <p className="text-[var(--color-foreground)]/75 max-w-md leading-relaxed">
              Modern Arabic learning focused on real communication — for work,
              daily life, and confident speaking.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className={chipClass}>Dialects + MSA</span>
              <span className={chipClass}>Professional learners</span>
              <span className={chipClass}>Clear structure</span>
            </div>

            <div className="pt-3">
              <Link
                href={prefixLocale(locale, "/apply")}
                className="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(79,110,247,0.12),rgba(44,177,166,0.10))] px-4 py-3 text-sm font-medium text-[var(--color-foreground)]/90 hover:opacity-95 transition"
              >
                Apply in under 2 minutes <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[var(--color-foreground)]/90">Pages</h4>

            <ul className="space-y-2">
{[
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/materials", label: "Materials" },   // renamed correctly
  { href: "/placement", label: "Placement" },   // new page
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/apply", label: "Apply" },
].map((x) => (
  <li key={x.href}>
    <Link href={prefixLocale(locale, x.href)} className={linkClass}>
      {x.label} <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
    </Link>
  </li>
))}

            </ul>
          </div>

          {/* Contact / Trust */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[var(--color-foreground)]/90">
              Contact
            </h4>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)]/70 backdrop-blur p-4 space-y-2">
              <p className="text-sm text-[var(--color-foreground)]/75">
                Questions about your level or goals?
              </p>

              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:opacity-90 transition"
              >
                <Mail className="h-4 w-4" />
                {contactEmail}
              </a>

              <div className="pt-3 flex items-start gap-3">
                <div className="h-10 w-10 rounded-2xl border border-[var(--color-border)] bg-[color:rgba(79,110,247,0.10)] flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-[var(--color-primary)]" />
                </div>

                <div className="text-sm text-[var(--color-foreground)]/70">
                  <p className="font-medium text-[var(--color-foreground)]/85">
                    Response time
                  </p>
                  <p>24–48 hours • Online lessons (Zoom / Google Meet)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-border)]">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--color-foreground)]/60">
            <p>© {year} Aleto. All rights reserved.</p>

            <div className="flex items-center gap-4">
              {legalLinks.map((x) => (
                <Link
                  key={x.href}
                  href={prefixLocale(locale, x.href)}
                  className="transition hover:text-[var(--color-primary)]"
                >
                  {x.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
