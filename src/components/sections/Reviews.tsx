import { Reveal, SectionTitle } from "../Reveal";
import { reviews } from "@/lib/data";
import { Quote } from "lucide-react";

export function Reviews() {
  return (
    <section id="avis" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionTitle eyebrow="Ils nous aiment" title="L’avis des habitués" />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <Quote className="text-primary/30" size={28} />
                <p className="mt-4 text-pretty text-foreground/90">“{r.text}”</p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="font-medium">{r.name}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{r.role}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
