import { Reveal, SectionTitle } from "../Reveal";
import mojito from "@/assets/gallery-mojito.jpg";
import spritz from "@/assets/drink-spritz.jpg";
import pina from "@/assets/drink-pina.jpg";
import rose from "@/assets/drink-rose.jpg";

const preview = [
  { img: mojito, name: "Sunny Mojito", price: "9 €" },
  { img: spritz, name: "Aperol Spritz", price: "8 €" },
  { img: pina, name: "Piña Courseulles", price: "10 €" },
  { img: rose, name: "Rosé de Provence", price: "5 €" },
];

export function DrinksPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionTitle eyebrow="La carte" title="Un verre, le bon">
          Cocktails signature, spritz au coucher de soleil, bières artisanales et vins choisis. La carte change avec l’humeur de la saison.
        </SectionTitle>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.06}>
              <article className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={d.img} alt={d.name} loading="lazy" width={896} height={1120}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="font-display text-lg">{d.name}</h3>
                  <span className="text-sm text-primary">{d.price}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <a href="/carte" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:scale-[1.02]">
              Voir la carte complète →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
