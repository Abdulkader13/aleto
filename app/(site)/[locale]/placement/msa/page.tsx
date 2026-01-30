import FadeIn from "@/components/FadeIn";
import PlacementTest from "@/components/placement/PlacementTest";
import { msaTest } from "@/lib/placement/tests/msa";

export default function Page() {
  return (
    <section className="space-y-10 md:space-y-12">
      <FadeIn>
        <PlacementTest spec={msaTest} />
      </FadeIn>
    </section>
  );
}
