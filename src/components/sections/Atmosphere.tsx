import { Reveal, SectionTitle } from "../Reveal";
import terrace from "@/assets/gallery-terrace.jpg";
import friends from "@/assets/gallery-friends.jpg";
import sunset from "@/assets/gallery-sunset.jpg";

const cards = [
  { img: terrace, title: "Une terrasse en bois", text: "Pieds dans le sable, vue sur la mer. Notre coin préféré pour s’attarder." },
  { img: friends, title: "L’esprit famille", text: "Un lieu où les habitués se reconnaissent et où les nouveaux se sentent chez eux." },
  { img: sunset, title: "Les soirs d’été", text: "Coucher de soleil, lumières chaudes et musique live. Tout simplement." },
];

export function Atmosphere() {
  return (
    <section id="atmosphere" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionTitle eyebrow="L’ambiance" title="Un lieu chaleureux face à la mer">
          Concerts, cocktails et bonne humeur se rencontrent sur la grande terrasse en bois du Sunny Bar — un repère local, à deux pas de la plage.
        </SectionTitle>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
