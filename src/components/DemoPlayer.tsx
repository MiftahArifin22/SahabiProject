import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { demoVideo } from "../config/media";

/** Pemutar video demo — dipakai di section Demo dan di popup. */
export default function DemoPlayer({ autoPlay = false }: { autoPlay?: boolean }) {
  const [failed, setFailed] = useState(false);

  if (demoVideo.type === "youtube") {
    return (
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${demoVideo.id}?rel=0${autoPlay ? "&autoplay=1" : ""}`}
        title={demoVideo.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-ink-700 to-ink-900 p-6 text-center">
        <PlayCircle className="h-16 w-16 text-gold" strokeWidth={1.2} />
        <div>
          <p className="font-display text-2xl text-white">Video demo segera hadir</p>
          <p className="mt-2 text-sm text-neutral-500">
            Simpan video di <code className="text-gold/80">public{demoVideo.src}</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <video
      className="absolute inset-0 h-full w-full bg-black object-cover"
      // "#t=0.1" membuat browser menampilkan frame pertama sebagai thumbnail bila tidak ada poster
      src={demoVideo.poster ? demoVideo.src : `${demoVideo.src}#t=0.1`}
      poster={demoVideo.poster}
      controls
      playsInline
      autoPlay={autoPlay}
      preload="metadata"
      onError={() => setFailed(true)}
    >
      Browser Anda tidak mendukung pemutaran video.
    </video>
  );
}
