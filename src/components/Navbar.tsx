import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#concerts", label: "Concerts" },
  { href: "/carte", label: "Carte" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#horaires", label: "Horaires" },
  { href: "/#avis", label: "Avis" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60 py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-border/70 p-2 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <Logo />
              <button onClick={() => setOpen(false)} className="rounded-full border border-border p-2" aria-label="Fermer">
                <X size={18} />
              </button>
            </div>
            <ul className="mt-10 flex flex-col items-center gap-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { delay: 0.05 * i } }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl tracking-tight"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
