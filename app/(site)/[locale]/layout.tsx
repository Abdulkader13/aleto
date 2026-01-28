import type { ReactNode } from "react";

const rtlLocales = ["ar"];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRTL = rtlLocales.includes(locale);

  return (
    <div lang={locale} dir={isRTL ? "rtl" : "ltr"} className="contents">
      {children}
    </div>
  );
}
