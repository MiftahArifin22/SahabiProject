import Logo from "./Logo";
import { getChannels } from "./Contact";
import { profile } from "../config/profile";

const columns = [
  {
    title: "Menu Cepat",
    links: [
      { label: "Beranda", href: "#home" },
      { label: "Fitur", href: "#features" },
      { label: "Teknologi", href: "#technology" },
      { label: "Galeri", href: "#gallery" },
    ],
  },
  {
    title: "Jelajahi",
    links: [
      { label: "Video Demo", href: "#demo" },
      { label: "Dokumentasi", href: "#documentation" },
      { label: "Nilai Tambah BPKH", href: "#value" },
      { label: "Tentang SAHABI", href: "#about" },
    ],
  },
];

export default function Footer() {
  const channels = getChannels();

  return (
    <footer className="relative border-t border-white/[0.06] bg-black/40">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <Logo className="h-11 w-11" />
            <div>
              <div className="font-display text-2xl font-bold text-gold">SAHABI</div>
              <div className="text-xs text-neutral-400">Sahabat Ibadah Haji</div>
            </div>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-400">
            Smartwatch haji inklusif yang menemani jamaah dengan monitoring kesehatan, pelacakan lokasi, dan navigasi
            ibadah. Nilai tambah layanan untuk ekosistem BPKH.
          </p>
          <div className="mt-6 flex gap-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={c.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition-colors hover:border-gold hover:text-gold"
              >
                <c.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">{c.title}</h4>
            <ul className="mt-5 space-y-3">
              {c.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-neutral-400 transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-neutral-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} SAHABI &middot; Dibuat oleh{" "}
            <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-gold">
              {profile.name}
            </a>
          </p>
          <p className="font-arabic text-base text-gold/70" lang="ar" dir="rtl">
            {"حَجًّا مَبْرُورًا"}
          </p>
        </div>
      </div>
    </footer>
  );
}
