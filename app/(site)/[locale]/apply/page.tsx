"use client";

import { useState } from "react";

import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import Hero from "@/components/sections/Hero";

import Surface from "@/components/ui/Surface";
import FeatureCard from "@/components/ui/FeatureCard";
import Callout from "@/components/ui/Callout";
import Badge from "@/components/ui/Badge";

import {
  BadgeCheck,
  CalendarDays,
  Globe2,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

type ApplyForm = {
  fullName: string;
  email: string;
  level: string;
  format: string;
  goal: string;
  details: string;
};

export default function ApplyPage({
  params,
}: {
  params: { locale: string };
}) {
  void params;

  const textMuted = "text-[var(--color-foreground)]/65";

  const inputBase =
    "w-full rounded-xl px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] " +
    "focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)]";

  const [form, setForm] = useState<ApplyForm>({
    fullName: "",
    email: "",
    level: "",
    format: "",
    goal: "",
    details: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState<string>("");

  function update<K extends keyof ApplyForm>(key: K, value: ApplyForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "submitting") return;

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Failed to submit. Please try again.");
      }

      setStatus("success");
      setMessage("Application received. We’ll email you within 24–48 hours.");

      setForm({
        fullName: "",
        email: "",
        level: "",
        format: "",
        goal: "",
        details: "",
      });
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong.");
    }
  }

  return (
    <section className="space-y-16 md:space-y-24">
      {/* HERO */}
      <FadeIn>
        <Hero
          eyebrow="Application"
          title={
            <>
              Start speaking Arabic
              <br />
            </>
          }
          highlight="with confidence"
          subtitle="Apply to join the program or private classes. We’ll review your level and recommend the best format."
          primaryCta={{
            href: "#application-form",
            label: "Go to application",
          }}
          secondaryCta={{
            href: "/programs",
            label: (
              <>
                View programs <ArrowRight className="h-5 w-5" />
              </>
            ),
          }}
          variant="brand"
          media={
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] backdrop-blur p-8">
              <p className="text-sm uppercase tracking-widest text-[var(--color-secondary)]">
                Quick facts
              </p>

              <h3 className="mt-3 text-2xl font-playfair font-bold">
                What happens after you apply
              </h3>

              <div className="mt-5 space-y-3 text-[var(--color-foreground)]/80">
                {[
                  "We review your answers",
                  "We recommend format + level",
                  "You confirm schedule and start",
                ].map((x, idx) => (
                  <div key={x} className="flex items-start gap-2">
                    <CheckCircle2
                      className={
                        idx % 2 === 0
                          ? "h-5 w-5 text-[var(--color-primary)] mt-0.5"
                          : "h-5 w-5 text-[var(--color-secondary)] mt-0.5"
                      }
                    />
                    <span>{x}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge tone="primary">
                  <BadgeCheck className="h-4 w-4 text-[var(--color-primary)]" />
                  Speaking-first
                </Badge>
                <Badge tone="secondary">
                  <CalendarDays className="h-4 w-4 text-[var(--color-secondary)]" />
                  Reply in 24–48h
                </Badge>
                <Badge tone="primary">
                  <Globe2 className="h-4 w-4 text-[var(--color-primary)]" />
                  Online
                </Badge>
              </div>
            </div>
          }
        />
      </FadeIn>

      {/* FORM + SIDE INFO */}
      <FadeIn delay={0.15}>
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Form */}
          <Surface id="application-form" className="lg:col-span-2 p-10 md:p-12">
            <h2 className="text-3xl font-playfair font-bold">Application</h2>
            <p className={`${textMuted} mt-2`}>
              Fill this out once. We’ll place you in the right format.
            </p>

            <form className="mt-10 space-y-8" onSubmit={onSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-medium" htmlFor="fullName">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className={inputBase}
                    placeholder="Your name"
                    required
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    autoComplete="name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-medium" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={inputBase}
                    placeholder="name@email.com"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-medium" htmlFor="level">
                    Current Arabic level
                  </label>
                  <select
                    id="level"
                    name="level"
                    className={inputBase}
                    required
                    value={form.level}
                    onChange={(e) => update("level", e.target.value)}
                  >
                    <option value="">Select your level</option>
                    <option value="A1">A1 – Beginner</option>
                    <option value="A2">A2 – Elementary</option>
                    <option value="B1">B1 – Intermediate</option>
                    <option value="B2">B2 – Upper-intermediate</option>
                    <option value="C1">C1 – Advanced</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block font-medium" htmlFor="format">
                    Preferred format
                  </label>
                  <select
                    id="format"
                    name="format"
                    className={inputBase}
                    required
                    value={form.format}
                    onChange={(e) => update("format", e.target.value)}
                  >
                    <option value="">Choose one</option>
                    <option value="group">Small group program</option>
                    <option value="private">Private classes</option>
                    <option value="recommend">Not sure (recommend)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-medium" htmlFor="goal">
                  What do you need Arabic for?
                </label>
                <textarea
                  id="goal"
                  name="goal"
                  rows={4}
                  className={inputBase}
                  placeholder="Work, daily life, travel, family, exams, etc."
                  required
                  value={form.goal}
                  onChange={(e) => update("goal", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="block font-medium" htmlFor="details">
                  Any details that help placement?
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={3}
                  className={inputBase}
                  placeholder="Dialect preference, schedule constraints, specific goal..."
                  value={form.details}
                  onChange={(e) => update("details", e.target.value)}
                />
              </div>

<Button
  type="submit"
  className={`w-full py-4 text-base md:text-lg ${
    status === "submitting" ? "pointer-events-none opacity-60" : ""
  }`}
  aria-disabled={status === "submitting"}
>
  {status === "submitting" ? "Submitting..." : "Submit application"}
</Button>


              {status !== "idle" && (
                <p
                  className={`text-sm text-center ${
                    status === "success"
                      ? "text-[var(--color-secondary)]"
                      : status === "error"
                      ? "text-red-600"
                      : "text-[var(--color-foreground)]/60"
                  }`}
                >
                  {message}
                </p>
              )}

              <p className="text-sm text-[var(--color-foreground)]/55 text-center">
                We usually respond within 24–48 hours.
              </p>
            </form>
          </Surface>

          {/* Side */}
          <div className="space-y-6">
            <FeatureCard
              tone="primary"
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Placement-first"
              desc="We recommend the right level and format based on your goal — not what’s easiest to sell."
            
            />
            

            <Surface className="p-8">
              <p className="font-semibold">Good to know</p>

              <div className="mt-4 space-y-3 text-[var(--color-foreground)]/80">
                {[
                  "Online lessons (Zoom / Google Meet)",
                  "Materials included for every topic",
                  "Speaking-focused correction",
                ].map((x, idx) => (
                  <div key={x} className="flex items-start gap-3">
                    <span
                      className={
                        idx % 2 === 0
                          ? "mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]"
                          : "mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]"
                      }
                    />
                    <p className={textMuted}>{x}</p>
                  </div>
                ))}
              </div>
            </Surface>
          </div>
        </div>
      </FadeIn>

      {/* OPTIONAL REINFORCEMENT CTA */}
      <FadeIn delay={0.25}>
        <Callout
          tone="accent"
          title="Not sure what to choose?"
          subtitle="Apply anyway. We’ll recommend the best format after reviewing your level and goal."
          cta={{
            href: "#application-form",
            label: "Start the application",
            variant: "accent",
          }}
        />
      </FadeIn>
    </section>
  );
}
