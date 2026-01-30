import type { PlacementTestSpec } from "../types";

export const egyptianTest: PlacementTestSpec = {
  id: "egyptian",
  title: "Egyptian Arabic Placement Test",
  subtitle: "20 questions. Choose the correct answer. No saving — you’ll see your level at the end.",
  questions: [
    // A1 (4)
    { id: "egy-1", level: "A1", prompt: "اختار الجملة الصح:", options: ["أنا اسمي كريم.", "أنا اسم كريم.", "أنا كريم اسم.", "اسمي أنا كريم؟"], correctIndex: 0 },
    { id: "egy-2", level: "A1", prompt: "يعني إيه: (إزيّك؟)", options: ["Where are you?", "How are you?", "What’s your name?", "How old are you?"], correctIndex: 1 },
    { id: "egy-3", level: "A1", prompt: "اختار الصح: (أنا ___ مصر).", options: ["في", "من", "على", "إلى"], correctIndex: 1 },
    { id: "egy-4", level: "A1", prompt: "أي كلمة معناها 'now'؟", options: ["دلوقتي", "بكرا", "امبارح", "لسه"], correctIndex: 0 },

    // A2 (4)
    { id: "egy-5", level: "A2", prompt: "اختار الصح: (أنا عايز ___ شاي).", options: ["اشرب", "أشرب", "شرب", "يشرب"], correctIndex: 1 },
    { id: "egy-6", level: "A2", prompt: "اختار الأنسب: (امبارح ___ البيت بدري).", options: ["بروح", "روحت", "هاروح", "عايز أروح"], correctIndex: 1 },
    { id: "egy-7", level: "A2", prompt: "يعني إيه: (قد إيه)؟", options: ["Why", "How much/How many", "When", "Where"], correctIndex: 1 },
    { id: "egy-8", level: "A2", prompt: "اختار الصح: (ممكن ___ شوية؟)", options: ["تستنى", "تستنّى", "استنى", "نستنى"], correctIndex: 0 },

    // B1 (4)
    { id: "egy-9", level: "B1", prompt: "اختار الأنسب: (لو فاضي ___ عندي).", options: ["تعال", "تيجي", "إجا", "باجي"], correctIndex: 1 },
    { id: "egy-10", level: "B1", prompt: "يعني إيه: (مش هينفع)؟", options: ["It won’t work / not possible", "It’s perfect", "Let’s go", "No worries"], correctIndex: 0 },
    { id: "egy-11", level: "B1", prompt: "اختار الصح: (أنا بــ ___ دلوقتي).", options: ["اكتب", "بكتب", "كتبت", "اكتبُ"], correctIndex: 1 },
    { id: "egy-12", level: "B1", prompt: "اختار الأنسب: (مع كده، ___ نجرب).", options: ["لازم", "إحنا", "يلا", "بتروح"], correctIndex: 2 },

    // B2 (4)
    { id: "egy-13", level: "B2", prompt: "اختار الأنسب: (كان لازم ___ بدري قبل الاجتماع).", options: ["تيجي", "جيت", "بتجي", "تيجيتي"], correctIndex: 0 },
    { id: "egy-14", level: "B2", prompt: "أقرب معنى لـ (على قدّ ما تقدر)؟", options: ["as much as you can", "as little as possible", "exactly", "never"], correctIndex: 0 },
    { id: "egy-15", level: "B2", prompt: "اختار الجملة الأنسب (لهجة طبيعية):", options: ["أودّ التحدّث معكم.", "لو سمحت عايز أتكلم معاك في الموضوع.", "أنا أريد أن أتحدث.", "أرجو أن نتحدث فوراً."], correctIndex: 1 },
    { id: "egy-16", level: "B2", prompt: "اختار الصح: (مش هنلحق ___ لو اتأخرنا).", options: ["الوقت", "الوقتي", "وقتاً", "وقتنا"], correctIndex: 0 },

    // C1 (4)
    { id: "egy-17", level: "C1", prompt: "اختار الأنسب: (المشكلة مش في الفكرة، المشكلة في طريقة ___).", options: ["تنفيذها", "ينفذها", "نفيذها", "نفّذها"], correctIndex: 0 },
    { id: "egy-18", level: "C1", prompt: "يعني إيه: (على الأقل)؟", options: ["at least", "maybe", "never", "usually"], correctIndex: 0 },
    { id: "egy-19", level: "C1", prompt: "اختار الأنسب: (بصراحة، ما كنتش متوقع الموضوع ___ كده).", options: ["يتعقّد", "تعقّد", "عقّد", "يتعقّدي"], correctIndex: 0 },
    { id: "egy-20", level: "C1", prompt: "اختار الأنسب: (لو تسمعني، ___ القرار قبل ما تندم).", options: ["راجِع", "راجع", "يراجع", "مراجعة"], correctIndex: 0 },
  ],
};
