import Surface from "@/components/ui/Surface";
import { cn } from "@/components/ui/cn";

type Tone = "default" | "secondary";

export default function Testimonial({
  quote,
  name,
  meta,
  tone = "default",
  className,
}: {
  quote: string;
  name: string;
  meta?: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <Surface
      className={cn(
        "p-8 hover:shadow-md transition",
        tone === "secondary" && "border-[color:rgba(44,177,166,0.22)]",
        className
      )}
    >
      <p className="text-[var(--color-foreground)]/75 leading-relaxed">
        “{quote}”
      </p>

      <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
        <p className="font-semibold">{name}</p>
        {meta ? (
          <p className="text-sm text-[var(--color-foreground)]/55">{meta}</p>
        ) : null}
      </div>
    </Surface>
  );
}
