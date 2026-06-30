import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;
const EASE_2 = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ Reveal */
/** Fade + slide up once it scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------- WordsPullUp */
/** Splits text on spaces; each word slides up with a staggered delay. */
export function WordsPullUp({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.08,
  once = true,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  const word: Variants = {
    hidden: { opacity: 0, y: "0.45em" },
    visible: {
      opacity: 1,
      y: "0em",
      transition: { duration: 0.9, ease: EASE },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline ${className ?? ""}`}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-flex overflow-hidden align-bottom"
          style={{ paddingBottom: "0.08em" }}
        >
          <motion.span
            variants={word}
            className={`inline-block ${wordClassName ?? ""}`}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* -------------------------------------------------- WordsPullUpMultiStyle */
/** Multiple {text, className} segments, each word animated individually. */
export function WordsPullUpMultiStyle({
  segments,
  className,
  delay = 0,
  stagger = 0.08,
  once = true,
}: {
  segments: { text: string; className?: string }[];
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  const word: Variants = {
    hidden: { opacity: 0, y: "0.5em" },
    visible: {
      opacity: 1,
      y: "0em",
      transition: { duration: 0.9, ease: EASE },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-wrap justify-center ${className ?? ""}`}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {segments.map((seg, si) =>
        seg.text.split(" ").map((w, wi) => {
          const words = seg.text.split(" ");
          return (
            <span
              key={`${si}-${wi}`}
              className="inline-flex overflow-hidden align-bottom"
              style={{ paddingBottom: "0.1em" }}
            >
              <motion.span
                variants={word}
                className={`inline-block ${seg.className ?? ""}`}
              >
                {w}
                {wi < words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          );
        })
      )}
    </motion.div>
  );
}

/* ----------------------------------------------------- ScrollTextReveal */
/** Character-by-character opacity driven by scroll progress. */
export function ScrollTextReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.25"],
  });
  const chars = text.split("");

  return (
    <p ref={ref} className={className} aria-label={text}>
      {chars.map((c, i) => (
        <Char key={i} progress={scrollYProgress} range={[i / chars.length, (i + 1) / chars.length]}>
          {c}
        </Char>
      ))}
    </p>
  );
}

function Char({
  children,
  progress,
  range,
}: {
  children: ReactNode;
  progress: import("framer-motion").MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [4, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {children === " " ? "\u00A0" : children}
    </motion.span>
  );
}

/* ---------------------------------------------------------- Magnetic btn */
/** Button-like element whose inner content tracks the cursor slightly. */
export function Magnetic({
  children,
  className,
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0px,0px)";
    };
    const parent = el.parentElement;
    if (!parent) return;
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);
  return (
    <div
      ref={ref}
      className={className}
      style={{ transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)" }}
    >
      {children}
    </div>
  );
}

export { EASE, EASE_2 };
