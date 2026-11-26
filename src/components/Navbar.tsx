import { useEffect, useState } from "react";
import { Menu, PlayCircle, X } from "lucide-react";
import Logo from "./Logo";
import { openDemo } from "./VideoModal";

const links = [
  { label: "Beranda", href: "#home" },
  { label: "Fitur", href: "#features" },
  { label: "Teknologi", href: "#technology" },
  { label: "Demo", href: "#demo" },
  { label: "Dokumentasi", href: "#documentation" },
  { label: "Tentang SAHABI", href: "#about" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-white/[0.06] bg-ink/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-10 w-10" />
          <div className="leading-tight">
            <div className="font-display text-xl font-bold tracking-wide text-gold">SAHABI</div>
            <div className="text-[11px] tracking-wide text-neutral-400">Sahabat Ibadah Haji</div>
          </div>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors xl:px-4 ${
                  active === l.href ? "text-gold" : "text-neutral-300 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px bg-gold transition-transform duration-300 xl:inset-x-4 ${
                    active === l.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <button type="button" onClick={openDemo} className="btn-gold hidden !px-5 !py-2.5 text-sm lg:inline-flex">
          <PlayCircle className="h-4 w-4" /> Tonton Demo
        </button>

        <button
          className="rounded-full p-2 text-neutral-200 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div className={`overflow-hidden transition-[max-height] duration-500 lg:hidden ${open ? "max-h-[32rem]" : "max-h-0"}`}>
        <ul className="container-x flex flex-col gap-1 pb-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 font-medium ${
                  active === l.href ? "bg-gold/10 text-gold" : "text-neutral-300"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
