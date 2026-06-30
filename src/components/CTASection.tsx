import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./primitives";

export default function CTASection() {
  return (
    <section id="cta" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-line bg-ink-2 px-6 py-16 text-center sm:px-12 sm:py-24"
        >
          {/* ambient glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="grid-bg absolute inset-0 opacity-40" />
            <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(81,141,210,0.25),transparent)] blur-2xl" />
            <div className="noise-overlay absolute inset-0 opacity-[0.05] mix-blend-overlay" />
          </div>

          <div className="relative">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/60 px-3 py-1.5 text-[12px] backdrop-blur">
                <span className="rounded-full bg-cream px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink">
                  New
                </span>
                <span className="text-cream-dim">
                  Explore the new Retool app builder for free
                </span>
              </span>
            </Reveal>

            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-semibold leading-[0.98] tracking-tight text-cream sm:text-5xl md:text-6xl">
              Start building today.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-balance text-[15px] leading-relaxed text-cream-dim sm:text-lg">
              Build your first app in minutes. Free to start, no credit card
              required — enterprise-grade from day one.
            </p>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-[15px] font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
                >
                  Start building free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-full border border-line px-7 py-3.5 text-[15px] font-medium text-cream transition-colors hover:border-cream/30 hover:bg-ink-3 sm:w-auto"
                >
                  Talk to sales
                </a>
              </div>
            </Reveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
