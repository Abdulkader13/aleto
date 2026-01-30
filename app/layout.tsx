import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Aleto",
  description: "Modern language learning for real life and work",
};

function AppBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[color:rgba(79,110,247,0.08)] to-[color:rgba(44,177,166,0.10)]" />

      {/* diagonal brand overlay */}
      <div className="absolute inset-0 opacity-[0.95] bg-[linear-gradient(135deg,rgba(44,177,166,0.14),rgba(79,110,247,0.10),rgba(244,183,64,0.08))]" />

      {/* dot grid */}
      <div className="absolute inset-0 opacity-[0.55] [background-image:radial-gradient(rgba(44,177,166,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />

               {/* crisp balls (no blur) */}

      {/* Indigo */}
      <div className="absolute -top-24 -right-24 h-[260px] w-[260px] rounded-full bg-[#4F6EF7]/18" />
      <div className="absolute top-[12%] left-[38%] h-[140px] w-[140px] rounded-full bg-[#4F6EF7]/12" />

      {/* Teal */}
      <div className="absolute top-[22%] -left-28 h-[230px] w-[230px] rounded-full bg-[#2CB1A6]/16" />
      <div className="absolute top-[55%] right-[18%] h-[150px] w-[150px] rounded-full bg-[#2CB1A6]/12" />

      {/* Amber (MORE visible, more balls) */}
      <div className="absolute bottom-[-70px] right-[10%] h-[240px] w-[240px] rounded-full bg-[#F4B740]/22" />
      <div className="absolute top-[8%] right-[22%] h-[130px] w-[130px] rounded-full bg-[#F4B740]/18" />
      <div className="absolute top-[40%] left-[12%] h-[160px] w-[160px] rounded-full bg-[#F4B740]/16" />
      <div className="absolute bottom-[22%] left-[32%] h-[110px] w-[110px] rounded-full bg-[#F4B740]/14" />
      <div className="absolute bottom-[8%] right-[35%] h-[90px] w-[90px] rounded-full bg-[#F4B740]/14" />

      {/* extra smaller balls for depth */}
      <div className="absolute top-[8%] left-[35%] h-[120px] w-[120px] rounded-full bg-[#4F6EF7]/12" />
      <div className="absolute top-[42%] right-[18%] h-[140px] w-[140px] rounded-full bg-[#2CB1A6]/12" />
      <div className="absolute bottom-[18%] left-[18%] h-[110px] w-[110px] rounded-full bg-[#F4B740]/12" />

    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter min-h-screen antialiased bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
        <AppBackground />

<div className="min-h-dvh flex flex-col">
  <Navbar />

  <main id="main" className="flex-1">
    <Container className="pt-10 md:pt-14">
      {children}
    </Container>
  </main>

  <div className="mt-auto">
    <Footer />
  </div>
</div>

      </body>
    </html>
  );
}
