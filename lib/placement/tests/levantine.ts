import type { PlacementTestSpec } from "../types";

export const levantineTest: PlacementTestSpec = {
  id: "levantine",
  title: "Levantine (Syrian) Placement Test",
  subtitle: "20 questions. Choose the correct answer. No saving — you’ll see your level at the end.",
  questions: [
    // A1 (4)
    { id: "lev-1", level: "A1", prompt: "اختار الجملة الصح:", options: ["أنا اسمي أحمد.", "أنا اسم أحمد.", "أنا أحمد اسم.", "اسمي أنا أحمد؟"], correctIndex: 0 },
    { id: "lev-2", level: "A1", prompt: "شو معنى: (شو اسمك؟)", options: ["What’s your name?", "How are you?", "Where are you?", "How old are you?"], correctIndex: 0 },
    { id: "lev-3", level: "A1", prompt: "اختار الصح: (أنا ___ الشغل).", options: ["بالـ", "عَ", "عالـ", "من"], correctIndex: 2 },
    { id: "lev-4", level: "A1", prompt: "أي كلمة معناها 'today'؟", options: ["بكرا", "اليوم", "مبارح", "هلّق"], correctIndex: 1 },

    // A2 (4)
    { id: "lev-5", level: "A2", prompt: "اختار الصح: (أنا بدي ___ قهوة).", options: ["اشرب", "شرب", "أشرب", "يشرب"], correctIndex: 2 },
    { id: "lev-6", level: "A2", prompt: "اختار الأنسب: (مبارح ___ عالسوق).", options: ["بروح", "رحت", "رح روح", "بدي روح"], correctIndex: 1 },
    { id: "lev-7", level: "A2", prompt: "شو يعني: (قدّيش)؟", options: ["Why", "How much/How many", "When", "Where"], correctIndex: 1 },
    { id: "lev-8", level: "A2", prompt: "اختار الصح: (فيك ___ شوي؟)", options: ["تستنى", "تستنّى", "استنى", "نستنى"], correctIndex: 1 },

    // B1 (4)
    { id: "lev-9", level: "B1", prompt: "اختار الأنسب: (إذا فاضي ___ لعندي).", options: ["تعال", "تجي", "إجا", "باجي"], correctIndex: 1 },
    { id: "lev-10", level: "B1", prompt: "شو يعني: (ما بيمشي الحال)؟", options: ["It’s okay", "It won’t work / not possible", "Let’s walk", "No problem"], correctIndex: 1 },
    { id: "lev-11", level: "B1", prompt: "اختار الصح: (عم ___ هلأ).", options: ["بكتب", "كتبت", "أكتب", "اكتب"], correctIndex: 0 },
    { id: "lev-12", level: "B1", prompt: "اختار الأنسب: (مع هيك، ___ نجرّب).", options: ["لازم", "بدنا", "خلّينا", "بتروح"], correctIndex: 2 },

    // B2 (4)
    { id: "lev-13", level: "B2", prompt: "اختار الأنسب: (كان لازم ___ قبل ما يبلّش الاجتماع).", options: ["تجي", "إجيت", "بتجي", "تجيتي"], correctIndex: 0 },
    { id: "lev-14", level: "B2", prompt: "شو أقرب معنى لـ (فوق ما تتخيّل)؟", options: ["less than you think", "more than you can imagine", "exactly as you imagine", "hard to say"], correctIndex: 1 },
    { id: "lev-15", level: "B2", prompt: "اختار الجملة الأنسب (لهجة طبيعية):", options: ["أودّ التحدّث معكم.", "لو سمحت بدّي إحكي معك بالموضوع.", "هلا أنا أريد التحدث.", "أرجو أن نتكلم حالاً."], correctIndex: 1 },
    { id: "lev-16", level: "B2", prompt: "اختار الصح: (ما رح ___ وقت إذا تأخّرنا).", options: ["يلحقنا", "نلحق", "تلحق", "الحق"], correctIndex: 1 },

    // C1 (4)
    { id: "lev-17", level: "C1", prompt: "اختار الأنسب: (المشكلة مو بالفكرة، المشكلة بطريقة ___).", options: ["تنفيذها", "ينفذها", "نفيذها", "نفّذها"], correctIndex: 0 },
    { id: "lev-18", level: "C1", prompt: "شو أقرب معنى لـ (على القليلة)؟", options: ["at least", "maybe", "never", "usually"], correctIndex: 0 },
    { id: "lev-19", level: "C1", prompt: "اختار الأنسب: (بصراحة، ما كنت متوقّع الموضوع ___ لهالدرجة).", options: ["يتعقّد", "تعقّد", "عقّد", "يتعقّدي"], correctIndex: 0 },
    { id: "lev-20", level: "C1", prompt: "اختار الأنسب: (إذا بدّك رأيي، ___ القرار قبل ما تندم).", options: ["راجع", "راجِع", "يراجع", "مراجعة"], correctIndex: 1 },
  ],
};
