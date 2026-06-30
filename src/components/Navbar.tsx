import { AnimatePresence, motion } from "framer-motion";
import {
  Boxes,
  ChevronDown,
  LayoutDashboard,
  Menu,
  Plug,
  Shield,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { EASE } from "./primitives";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
        <rect width="32" height="32" rx="7" className="fill-cream" />
        <path
          d="M9 9h9.2a6.3 6.3 0 0 1 1.3 12.47L21.5 23H9z"
          className="fill-ink"
        />
      </svg>
      <span className="text-[17px] font-semibold tracking-tight text-cream">
        Retool
      </span>
    </div>
  );
}

type MenuItem = {
  icon: typeof Boxes;
  title: string;
  desc: string;
};
type MenuCol = {
  label: string;
  items: MenuItem[];
};

const MENUS: Record<string, MenuCol[]> = {
  Product: [
    {
      label: "Build",
      items: [
        { icon: Sparkles, title: "AI App Builder", desc: "Describe it, ship it." },
        { icon: LayoutDashboard, title: "App Editor", desc: "Drag-and-drop canvas." },
        { icon: Workflow, title: "Workflows", desc: "Automate any process." },
      ],
    },
    {
      label: "Connect",
      items: [
        { icon: Plug, title: "Integrations", desc: "150+ data sources." },
        { icon: Boxes, title: "Components", desc: "A full toolkit, ready to go." },
        { icon: Shield, title: "Governance", desc: "Security from day one." },
      ],
    },
  ],
  Solutions: [
    {
      label: "By team",
      items: [
        { icon: LayoutDashboard, title: "Engineering", desc: "Ship tools 10x faster." },
        { icon: Workflow, title: "Operations", desc: "Run the whole business." },
        { icon: Boxes, title: "Customer Support", desc: "Resolve tickets faster." },
      ],
    },
  ],
};

function NavLink({ label }: { label: string }) {
  const hasMenu = !!MENUS[label];
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 py-2 text-[14px] text-cream-dim transition-colors hover:text-cream">
        {label}
        {hasMenu && (
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </button>
      {hasMenu && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: EASE }}
              className="absolute left-1/2 top-full w-[460px] -translate-x-1/2 pt-3"
            >
              <div className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-ink-2/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl">
                {MENUS[label].map((col) => (
                  <div key={col.label} className="p-1">
                    <p className="px-3 pb-1 pt-2 text-[11px] font-medium uppercase tracking-wider text-cream-dim/60">
                      {col.label}
                    </p>
                    {col.items.map((it) => (
                      <a
                        key={it.title}
                        href="#"
                        className="group flex items-start gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-ink-4"
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-ink-3 text-steel transition-colors group-hover:border-steel/40 group-hover:bg-steel/10">
                          <it.icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-[13.5px] font-medium text-cream">
                            {it.title}
                          </span>
                          <span className="block text-[12px] text-cream-dim/70">
                            {it.desc}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-2 sm:px-4">
      <div
        className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl border px-3 py-2.5 transition-all duration-500 sm:px-4 ${
          scrolled
            ? "border-line/80 bg-ink/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {["Product", "Solutions", "Resources", "Customers", "Pricing"].map(
            (l) => (
              <NavLink key={l} label={l} />
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#"
            className="rounded-full px-4 py-2 text-[14px] text-cream-dim transition-colors hover:text-cream"
          >
            Log in
          </a>
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-cream px-4 py-2 text-[14px] font-medium text-ink"
          >
            <span className="relative z-10">Start building</span>
            <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-tomato transition-transform duration-300 group-hover:scale-150" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-cream md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="absolute inset-x-3 top-[68px] rounded-2xl border border-line bg-ink-2/95 p-3 backdrop-blur-xl md:hidden"
          >
            {["Product", "Solutions", "Resources", "Customers", "Pricing"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  className="block rounded-xl px-3 py-3 text-[15px] text-cream-dim hover:bg-ink-4 hover:text-cream"
                  onClick={() => setMobileOpen(false)}
                >
                  {l}
                </a>
              )
            )}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href="#"
                className="rounded-full border border-line px-4 py-2.5 text-center text-[14px] text-cream"
              >
                Log in
              </a>
              <a
                href="#cta"
                className="rounded-full bg-cream px-4 py-2.5 text-center text-[14px] font-medium text-ink"
              >
                Start building
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
