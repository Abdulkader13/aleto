import type { PlacementTestSpec } from "../types";

export const msaTest: PlacementTestSpec = {
  id: "msa",
  title: "MSA Placement Test (Fus’ha)",
  subtitle: "20 questions. Choose the correct answer. No saving — you’ll see your level at the end.",
  questions: [
    // A1 (4)
    { id: "msa-1", level: "A1", prompt: "اختر الجملة الصحيحة للتعريف عن النفس:", options: ["أنا اسمي محمد.", "أنا اسم محمد.", "أنا محمد اسم.", "اسمي أنا محمد؟"], correctIndex: 0 },
    { id: "msa-2", level: "A1", prompt: "ما معنى: (كيف حالك؟)", options: ["Where are you from?", "How are you?", "What is this?", "How old are you?"], correctIndex: 1 },
    { id: "msa-3", level: "A1", prompt: "اختر الإجابة الصحيحة: (أنا ___ من سوريا).", options: ["في", "من", "إلى", "على"], correctIndex: 1 },
    { id: "msa-4", level: "A1", prompt: "أيّ كلمة تعني 'book'؟", options: ["قلم", "كتاب", "باب", "كرسي"], correctIndex: 1 },

    // A2 (4)
    { id: "msa-5", level: "A2", prompt: "اختر الصيغة الصحيحة: (أنا ___ العربية كل يوم).", options: ["أدرس", "تدرس", "يدرس", "نَدْرُسُ"], correctIndex: 0 },
    { id: "msa-6", level: "A2", prompt: "ما الجملة الصحيحة للماضي؟", options: ["أذهبُ إلى السوق أمس.", "ذهبتُ إلى السوق أمس.", "سأذهبُ إلى السوق أمس.", "اذهبْ إلى السوق أمس."], correctIndex: 1 },
    { id: "msa-7", level: "A2", prompt: "اختر الصحيح: (نريد ___ ماء).", options: ["شرب", "أن نشرب", "يشرب", "تشرب"], correctIndex: 1 },
    { id: "msa-8", level: "A2", prompt: "ما معنى (لأنّ)؟", options: ["but", "because", "before", "between"], correctIndex: 1 },

    // B1 (4)
    { id: "msa-9", level: "B1", prompt: "اختر الأنسب: (لو كنتُ مكانك ___ ذلك).", options: ["سأفعل", "أفعل", "فعلتُ", "سأفعلُهُ أمس"], correctIndex: 0 },
    { id: "msa-10", level: "B1", prompt: "أي جملة تستخدم (على الرغم من) بشكل صحيح؟", options: ["على الرغم من أنه متعب، ذهب إلى العمل.", "على الرغم من هو متعب، ذهب للعمل.", "على الرغم من متعب، ذهب إلى العمل.", "على الرغم من ذلك، لأنه متعب ذهب."], correctIndex: 0 },
    { id: "msa-11", level: "B1", prompt: "اختر الصحيح: (انتهيتُ من ___ التقرير).", options: ["يكتب", "كتابة", "كتب", "يكتُبُ"], correctIndex: 1 },
    { id: "msa-12", level: "B1", prompt: "ما الأقرب معنى لـ (يزداد)؟", options: ["ينقص", "يزيد", "يبدأ", "يتوقف"], correctIndex: 1 },

    // B2 (4)
    { id: "msa-13", level: "B2", prompt: "اختر الصحيح: (ما كان لي أن ___ هذا القرار دون استشارة).", options: ["أتخذ", "اتخاذ", "اتخذ", "يتخذ"], correctIndex: 0 },
    { id: "msa-14", level: "B2", prompt: "أي خيار يعبّر عن أسلوب رسمي مناسب؟", options: ["أبي بدي أحكي معك.", "أودّ التحدّث معكم بشأن الموضوع.", "شو الأخبار؟", "وينك؟"], correctIndex: 1 },
    { id: "msa-15", level: "B2", prompt: "اختر الأنسب: (تمّ ___ المشروع في الموعد المحدد).", options: ["إنجازُ", "ينجز", "أُنجِزَ", "إنجازَ"], correctIndex: 2 },
    { id: "msa-16", level: "B2", prompt: "ما معنى (بيدَ أنّ)؟", options: ["therefore", "however", "especially", "meanwhile"], correctIndex: 1 },

    // C1 (4)
    { id: "msa-17", level: "C1", prompt: "اختر الأنسب: (لا يخفى على أحدٍ أنّ هذه النتائج ___ مراجعة شاملة).", options: ["تستدعي", "تدعو", "تطلب", "تنادي"], correctIndex: 0 },
    { id: "msa-18", level: "C1", prompt: "أي صياغة أدق؟", options: ["تمّ اتخاذ القرار بناءً على معطيات.", "تمّ اتخاذ القرار بناءً على المعطيات المتاحة.", "أخذنا قرار لأن في معطيات.", "اتخذنا قرار على معطيات."], correctIndex: 1 },
    { id: "msa-19", level: "C1", prompt: "اختر الاستخدام الصحيح لـ (حيثُ إنّ):", options: ["حيثُ إنّ الطقس جميل، سنخرج.", "ذهبتُ حيثُ إنّ البيت.", "حيثُ إنّ؟ أنا لا أعرف.", "حيثُ إنّ هو صديقي."], correctIndex: 0 },
    { id: "msa-20", level: "C1", prompt: "اختر الأقرب معنى لـ (تداعيات):", options: ["مقدمات", "نتائج/آثار", "تفاصيل", "أسباب"], correctIndex: 1 },
  ],
};
