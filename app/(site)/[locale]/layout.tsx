import type { ReactNode } from "react";

const rtlLocales = ["ar"];

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const isRTL = rtlLocales.includes(params.locale);

  return (
    <div
      lang={params.locale}
      dir={isRTL ? "rtl" : "ltr"}
      className="contents"
    >
      {children}
    </div>
  );
}
