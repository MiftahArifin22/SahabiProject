import { Activity, Maximize2 } from "lucide-react";
import { demoSteps, demoVideo } from "../config/media";
import DemoPlayer from "./DemoPlayer";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { openDemo } from "./VideoModal";

function Frame({ portrait }: { portrait: boolean }) {
  return (
    <div className="rounded-[2rem] bg-gradient-to-br from-gold-light/60 via-gold/20 to-gold-dark/60 p-[1.5px] shadow-glow">
      <div className={`relative overflow-hidden rounded-[calc(2rem-1.5px)] bg-black ${portrait ? "aspect-[9/16]" : "aspect-video"}`}>
        <DemoPlayer />
      </div>
    </div>
  );
}

function Info() {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-400">
          <Activity className="h-6 w-6" />
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Demo Prototype</div>
          <h3 className="font-display text-2xl text-white sm:text-3xl">{demoVideo.title}</h3>
        </div>
      </div>
      <p className="mt-5 leading-relaxed text-neutral-400">{demoVideo.caption}</p>

      <ol className="relative mt-8 space-y-6 border-l border-gold/25 pl-8">
        {demoSteps.map((s, i) => (
          <li key={s.title} className="relative">
            <span className="absolute -left-[2.85rem] flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold-dark text-xs font-bold text-ink">
              {i + 1}
            </span>
            <div className="font-semibold text-white">{s.title}</div>
            <div className="mt-1 text-sm text-neutral-400">{s.desc}</div>
          </li>
        ))}
      </ol>

      <button type="button" onClick={openDemo} className="btn-ghost mt-10">
        <Maximize2 className="h-4 w-4" /> Putar Layar Besar
      </button>
    </>
  );
}

export default function Demo() {
  const portrait = demoVideo.orientation === "portrait";

  return (
    <section id="demo" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Video Demo"
          title="Lihat SAHABI"
          highlight="Beraksi"
          description="Saksikan prototype SAHABI membaca detak jantung secara real-time, fondasi dari fitur monitoring kesehatan jamaah."
        />

        {portrait ? (
          <div className="mx-auto mt-14 grid max-w-5xl items-center gap-12 md:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
            <Reveal className="mx-auto w-full max-w-[22rem]">
              <Frame portrait />
            </Reveal>
            <Reveal delay={150} className="card p-8 sm:p-10">
              <Info />
            </Reveal>
          </div>
        ) : (
          <Reveal className="mx-auto mt-14 max-w-5xl">
            <Frame portrait={false} />
            <div className="card mt-8 p-8">
              <Info />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
