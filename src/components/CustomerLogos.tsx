import { Reveal, WordsPullUpMultiStyle } from "./primitives";

const ROW_A = [
  "Amazon",
  "Taco Bell",
  "Conagra",
  "Electronic Arts",
  "Lyft",
  "Quest Diagnostics",
  "Boeing",
  "Adobe",
  "Doordash",
  "OpenAI",
  "Pfizer",
];
const ROW_B = [
  "Stripe",
  "Nvidia",
  "Unity",
  "Philips",
  "Pinterest",
  "Ramp",
  "Brex",
  "Gong",
  "Burger King",
  "Reckitt",
  "Orangetheory",
];

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="edge-fade-x overflow-hidden">
      <div
        className={`flex w-max items-center gap-12 ${
          reverse ? "animate-marquee-slow" : "animate-marquee"
        }`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[...items, ...items].map((l, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-xl font-semibold tracking-tight text-cream-dim/40 transition-colors hover:text-cream sm:text-2xl"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CustomerLogos() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(81,141,210,0.12),transparent)] blur-2xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Trusted by 10,000+ teams to", className: "" },
              {
                text: "ship production-ready",
                className: "serif-i text-steel",
              },
              { text: "apps.", className: "" },
            ]}
          />
        </h2>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-cream-dim">
            From scrappy startups to the Fortune 500 — teams build the software
            that runs their business on Retool.
          </p>
        </Reveal>
      </div>

      <div className="marquee-paused mt-14 space-y-6">
        <Row items={ROW_A} />
        <Row items={ROW_B} reverse />
      </div>
    </section>
  );
}
