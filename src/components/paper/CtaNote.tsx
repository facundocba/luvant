import { cta } from "@/content/shared";
import { EMAIL } from "@/lib/site";

export default function CtaNote({ lead }: { lead?: string }) {
  return (
    <div className="font-mono text-[12px] leading-[1.45] text-papel-tinta-3">
      {lead && (
        <>
          {lead}
          <br />
        </>
      )}
      {cta.note}{" "}
      <a href={`mailto:${EMAIL}`} className="border-b border-papel-tinta-3 text-papel-tinta-2">
        {EMAIL}
      </a>
    </div>
  );
}
