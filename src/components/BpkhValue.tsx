import { Building2, HeartHandshake, LineChart, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const values = [
  {
    icon: HeartHandshake,
    title: "Nilai Manfaat Langsung",
    desc: "Hasil pengelolaan dana haji kembali dirasakan jamaah dalam bentuk perangkat yang menjaga kesehatan dan keselamatan selama ibadah.",
  },
  {
    icon: ShieldCheck,
    title: "Keselamatan Jamaah",
    desc: "Deteksi dini kondisi darurat dan pelacakan lokasi membantu petugas merespons lebih cepat di tengah kepadatan jutaan jamaah.",
  },
  {
    icon: LineChart,
    title: "Data untuk Kebijakan",
    desc: "Data kesehatan dan pergerakan yang teragregasi dan anonim dapat mendukung perencanaan layanan haji yang lebih baik.",
  },
  {
    icon: Building2,
    title: "Ekosistem Haji Modern",
    desc: "Memperkuat citra layanan haji Indonesia yang inovatif, inklusif, dan berbasis teknologi.",
  },
];

export default function BpkhValue() {
  return (
    <section id="value" className="relative border-y border-white/[0.05] bg-ink-800/60 py-24">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            align="left"
            eyebrow="Nilai Tambah"
            title="Untuk Jamaah,"
            highlight="Bersama BPKH"
            description={
              <>
                SAHABI dirancang sebagai nilai tambah layanan dari Badan Pengelola Keuangan Haji (BPKH), sehingga manfaat
                pengelolaan dana haji terasa nyata di setiap langkah jamaah, dari Tanah Air hingga Tanah Suci.
              </>
            }
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="card card-hover p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
