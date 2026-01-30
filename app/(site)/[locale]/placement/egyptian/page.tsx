import FadeIn from "@/components/FadeIn";
import PlacementTest from "@/components/placement/PlacementTest";
import { egyptianTest } from "@/lib/placement/tests/egyptian";

export default function Page() {
  return (
    <section className="space-y-10 md:space-y-12">
      <FadeIn>
        <PlacementTest spec={egyptianTest} />
      </FadeIn>
    </section>
  );
}
