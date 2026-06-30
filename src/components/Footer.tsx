import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Navbar";

const SOCIALS: { name: string; d: string }[] = [
  {
    name: "X",
    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "GitHub",
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    name: "LinkedIn",
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
  {
    name: "YouTube",
    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Product",
    links: ["AI App Builder", "App Editor", "Workflows", "Mobile", "Integrations", "Components"],
  },
  {
    title: "Solutions",
    links: ["Engineering", "Operations", "Support", "Sales", "Finance", "Healthcare"],
  },
  {
    title: "Resources",
    links: ["Docs", "Templates", "Blog", "Community", "Changelog", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Security", "Contact", "Partners"],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 2600);
  };

  return (
    <footer className="relative border-t border-line bg-ink-2/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          {/* newsletter */}
          <div>
            <Logo />
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-cream">
              Get the latest from Retool
            </h3>
            <p className="mt-2 max-w-xs text-[14px] text-cream-dim">
              Product updates, templates, and stories on building internal
              software. Monthly, no spam.
            </p>

            <form onSubmit={submit} className="mt-5 max-w-sm">
              <div className="flex items-center gap-2 rounded-full border border-line bg-ink p-1.5 focus-within:border-cream/30">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="min-w-0 flex-1 bg-transparent px-3 text-[14px] text-cream placeholder:text-cream-dim/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="group flex shrink-0 items-center gap-1.5 rounded-full bg-cream px-4 py-2 text-[13px] font-semibold text-ink transition-transform hover:scale-105 active:scale-95"
                >
                  {done ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> Subscribed
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
              {done && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 pl-3 text-[12px] text-moss"
                >
                  Thanks — check your inbox to confirm.
                </motion.p>
              )}
            </form>

            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-cream-dim transition-colors hover:border-cream/30 hover:text-cream"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-[12px] font-semibold uppercase tracking-wider text-cream-dim/60">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="group inline-flex items-center text-[14px] text-cream-dim transition-colors hover:text-cream"
                      >
                        <span className="relative">
                          {l}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cream transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-cream-dim/60">
            © {new Date().getFullYear()} Retool, Inc. — a faithful design study.
          </p>
          <div className="flex items-center gap-5 text-[13px] text-cream-dim/60">
            <a href="#" className="transition-colors hover:text-cream">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-cream">
              Terms
            </a>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-moss" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
