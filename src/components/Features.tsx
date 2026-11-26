import { Activity, Bell, Compass, MapPinned } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: Activity,
    title: "Monitoring Kesehatan",
    desc: "Pemantauan detak jantung, suhu tubuh, dan kondisi kesehatan secara real-time, dengan peringatan otomatis saat ada tanda bahaya.",
    points: ["Detak jantung", "Suhu tubuh", "Peringatan dini"],
    accent: "from-rose-500/20",
  },
  {
    icon: MapPinned,
    title: "Pelacakan Jamaah",
    desc: "GPS presisi tinggi untuk mengetahui lokasi jamaah dan menjaga keamanan rombongan di tengah keramaian.",
    points: ["Lokasi real-time", "Geofence rombongan", "Tombol SOS"],
    accent: "from-emerald-500/20",
  },
  {
    icon: Compass,
    title: "Navigasi Haji",
    desc: "Panduan lokasi dan rute menuju tempat-tempat suci: Masjidil Haram, Arafah, Muzdalifah, hingga Mina.",
    points: ["Rute ke situs suci", "Arah kiblat", "Kembali ke maktab"],
    accent: "from-sky-500/20",
  },
  {
    icon: Bell,
    title: "Notifikasi Penting",
    desc: "Pengingat waktu salat, pengumuman rombongan, dan peringatan keamanan langsung di pergelangan tangan.",
    points: ["Waktu salat", "Info rombongan", "Peringatan cuaca panas"],
    accent: "from-gold/25",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Fitur Unggulan"
          title="Teknologi Canggih untuk"
          highlight="Ibadah Khusyuk"
          description="Setiap fitur dirancang agar jamaah, keluarga, dan petugas merasa tenang, sehingga jamaah bisa fokus beribadah."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100} className="card card-hover group overflow-hidden p-8">
              <div className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${f.accent} to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60`} />
              <div className="relative flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-light to-gold-dark text-ink shadow-gold">
                  <f.icon className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest text-gold/70">0{i + 1}</span>
                  <h3 className="mt-1 text-2xl font-semibold text-white">{f.title}</h3>
                </div>
              </div>
              <p className="relative mt-5 leading-relaxed text-neutral-400">{f.desc}</p>
              <ul className="relative mt-6 flex flex-wrap gap-2">
                {f.points.map((p) => (
                  <li key={p} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-300">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
