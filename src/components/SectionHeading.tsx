import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  highlight: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
};

export default function SectionHeading({ eyebrow, title, highlight, description, align = "center" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
        {title} <span className="text-gradient-gold italic">{highlight}</span>
      </h2>
      {description && <p className="mt-5 text-lg leading-relaxed text-neutral-400">{description}</p>}
    </Reveal>
  );
}
