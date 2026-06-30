import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  ChevronDown,
  ChevronUp,
  Code2,
  Copy,
  Eye,
  GripVertical,
  MousePointerClick,
  Plus,
  Rocket,
  Search,
  Send,
  Settings2,
  Share2,
  Sparkles,
  Square,
  Table2,
  Trash2,
  TrendingUp,
  Type,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { EASE } from "./primitives";

/* ----------------------------------------------------------------- types */
type WidgetType = "heading" | "stat" | "chart" | "table" | "button";
type Widget = {
  id: string;
  type: WidgetType;
  accent: string;
  label: string;
};

const ACCENTS = [
  "#518dd2",
  "#f15264",
  "#86b16b",
  "#e9ebdf",
  "#9b8cf0",
  "#e0a458",
];

const PALETTE: { type: WidgetType; label: string; icon: LucideIcon }[] = [
  { type: "heading", label: "Text", icon: Type },
  { type: "stat", label: "Statistic", icon: TrendingUp },
  { type: "chart", label: "Chart", icon: BarChart3 },
  { type: "table", label: "Table", icon: Table2 },
  { type: "button", label: "Button", icon: MousePointerClick },
];

const TYPE_DEFAULTS: Record<WidgetType, Omit<Widget, "id">> = {
  heading: { type: "heading", accent: "#e9ebdf", label: "New section title" },
  stat: { type: "stat", accent: "#518dd2", label: "New metric" },
  chart: { type: "chart", accent: "#518dd2", label: "Weekly performance" },
  table: { type: "table", accent: "#e9ebdf", label: "Records" },
  button: { type: "button", accent: "#518dd2", label: "Take action" },
};

let _id = 0;
const uid = () => `w${++_id}`;

const START: Widget[] = [
  { id: uid(), type: "heading", accent: "#e9ebdf", label: "Q4 Revenue Dashboard" },
  { id: uid(), type: "stat", accent: "#518dd2", label: "Total revenue" },
  { id: uid(), type: "stat", accent: "#86b16b", label: "Active accounts" },
  { id: uid(), type: "chart", accent: "#518dd2", label: "Weekly performance" },
  { id: uid(), type: "table", accent: "#e9ebdf", label: "Top deals" },
];

/* --------------------------------------------------------- widget render */
function WidgetView({ w }: { w: Widget }) {
  switch (w.type) {
    case "heading":
      return (
        <h4 className="text-lg font-semibold tracking-tight text-cream">
          {w.label}
        </h4>
      );
    case "stat":
      return <StatTile w={w} />;
    case "chart":
      return <ChartBlock w={w} />;
    case "table":
      return <TableBlock />;
    case "button":
      return (
        <button
          className="group relative inline-flex items-center gap-2 rounded-lg px-4 py-2 text-[13px] font-medium text-ink transition-transform active:scale-95"
          style={{ backgroundColor: w.accent }}
        >
          {w.label}
          <Plus className="h-3.5 w-3.5 transition-transform group-hover:rotate-90" />
        </button>
      );
  }
}

function StatTile({ w }: { w: Widget }) {
  return (
    <div className="rounded-xl border border-line bg-ink-3 p-3.5">
      <p className="text-[11px] uppercase tracking-wide text-cream-dim/70">
        {w.label}
      </p>
      <div className="mt-1 flex items-end gap-2">
        <span
          className="text-2xl font-semibold tracking-tight"
          style={{ color: w.accent }}
        >
          {w.label.includes("revenue") ? "$1.24M" : "8,914"}
        </span>
        <span className="mb-0.5 inline-flex items-center gap-0.5 text-[11px] font-medium text-moss">
          <TrendingUp className="h-3 w-3" /> 12.4%
        </span>
      </div>
      <div className="mt-2 flex h-6 items-end gap-1">
        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm opacity-70"
            style={{ height: `${h}%`, backgroundColor: w.accent }}
          />
        ))}
      </div>
    </div>
  );
}

