import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { demoVideo } from "../config/media";
import DemoPlayer from "./DemoPlayer";

const OPEN_EVENT = "sahabi:open-demo";

/** Panggil dari tombol mana pun untuk membuka popup video demo. */
export function openDemo() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export default function VideoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  const portrait = demoVideo.orientation === "portrait";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-[fadeIn_.3s_ease]"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={demoVideo.title}
    >
      <div
        className={portrait ? "w-full" : "w-full max-w-5xl"}
        style={portrait ? { maxWidth: "calc((100vh - 11rem) * 9 / 16)" } : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Video Demo SAHABI</div>
            <div className="font-display text-xl text-white sm:text-2xl">{demoVideo.title}</div>
          </div>
          <button
            className="shrink-0 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            onClick={() => setOpen(false)}
            aria-label="Tutup video"
            autoFocus
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-gold-light/60 via-gold/20 to-gold-dark/60 p-[1.5px] shadow-glow">
          <div className={`relative overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-black ${portrait ? "aspect-[9/16]" : "aspect-video"}`}>
            <DemoPlayer autoPlay />
          </div>
        </div>
        <p className="mt-3 text-center text-sm text-neutral-400">{demoVideo.caption}</p>
      </div>
    </div>
  );
}
