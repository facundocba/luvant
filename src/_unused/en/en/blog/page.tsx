"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

const ease = [0.25, 0.4, 0.25, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const ARTICLES = [
  {
    slug: "why-your-business-needs-custom-software",
    category: "Strategy",
    title: "Why your business needs custom software (and when it doesn't)",
    excerpt:
      "Not every business needs custom development. We analyze when it makes sense to invest in your own software vs using existing solutions, and what questions to ask yourself before deciding.",
    date: "February 2026",
    href: "/en/blog/why-your-business-needs-custom-software",
  },
  {
    slug: "automate-invoice-processing",
    category: "Practical guide",
    title: "How to stop entering invoices by hand",
    excerpt:
      "Your team spends hours every week typing invoice data into the system. There's a better way: automatic extraction with OCR that integrates with your accounting software.",
    date: "February 2026",
    href: "/en/blog/automate-invoice-processing",
  },
  {
    slug: "what-is-an-api-and-why-it-matters",
    category: "Concepts",
    title: "What is an API and why it matters for your business",
    excerpt:
      "A jargon-free explanation of what APIs are, why your systems need to talk to each other, and how a good integration can save you hours of manual work.",
    date: "February 2026",
    href: "/en/blog/what-is-an-api-and-why-it-matters",
  },
  {
    slug: "ocr-documents-argentina",
    category: "Product",
    title: "OCR for Argentine documents: challenges and solutions",
    excerpt:
      "Processing AFIP invoices, free-format delivery notes and receipts with CUIT requires OCR trained for local particularities. Here's how we solve it with Luvant Lens.",
    date: "February 2026",
    href: "/en/blog/ocr-documents-argentina",
  },
  {
    slug: "signs-you-need-process-automation",
    category: "Strategy",
    title: "5 signs your company needs to automate processes",
    excerpt:
      "If your team copies data between spreadsheets, sends the same emails every day or depends on one person for a critical process, it's time to automate.",
    date: "February 2026",
    href: "/en/blog/signs-you-need-process-automation",
  },
  {
    slug: "how-to-choose-a-software-provider",
    category: "Practical guide",
    title: "How to choose a software development provider",
    excerpt:
      "What to ask, what to request as proof and what red flags to look for before hiring someone to build software for your company.",
    date: "February 2026",
    href: "/en/blog/how-to-choose-a-software-provider",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar locale="en" />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute -right-40 -top-20 h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-3xl" />

          <Container className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600"
            >
              Blog
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-h1 md:text-display mb-6 max-w-2xl leading-[1.05]"
            >
              Ideas, technique, and{" "}
              <span className="text-gradient-bright">product</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="max-w-xl text-lg text-luvant-400"
            >
              Articles on document processing, software engineering and the real
              problems we solve with technology.
            </motion.p>
          </Container>
        </section>

        {/* Articles */}
        <section className="pb-24 lg:pb-32">
          <Container>
            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {ARTICLES.map((article) => {
                const cardContent = (
                  <>
                    <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="mb-4 flex items-center justify-between">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="font-mono text-[10px] text-luvant-600">
                        {article.date}
                      </span>
                    </div>

                    <h2 className="mb-3 text-lg font-medium leading-snug transition-colors group-hover:text-white">
                      {article.title}
                    </h2>

                    <p className="mb-6 flex-1 text-sm leading-relaxed text-luvant-500">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-luvant-400 transition-colors group-hover:text-white">
                      {article.href ? "Read article" : "Coming soon"}
                      {article.href && (
                        <ArrowRight
                          size={12}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      )}
                    </div>
                  </>
                );

                const cardClass =
                  "group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-luvant-900/30 p-6 transition-all duration-300 hover:border-white/10";

                return (
                  <motion.article key={article.slug} variants={itemVariants}>
                    {article.href ? (
                      <Link href={article.href} className={cardClass}>
                        {cardContent}
                      </Link>
                    ) : (
                      <div className={cardClass}>{cardContent}</div>
                    )}
                  </motion.article>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="mt-16"
            >
              <div className="gradient-border relative overflow-hidden rounded-2xl">
                <div className="relative p-10 text-center md:p-14">
                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-white/[0.02] to-transparent" />
                  <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-white/[0.02] to-transparent" />

                  <div className="relative">
                    <span className="mb-4 block font-mono text-caption uppercase tracking-widest text-luvant-600">
                      Have a project?
                    </span>
                    <h3 className="mx-auto mb-3 max-w-md text-h3 text-gradient-bright">
                      Let&apos;s talk about how to solve your problem with
                      technology
                    </h3>
                    <p className="mx-auto max-w-sm text-sm text-luvant-400">
                      If you have questions about document processing,
                      automation or custom development, reach out.
                    </p>
                    <div className="mt-8">
                      <Link
                        href="/en/contact"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-luvant-200"
                      >
                        Contact
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}
