import type { CefrLevel, PlacementQuestion } from "./types";

export function scoreToCefr(pct: number): CefrLevel {
  // pct is 0..100
  if (pct < 35) return "A1";
  if (pct < 55) return "A2";
  if (pct < 75) return "B1";
  if (pct < 90) return "B2";
  return "C1";
}

export function calcResult(questions: PlacementQuestion[], answers: number[]) {
  const total = questions.length;
  const correct = questions.reduce((acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0), 0);
  const pct = total === 0 ? 0 : Math.round((correct / total) * 100);
  const level = scoreToCefr(pct);

  const byLevel: Record<CefrLevel, { total: number; correct: number }> = {
    A1: { total: 0, correct: 0 },
    A2: { total: 0, correct: 0 },
    B1: { total: 0, correct: 0 },
    B2: { total: 0, correct: 0 },
    C1: { total: 0, correct: 0 },
  };

  questions.forEach((q, i) => {
    byLevel[q.level].total += 1;
    if (answers[i] === q.correctIndex) byLevel[q.level].correct += 1;
  });

  return { total, correct, pct, level, byLevel };
}
