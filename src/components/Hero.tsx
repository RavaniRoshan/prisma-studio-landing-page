import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import AppBuilderDemo from "./AppBuilderDemo";
import { Reveal, WordsPullUpMultiStyle } from "./primitives";

const LOGOS = [
  "Amazon",
  "Taco Bell",
  "Conagra",
  "Electronic Arts",
  "Lyft",
  "Quest",
  "Boeing",
  "Adobe",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-28 sm:px-6">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(81,141,210,0.22),transparent)] blur-2xl" />
        <div className="absolute right-[8%] top-[20%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(241,82,100,0.12),transparent)] blur-2xl" />
        <div className="noise-overlay absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      </div>

      <div className="mx-auto max-w-6xl text-center">
        {/* announcement pill */}
        <Reveal>
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/70 py-1.5 pl-1.5 pr-3 text-[12.5px] backdrop-blur-md transition-colors hover:border-cream/30"
          >
            <span className="rounded-full bg-cream px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-ink">
              New
            </span>
            <span className="text-cream-dim">Explore the new Retool app builder</span>
            <ArrowRight className="h-3.5 w-3.5 text-cream-dim transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        {/* headline */}
        <h1 className="mx-auto mt-6 max-w-5xl text-balance text-[2.7rem] font-semibold leading-[0.95] tracking-[-0.04em] text-cream sm:text-6xl md:text-7xl lg:text-[5rem]">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Secure your", className: "" },
              { text: "vibe-coded", className: "serif-i text-steel" },
              { text: "apps.", className: "" },
            ]}
          />
        </h1>

        {/* subhead */}
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-balance text-[15px] leading-relaxed text-cream-dim sm:text-lg">
            Build powerful internal software with AI. Describe what you want and
            get a full, production-ready app — with enterprise security and
            governance built in from day one.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.25}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-3 text-[15px] font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
            >
              Start building free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-ink-2/50 px-6 py-3 text-[15px] font-medium text-cream backdrop-blur-sm transition-colors hover:border-cream/30 hover:bg-ink-3 sm:w-auto"
            >
              <Play className="h-4 w-4 fill-cream text-cream" />
              Watch the demo
            </a>
          </div>
        </Reveal>

        {/* trust line */}
        <Reveal delay={0.35}>
          <p className="mt-8 text-[12px] uppercase tracking-[0.18em] text-cream-dim/50">
            Trusted by teams at
          </p>
          <div className="marquee-paused edge-fade-x mt-4 overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-10 pr-10">
              {[...LOGOS, ...LOGOS].map((l, i) => (
                <span
                  key={i}
                  className="text-lg font-semibold tracking-tight text-cream-dim/45 transition-colors hover:text-cream sm:text-xl"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* interactive builder */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="relative mx-auto mt-16 max-w-6xl"
      >
        <div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-[radial-gradient(closest-side,rgba(81,141,210,0.12),transparent)] blur-2xl" />
        <AppBuilderDemo />
        <p className="mt-4 text-center text-[12.5px] text-cream-dim/50">
          Try it — drag components, recolor them, or ask the AI to build one.
        </p>
      </motion.div>
    </section>
  );
}
