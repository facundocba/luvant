import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to stop entering invoices by hand",
  description:
    "Your team spends hours every week typing invoice data into the system. There's a better way: automatic extraction with OCR that integrates with your accounting software.",
  alternates: {
    canonical: "/en/blog/automate-invoice-processing",
    languages: {
      "es-AR": "https://luvant.com.ar/blog/automatizar-carga-facturas",
      en: "https://luvant.com.ar/en/blog/automate-invoice-processing",
      "x-default": "https://luvant.com.ar/blog/automatizar-carga-facturas",
    },
  },
  openGraph: {
    title: "How to stop entering invoices by hand",
    description:
      "Automatic invoice data extraction with OCR. How it works and what results to expect.",
    type: "article",
    publishedTime: "2026-02-10T00:00:00-03:00",
    authors: ["Luvant"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to stop entering invoices by hand",
    description:
      "Automatic invoice data extraction with OCR. How it works and what results to expect.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to stop entering invoices by hand",
  description:
    "Your team spends hours every week typing invoice data into the system. There's a better way: automatic extraction with OCR.",
  image:
    "https://luvant.com.ar/en/blog/automate-invoice-processing/opengraph-image",
  datePublished: "2026-02-10T00:00:00-03:00",
  dateModified: "2026-02-10T00:00:00-03:00",
  author: {
    "@type": "Organization",
    name: "Luvant",
    url: "https://luvant.com.ar",
  },
  publisher: {
    "@type": "Organization",
    name: "Luvant",
    url: "https://luvant.com.ar",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://luvant.com.ar/en/blog/automate-invoice-processing",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://luvant.com.ar/en",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://luvant.com.ar/en/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to stop entering invoices by hand",
      item: "https://luvant.com.ar/en/blog/automate-invoice-processing",
    },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar locale="en" />
      <main id="main-content">
        {/* Header */}
        <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute -right-40 -top-20 h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-3xl" />

          <Container className="relative">
            <Link
              href="/en/blog"
              className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
            >
              <ArrowLeft size={12} />
              Back to blog
            </Link>

            <div className="mb-4 flex items-center gap-3">
              <Badge variant="outline">Practical guide</Badge>
              <span className="font-mono text-[11px] text-luvant-600">
                February 2026 &middot; 7 min read
              </span>
            </div>

            <h1 className="text-h2 md:text-h1 max-w-3xl leading-[1.1]">
              How to stop entering invoices by hand
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-luvant-400">
              Your team spends hours every week typing invoice data into the
              system. There&apos;s a better way: automatic extraction with OCR
              that integrates with your accounting software.
            </p>
          </Container>
        </section>

        {/* Article body */}
        <section className="pb-24 lg:pb-32">
          <Container>
            <article className="prose-luvant mx-auto max-w-3xl">
              <p>
                If someone on your team receives an invoice as a PDF, opens it,
                looks at the data and types it one by one into the accounting
                system, this article is for you. Because that process, which
                seems harmless, has a real cost that accumulates every week.
              </p>

              <h2>The hidden cost of manual data entry</h2>

              <p>
                Let&apos;s do a quick calculation. If your team processes 30
                invoices per day and each one takes 3 minutes of manual entry,
                that&apos;s 90 minutes daily. That&apos;s{" "}
                <strong>7.5 hours per week</strong> dedicated exclusively to
                typing data that already exists in a document.
              </p>

              <p>
                But the cost isn&apos;t just time. Manual entry introduces
                errors: a mistyped tax ID, an amount with an extra comma, an
                inverted date. Each error generates additional work to detect
                and correct it. And if it&apos;s not detected, it creates
                accounting problems that can surface weeks later.
              </p>

              <p>
                The question isn&apos;t whether you can live with that. The
                question is why you should, when the technology to solve it
                already exists.
              </p>

              <h2>What is OCR and how does it work</h2>

              <p>
                OCR (Optical Character Recognition) is the technology that
                converts text within images or PDFs into structured data that a
                computer can read. In simple terms: you give it a document and
                it returns the data ready to use.
              </p>

              <p>
                Modern OCR isn&apos;t simply &ldquo;reading letters.&rdquo; It
                uses artificial intelligence to understand the structure of the
                document: where the total is, what the invoice number is, who
                the issuer is, what the date is. It doesn&apos;t matter if the
                format changes between suppliers -- the system learns to find
                what it needs.
              </p>

              <p>
                For Argentine invoices, this includes understanding specific
                fields like CUIT (tax ID), point of sale, invoice type (A, B,
                C), CAE and CAE expiration date -- data that generic OCR
                solutions often fail to capture correctly.
              </p>

              <h2>What the automated process looks like</h2>

              <p>
                The automatic extraction workflow replaces manual entry with a
                process that works like this:
              </p>

              <ol>
                <li>
                  <strong>Reception</strong>: invoices arrive by email, are
                  scanned or uploaded to a folder. How you receive them
                  doesn&apos;t change.
                </li>
                <li>
                  <strong>Processing</strong>: the OCR system reads each
                  document and extracts the relevant data: supplier, tax ID,
                  amounts, date, invoice number, VAT status.
                </li>
                <li>
                  <strong>Validation</strong>: the extracted data is
                  automatically verified (valid tax ID format, consistent
                  amounts) and presented for quick review if something
                  doesn&apos;t match.
                </li>
                <li>
                  <strong>Integration</strong>: the validated data is sent
                  directly to the accounting system, ERP or spreadsheet you use.
                  No manual intervention.
                </li>
              </ol>

              <p>
                The result: what used to take 3 minutes per invoice now takes
                seconds. Your team goes from typing data to reviewing that
                everything is correct -- something they can do at a much faster
                pace.
              </p>

              <h2>What results to expect</h2>

              <p>
                Let&apos;s be clear about expectations, because there&apos;s a
                lot of inflated marketing around automation:
              </p>

              <ul>
                <li>
                  <strong>95-99% accuracy</strong> on invoices with standard
                  formats (AFIP electronic invoices, invoices from suppliers
                  with consistent formats). Free-form or heavily deteriorated
                  documents may have lower accuracy.
                </li>
                <li>
                  <strong>70-80% reduction in time</strong> spent on data entry.
                  It&apos;s not 100% because human review remains important,
                  especially at the beginning while the system is being tuned.
                </li>
                <li>
                  <strong>Near-total elimination of typing errors</strong>. The
                  remaining errors come from the original document (incorrect
                  data in the invoice itself), not from data entry.
                </li>
              </ul>

              <p>
                We don&apos;t promise the system will work perfectly from day
                one with 100% of your documents. What we do guarantee is that it
                improves with use and that the time impact is noticeable from
                the first week.
              </p>

              <h2>What you need to implement it</h2>

              <p>
                Implementing OCR for invoices doesn&apos;t require changing your
                entire technology infrastructure. What you do need:
              </p>

              <h3>1. Define the current workflow</h3>

              <p>
                How do you receive invoices? What system do you enter them into?
                Who processes them? How many per day? Understanding the current
                workflow is the first step to designing the automation.
              </p>

              <h3>2. Identify the integrations</h3>

              <p>
                Does your accounting system have an API or allow data imports?
                Do you use an ERP like SAP, Tango, or a web platform? The
                integration is what ensures extracted data reaches where you
                need it without intermediate manual steps.
              </p>

              <h3>3. Document samples</h3>

              <p>
                For the OCR to work well with your specific invoices, we need
                representative examples. You don&apos;t need hundreds: 10-20
                invoices from your main suppliers is enough to calibrate the
                system.
              </p>

              <h3>4. A tuning period</h3>

              <p>
                The first weeks are for calibration. The team uses the system
                and flags necessary corrections. Each correction improves the
                model. After that period, the system operates with minimal
                supervision.
              </p>

              <h2>Luvant Lens: our document processing solution</h2>

              <p>
                <Link
                  href="/en/products/lens"
                  className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Luvant Lens
                </Link>{" "}
                is the product we built to solve exactly this problem. It&apos;s
                an OCR platform designed for Spanish-language documents, with
                specific support for Argentine formats (AFIP invoices, delivery
                notes, receipts).
              </p>

              <p>
                It integrates via REST API, which means it can connect with
                virtually any system your company uses. If your accounting
                software allows data imports, Lens can send them directly.
              </p>

              <p>
                It&apos;s not the only solution on the market, but it&apos;s the
                one we built because generic alternatives didn&apos;t handle
                well the particularities of the documents that companies in
                Argentina deal with.
              </p>

              <h2>First steps</h2>

              <p>
                If you&apos;re considering automating invoice entry, the most
                direct path is:
              </p>

              <ol>
                <li>
                  Count how many invoices your team processes per week and how
                  much time they spend. That gives you the baseline to measure
                  impact.
                </li>
                <li>
                  Identify which suppliers account for most of the invoices. You
                  don&apos;t need to solve 100% of formats on day one -- start
                  with the highest volume ones.
                </li>
                <li>
                  Talk to us. We&apos;ll show you how Lens works with your real
                  documents, at no cost and no commitment.
                </li>
              </ol>

              <p>
                Manual invoice entry is one of those problems every company has
                and few solve because &ldquo;it&apos;s always been done this
                way.&rdquo; But the fact that it&apos;s common doesn&apos;t mean
                it&apos;s efficient. And today, solving it is more accessible
                than you think.
              </p>

              <p>
                <Link
                  href="/en/contact"
                  className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Reach out
                </Link>{" "}
                and we&apos;ll show you how it works with your invoices.
              </p>
            </article>

            {/* Article footer */}
            <div className="mx-auto mt-16 max-w-3xl border-t border-white/[0.06] pt-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/en/blog/why-your-business-needs-custom-software"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                >
                  <ArrowLeft size={12} />
                  Previous: Why your business needs custom software
                </Link>
                <Link
                  href="/en/blog/what-is-an-api-and-why-it-matters"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                >
                  Next: What is an API and why it matters
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="gradient-border relative overflow-hidden rounded-2xl">
                <div className="relative p-10 text-center md:p-14">
                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-white/[0.02] to-transparent" />
                  <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-white/[0.02] to-transparent" />

                  <div className="relative">
                    <h3 className="mx-auto mb-3 max-w-md text-h3 text-gradient-bright">
                      Want to see Luvant Lens in action?
                    </h3>
                    <p className="mx-auto max-w-sm text-sm text-luvant-400">
                      We&apos;ll show you how it processes your real invoices,
                      no commitment.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                      <Link
                        href="/en/contact"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-luvant-200"
                      >
                        Schedule a demo
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/en/products/lens"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40"
                      >
                        Learn about Luvant Lens
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}
