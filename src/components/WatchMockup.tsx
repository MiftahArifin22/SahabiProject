import { useEffect, useState } from "react";
import { Heart, MapPin, Thermometer, Moon } from "lucide-react";

function formatMakkahTime() {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Riyadh",
  }).format(new Date());
}

function useMakkahTime() {
  const [time, setTime] = useState(formatMakkahTime);
  useEffect(() => {
    const t = setInterval(() => setTime(formatMakkahTime()), 15_000);
    return () => clearInterval(t);
  }, []);
  return time;
}

const bandStyle = "repeating-linear-gradient(0deg, transparent 0 10px, rgba(255,255,255,.03) 10px 11px)";

export default function WatchMockup() {
  const time = useMakkahTime();
  const [bpm, setBpm] = useState(78);

  useEffect(() => {
    const t = setInterval(() => setBpm(72 + Math.round(Math.random() * 12)), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative mx-auto flex w-full max-w-sm items-center justify-center py-10">
      {/* glow */}
      <div className="absolute h-72 w-72 rounded-full bg-gold/20 blur-[90px]" />
      <div className="absolute h-80 w-80 animate-pulseRing rounded-full border border-gold/20" />
      <div className="absolute h-80 w-80 animate-pulseRing rounded-full border border-gold/10" style={{ animationDelay: "1.1s" }} />

      <div className="relative animate-float">
        {/* band top */}
        <div className="mx-auto h-24 w-36 rounded-t-[2.2rem] bg-ink-600" style={{ backgroundImage: bandStyle }} />
        {/* body */}
        <div className="relative -my-3 rounded-[3.2rem] bg-gradient-to-br from-gold-light via-gold to-gold-dark p-[5px] shadow-glow">
          <div className="absolute -right-2.5 top-16 h-10 w-3 rounded-r-lg bg-gradient-to-b from-gold-light to-gold-dark" />
          <div className="w-[15.5rem] rounded-[2.9rem] bg-black p-3">
            <div className="relative h-[17rem] overflow-hidden rounded-[2.3rem] bg-gradient-to-b from-[#121214] to-black px-5 py-6">
              <div className="flex items-center justify-between text-[10px] text-neutral-500">
                <span>Makkah</span>
                <span className="flex items-center gap-1 text-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> GPS
                </span>
              </div>
              <div className="mt-2 text-center font-display text-5xl font-semibold tracking-tight text-white">{time}</div>
              <div className="mt-1 flex items-center justify-center gap-1.5 text-[11px] text-gold">
                <Moon className="h-3 w-3" /> Ashar &middot; 15:27
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <div className="rounded-2xl bg-white/[0.05] p-2.5">
                  <Heart className="h-4 w-4 animate-beat fill-rose-500 text-rose-500" />
                  <div className="mt-1 text-lg font-bold leading-none text-white">
                    {bpm}
                    <span className="ml-0.5 text-[9px] font-medium text-neutral-400">bpm</span>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/[0.05] p-2.5">
                  <Thermometer className="h-4 w-4 text-sky-400" />
                  <div className="mt-1 text-lg font-bold leading-none text-white">
                    36.6<span className="ml-0.5 text-[9px] font-medium text-neutral-400">&deg;C</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2 rounded-2xl bg-gold/10 p-2.5 text-[11px] text-gold">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="truncate">Rombongan &middot; 120 m</span>
              </div>
            </div>
          </div>
        </div>
        {/* band bottom */}
        <div className="mx-auto h-24 w-36 rounded-b-[2.2rem] bg-ink-600" style={{ backgroundImage: bandStyle }} />
      </div>

      {/* floating chips */}
      <div
        className="absolute left-0 top-24 hidden animate-float rounded-2xl border border-white/10 bg-ink-700/80 px-4 py-3 text-xs backdrop-blur sm:block"
        style={{ animationDelay: "1s" }}
      >
        <div className="text-neutral-400">Detak Jantung</div>
        <div className="font-semibold text-white">Normal &#10003;</div>
      </div>
      <div
        className="absolute bottom-24 right-0 hidden animate-float rounded-2xl border border-white/10 bg-ink-700/80 px-4 py-3 text-xs backdrop-blur sm:block"
        style={{ animationDelay: "2s" }}
      >
        <div className="text-neutral-400">Lokasi</div>
        <div className="font-semibold text-gold">Masjidil Haram</div>
      </div>
    </div>
  );
}
