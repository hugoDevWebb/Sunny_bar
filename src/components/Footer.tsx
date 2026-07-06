import { Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-secondary/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 md:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Cocktails, concerts et coucher de soleil face à la mer, à Courseulles-sur-Mer.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-display text-lg">Nous trouver</p>
          <address className="mt-3 not-italic text-muted-foreground">
            Avenue des Essarts<br />
            14470 Courseulles-sur-Mer<br />
            France
          </address>
        </div>
        <div className="text-sm">
          <p className="font-display text-lg">Suivez-nous</p>
          <div className="mt-3 flex gap-3">
            <a
              href="https://instagram.com/le_sunny_courseulles"
              target="_blank" rel="noreferrer"
              className="rounded-full border border-border p-2 transition hover:bg-accent/20"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/p/Le-Sunny-Bar-Courseulles-sur-mer-100094926032765/?locale=fr_FR"
              target="_blank" rel="noreferrer"
              className="rounded-full border border-border p-2 transition hover:bg-accent/20"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sunny Bar Courseulles — Tous droits réservés.
      </div>
    </footer>
  );
}
