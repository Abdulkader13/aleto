"use client";

import { useMemo, useState } from "react";
import Button from "@/components/Button";
import { freeMaterials, type Level } from "@/lib/materials/free";
import { ArrowRight, Download } from "lucide-react";

import Image from "next/image";

const LEVELS: Array<"ALL" | Level> = ["ALL", "A1", "A2", "B1", "B2", "C1"];

export default function FreeMaterialsClient() {
  const [level, setLevel] = useState<(typeof LEVELS)[number]>("ALL");

  const items = useMemo(() => {
    if (level === "ALL") return freeMaterials;
    return freeMaterials.filter((x) => x.level === level);
  }, [level]);

  return (
    <div className="space-y-10">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {LEVELS.map((l) => {
          const active = l === level;
          return (
            <button
              key={l}
              type="button"
              onClick={() => setLevel(l)}
              className={
                active
                  ? "rounded-xl px-4 py-2 text-sm font-medium border transition bg-[color:rgba(79,110,247,0.14)] text-[var(--color-primary)] border-[color:rgba(79,110,247,0.26)]"
                  : "rounded-xl px-4 py-2 text-sm font-medium border transition bg-[var(--color-surface)] text-[var(--color-foreground)]/80 border-[var(--color-border)] hover:bg-[color:rgba(44,177,166,0.10)]"
              }
            >
              {l === "ALL" ? "All" : l}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((x, idx) => (
          <div
            key={x.id}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-foreground)]/60">
                {x.meta} • {x.level}
              </p>

              {/* Download icon = actual download */}
              <a
                href={x.file}
                download
                aria-label={`Download ${x.title}`}
                className={
                  idx % 2 === 0
                    ? "h-10 w-10 rounded-2xl bg-[var(--color-primary-tint)] border border-[color:rgba(79,110,247,0.30)] flex items-center justify-center hover:opacity-90 transition"
                    : "h-10 w-10 rounded-2xl bg-[var(--color-secondary-tint)] border border-[color:rgba(44,177,166,0.30)] flex items-center justify-center hover:opacity-90 transition"
                }
              >
                <Download
                  className={
                    idx % 2 === 0
                      ? "h-5 w-5 text-[var(--color-primary)]"
                      : "h-5 w-5 text-[var(--color-secondary)]"
                  }
                />
              </a>
            </div>
<div
  key={x.id}
  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 hover:shadow-md transition"
>
  <div className="flex items-center justify-between gap-3">
    ...
  </div>

  {/* 👇 INSERTED HERE */}
{x.thumb && (
  <div className="mt-5 mb-4 flex justify-center">
    <img
      src={x.thumb}
      alt=""
      width={80}
      height={80}
      className="h-20 w-20 rounded-xl border border-[var(--color-border)] object-cover bg-[var(--color-surface-strong)]"
    />
  </div>
)}


  <h3 className="mt-0 text-lg font-semibold">{x.title}</h3>
  <p className="mt-2 text-[var(--color-foreground)]/65 leading-relaxed">
    {x.desc}
  </p>

  <div className="mt-6">
    ...
  </div>
</div>


            {/* Preview only */}
            <div className="mt-6">
              <a
                href={x.file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)]/70 hover:text-[var(--color-primary)] transition"
              >
                Preview <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {items.length === 0 && (
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center text-[var(--color-foreground)]/70">
          No materials in this level yet.
        </div>
      )}

      {/* Optional CTA */}
      <div className="pt-2">
        <Button href="/placement" variant="secondary">
          Not sure about your level? Take placement <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
