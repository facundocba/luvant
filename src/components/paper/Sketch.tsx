import type { SketchKind } from "@/content/types";
import { cn } from "@/lib/utils";

const box = "relative overflow-hidden rounded-md border border-papel-borde bg-papel-foja";
const node = "rounded border border-papel-borde px-2 py-1";

export default function Sketch({ kind, className }: { kind: SketchKind; className?: string }) {
  switch (kind) {
    case "lines":
      return (
        <div className={cn(box, className)}>
          <div className="absolute left-3 top-4 h-[7px] w-3/5 rounded bg-papel-carton" />
          <div className="absolute left-3 right-3 top-9 h-[7px] rounded bg-papel-carton" />
          <div className="absolute left-3 top-14 h-[7px] w-4/5 rounded bg-papel-carton" />
        </div>
      );
    case "nodes":
      return (
        <div className={cn(box, "flex items-center justify-center gap-2.5 font-mono text-[11px] text-papel-tinta-2", className)}>
          <span className={node}>correo</span>
          <b className="font-normal text-papel-tinta-3">→</b>
          <span className="rounded bg-papel-tinta px-2 py-1 text-papel-foja">lee</span>
          <b className="font-normal text-papel-tinta-3">→</b>
          <span className={node}>sistema</span>
        </div>
      );
    case "bars":
      return (
        <div className={cn(box, "flex items-end gap-1.5 px-3 pb-2.5 pt-3.5", className)}>
          {[40, 65, 50, 90, 70, 100, 80].map((h, i) => (
            <i key={i} className="flex-1 rounded-t-sm bg-papel-verde/85" style={{ height: `${h}%` }} />
          ))}
        </div>
      );
    case "systems":
      return (
        <div className={cn(box, "flex items-center justify-center font-mono text-[11px] text-papel-tinta-2", className)}>
          <span className={cn(node, "py-1.5")}>ERP</span>
          <span className="relative inline-block w-8 border-t border-dashed border-papel-tinta-3 after:absolute after:-top-[9px] after:left-2.5 after:bg-papel-foja after:text-[12px] after:text-papel-rojo after:content-['⇄']" />
          <span className={cn(node, "py-1.5")}>WhatsApp</span>
        </div>
      );
    case "shop":
      return (
        <div className={cn(box, "grid grid-cols-4 gap-1.5 p-2.5", className)}>
          {Array.from({ length: 8 }).map((_, i) => (
            <i key={i} className={cn("rounded-sm", i === 0 ? "bg-papel-rojo" : "bg-papel-carton")} />
          ))}
        </div>
      );
    case "code":
      return (
        <div className={cn("relative overflow-hidden rounded-md bg-luvant-950 p-3 font-geistmono text-[9.5px] leading-[1.5] text-luvant-400", className)}>
          <b className="font-normal text-white">POST</b> /api/v1/documents
          <br />
          {'{ "status": "ocr_done",'}
          <br />
          {'  "norms": 3, "pages": 12 }'}
        </div>
      );
  }
}