function ChartBlock({ w }: { w: Widget }) {
  const bars = [42, 58, 35, 72, 64, 88, 52, 78];
  return (
    <div className="rounded-xl border border-line bg-ink-3 p-3.5">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[12px] font-medium text-cream-dim">{w.label}</span>
        <span className="text-[11px] text-cream-dim/60">Last 8 weeks</span>
      </div>
      <div className="flex h-20 items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
            className="flex-1 rounded-t-sm"
            style={{
              backgroundColor: w.accent,
              opacity: 0.45 + (h / 100) * 0.55,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function TableBlock() {
  const rows = [
    ["Acme Corp", "$48,200", "Closed"],
    ["Globex", "$32,900", "Pending"],
    ["Initech", "$71,500", "Closed"],
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-ink-3">
      <div className="grid grid-cols-3 border-b border-line bg-ink-4/60 px-3 py-2 text-[11px] font-medium uppercase tracking-wide text-cream-dim/60">
        <span>Account</span>
        <span>Value</span>
        <span>Status</span>
      </div>
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid grid-cols-3 border-b border-line/60 px-3 py-2 text-[12.5px] last:border-0"
        >
          <span className="text-cream">{r[0]}</span>
          <span className="text-cream-dim">{r[1]}</span>
          <span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10.5px] font-medium ${
                r[2] === "Closed"
                  ? "bg-moss/15 text-moss"
                  : "bg-steel/15 text-steel"
              }`}
            >
              {r[2]}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------- main */
export default function AppBuilderDemo() {
  const [widgets, setWidgets] = useState<Widget[]>(START);
  const [selectedId, setSelectedId] = useState<string | null>(START[0].id);
  const [dragType, setDragType] = useState<WidgetType | null>(null);
  const [isOver, setIsOver] = useState(false);
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<"ai" | "inspect">("inspect");
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; text: string }[]
  >([
    {
      role: "assistant",
      text: "I can build this for you. Try: “add a revenue chart”.",
    },
  ]);
  const [aiInput, setAiInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const filtered = useMemo(
    () =>
      PALETTE.filter((p) =>
        p.label.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const selected = widgets.find((w) => w.id === selectedId) ?? null;

  const addWidget = (type: WidgetType) => {
    const base = TYPE_DEFAULTS[type];
    const w: Widget = {
      ...base,
      id: uid(),
      accent: base.accent,
    };
    setWidgets((prev) => [...prev, w]);
    setSelectedId(w.id);
  };

  const removeWidget = (id: string) =>
    setWidgets((prev) => prev.filter((w) => w.id !== id));

  const duplicateWidget = (id: string) => {
    const src = widgets.find((w) => w.id === id);
    if (!src) return;
    const copy: Widget = { ...src, id: uid() };
    setWidgets((prev) => {
      const i = prev.findIndex((w) => w.id === id);
      const next = [...prev];
      next.splice(i + 1, 0, copy);
      return next;
    });
    setSelectedId(copy.id);
  };

  const move = (id: string, dir: -1 | 1) =>
    setWidgets((prev) => {
      const i = prev.findIndex((w) => w.id === id);
      const j = i + dir;
      if (j < 0 || j >= prev.length) return prev;
      const next = [...prev];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });

  const updateSelected = (patch: Partial<Widget>) =>
    setWidgets((prev) =>
      prev.map((w) => (w.id === selectedId ? { ...w, ...patch } : w))
    );

  const sendAi = (text: string) => {
    const t = text.trim();
    if (!t || thinking) return;
    setMessages((m) => [...m, { role: "user", text: t }]);
    setAiInput("");
    setThinking(true);
    const lower = t.toLowerCase();
    const pick: WidgetType = /chart|graph/.test(lower)
      ? "chart"
      : /table|list|record/.test(lower)
      ? "table"
      : /button|cta|action/.test(lower)
      ? "button"
      : /stat|metric|revenue|kpi/.test(lower)
      ? "stat"
      : "chart";
    const tm = setTimeout(() => {
      addWidget(pick);
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: `Done — added a ${TYPE_DEFAULTS[pick].label.toLowerCase()} to the canvas. Tweak it in the inspector.`,
        },
      ]);
      setThinking(false);
      setTab("inspect");
    }, 1000);
    timers.current.push(tm);
  };

  const SUGGESTIONS = ["Add a revenue chart", "Show a KPI stat", "Add a table"];

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-ink-2 shadow-2xl shadow-black/50">
      {/* window chrome ---------------------------------------------------- */}
      <div className="flex items-center gap-3 border-b border-line bg-ink-3/60 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-2 hidden items-center gap-1.5 rounded-md border border-line bg-ink-2 px-2.5 py-1 text-[11px] text-cream-dim/70 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-moss" />
          yourorg.retool.com/apps/q4-dashboard
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <ChromeBtn icon={Eye} label="Preview" />
          <ChromeBtn icon={Code2} label="Code" hideLabel />
          <ChromeBtn icon={Share2} label="Share" hideLabel />
          <button className="group ml-1 inline-flex items-center gap-1.5 rounded-lg bg-cream px-3 py-1.5 text-[12.5px] font-semibold text-ink transition-all hover:gap-2.5">
            <Rocket className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            Deploy
          </button>
        </div>
      </div>

      {/* body ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-[210px_1fr_300px]">
        {/* LEFT — palette (drag source) */}
        <aside className="hidden border-r border-line bg-ink-3/40 p-3 lg:block">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-cream-dim/70">
              Components
            </span>
            <Plus className="h-3.5 w-3.5 text-cream-dim/50" />
          </div>
          <div className="relative mb-3">
            <Search className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-cream-dim/50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full rounded-lg border border-line bg-ink-2 py-1.5 pl-7 pr-2 text-[12px] text-cream placeholder:text-cream-dim/40 focus:border-steel/50 focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            {filtered.map((p) => (
              <motion.div
                key={p.type}
                draggable
                onDragStart={() => setDragType(p.type)}
                onDragEnd={() => {
                  setDragType(null);
                  setIsOver(false);
                }}
                whileHover={{ x: 2 }}
                onClick={() => addWidget(p.type)}
                className="group flex cursor-grab items-center gap-2.5 rounded-lg border border-transparent px-2 py-2 text-[12.5px] text-cream-dim transition-colors hover:border-line hover:bg-ink-4 hover:text-cream active:cursor-grabbing"
              >
                <GripVertical className="h-3.5 w-3.5 text-cream-dim/30 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-ink-2 text-cream-dim transition-colors group-hover:border-steel/40 group-hover:text-steel">
                  <p.icon className="h-3.5 w-3.5" />
                </span>
                {p.label}
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <p className="px-2 py-3 text-[12px] text-cream-dim/50">
                No components.
              </p>
            )}
          </div>
          <p className="mt-3 rounded-lg border border-dashed border-line px-2 py-2 text-center text-[11px] leading-snug text-cream-dim/50">
            Drag a component onto the canvas — or just click it.
          </p>
        </aside>

        {/* CENTER — canvas (drop target) */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            if (dragType) setIsOver(true);
          }}
          onDragLeave={() => setIsOver(false)}
          onDrop={() => {
            if (dragType) addWidget(dragType);
            setDragType(null);
            setIsOver(false);
          }}
          className="relative grid-bg min-h-[460px] p-4 sm:p-5"
        >
          <div className="mb-3 flex items-center gap-2 text-[11px] text-cream-dim/50">
            <Square className="h-3 w-3" />
            Canvas
            <span className="ml-auto hidden sm:inline">
              {widgets.length} components
            </span>
          </div>

          {/* live canvas */}
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {widgets
                .filter((w) => w.type === "stat")
                .map((w) => (
                  <CanvasItem
                    key={w.id}
                    w={w}
                    selected={selectedId === w.id}
                    onSelect={() => setSelectedId(w.id)}
                    onRemove={() => removeWidget(w.id)}
                    onDuplicate={() => duplicateWidget(w.id)}
                    onMove={(d) => move(w.id, d)}
                  />
                ))}
            </div>
            {widgets
              .filter((w) => w.type !== "stat")
              .map((w) => (
                <CanvasItem
                  key={w.id}
                  w={w}
                  selected={selectedId === w.id}
                  onSelect={() => setSelectedId(w.id)}
                  onRemove={() => removeWidget(w.id)}
                  onDuplicate={() => duplicateWidget(w.id)}
                  onMove={(d) => move(w.id, d)}
                />
              ))}
          </div>

          {/* drop zone */}
          <AnimatePresence>
            {isOver && dragType && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute inset-3 z-20 flex items-center justify-center rounded-xl border-2 border-dashed border-steel bg-steel/10 backdrop-blur-[1px]"
              >
                <span className="flex items-center gap-2 rounded-full bg-ink-2/90 px-4 py-2 text-[13px] font-medium text-cream">
                  <Plus className="h-4 w-4 text-steel" />
                  Drop to add {TYPE_DEFAULTS[dragType].label}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT — inspector / AI */}
        <aside className="border-t border-line bg-ink-3/40 lg:border-l lg:border-t-0">
          <div className="flex border-b border-line">
            <TabBtn
              active={tab === "inspect"}
              onClick={() => setTab("inspect")}
              icon={Settings2}
              label="Inspect"
            />
            <TabBtn
              active={tab === "ai"}
              onClick={() => setTab("ai")}
              icon={Sparkles}
              label="AI"
              badge
            />
          </div>

          <div className="p-3">
            {tab === "inspect" ? (
              selected ? (
                <div className="space-y-4">
                  <div>
                    <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-cream-dim/60">
                      Component
                    </p>
                    <p className="text-[13px] font-medium capitalize text-cream">
                      {selected.type}
                    </p>
                  </div>
                  <Field label="Label">
                    <input
                      value={selected.label}
                      onChange={(e) =>
                        updateSelected({ label: e.target.value })
                      }
                      className="w-full rounded-lg border border-line bg-ink-2 px-2.5 py-1.5 text-[12.5px] text-cream focus:border-steel/50 focus:outline-none"
                    />
                  </Field>
                  <Field label="Accent color">
                    <div className="flex flex-wrap gap-2">
                      {ACCENTS.map((c) => (
                        <button
                          key={c}
                          onClick={() => updateSelected({ accent: c })}
                          className={`h-6 w-6 rounded-full border transition-transform hover:scale-110 ${
                            selected.accent === c
                              ? "border-cream ring-2 ring-cream/30"
                              : "border-line"
                          }`}
                          style={{ backgroundColor: c }}
                          aria-label={c}
                        />
                      ))}
                    </div>
                  </Field>
                  <p className="rounded-lg border border-line bg-ink-2 px-2.5 py-2 text-[11px] leading-snug text-cream-dim/60">
                    Edits here update the selected component live — try a color.
                  </p>
                </div>
              ) : (
                <p className="text-[12.5px] text-cream-dim/60">
                  Select a component on the canvas to edit it.
                </p>
              )
            ) : (
              <div className="flex h-full flex-col">
                <div className="thin-scroll mb-3 max-h-[180px] space-y-2 overflow-y-auto pr-1">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`max-w-[90%] rounded-xl px-2.5 py-1.5 text-[12px] leading-snug ${
                        m.role === "user"
                          ? "ml-auto bg-cream text-ink"
                          : "bg-ink-4 text-cream-dim"
                      }`}
                    >
                      {m.text}
                    </div>
                  ))}
                  {thinking && (
                    <div className="flex w-fit gap-1 rounded-xl bg-ink-4 px-3 py-2">
                      {[0, 1, 2].map((d) => (
                        <motion.span
                          key={d}
                          className="h-1.5 w-1.5 rounded-full bg-cream-dim/70"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 0.9,
                            repeat: Infinity,
                            delay: d * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendAi(s)}
                      className="rounded-full border border-line px-2 py-1 text-[10.5px] text-cream-dim transition-colors hover:border-steel/40 hover:text-cream"
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendAi(aiInput);
                  }}
                  className="flex items-center gap-1.5 rounded-lg border border-line bg-ink-2 p-1.5 focus-within:border-steel/50"
                >
                  <input
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    placeholder="Describe a component…"
                    className="min-w-0 flex-1 bg-transparent px-1 text-[12.5px] text-cream placeholder:text-cream-dim/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-cream text-ink transition-transform hover:scale-105 active:scale-95"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

/* --------------------------------------------------------- small helpers */
function ChromeBtn({
  icon: Icon,
  label,
  hideLabel,
}: {
  icon: LucideIcon;
  label: string;
  hideLabel?: boolean;
}) {
  return (
    <button className="group flex items-center gap-1.5 rounded-lg border border-transparent px-2 py-1.5 text-[12px] text-cream-dim transition-colors hover:border-line hover:bg-ink-4 hover:text-cream">
      <Icon className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
      {!hideLabel && <span className="hidden sm:inline">{label}</span>}
    </button>
  );
}

function TabBtn({
  active,
  onClick,
  icon: Icon,
  label,
  badge,
}: {
  active: boolean;
  onClick: () => void;
  icon: LucideIcon;
  label: string;
  badge?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex flex-1 items-center justify-center gap-1.5 border-b-2 py-2.5 text-[12.5px] font-medium transition-colors ${
        active
          ? "border-cream text-cream"
          : "border-transparent text-cream-dim/70 hover:text-cream"
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
      {badge && (
        <span className="absolute right-3 top-2 h-1.5 w-1.5 rounded-full bg-tomato" />
      )}
    </button>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-cream-dim/60">
        {label}
      </p>
      {children}
    </div>
  );
}

function CanvasItem({
  w,
  selected,
  onSelect,
  onRemove,
  onDuplicate,
  onMove,
}: {
  w: Widget;
  selected: boolean;
  onSelect: () => void;
  onRemove: () => void;
  onDuplicate: () => void;
  onMove: (d: -1 | 1) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: EASE }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      className={`group relative cursor-pointer rounded-xl border p-0.5 transition-colors ${
        selected
          ? "border-steel"
          : "border-transparent hover:border-line"
      }`}
    >
      {selected && (
        <span className="pointer-events-none absolute -inset-px rounded-xl ring-2 ring-steel/30" />
      )}
      <div className="relative p-2">
        <WidgetView w={w} />
      </div>
      {/* floating toolbar */}
      <div
        className={`absolute -top-3 right-2 flex items-center gap-0.5 rounded-lg border border-line bg-ink-2 p-0.5 shadow-lg transition-all duration-200 ${
          selected
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        }`}
      >
        <TBtn icon={ChevronUp} onClick={() => onMove(-1)} />
        <TBtn icon={ChevronDown} onClick={() => onMove(1)} />
        <TBtn icon={Copy} onClick={onDuplicate} />
        <TBtn icon={Trash2} onClick={onRemove} danger />
      </div>
    </motion.div>
  );
}

function TBtn({
  icon: Icon,
  onClick,
  danger,
}: {
  icon: LucideIcon;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`flex h-6 w-6 items-center justify-center rounded-md text-cream-dim transition-colors hover:bg-ink-4 ${
        danger ? "hover:text-tomato" : "hover:text-cream"
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
    </button>
  );
}
