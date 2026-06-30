import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {
  Bot,
  Cloud,
  Database,
  FileArchive,
  GitBranch,
  Lock,
  Sparkles,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { useRef, useState } from "react";
import { EASE } from "./primitives";

type Step = {
  n: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Build with AI",
    desc: "Describe what you want and get a full, production-ready app in minutes — components, logic, and data wired up for you.",
    icon: Sparkles,
  },
  {
    n: "02",
    title: "Bring your agent",
    desc: "Build from your favorite AI coding agent via MCP and deploy it inside your governed Retool environment.",
    icon: Bot,
  },
  {
    n: "03",
    title: "Import your code",
    desc: "Deploy apps built in Lovable, Replit, or your own repo. Upload a ZIP or sync with GitHub — no rewrite required.",
    icon: FileArchive,
  },
  {
    n: "04",
    title: "Connect production data",
    desc: "Every app connects directly to your data sources, governed by your existing permissions. No extra configuration.",
    icon: Database,
  },
  {
    n: "05",
    title: "Ship safely",
    desc: "Auth, access controls, and audit logging are built in. Fast to production, without sacrificing security.",
    icon: Lock,
  },
];

function StepVisual({ index }: { index: number }) {
  const base =
    "relative mx-auto flex aspect-[4/3] w-full max-w-md items-center justify-center rounded-2xl border border-line bg-ink-2 p-6";

  if (index === 0)
    return (
      <div className={base}>
        <div className="flex w-full flex-col gap-2">
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-ink-4 px-3 py-2 text-[12px] text-cream-dim">
            “Build a sales leaderboard with rankings and revenue.”
          </div>
          <div className="flex items-center gap-1.5 self-start rounded-full bg-steel/15 px-2.5 py-1 text-[11px] text-steel">
            <Sparkles className="h-3 w-3" /> Generating app…
          </div>
          <div className="mt-1 rounded-xl border border-line bg-ink-3 p-2">
            <div className="space-y-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-steel" />
                  <span className="h-2 flex-1 rounded-full bg-cream/12" />
                  <span className="h-2 w-6 rounded-full bg-cream/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  if (index === 1)
    return (
      <div className={base}>
        <div className="w-full overflow-hidden rounded-xl border border-line bg-[#0c0c0a]">
          <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
            <Terminal className="h-3.5 w-3.5 text-moss" />
            <span className="text-[11px] text-cream-dim/60">claude code</span>
          </div>
          <div className="space-y-1 p-3 font-mono text-[11px] leading-relaxed">
            <p className="text-moss">$ retool deploy ./my-app</p>
            <p className="text-cream-dim/70">↳ linking MCP server…</p>
            <p className="text-cream-dim/70">↳ uploading 14 components</p>
            <p className="text-steel">✓ deployed to production</p>
            <p className="flex items-center text-cream-dim/50">
              <span className="mr-1 text-moss">▍</span>
            </p>
          </div>
        </div>
      </div>
    );
  if (index === 2)
    return (
      <div className={base}>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.03 }}
          className="flex w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-steel/50 bg-steel/5 py-10"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-steel/15 text-steel">
            <FileArchive className="h-6 w-6" />
          </div>
          <p className="text-[13px] font-medium text-cream">
            Drop your .zip here
          </p>
          <p className="text-[11px] text-cream-dim/60">or sync with GitHub</p>
        </motion.div>
      </div>
    );
  if (index === 3) {
    const srcs = [
      { n: "Snowflake", c: "#518dd2", icon: Snowflake },
      { n: "PostgreSQL", c: "#86b16b", icon: Database },
      { n: "AWS", c: "#e0a458", icon: Cloud },
      { n: "Anthropic", c: "#9b8cf0", icon: Bot },
    ];
    return (
      <div className={`${base} !p-4`}>
        <div className="grid w-full grid-cols-2 gap-3">
          {srcs.map((s) => (
            <div
              key={s.n}
              className="flex items-center gap-2 rounded-xl border border-line bg-ink-3 px-3 py-2.5"
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-md"
                style={{ backgroundColor: `${s.c}22`, color: s.c }}
              >
                <s.icon className="h-4 w-4" />
              </span>
              <span className="text-[12px] text-cream">{s.n}</span>
              <GitBranch className="ml-auto h-3 w-3 text-cream-dim/40" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={base}>
      <div className="relative flex items-center justify-center">
        {[1, 2, 3].map((r) => (
          <div
            key={r}
            className="absolute rounded-full border border-line"
            style={{ width: `${r * 90}px`, height: `${r * 90}px` }}
          />
        ))}
        <div className="relative flex flex-wrap items-center justify-center gap-2">
          {["SOC 2", "SAML / SSO", "ISO 27001", "HIPAA", "GDPR"].map((b) => (
            <span
              key={b}
              className="rounded-full border border-moss/30 bg-moss/10 px-2.5 py-1 text-[10.5px] font-medium text-moss"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* tiny inline glyph for Snowflake (not in lucide set reliably) */
function Snowflake({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export default function BuildFromAnywhere() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      STEPS.length - 1,
      Math.max(0, Math.floor(v * STEPS.length + 0.05))
    );
    setActive(idx);
  });

  return (
    <section className="relative border-y border-line/60 bg-ink-2/40 py-20 sm:py-24">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[12px] uppercase tracking-[0.2em] text-cream-dim/50">
          Build powerful apps from anywhere
        </p>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl">
          However you build,{" "}
          <span className="serif-i text-steel">Retool</span> ships it safely.
        </h2>
      </div>

      <div ref={ref} className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2">
        {/* left — scrolling steps */}
        <div>
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="flex min-h-[42vh] items-start gap-4 border-l border-line py-8 pl-5 lg:min-h-[48vh]"
            >
              <span
                className={`-ml-[27px] mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                  active === i ? "border-steel bg-steel" : "border-line bg-ink"
                }`}
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-semibold text-cream-dim/60">
                    {s.n}
                  </span>
                  <s.icon className="h-4 w-4 text-steel" />
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-cream-dim">
                  {s.desc}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-steel transition-colors hover:text-cream"
                >
                  Learn more
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* right — pinned visual */}
        <div className="hidden lg:block">
          <div className="sticky top-24 flex h-[calc(100vh-12rem)] items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="w-full"
              >
                <StepVisual index={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
