import FadeIn from "@/components/FadeIn";
import Hero from "@/components/sections/Hero";
import Surface from "@/components/ui/Surface";
import FreeMaterialsClient from "./FreeMaterialsClient";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FreeMaterialsPage() {
  return (
    <section className="space-y-20 md:space-y-28">
      <FadeIn>
        <Hero
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Free materials
            </span>
          }
          title="Free Arabic"
          highlight="library"
          subtitle="Download practice-ready PDFs and filter by level."
          primaryCta={{
            href: "/materials",
            label: (
              <>
                Back to materials <ArrowRight className="h-4 w-4" />
              </>
            ),
          }}
          secondaryCta={{
            href: "/placement",
            label: "Take placement test",
          }}
          variant="brand"
        />
      </FadeIn>

      <FadeIn delay={0.12}>
        <Surface className="p-10 md:p-14">
          <FreeMaterialsClient />
        </Surface>
      </FadeIn>
    </section>
  );
}
