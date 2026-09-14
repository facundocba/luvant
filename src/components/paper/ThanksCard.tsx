"use client";

import { useSearchParams } from "next/navigation";
import { contact } from "@/content/contact";

export default function ThanksCard() {
  const topic = useSearchParams().get("tema");
  if (!topic) return null;
  const t = contact.thanks;
  return (
    <div className="-rotate-1 rounded border border-papel-borde bg-papel-foja px-5 py-5 font-mono text-[12.5px] leading-[1.7] text-papel-tinta-2 shadow-[0_14px_34px_rgba(30,42,35,.14)]">
      <b className="text-papel-tinta">{t.received}</b> · {new Date().toLocaleDateString("es-AR")}
      <br />
      {t.about}: <b className="text-papel-tinta">{topic}</b>
      <br />
      {t.next}: <b className="text-papel-tinta">{t.nextValue}</b>
    </div>
  );
}
