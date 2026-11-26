import { BatteryCharging, Cpu, Lock, Radio, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const specs = [
  {
    icon: Lock,
    title: "Keamanan Data",
    spec: "AES-256 Encryption",
    desc: "Enkripsi end-to-end untuk melindungi data kesehatan dan lokasi jamaah.",
  },
  {
    icon: Cpu,
    title: "Prosesor Cerdas",
    spec: "AI-Assisted Monitoring",
    desc: "Analisis sinyal vital langsung di perangkat untuk mendeteksi anomali lebih cepat.",
  },
  {
    icon: Radio,
    title: "Konektivitas Luas",
    spec: "4G LTE + GPS + BLE",
    desc: "Tetap terhubung dengan petugas dan keluarga selama di Tanah Suci.",
  },
  {
    icon: BatteryCharging,
    title: "Daya Tahan Tinggi",
    spec: "Multi-day Battery",
    desc: "Baterai tahan lama dengan pengisian cepat, siap menemani rangkaian ibadah.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden bg-ink-800/60 py-24 sm:py-32">
      <div className="bg-pattern absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Teknologi Terdepan"
          title="Inovasi Tanpa Batas untuk"
          highlight="Ibadah Sempurna"
          description="Perangkat keras dan perangkat lunak SAHABI dirancang khusus untuk kondisi ibadah haji: panas, padat, dan jauh dari rumah."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="card card-hover p-7 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{s.title}</h3>
              <div className="mt-2 font-display text-xl text-gradient-gold">{s.spec}</div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="card mt-14 overflow-hidden p-10 text-center sm:p-14">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-emerald-haji/20" />
          <div className="relative">
            <h3 className="font-display text-3xl font-semibold sm:text-4xl">Siap Merasakan Teknologi Masa Depan?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              Mari wujudkan pengalaman ibadah haji yang lebih aman dan nyaman bersama SAHABI. Saya terbuka untuk diskusi
              dan kolaborasi.
            </p>
            <a href="#contact" className="btn-gold mt-8">
              Hubungi Saya <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
