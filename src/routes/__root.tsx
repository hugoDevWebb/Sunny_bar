import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ThemeProvider } from "@/components/ThemeProvider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous cherchez n’existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Une vague est passée par là</h1>
        <p className="mt-2 text-sm text-muted-foreground">Cette page n’a pas pu se charger. Réessayez ou revenez à l’accueil.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
          >Réessayer</button>
          <a href="/" className="rounded-full border border-border px-4 py-2 text-sm">Accueil</a>
        </div>
      </div>
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: "Sunny Bar",
  description:
    "Bar de plage à Courseulles-sur-Mer : cocktails, concerts live et coucher de soleil face à la mer en Normandie.",
  image: "/og-image.jpg",
  url: "/",
  telephone: "",
  servesCuisine: ["Cocktails", "Bières", "Vins"],
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenue des Essarts",
    addressLocality: "Courseulles-sur-Mer",
    postalCode: "14470",
    addressRegion: "Normandie",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 49.3325, longitude: -0.4575 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "10:00", closes: "22:00" },
  ],
  sameAs: [
    "https://instagram.com/le_sunny_courseulles",
    "https://www.facebook.com/people/Le-Sunny-Bar-Courseulles-sur-mer/",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#F6F1E8" },
      { title: "Sunny Bar — Bar de plage à Courseulles-sur-Mer" },
      { name: "description", content: "Cocktails, concerts et coucher de soleil face à la mer à Courseulles-sur-Mer. Le bar de plage convivial de la Côte de Nacre." },
      { name: "keywords", content: "bar Courseulles-sur-Mer, bar plage Courseulles, cocktails Courseulles, concerts Courseulles, beach bar Normandie, Sunny Bar" },
      { property: "og:title", content: "Sunny Bar — Bar de plage à Courseulles-sur-Mer" },
      { property: "og:description", content: "Cocktails, concerts et coucher de soleil face à la mer à Courseulles-sur-Mer." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sunny Bar — Bar de plage à Courseulles-sur-Mer" },
      { name: "twitter:description", content: "Cocktails, concerts et coucher de soleil à Courseulles-sur-Mer." },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
