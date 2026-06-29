import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal, SectionTitle } from "../Reveal";

import cocktails from "@/assets/gallery-cocktails.jpg";
import concert from "@/assets/gallery-concert.jpg";
import sunset from "@/assets/gallery-sunset.jpg";
import friends from "@/assets/gallery-friends.jpg";
import terrace from "@/assets/gallery-terrace.jpg";
import mojito from "@/assets/gallery-mojito.jpg";

const items = [
  { src: cocktails, alt: "Cocktails au coucher du soleil", h: "row-span-2" },
  { src: terrace, alt: "Terrasse en bois face à la mer", h: "" },
  { src: concert, alt: "Concert live sur la terrasse du Sunny Bar", h: "row-span-2" },
  { src: sunset, alt: "Coucher de soleil sur Courseulles-sur-Mer", h: "" },
  { src: friends, alt: "Amis partageant un verre en soirée d’été", h: "" },
  { src: mojito, alt: "Mojito Sunny Bar", h: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="galerie" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionTitle eyebrow="Galerie" title="Quelques instants Sunny">
          Cocktails, lumière dorée et soirées musicales — la vie au Sunny Bar.
        </SectionTitle>

        <Reveal>
          <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">
            {items.map((it, i) => (
              <button
                key={i}
                onClick={() => setOpen(i)}
                className={`group relative overflow-hidden rounded-2xl border border-border/60 ${it.h}`}
              >
                <img src={it.src} alt={it.alt} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-6"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>
            <motion.img
              key={open}
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              src={items[open].src}
              alt={items[open].alt}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
