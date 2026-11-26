import { Gem, HandHeart, Linkedin, Sparkles, Target, Users } from "lucide-react";
import { profile } from "../config/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const values = [
  { icon: HandHeart, title: "Ibadah Khusyuk", desc: "Teknologi yang menenangkan, bukan mengganggu ibadah." },
  { icon: Users, title: "Inklusif untuk Semua", desc: "Mudah dipakai jamaah lansia hingga muda." },
  { icon: Target, title: "Presisi Tinggi", desc: "Data akurat untuk keputusan yang tepat." },
  { icon: Sparkles, title: "Inovasi Berkelanjutan", desc: "Terus berkembang mengikuti kebutuhan jamaah." },
];

const stats = [
  { value: "24/7", label: "Pemantauan" },
  { value: "4", label: "Fitur Inti" },
  { value: "1", label: "Prototype Teruji" },
  { value: "100%", label: "Fokus pada Jamaah" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink-800/60 py-24 sm:py-32">
      <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-emerald-haji/20 blur-[120px]" />
      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Tentang SAHABI" title="Misi Suci," highlight="Teknologi Mulia" />
            <Reveal className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-400">
              <p>
                SAHABI lahir dari kisah nyata para jamaah: orang tua yang terpisah dari rombongan, kelelahan akibat cuaca
                panas, hingga keluarga di Tanah Air yang cemas menunggu kabar.
              </p>
              <p>
                SAHABI menggabungkan teknologi wearable, kesehatan, dan pemahaman tentang manasik haji untuk menghadirkan
                pendamping yang setia di pergelangan tangan setiap jamaah.
              </p>
              <p>
                Desainnya inklusif: tampilan besar, getaran yang jelas, dan bahasa yang sederhana, agar nyaman bagi semua
                usia dan latar belakang.
              </p>
            </Reveal>
            <Reveal className="mt-8">
              <a
                href={profile.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] py-3 pl-3 pr-5 transition-colors hover:border-gold/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold-dark font-display text-lg font-bold text-ink">
                  {profile.name
                    .split(" ")
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-white">{profile.name}</div>
                  <div className="text-sm text-neutral-400">{profile.role}</div>
                </div>
                <Linkedin className="ml-2 h-5 w-5 text-neutral-500 transition-colors group-hover:text-gold" />
              </a>
            </Reveal>
          </div>

          <div className="grid content-start gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="card card-hover p-6">
                <v.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-4 font-semibold text-white">{v.title}</h3>
                <p className="mt-1.5 text-sm text-neutral-400">{v.desc}</p>
              </Reveal>
            ))}
            <Reveal delay={400} className="card p-6 sm:col-span-2">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-3xl font-semibold text-gold">{s.value}</div>
                    <div className="mt-1 text-xs text-neutral-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-20 flex flex-col items-center text-center">
          <Gem className="h-8 w-8 text-gold" />
          <p className="mt-4 max-w-2xl font-display text-2xl italic leading-relaxed text-neutral-200 sm:text-3xl">
            &ldquo;Menjaga jamaah agar tenang beribadah adalah bagian dari ibadah itu sendiri.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
