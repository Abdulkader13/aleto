"use client";

import { useMemo, useState } from "react";
import type { PlacementTestSpec } from "@/lib/placement/types";
import { calcResult } from "@/lib/placement/level";
import Button from "@/components/Button";
import Surface from "@/components/ui/Surface";
import { CheckCircle2, RotateCcw } from "lucide-react";

export default function PlacementTest({ spec }: { spec: PlacementTestSpec }) {
  const total = spec.questions.length;
  const [answers, setAnswers] = useState<number[]>(() => Array(total).fill(-1));
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = useMemo(
    () => answers.filter((x) => x !== -1).length,
    [answers]
  );

  const canSubmit = answeredCount === total;

  const result = useMemo(() => {
    if (!submitted) return null;
    return calcResult(spec.questions, answers);
  }, [submitted, spec.questions, answers]);

  function pick(qIndex: number, optIndex: number) {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIndex] = optIndex;
      return next;
    });
  }

  function reset() {
    setAnswers(Array(total).fill(-1));
    setSubmitted(false);
  }

  return (
    <div className="space-y-8">
      <Surface className="p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-playfair font-bold">
              {spec.title}
            </h1>
            <p className="mt-2 text-[var(--color-foreground)]/70 leading-relaxed">
              {spec.subtitle}
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm">
            <div className="flex items-center justify-between gap-6">
              <span className="text-[var(--color-foreground)]/60">Progress</span>
              <span className="font-semibold">
                {answeredCount}/{total}
              </span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-[var(--color-foreground)]/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-[var(--color-secondary)]"
                style={{ width: `${Math.round((answeredCount / total) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </Surface>

      <div className="space-y-6">
        {spec.questions.map((q, qi) => {
          const chosen = answers[qi];
          return (
            <Surface key={q.id} className="p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-widest text-[var(--color-foreground)]/60">
                    Question {qi + 1} • {q.level}
                  </p>
                  <p className="text-lg font-semibold leading-snug">{q.prompt}</p>
                </div>

                {submitted && (
                  <div className="shrink-0 text-sm">
                    {chosen === q.correctIndex ? (
                      <span className="inline-flex items-center gap-2 text-[var(--color-secondary)] font-semibold">
                        <CheckCircle2 className="h-4 w-4" />
                        Correct
                      </span>
                    ) : (
                      <span className="text-[var(--color-foreground)]/60">
                        Correct: <b>{q.options[q.correctIndex]}</b>
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-4 grid gap-3">
                {q.options.map((opt, oi) => {
                  const isChosen = chosen === oi;
                  const isCorrect = submitted && oi === q.correctIndex;
                  const isWrongChosen = submitted && isChosen && oi !== q.correctIndex;

                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => pick(qi, oi)}
                      className={[
                        "w-full text-left rounded-2xl border px-4 py-3 transition",
                        "bg-[var(--color-surface)] border-[var(--color-border)]",
                        isChosen ? "ring-2 ring-[color:rgba(79,110,247,0.35)]" : "",
                        submitted && isCorrect
                          ? "border-[color:rgba(44,177,166,0.45)] bg-[var(--color-secondary-tint)]"
                          : "",
                        submitted && isWrongChosen
                          ? "border-[color:rgba(244,183,64,0.55)] bg-[color:rgba(244,183,64,0.12)]"
                          : "",
                        submitted ? "cursor-default" : "hover:border-[color:rgba(79,110,247,0.35)]",
                      ].join(" ")}
                      disabled={submitted}
                      aria-pressed={isChosen}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </Surface>
          );
        })}
      </div>

      <Surface className="p-6 md:p-8">
        {!submitted ? (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-[var(--color-foreground)]/70">
              Answer all questions to see your estimated level.
            </div>
            <Button
              onClick={() => setSubmitted(true)}
              disabled={!canSubmit}
            >
              Submit and get my level
            </Button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-[var(--color-foreground)]/60">
                Your result
              </p>
              <p className="mt-1 text-2xl md:text-3xl font-playfair font-bold">
                Estimated level: <span className="text-[var(--color-primary)]">{result?.level}</span>
              </p>
              <p className="mt-2 text-[var(--color-foreground)]/70">
                Score: <b>{result?.correct}</b> / {result?.total} ({result?.pct}%)
              </p>
            </div>

            <Button onClick={reset} variant="secondary">
              <RotateCcw className="h-4 w-4" /> Retake
            </Button>
          </div>
        )}
      </Surface>
    </div>
  );
}
