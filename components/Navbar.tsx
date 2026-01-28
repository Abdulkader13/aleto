"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/Button";
import { cn } from "@/components/ui/cn";

const LOCALES = ["en", "ar", "ru", "fr", "tr"] as const;
type Locale = (typeof LOCALES)[number];

const LOCALE_LABEL: Record<Locale, string> = {
  en: "EN",
  ar: "AR",
  ru: "RU",
  fr: "FR",
  tr: "TR",
};

const LOCALE_NAME: Record<Locale, string> = {
  en: "English",
  ar: "Arabic",
  ru: "Russian",
  fr: "French",
  tr: "Turkish",
};

function getLocaleFromPath(pathname: string | null): Locale {
  const seg = (pathname ?? "/").split("/").filter(Boolean)[0] as Locale | undefined;
  return seg && (LOCALES as readonly string[]).includes(seg) ? seg : "en";
}

function withLocale(locale: Locale, href: string) {
  if (!href.startsWith("/")) return href;
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/materials", label: "Materials" },   
  { href: "/placement", label: "Placement" },   
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  const locale = useMemo(() => getLocaleFromPath(pathname), [pathname]);

  const isActive = useMemo(() => {
    const p = pathname ?? "/";
    return (href: string) => {
      const target = withLocale(locale, href);
      if (target === `/${locale}`) return p === target;
      return p === target || p.startsWith(`${target}/`);
    };
  }, [pathname, locale]);

  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!langOpen) return;

    function onPointerDown(e: PointerEvent) {
      const el = langRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setLangOpen(false);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLangOpen(false);
    }

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [langOpen]);

  function switchLocale(next: Locale) {
    const currentPath = pathname ?? `/${locale}`;
    const segments = currentPath.split("/").filter(Boolean);

    if (segments.length === 0) {
      router.push(`/${next}`);
      return;
    }

    if ((LOCALES as readonly string[]).includes(segments[0] as any)) {
      segments[0] = next;
    } else {
      segments.unshift(next);
    }

    const search = typeof window !== "undefined" ? window.location.search : "";
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    router.push(`/${segments.join("/")}${search}${hash}`);
  }

  const navLinkBase =
    "relative text-sm font-medium transition px-3 py-2 rounded-xl";

  const navHalo =
    "absolute inset-0 -z-10 rounded-xl opacity-0 hover:opacity-100 transition-opacity " +
    "bg-[linear-gradient(135deg,rgba(79,110,247,0.10),rgba(44,177,166,0.08))]";

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[var(--color-surface)] backdrop-blur-xl border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <Link href={`/${locale}`} className="relative flex items-center gap-3 group">
            <span className="text-2xl font-playfair font-bold tracking-tight">
              Ale<span className="text-[var(--color-primary)]">to</span>
            </span>

            <span className="hidden sm:inline text-xs text-[var(--color-foreground)]/55 border border-[var(--color-border)] rounded-full px-2 py-1 bg-[var(--color-surface-strong)]">
              Arabic learning platform
            </span>

            <span className="absolute -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-1/2 -translate-x-1/2 top-[-30px] h-16 w-40 rounded-full blur-2xl bg-[color:rgba(44,177,166,0.22)]" />
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={withLocale(locale, item.href)}
                  className={cn(
                    navLinkBase,
                    active
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-foreground)]/80 hover:text-[var(--color-primary)]"
                  )}
                >
                  {item.label}

                  <span
                    className={cn(
                      "absolute left-3 right-3 -bottom-[2px] h-[2px] rounded-full transition-opacity",
                      active
                        ? "opacity-100 bg-[linear-gradient(90deg,rgba(79,110,247,1),rgba(44,177,166,1))]"
                        : "opacity-0"
                    )}
                  />
                  <span className={navHalo} />
                </Link>
              );
            })}

            {/* Language switcher */}
            <div className="relative ml-2" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className="relative inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] backdrop-blur px-3 py-2 text-sm font-medium text-[var(--color-foreground)]/80 hover:bg-[var(--color-surface-strong)] transition"
                aria-haspopup="menu"
                aria-expanded={langOpen}
              >
                {LOCALE_LABEL[locale]}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-[var(--color-foreground)]/55 transition-transform",
                    langOpen && "rotate-180"
                  )}
                />
                <span className={navHalo} />
              </button>

              {langOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-52 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] backdrop-blur shadow-lg p-1 overflow-hidden"
                >
                  <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(79,110,247,0.10),rgba(44,177,166,0.08))]" />

                  {LOCALES.map((l) => {
                    const active = l === locale;
                    return (
                      <button
                        key={l}
                        type="button"
                        role="menuitem"
                        onClick={() => switchLocale(l)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-xl text-sm transition flex items-center justify-between",
                          active
                            ? "bg-[color:rgba(79,110,247,0.14)] text-[var(--color-primary)]"
                            : "hover:bg-[color:rgba(44,177,166,0.10)] text-[var(--color-foreground)]/90"
                        )}
                      >
                        <span>{LOCALE_LABEL[l]}</span>
                        <span className="text-[var(--color-foreground)]/55">
                          {LOCALE_NAME[l]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="ml-2">
              <Button href={withLocale(locale, "/apply")} className="pl-5 pr-4">
                Apply <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              href={withLocale(locale, "/apply")}
              variant="secondary"
              className="px-4 py-2"
            >
              Apply
            </Button>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] backdrop-blur px-3 py-2 transition hover:bg-[var(--color-surface-strong)]"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-surface)] backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
              {/* Language switcher (mobile) */}
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(79,110,247,0.10),rgba(44,177,166,0.08))]" />
                <p className="text-xs uppercase tracking-widest text-[var(--color-foreground)]/55 mb-2">
                  Language
                </p>
                <div className="flex flex-wrap gap-2">
                  {LOCALES.map((l) => {
                    const active = l === locale;
                    return (
                      <button
                        key={l}
                        type="button"
                        onClick={() => switchLocale(l)}
                        className={cn(
                          "rounded-xl px-3 py-2 text-sm font-medium border transition",
                          active
                            ? "bg-[color:rgba(79,110,247,0.16)] text-[var(--color-primary)] border-[color:rgba(79,110,247,0.26)]"
                            : "bg-[var(--color-surface-strong)] text-[var(--color-foreground)]/90 border-[var(--color-border)] hover:bg-[color:rgba(44,177,166,0.10)]"
                        )}
                      >
                        {LOCALE_LABEL[l]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile nav */}
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={withLocale(locale, item.href)}
                    className={cn(
                      "rounded-xl px-3 py-3 text-sm font-medium transition",
                      active
                        ? "bg-[color:rgba(79,110,247,0.14)] text-[var(--color-primary)]"
                        : "hover:bg-[color:rgba(44,177,166,0.10)] text-[var(--color-foreground)]/90"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
