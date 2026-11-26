import { useCallback, useEffect, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, CircuitBoard, ImageIcon, PlayCircle, X } from "lucide-react";
import { documentationPhotos, prototypeHighlights, type DocPhoto } from "../config/media";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { openDemo } from "./VideoModal";

function Photo({ photo, onOpen, className }: { photo: DocPhoto; onOpen: () => void; className: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      disabled={failed}
      className={`group relative block w-full overflow-hidden rounded-3xl border border-white/[0.07] bg-ink-700 ${className}`}
      aria-label={`Perbesar foto: ${photo.title}`}
    >
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-700 to-ink-900 p-6 text-center">
          <ImageIcon className="h-10 w-10 text-gold/60" strokeWidth={1.3} />
          <p className="text-sm text-neutral-500">
            Tambahkan foto di <code className="text-gold/80">public{photo.src}</code>
          </p>
        </div>
      ) : (
        <img
          src={photo.src}
          alt={photo.title}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 pt-16 text-left">
        <h3 className="font-display text-lg text-white">{photo.title}</h3>
        <p className="mt-1 text-xs text-neutral-300">{photo.caption}</p>
      </div>
    </button>
  );
}

export default function Documentation() {
  const [open, setOpen] = useState<number | null>(null);
  const total = documentationPhotos.length;
  const [featured, ...others] = documentationPhotos;

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + total) % total)), [total]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open !== null ? documentationPhotos[open] : null;

  return (
    <section id="documentation" className="relative overflow-hidden bg-ink-800/60 py-24 sm:py-32">
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Dokumentasi"
          title="Dari Ide Menjadi"
          highlight="Prototype Nyata"
          description="Jejak perjalanan pengembangan SAHABI: dari rancangan dan perakitan hingga prototype yang siap diuji."
        />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
          {featured && (
            <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-gold/40 via-transparent to-gold-dark/30 blur-xl" />
              <div className="relative rounded-[2rem] bg-gradient-to-br from-gold-light/70 via-gold/20 to-gold-dark/70 p-[1.5px]">
                <Photo photo={featured} onOpen={() => setOpen(0)} className="aspect-[9/16] !rounded-[calc(2rem-1.5px)] !border-0" />
              </div>
            </Reveal>
          )}

          <div>
            <Reveal className="card p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <CircuitBoard className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Prototype v1</div>
                  <h3 className="font-display text-2xl text-white sm:text-3xl">Prototype Pertama SAHABI</h3>
                </div>
              </div>
              <p className="mt-6 leading-relaxed text-neutral-400">
                Sebelum dikemas menjadi smartwatch, seluruh fungsi inti SAHABI dirakit dan diuji pada papan prototype.
                Data dari sensor ditampilkan di perangkat dan terhubung langsung dengan platform web SAHABI.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {prototypeHighlights.map((h, i) => (
                  <li key={h.label} className="flex gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-xs font-semibold text-gold">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-semibold text-white">{h.label}</div>
                      <div className="text-sm text-neutral-400">{h.value}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={openDemo} className="btn-gold">
                  <PlayCircle className="h-5 w-5" /> Tonton Uji Detak Jantung
                </button>
                {featured && (
                  <button type="button" onClick={() => setOpen(0)} className="btn-ghost">
                    <Camera className="h-4 w-4" /> Lihat Foto
                  </button>
                )}
              </div>
            </Reveal>

            {others.length > 0 && (
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {others.map((p, i) => (
                  <Reveal key={p.src} delay={i * 100}>
                    <Photo photo={p} onOpen={() => setOpen(i + 1)} className="aspect-[4/5]" />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <button className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" onClick={close} aria-label="Tutup">
            <X className="h-6 w-6" />
          </button>
          {total > 1 && (
            <>
              <button
                className="absolute left-3 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                className="absolute right-3 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Foto berikutnya"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}
          <figure className="flex max-h-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.title} className="max-h-[82vh] w-auto rounded-2xl object-contain" />
            <figcaption className="mt-4 text-center">
              <div className="font-display text-xl text-gold">{current.title}</div>
              <div className="mt-1 text-sm text-neutral-400">{current.caption}</div>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
