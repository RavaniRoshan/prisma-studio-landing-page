import { motion } from "framer-motion";
import { ArrowUpRight, Layers, ShieldCheck, UsersRound } from "lucide-react";
import { Reveal, ScrollTextReveal } from "./primitives";

const CARDS = [
  {
    icon: ShieldCheck,
    title: "Production-ready from day one",
    desc: "Don't choose between moving fast or shipping something that'll pass a security review. What you build in Retool is enterprise-grade from the start — no rebuild, no audit scramble.",
    accent: "#86b16b",
  },
  {
    icon: Layers,
    title: "From one app to operational excellence",
    desc: "Point solutions help you build apps. You change how your business operates with Retool — one platform to manage, orchestrate, and scale everything you build.",
    accent: "#518dd2",
  },
  {
    icon: UsersRound,
    title: "More teams building, no new risk",
    desc: "Business teams move fast, IT keeps full visibility, and governance is centralized. That's the foundation that makes app generation actually work.",
    accent: "#f15264",
  },
];

export default function WhyRetool() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[12px] uppercase tracking-[0.2em] text-cream-dim/50">
          Why enterprises choose Retool
        </p>

        <ScrollTextReveal
          text="The fastest way from idea to production-grade internal software — without the security tradeoffs."
          className="mt-5 max-w-3xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-5xl"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full overflow-hidden rounded-2xl border border-line bg-ink-2 p-6"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ backgroundColor: c.accent }}
                />
                <div className="relative">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-line"
                    style={{ backgroundColor: `${c.accent}1a`, color: c.accent }}
                  >
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-cream">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-cream-dim">
                    {c.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-cream-dim/70 transition-colors group-hover:text-cream">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
