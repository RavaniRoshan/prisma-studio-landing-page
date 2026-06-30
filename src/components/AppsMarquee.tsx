import { Reveal } from "./primitives";

type Variant = "metrics" | "table" | "chart" | "list";

type AppCard = {
  title: string;
  accent: string;
  variant: Variant;
};

const APPS: AppCard[] = [
  { title: "MetricsDash", accent: "#518dd2", variant: "metrics" },
  { title: "Sales CRM", accent: "#86b16b", variant: "table" },
  { title: "Inventory Tracker", accent: "#e0a458", variant: "list" },
  { title: "Ops Dashboard", accent: "#f15264", variant: "metrics" },
  { title: "Support Console", accent: "#9b8cf0", variant: "list" },
  { title: "Revenue Hub", accent: "#518dd2", variant: "chart" },
  { title: "Onboarding Portal", accent: "#86b16b", variant: "list" },
  { title: "Finance Approvals", accent: "#f15264", variant: "table" },
];

function Preview({ accent, variant }: { accent: string; variant: Variant }) {
  return (
    <div className="h-[150px] space-y-2.5 p-3">
      <div className="flex items-center gap-1.5">
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: accent }}
        />
        <span className="h-2 w-16 rounded-full bg-cream/15" />
        <span className="ml-auto h-2 w-6 rounded-full bg-cream/10" />
      </div>

      {variant === "metrics" && (
        <>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md border border-line bg-ink-4/50 p-2">
                <span className="block h-1.5 w-8 rounded-full bg-cream/15" />
                <span
                  className="mt-1.5 block h-3 w-10 rounded-full"
                  style={{ backgroundColor: accent, opacity: 0.85 }}
                />
              </div>
            ))}
          </div>
          <div className="flex h-12 items-end gap-1.5 pt-1">
            {[45, 70, 55, 90, 60].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{ height: `${h}%`, backgroundColor: accent, opacity: 0.4 + h / 200 }}
              />
            ))}
          </div>
        </>
      )}

      {variant === "chart" && (
        <div className="relative h-[105px] overflow-hidden rounded-md border border-line bg-ink-4/40">
          <svg viewBox="0 0 120 70" className="h-full w-full" preserveAspectRatio="none">
            <polyline
              points="0,55 20,40 40,48 60,22 80,30 100,10 120,18"
              fill="none"
              stroke={accent}
              strokeWidth="2.5"
            />
            <polyline
              points="0,55 20,40 40,48 60,22 80,30 100,10 120,18 120,70 0,70"
              fill={accent}
              opacity="0.15"
            />
          </svg>
        </div>
      )}

      {variant === "table" && (
        <div className="space-y-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="h-1.5 flex-1 rounded-full bg-cream/12" />
              <span className="h-1.5 w-8 rounded-full bg-cream/10" />
              <span
                className="h-2.5 w-9 rounded-full"
                style={{ backgroundColor: accent, opacity: 0.6 }}
              />
            </div>
          ))}
        </div>
      )}

      {variant === "list" && (
        <div className="space-y-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="h-4 w-4 rounded-md"
                style={{ backgroundColor: accent, opacity: 0.7 }}
              />
              <span className="h-1.5 flex-1 rounded-full bg-cream/12" />
              <span
                className="h-3 w-3 rounded-full border"
                style={{ borderColor: accent }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Card({ app }: { app: AppCard }) {
  return (
    <div className="group w-[300px] shrink-0">
      <div className="overflow-hidden rounded-xl border border-line bg-ink-2 transition-all duration-500 hover:border-cream/25 hover:shadow-2xl hover:shadow-black/40">
        <div className="flex items-center gap-2 border-b border-line px-3 py-2">
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-cream/20" />
            <span className="h-2 w-2 rounded-full bg-cream/20" />
            <span className="h-2 w-2 rounded-full bg-cream/20" />
          </div>
          <span
            className="ml-1 h-4 w-4 rounded"
            style={{ backgroundColor: app.accent, opacity: 0.85 }}
          />
          <span className="text-[12.5px] font-medium text-cream">
            {app.title}
          </span>
          <span className="ml-auto rounded-full border border-line px-1.5 py-0.5 text-[9px] uppercase tracking-wide text-cream-dim/60">
            app
          </span>
        </div>
        <Preview accent={app.accent} variant={app.variant} />
      </div>
    </div>
  );
}

export default function AppsMarquee() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-[12px] uppercase tracking-[0.2em] text-cream-dim/50">
            Apps that mean business
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-center text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl">
            One platform. Every internal app your teams need.
          </h2>
        </Reveal>
      </div>

      <div className="marquee-paused edge-fade-x relative mt-12 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {[...APPS, ...APPS].map((app, i) => (
            <Card key={i} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
