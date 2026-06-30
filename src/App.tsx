import { ThemeProvider } from "@/components/ThemeProvider";
import { CartePage } from "@/pages/CartePage";
import { HomePage } from "@/pages/HomePage";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export function App() {
  const path = window.location.pathname;

  return (
    <ThemeProvider>
      {path === "/" && <HomePage />}
      {path === "/carte" && <CartePage />}
      {path !== "/" && path !== "/carte" && <NotFoundPage />}
    </ThemeProvider>
  );
}
