/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0e0e10", 900: "#0e0e10", 800: "#141417", 700: "#1b1b1f", 600: "#24242a", 500: "#33333a" },
        gold: { DEFAULT: "#DDB54A", light: "#F0CF6B", dark: "#B8922F", 50: "#fbf6e6" },
        emerald: { haji: "#1f6f5c" },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
        arabic: ['"Amiri"', "serif"],
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(221,181,74,.35)",
        glow: "0 0 40px rgba(221,181,74,.35)",
        elegant: "0 30px 80px -30px rgba(0,0,0,.8)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        pulseRing: { "0%": { transform: "scale(.9)", opacity: ".8" }, "100%": { transform: "scale(1.6)", opacity: "0" } },
        beat: { "0%,100%": { transform: "scale(1)" }, "15%": { transform: "scale(1.18)" }, "30%": { transform: "scale(1)" }, "45%": { transform: "scale(1.12)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseRing: "pulseRing 2.2s ease-out infinite",
        beat: "beat 1.2s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
