import logo from "@/assets/sunny-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`group inline-flex items-center gap-2 ${className}`} aria-label="Sunny Bar — accueil">
      <img
        src={logo}
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 transition-transform duration-500 group-hover:rotate-6 dark:invert-[0.85] dark:sepia dark:hue-rotate-[-10deg]"
      />
      <span className="font-display text-xl tracking-tight">
        Sunny <span className="text-primary">Bar</span>
      </span>
    </a>
  );
}
