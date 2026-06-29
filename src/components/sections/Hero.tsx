import { motion } from "framer-motion";
import hero from "@/assets/hero-bar.jpg";

export function Hero() {
  return (
    <section id="accueil" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={hero}
        alt="Terrasse en bois du Sunny Bar au coucher de soleil"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Warm cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.32_0.04_240/0.45)] via-transparent to-[oklch(0.76_0.12_55/0.25)]" />

      {/* Floating soft ambient orb */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-[oklch(0.85_0.15_60/0.55)] blur-3xl"
        animate={{ y: [0, -18, 0], opacity: [0.55, 0.7, 0.55] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 md:px-8">
        <motion.span
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/90 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.85_0.15_60)]" />
          Courseulles-sur-Mer · Normandie
        </motion.span>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-6 font-display text-6xl leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[8.5rem]"
        >
          Sunny Bar
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-5 max-w-xl text-pretty text-base text-white/85 md:text-lg"
        >
          Cocktails, concerts et coucher de soleil à Courseulles-sur-Mer.
        </motion.p>

        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <a
            href="#atmosphere"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-black/20 transition hover:scale-[1.02] hover:shadow-xl"
          >
            Découvrir
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#concerts"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Voir les concerts
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/70"
        />
      </div>
    </section>
  );
}
