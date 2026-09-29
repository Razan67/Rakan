import { useEffect } from "react";

export default function Lightbox({ items, index, onClose, onChange }) {
  const item = items[index];
  useEffect(() => {
    const k = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [index, items.length, onClose, onChange]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Close">×</button>
      <button className="lb-nav prev" aria-label="Previous photo"
        onClick={(e) => { e.stopPropagation(); onChange((index - 1 + items.length) % items.length); }}>‹</button>
      <figure onClick={(e) => e.stopPropagation()} key={index}>
        <img src={item.image} alt={item.alt || item.caption} />
        <figcaption>{item.caption}</figcaption>
      </figure>
      <button className="lb-nav next" aria-label="Next photo"
        onClick={(e) => { e.stopPropagation(); onChange((index + 1) % items.length); }}>›</button>
    </div>
  );
}
