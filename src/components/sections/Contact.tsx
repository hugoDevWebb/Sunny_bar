import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { Reveal } from "../Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.76_0.12_55/0.18)] blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Rejoignez-nous</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">Rejoins l’ambiance Sunny Bar.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
            Pas de réservation : on vous attend simplement. Suivez la programmation et nos meilleurs moments sur les réseaux.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://instagram.com/le_sunny_courseulles"
              target="_blank" rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition hover:scale-[1.03]"
            >
              <Instagram size={18} />
              @le_sunny_courseulles
            </a>
            <a
              href="https://www.facebook.com/people/Le-Sunny-Bar-Courseulles-sur-mer/"
              target="_blank" rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition hover:scale-[1.03]"
            >
              <Facebook size={18} />
              Le Sunny Bar Courseulles
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
