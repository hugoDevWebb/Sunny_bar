import { Reveal, SectionTitle } from "../Reveal";
import { hours } from "@/lib/data";

export function Hours() {
  return (
    <section id="horaires" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <SectionTitle eyebrow="Horaires" title="On vous attend">
          Tous les jours sauf lundi et mardi, de 10h à 22h.
        </SectionTitle>

        <Reveal>
          <div className="mt-12 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm">
            {hours.map((h, i) => (
              <div
                key={h.day}
                className={`flex items-center justify-between px-6 py-4 text-sm md:text-base ${
                  i !== hours.length - 1 ? "border-b border-border/50" : ""
                } ${h.closed ? "text-muted-foreground" : ""}`}
              >
                <span className="font-display text-lg">{h.day}</span>
                <span className={h.closed ? "" : "text-primary"}>{h.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
