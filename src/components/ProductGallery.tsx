import { Bell, Gauge, HeartPulse, Navigation, PlayCircle, ShieldCheck, Watch } from "lucide-react";
import { openDemo } from "./VideoModal";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const items = [
  { icon: Watch, title: "SAHABI Core", desc: "Unit utama dengan sensor kesehatan terintegrasi dan desain ringan untuk dipakai seharian." },
  { icon: HeartPulse, title: "Health Monitor", desc: "Detak jantung dan suhu tubuh dipantau terus-menerus, lengkap dengan peringatan dini." },
  { icon: Navigation, title: "GPS Navigation", desc: "Peta dan arah menuju situs suci serta titik kumpul rombongan." },
  { icon: Bell, title: "Smart Alerts", desc: "Getaran dan notifikasi untuk waktu salat, jadwal rombongan, dan kondisi darurat." },
  { icon: ShieldCheck, title: "Advanced Security", desc: "Data jamaah terenkripsi dan hanya dapat diakses oleh pihak berwenang." },
  { icon: Gauge, title: "High Performance", desc: "Responsif, hemat daya, dan tangguh di cuaca panas Tanah Suci." },
];

export default function ProductGallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Galeri Produk"
          title="Desain Premium dalam"
          highlight="Setiap Detail"
          description="Setiap komponen SAHABI dirancang dengan memperhatikan kebutuhan jamaah dari berbagai usia dan latar belakang."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 100} className="card card-hover group overflow-hidden">
              <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-ink-600 to-ink-800">
                <div className="bg-pattern absolute inset-0 opacity-70" />
                <div className="absolute h-28 w-28 rounded-full bg-gold/20 blur-2xl transition-all duration-500 group-hover:h-36 group-hover:w-36" />
                <it.icon className="relative h-14 w-14 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1.3} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-5 text-center">
          <h3 className="font-display text-3xl">Ingin Melihat SAHABI dari Dekat?</h3>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={openDemo} className="btn-gold">
              <PlayCircle className="h-4 w-4" /> Tonton Demo
            </button>
            <a href="#documentation" className="btn-ghost">
              Lihat Dokumentasi
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
