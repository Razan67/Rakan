import { useMemo } from "react";

// Slow floating hearts (pure CSS, light on mobile).
export default function Hearts({ count = 14, className = "" }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 20,
        delay: -Math.random() * 20,
        dur: 14 + Math.random() * 14,
        drift: (Math.random() - 0.5) * 60,
        op: 0.15 + Math.random() * 0.35,
      })),
    [count]
  );
  return (
    <div className={`hearts ${className}`} aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          style={{
            left: `${h.left}%`,
            fontSize: h.size,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.dur}s`,
            "--drift": `${h.drift}px`,
            "--op": h.op,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
}

// Heart burst at a point on screen. Call burst(x, y) or burst(event).
export function burst(a, b, n = 14) {
  let x = a, y = b;
  if (typeof a === "object") {
    const r = a.currentTarget.getBoundingClientRect();
    x = r.left + r.width / 2;
    y = r.top + r.height / 2;
  }
  for (let i = 0; i < n; i++) {
    const el = document.createElement("span");
    el.className = "burst-heart";
    el.textContent = "❤";
    const ang = Math.random() * Math.PI * 2;
    const dist = 50 + Math.random() * 90;
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.style.fontSize = 10 + Math.random() * 16 + "px";
    el.style.setProperty("--dx", Math.cos(ang) * dist + "px");
    el.style.setProperty("--dy", Math.sin(ang) * dist - 40 + "px");
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }
}
