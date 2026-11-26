import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import WatchMockup from "./WatchMockup";
import { openDemo } from "./VideoModal";

const stats = [
  { value: "99%", label: "Akurasi GPS" },
  { value: "24/7", label: "Monitoring" },
  { value: "10K+", label: "Target Jamaah" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        className="bg-pattern absolute inset-0"
        style={{ maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" }}
      />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-haji/20 blur-[120px]" />

      <div className="container-x relative grid items-center gap-12 pb-20 lg:grid-cols-[1.1fr_1fr] lg:pb-28">
        <div className="text-center lg:text-left">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" /> Inovasi Teknologi Haji
          </span>

          <p dir="rtl" lang="ar" className="mt-6 font-arabic text-2xl text-gold/80">
            {"لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ"}
          </p>

          <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Sahabat Setia
            <br />
            <span className="text-gradient-gold italic">Perjalanan Haji</span>
            <br />
            Anda
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-400 lg:mx-0">
            <strong className="font-semibold text-neutral-200">SAHABI</strong> (Sahabat Ibadah Haji) adalah smartwatch
            inklusif yang menghubungkan kesehatan, keamanan, dan kenyamanan jamaah dalam setiap langkah ibadah, sebagai
            nilai tambah layanan bagi ekosistem <span className="text-gold">BPKH</span>.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#features" className="btn-gold">
              Pelajari Lebih Lanjut <ArrowRight className="h-4 w-4" />
            </a>
            <button type="button" onClick={openDemo} className="btn-ghost">
              <PlayCircle className="h-5 w-5" /> Tonton Demo
            </button>
          </div>

          <dl className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 lg:mx-0">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col border-l border-gold/30 pl-4 text-left">
                <dt className="order-2 mt-1 text-xs text-neutral-400">{s.label}</dt>
                <dd className="font-display text-3xl font-semibold text-gold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <WatchMockup />
      </div>
    </section>
  );
}
