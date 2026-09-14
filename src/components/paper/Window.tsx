import type { Row, WindowSpec } from "@/content/types";
import { cn } from "@/lib/utils";

function Chip({ label, on }: { label: string; on?: boolean }) {
  return (
    <span
      className={cn(
        "h-fit whitespace-nowrap rounded border px-1.5 py-[3px] font-geistmono text-[9px]",
        on
          ? "border-luvant-200 bg-luvant-200 text-luvant-950"
          : "border-white/15 text-luvant-400",
      )}
    >
      {label}
    </span>
  );
}

function Rows({ rows }: { rows: Row[] }) {
  return (
    <>
      {rows.map((r) => (
        <div
          key={r.title}
          className="grid grid-cols-[1fr_auto] gap-2.5 border-t border-white/[.06] px-3.5 py-2.5"
        >
          <div>
            <b className="block font-medium">{r.title}</b>
            <small className="mt-0.5 block text-[10px] text-luvant-500">{r.sub}</small>
          </div>
          {r.chip && <Chip label={r.chip} on={r.chipOn} />}
        </div>
      ))}
    </>
  );
}

const mono = "font-geistmono text-[9.5px] not-italic text-luvant-500";

function Body({ spec }: { spec: WindowSpec }) {
  switch (spec.kind) {
    case "search":
      return (
        <>
          <div className="mx-3.5 mb-2 mt-3 flex justify-between rounded-lg border border-white/15 px-3 py-2 text-[12px] text-luvant-200">
            {spec.query}
            <span className="font-geistmono text-[10px] text-luvant-500">{spec.total}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 px-3.5 pb-2.5">
            {spec.facets.map((f) => (
              <span
                key={f.label}
                className={cn(
                  "rounded-full border px-2 py-[3px] font-geistmono text-[9.5px]",
                  f.on
                    ? "border-luvant-200 bg-luvant-200 text-luvant-950"
                    : "border-white/10 text-luvant-400",
                )}
              >
                {f.label}
              </span>
            ))}
          </div>
          <Rows rows={spec.rows} />
        </>
      );
    case "norm":
      return (
        <>
          <div className="flex items-start justify-between gap-2.5 px-3.5 pb-1.5 pt-3 text-[13px] font-medium">
            <div>
              {spec.name}
              <small className="mt-1 block font-geistmono text-[9.5px] font-normal text-luvant-500">
                {spec.meta}
              </small>
            </div>
            <Chip label={spec.chip} on />
          </div>
          <div className="flex gap-3.5 border-b border-white/[.06] px-3.5 pt-1.5 text-[11px] text-luvant-500">
            {spec.tabs.map((t, i) => (
              <span
                key={t}
                className={cn(
                  "pb-1.5",
                  i === spec.activeTab && "border-b border-white font-medium text-white",
                )}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="px-3.5 pb-3.5 pt-2.5 text-[11px] leading-[1.5] text-luvant-300">
            {spec.paragraphs.map((p) => (
              <p key={p.article}>
                <em className={mono}>{p.article}</em>
                {" — "}
                {p.parts.map((part, i) =>
                  part.kind === "del" ? (
                    <del key={i} className="text-luvant-600">{part.text}</del>
                  ) : part.kind === "ins" ? (
                    <ins key={i} className="rounded-sm bg-white/15 no-underline">{part.text}</ins>
                  ) : part.kind === "note" ? (
                    <em key={i} className={mono}> {part.text}</em>
                  ) : (
                    <span key={i}>{part.text}</span>
                  ),
                )}
              </p>
            ))}
          </div>
        </>
      );
    case "flow":
      return (
        <div className="px-3.5 pb-3 pt-1.5 text-[11px]">
          {spec.steps.map((s, i) => (
            <div
              key={s.text}
              className={cn("flex items-center gap-2.5 py-2", i > 0 && "border-t border-white/[.06]")}
            >
              <i
                className={cn(
                  "relative inline-block h-3.5 w-3.5 shrink-0 rounded-full border",
                  s.state === "ok"
                    ? "border-luvant-200 bg-luvant-200 after:absolute after:left-[4px] after:top-[1.5px] after:h-[7px] after:w-[3px] after:rotate-45 after:border-b-[1.5px] after:border-r-[1.5px] after:border-luvant-950"
                    : "border-luvant-200 border-t-transparent",
                )}
              />
              <span className="text-luvant-300">{s.text}</span>
              {s.time && (
                <small className="ml-auto font-geistmono text-[9px] text-luvant-500">{s.time}</small>
              )}
            </div>
          ))}
        </div>
      );
    case "dashboard":
      return (
        <>
          <div className="flex gap-3.5 px-3.5 pt-2.5 font-geistmono text-[10px] text-luvant-500">
            {spec.kpis.map((k) => (
              <div key={k.label}>
                <b className="block font-geist text-[16px] font-medium tracking-[-.02em] text-white">
                  {k.value}
                </b>
                {k.label}
              </div>
            ))}
          </div>
          <div className="flex h-16 items-end gap-1.5 p-3">
            {spec.bars.map((h, i) => (
              <i key={i} className="flex-1 rounded-t-[3px] bg-white/20" style={{ height: `${h}%` }} />
            ))}
          </div>
        </>
      );
    case "code":
      return (
        <div className="px-3.5 py-3 font-geistmono text-[10.5px] leading-[1.65] text-luvant-400">
          {spec.lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      );
    case "list":
      return <Rows rows={spec.rows} />;
    case "shop":
      return (
        <div className="grid grid-cols-4 gap-2 p-3">
          {spec.items.map((it) => (
            <div key={it.name} className="rounded border border-white/10 p-2">
              <div className={cn("mb-2 h-10 rounded-sm", it.out ? "bg-white/5" : "bg-papel-carton/80")} />
              <div className="truncate text-[10px] font-medium">{it.name}</div>
              <div className={cn("font-geistmono text-[9px]", it.out ? "text-luvant-600" : "text-luvant-500")}>
                {it.stock}
              </div>
            </div>
          ))}
        </div>
      );
    case "task":
      return (
        <div className="grid grid-cols-[1fr_auto] items-center gap-2.5 px-3.5 py-3 text-[11px]">
          <div>
            <b className="block font-medium">{spec.question}</b>
            <small className="mt-0.5 block text-[10px] text-luvant-500">{spec.meta}</small>
          </div>
          <div className="flex gap-1.5 font-geistmono text-[9px]">
            <span className="rounded border border-luvant-200 bg-luvant-200 px-2 py-1 text-luvant-950">Sí</span>
            <span className="rounded border border-white/20 px-2 py-1 text-luvant-200">No</span>
          </div>
        </div>
      );
  }
}

export default function Window({ spec, className }: { spec: WindowSpec; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "overflow-hidden rounded-[10px] bg-luvant-950 font-geist text-[11.5px] text-white shadow-[0_30px_70px_rgba(30,42,35,.30),0_0_0_1px_rgba(30,42,35,.18)]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/[.06] px-3 py-2 font-geistmono text-[10px] text-luvant-500">
        <i className="h-2 w-2 rounded-full bg-white/10" />
        <i className="h-2 w-2 rounded-full bg-white/10" />
        <i className="h-2 w-2 rounded-full bg-white/10" />
        <span className="ml-1.5">{spec.title}</span>
      </div>
      <Body spec={spec} />
    </div>
  );
}
