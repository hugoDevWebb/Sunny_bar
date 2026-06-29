import { Reveal, SectionTitle } from "../Reveal";
import { MapPin } from "lucide-react";

export function MapEmbed() {
  const query = encodeURIComponent("Le Sunny Bar, Avenue des Essarts, 14470 Courseulles-sur-Mer");
  return (
    <section id="acces" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionTitle eyebrow="Nous trouver" title="Face à la mer, à Courseulles" />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
              <MapPin className="text-primary" />
              <h3 className="mt-4 font-display text-2xl">Sunny Bar</h3>
              <address className="mt-3 not-italic text-muted-foreground">
                Avenue des Essarts<br />
                14470 Courseulles-sur-Mer<br />
                Normandie, France
              </address>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                target="_blank" rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:scale-[1.02]"
              >
                Ouvrir dans Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-border/60 shadow-lg">
              <iframe
                title="Carte du Sunny Bar à Courseulles-sur-Mer"
                src={`https://www.google.com/maps?q=${query}&output=embed`}
                width="100%"
                height="460"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
