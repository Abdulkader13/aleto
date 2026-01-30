import FadeIn from "@/components/FadeIn";
import PlacementTest from "@/components/placement/PlacementTest";
import { levantineTest } from "@/lib/placement/tests/levantine";

export default function Page() {
  return (
    <section className="space-y-10 md:space-y-12">
      <FadeIn>
        <PlacementTest spec={levantineTest} />
      </FadeIn>
    </section>
  );
}
