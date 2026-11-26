import { ArrowUpRight, Instagram, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { profile } from "../config/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Channel = { icon: LucideIcon; label: string; value: string; href: string; hint: string };

export function getChannels(): Channel[] {
  const list: Channel[] = [];
  if (profile.linkedin.url)
    list.push({ icon: Linkedin, label: "LinkedIn", value: profile.linkedin.label, href: profile.linkedin.url, hint: "Terhubung secara profesional" });
  if (profile.instagram.url)
    list.push({ icon: Instagram, label: "Instagram", value: profile.instagram.label, href: profile.instagram.url, hint: "Ikuti perjalanan SAHABI" });
  if (profile.email)
    list.push({ icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, hint: "Kirim pesan langsung" });
  return list;
}

export default function Contact() {
  const channels = getChannels();

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Kontak"
          title="Mari"
          highlight="Terhubung"
          description={
            <>
              SAHABI dikembangkan oleh <span className="text-neutral-200">{profile.name}</span>. Tertarik berdiskusi,
              berkolaborasi, atau ingin tahu lebih jauh tentang SAHABI? Sapa saya lewat kanal berikut.
            </>
          }
        />

        <div className={`mx-auto mt-14 grid max-w-4xl gap-5 ${channels.length >= 3 ? "md:grid-cols-3" : "sm:grid-cols-2"}`}>
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card card-hover group flex h-full flex-col p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-light to-gold-dark text-ink shadow-gold">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </div>
                <div className="mt-8 text-xs uppercase tracking-[0.2em] text-neutral-500">{c.label}</div>
                <div className="mt-1 break-words text-lg font-semibold text-white">{c.value}</div>
                <div className="mt-1 text-sm text-neutral-400">{c.hint}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
