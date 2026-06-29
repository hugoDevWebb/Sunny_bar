import { motion } from "framer-motion";
import { Reveal, SectionTitle } from "../Reveal";
import { Countdown } from "../Countdown";
import { events } from "@/lib/data";
import { Music2 } from "lucide-react";

export function Events() {
  return (
    <section id="concerts" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionTitle eyebrow="Programmation" title="Concerts & événements">
          La saison live du Sunny Bar — folk, rock, bluegrass, soul, karaoké et jam sessions face à la mer.
        </SectionTitle>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.id} delay={(i % 3) * 0.06}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-xl"
              >
                {/* glow */}
                <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(400px circle at var(--x,50%) var(--y,0%), oklch(0.76 0.12 55 / 0.18), transparent 60%)" }} />

                <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
                  <span>{e.dateLabel}</span>
                  <span>{e.timeLabel}</span>
                </div>

                <h3 className="mt-5 font-display text-2xl leading-tight">{e.artist}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.vibe}</p>

                <div className="mt-6 flex items-center justify-between">
                  <Countdown iso={e.dateISO} />
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Music2 size={16} />
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
