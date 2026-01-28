export type Level = "A1" | "A2" | "B1" | "B2" | "C1";

export type FreeMaterial = {
  id: string;
  title: string;
  desc: string;
  meta: string;     // e.g. "PDF • Free"
  level: Level;
  file: string;     // must live in /public
  thumb?: string;
};

export const freeMaterials: FreeMaterial[] = [

  {
    id: "speaking-prompts-a2-b1",
    title: "Speaking prompts (A2–B1)",
    desc: "Topic-based questions and role-play cards designed to trigger real speaking.",
    meta: "PDF • Free",
    level: "B1",
    file: "/materials/free/speaking-prompts-a2-b1.pdf",
    thumb: "/images/materials/1.jpg",
  },
  {
    id: "vocab-daily-life-a2",
    title: "Vocabulary pack: daily life (A2)",
    desc: "High-frequency verbs, nouns, and expressions + short usage examples.",
    meta: "PDF • Free",
    level: "A2",
    file: "/materials/free/vocab-daily-life-a2.pdf",
        thumb: "/images/materials/2.jpg",

  },
  {
    id: "mini-placement-checklist-a2",
    title: "Mini placement checklist",
    desc: "A quick self-check to estimate your level before applying.",
    meta: "PDF • Free",
    level: "A2",
    file: "/materials/free/mini-placement-checklist.pdf",
        thumb: "/images/materials/speaking-prompts.jpg",

  },
  {
    id: "speaking-prompts-extra-1",
    title: "Speaking prompts – extra set",
    desc: "More role-play and speaking tasks.",
    meta: "PDF • Free",
    level: "B1",
    file: "/materials/free/speaking-prompts-a2-b1-2.pdf",
        thumb: "/images/materials/speaking-prompts.jpg",

  },
  {
    id: "vocab-daily-life-extended-b2",
    title: "Vocabulary pack – extended",
    desc: "Extra vocabulary and expressions for daily use.",
    meta: "PDF • Free",
    level: "B2",
    file: "/materials/free/speaking-prompts-a2-b1-3.pdf",
        thumb: "/images/materials/speaking-prompts.jpg",

  },
  {
    id: "mini-placement-checklist-c1",
    title: "Mini placement checklist (advanced)",
    desc: "Quick self-check for advanced learners.",
    meta: "PDF • Free",
    level: "C1",
    file: "/materials/free/mini-placement-checklist.pdf",
        thumb: "/images/materials/speaking-prompts.jpg",

  },
  {
    id: "speaking-warmups-c1",
    title: "Speaking warm-up cards",
    desc: "Short speaking starters for lessons.",
    meta: "PDF • Free",
    level: "C1",
    file: "/materials/free/speaking-prompts-a2-b1-4.pdf",
        thumb: "/images/materials/speaking-prompts.jpg",

  },
  {
    id: "dialogue-practice-a1",
    title: "Dialogue practice pack",
    desc: "Short dialogues for daily life situations.",
    meta: "PDF • Free",
    level: "A1",
    file: "/materials/free/speaking-prompts-a2-b1-5.pdf",
        thumb: "/images/materials/speaking-prompts.jpg",

  },
];
