import { useEffect, useState } from "react";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms / 3600000) % 24);
  const m = Math.floor((ms / 60000) % 60);
  return { d, h, m, done: ms === 0 };
}

export function Countdown({ iso }: { iso: string }) {
  const target = new Date(iso).getTime();
  const [t, setT] = useState(() => diff(target));
  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 30_000);
    return () => clearInterval(id);
  }, [target]);

  if (t.done) return <span className="text-[11px] uppercase tracking-wider text-primary">En cours</span>;
  return (
    <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
      Dans {t.d}j {t.h}h {t.m}m
    </span>
  );
}
