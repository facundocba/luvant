"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { contact } from "@/content/contact";
import { cn } from "@/lib/utils";
import Underline from "./Underline";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const f = contact.form;
const field =
  "w-full rounded border border-papel-borde bg-papel-foja px-3.5 py-3 text-[15px] text-papel-tinta placeholder:text-papel-tinta-3 focus:border-papel-tinta focus:outline-none";
const label = "mb-2 block font-mono text-[11.5px] uppercase tracking-[.08em] text-papel-tinta-2";

export default function ContactForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [topic, setTopic] = useState(params.get("tema") ?? "");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    const data = new FormData(e.currentTarget);
    const topicLabel = f.topics.find((t) => t.id === topic)?.label ?? "";
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      company: "",
      phone: "",
      services: topicLabel ? [topicLabel] : [],
      company_fax: data.get("company_fax"),
    };
    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        window.dataLayer?.push({ event: "form_submit", tema: topic });
        router.push(`/contacto/gracias?tema=${encodeURIComponent(topicLabel)}`);
        return;
      }
    } catch {}
    setStatus("error");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rotate-[.6deg] rounded border border-papel-borde bg-papel-foja-2 px-5 pb-7 pt-0 shadow-[0_20px_50px_rgba(30,42,35,.14)] md:px-7"
    >
      <div className="-mx-5 mb-5 flex justify-between border-b border-papel-borde px-4 py-2.5 font-mono text-[11px] uppercase tracking-[.1em] text-papel-tinta-2 md:-mx-7">
        <span>
          {f.tab} <b className="font-bold text-papel-rojo">01</b>
        </span>
        <span>{f.tabRight}</span>
      </div>
      <fieldset className="mb-4">
        <legend className={label}>{f.topicLabel}</legend>
        <div className="flex flex-wrap gap-2.5">
          {f.topics.map((t) => (
            <label
              key={t.id}
              className={cn(
                "cursor-pointer rounded-full border px-3 py-1.5 font-mono text-[12px]",
                topic === t.id
                  ? "border-papel-tinta bg-papel-tinta text-papel-foja"
                  : "border-papel-borde bg-papel-foja text-papel-tinta-2",
              )}
            >
              <input
                type="radio"
                name="topic"
                value={t.id}
                checked={topic === t.id}
                onChange={() => setTopic(t.id)}
                className="sr-only"
              />
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>
      <label className={label} htmlFor="message">
        {f.caseLabel}
      </label>
      <textarea id="message" name="message" required rows={4} placeholder={f.casePlaceholder} className={cn(field, "mb-4")} />
      <label className={label} htmlFor="name">
        {f.nameLabel}
      </label>
      <input id="name" name="name" required placeholder={f.namePlaceholder} className={cn(field, "mb-4")} />
      <label className={label} htmlFor="email">
        {f.emailLabel}
      </label>
      <input id="email" name="email" type="email" required placeholder={f.emailPlaceholder} className={cn(field, "mb-5")} />
      <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" className="hidden" />
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <Underline size="xl">{status === "loading" ? "Enviando…" : f.submit}</Underline>
        <div className="font-mono text-[12px] leading-[1.45] text-papel-tinta-3">
          {f.note[0]}
          <br />
          {f.note[1]}
        </div>
      </div>
      {status === "error" && <p className="mt-4 text-[14px] text-papel-rojo">{f.error}</p>}
    </form>
  );
}
