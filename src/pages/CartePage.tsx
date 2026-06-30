import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { drinks, type Drink } from "@/lib/data";

const categories: Drink["category"][] = ["Cocktails", "Spritz", "Mocktails", "Bières", "Vins", "Softs"];

export function CartePage() {
  return (
    <>
      <Navbar />
      <main className="pb-24 pt-36">
        <header className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <motion.span
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-xs uppercase tracking-[0.3em] text-primary"
          >
            La carte
          </motion.span>
          <motion.h1
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
            className="mt-3 font-display text-5xl tracking-tight md:text-7xl"
          >
            Carte des boissons
          </motion.h1>
          <motion.p
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="mx-auto mt-5 max-w-xl text-balance text-muted-foreground"
          >
            Une sélection courte et soignée, à savourer face à la mer.
          </motion.p>
        </header>

        <div className="mx-auto mt-16 max-w-6xl px-6 md:px-8">
          {categories.map((cat, idx) => {
            const list = drinks.filter((d) => d.category === cat);
            return (
              <section key={cat} className={idx === 0 ? "" : "mt-16"}>
                <Reveal>
                  <div className="flex items-end justify-between border-b border-border/60 pb-3">
                    <h2 className="font-display text-3xl md:text-4xl">{cat}</h2>
                    <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {list.length} références
                    </span>
                  </div>
                </Reveal>
                <ul className="mt-6 grid gap-x-10 gap-y-2 md:grid-cols-2">
                  {list.map((d, i) => (
                    <Reveal key={d.name} delay={i * 0.03}>
                      <li className="group flex items-baseline justify-between gap-4 rounded-xl px-3 py-4 transition-colors hover:bg-secondary/50">
                        <div>
                          <p className="font-display text-lg">{d.name}</p>
                          <p className="text-sm text-muted-foreground">{d.desc}</p>
                        </div>
                        <span className="shrink-0 font-display text-lg text-primary">{d.price}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
