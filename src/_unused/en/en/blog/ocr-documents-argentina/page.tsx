import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "OCR for Argentine documents: challenges and solutions",
  description:
    "Processing AFIP invoices, free-format delivery notes and receipts with CUIT requires OCR trained for local particularities. Here's how we solve it with Luvant Lens.",
  alternates: {
    canonical: "/en/blog/ocr-documents-argentina",
    languages: {
      "es-AR": "https://luvant.com.ar/blog/ocr-documentos-argentina",
      en: "https://luvant.com.ar/en/blog/ocr-documents-argentina",
      "x-default": "https://luvant.com.ar/blog/ocr-documentos-argentina",
    },
  },
  openGraph: {
    title: "OCR for Argentine documents: challenges and solutions",
    description:
      "How to process AFIP invoices, delivery notes and receipts with the particularities of the Argentine market.",
    type: "article",
    publishedTime: "2026-02-22T00:00:00-03:00",
    authors: ["Luvant"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OCR for Argentine documents: challenges and solutions",
    description:
      "How to process AFIP invoices, delivery notes and receipts with the particularities of the Argentine market.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "OCR for Argentine documents: challenges and solutions",
  description:
    "Processing AFIP invoices, free-format delivery notes and receipts with CUIT requires OCR trained for local particularities.",
  image:
    "https://luvant.com.ar/en/blog/ocr-documents-argentina/opengraph-image",
  datePublished: "2026-02-22T00:00:00-03:00",
  dateModified: "2026-02-22T00:00:00-03:00",
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
    "@id": "https://luvant.com.ar/en/blog/ocr-documents-argentina",
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
      name: "OCR for Argentine documents: challenges and solutions",
      item: "https://luvant.com.ar/en/blog/ocr-documents-argentina",
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
              <Badge variant="outline">Product</Badge>
              <span className="font-mono text-[11px] text-luvant-600">
                February 2026 &middot; 8 min read
              </span>
            </div>

            <h1 className="text-h2 md:text-h1 max-w-3xl leading-[1.1]">
              OCR for Argentine documents: challenges and solutions
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-luvant-400">
              Processing AFIP invoices, free-format delivery notes and receipts
              with CUIT requires OCR trained for local particularities.
              Here&apos;s how we solve it with Luvant Lens.
            </p>
          </Container>
        </section>

        {/* Article body */}
        <section className="pb-24 lg:pb-32">
          <Container>
            <article className="prose-luvant mx-auto max-w-3xl">
              <p>
                OCR (optical character recognition) has been around for decades.
                But if you&apos;ve ever tried using a generic service to process
                Argentine invoices, you&apos;ve probably encountered mediocre
                results. It&apos;s no coincidence: Argentine documents have
                particularities that most international solutions don&apos;t
                handle well.
              </p>

              <p>
                In this article, we&apos;ll discuss what those specific
                challenges are and how we solve them with{" "}
                <Link
                  href="/en/products/lens"
                  className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Luvant Lens
                </Link>
                .
              </p>

              <h2>The specific challenges of Argentina</h2>

              <h3>1. AFIP electronic invoices</h3>

              <p>
                Argentine electronic invoices have a format regulated by AFIP
                (the national tax authority), but that doesn&apos;t mean
                they&apos;re uniform. Each invoicing software generates a PDF
                with its own layout. What they do share are mandatory fields:
                issuer and recipient CUIT (tax ID), invoice type (A, B, C, M,
                E), point of sale, invoice number, CAE (electronic authorization
                code), CAE expiration date, VAT status, and line items with
                their tax rates.
              </p>

              <p>
                The problem for a generic OCR is that these fields can appear
                anywhere in the document, with different labels
                (&ldquo;CUIT&rdquo;, &ldquo;C.U.I.T.&rdquo;,
                &ldquo;CUIT/CUIL&rdquo;) and in variable formats (20-12345678-9
                vs 20123456789). A system that wasn&apos;t trained on Argentine
                documents doesn&apos;t understand these variations.
              </p>

              <h3>2. Delivery notes and packing slips</h3>

              <p>
                Unlike electronic invoices, delivery notes have no regulated
                format. Each company designs its own. Some are printed, others
                handwritten, and many are a combination of both. Extracting data
                from a scanned handwritten delivery note is a significantly
                greater challenge than processing an electronic invoice.
              </p>

              <p>
                What we typically need to extract from a delivery note includes:
                note number, date, products or items delivered with quantities,
                recipient, and confirmation signature. When the document is
                handwritten or has low scan quality, accuracy depends directly
                on the quality of the OCR model.
              </p>

              <h3>3. Receipts and miscellaneous vouchers</h3>

              <p>
                Cash register tickets, payment receipts, bank transfer
                confirmations, credit card vouchers. Each has its own structure
                and level of complexity. Thermal receipts, for example, tend to
                have low resolution and degrade over time, making processing
                more difficult the older the document gets.
              </p>

              <h3>4. Language and local conventions</h3>

              <p>
                It may seem minor, but language matters. OCR systems trained on
                English documents can have issues with:
              </p>

              <ul>
                <li>
                  <strong>Accents and special characters</strong>:
                  &ldquo;facturaci&oacute;n&rdquo; (invoicing) can be misread as
                  &ldquo;facturacion&rdquo; or &ldquo;facturaci6n&rdquo;.
                </li>
                <li>
                  <strong>Number formatting</strong>: in Argentina, a period is
                  used as a thousands separator and a comma for decimals
                  (1.234,56), the opposite of the US. An OCR that doesn&apos;t
                  distinguish this may interpret $1.234,56 as $1234.56 or as
                  $1.234.
                </li>
                <li>
                  <strong>Date formatting</strong>: DD/MM/YYYY vs MM/DD/YYYY. A
                  date like 03/02/2026 could be February 3rd or March 2nd,
                  depending on the convention the system assumes.
                </li>
                <li>
                  <strong>Addresses</strong>: the Argentine address format
                  (street + number + floor + apartment + city + province +
                  postal code) looks nothing like the North American format.
                </li>
              </ul>

              <h2>How specialized OCR works</h2>

              <p>
                Modern OCR isn&apos;t just &ldquo;reading text from an
                image.&rdquo; It&apos;s a multi-stage process:
              </p>

              <ol>
                <li>
                  <strong>Pre-processing</strong>: the document is digitally
                  cleaned. Rotation is corrected, contrast is improved, and
                  shadows and scanning artifacts are removed.
                </li>
                <li>
                  <strong>Text detection</strong>: regions of the document
                  containing text are identified, separating them from logos,
                  signatures, stamps, and blank spaces.
                </li>
                <li>
                  <strong>Recognition</strong>: each text region is converted
                  into digital characters. This is where model quality makes the
                  difference.
                </li>
                <li>
                  <strong>Structured extraction</strong>: reading the text
                  isn&apos;t enough; the system needs to understand what it
                  means. It identifies that &ldquo;20-12345678-9&rdquo; next to
                  &ldquo;CUIT&rdquo; is a tax identification number, not a phone
                  number.
                </li>
                <li>
                  <strong>Validation</strong>: extracted data is verified
                  against business rules. Does the CUIT have the correct check
                  digit? Does the CAE have a valid format? Do the amounts add up
                  correctly?
                </li>
              </ol>

              <p>
                The difference between generic OCR and specialized OCR lies
                mainly in stages 4 and 5. Generic OCR gives you plain text.
                Specialized OCR gives you structured and validated data.
              </p>

              <h2>What makes Luvant Lens different</h2>

              <p>
                <Link
                  href="/en/products/lens"
                  className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Luvant Lens
                </Link>{" "}
                is our document processing platform, designed from the ground up
                for Spanish-language documents with a focus on the Argentine
                market. These are the technical decisions we made to solve the
                challenges described above:
              </p>

              <ul>
                <li>
                  <strong>Models trained on local documents</strong>: our models
                  were trained on thousands of AFIP invoices, delivery notes,
                  and Argentine receipts. They recognize local conventions for
                  number formatting, dates, and addresses.
                </li>
                <li>
                  <strong>AFIP field dictionary</strong>: the system knows the
                  structure of an Argentine electronic invoice and can locate
                  mandatory fields even when they change position between
                  vendors.
                </li>
                <li>
                  <strong>Built-in validation</strong>: every extracted CUIT is
                  validated using the check digit algorithm. Every CAE is
                  verified for format and length. Amounts are cross-checked to
                  detect inconsistencies.
                </li>
                <li>
                  <strong>Simple REST API</strong>: Lens integrates with any
                  system via a standard REST API. You send the document, you
                  receive the structured data in JSON. No complicated SDKs or
                  heavy dependencies.
                </li>
                <li>
                  <strong>Continuous improvement</strong>: the system learns
                  from corrections. When an operator flags a field as incorrect,
                  that correction is used to improve the model in future runs.
                </li>
              </ul>

              <h2>Real-world results</h2>

              <p>Let&apos;s be transparent about what you can expect:</p>

              <ul>
                <li>
                  <strong>AFIP electronic invoices</strong>: over 97% accuracy
                  on structured fields (CUIT, amounts, dates, CAE). The
                  remaining 3% is usually due to PDFs with generation issues or
                  very atypical formats.
                </li>
                <li>
                  <strong>Printed delivery notes</strong>: 90-95% accuracy on
                  main fields. Handwritten delivery notes or those with very low
                  scan quality have lower accuracy.
                </li>
                <li>
                  <strong>Thermal receipts</strong>: 85-95% accuracy, depending
                  on the condition of the receipt and scan resolution.
                </li>
              </ul>

              <p>
                These numbers aren&apos;t from day one. They&apos;re the results
                achieved after the initial calibration period, where the system
                adjusts to each client&apos;s specific documents.
              </p>

              <h2>When specialized OCR makes sense</h2>

              <p>
                Not every company needs OCR. It makes sense to invest in
                automated document processing when:
              </p>

              <ul>
                <li>You process more than 20-30 documents per day manually.</li>
                <li>
                  Manual data entry errors cause accounting or management
                  problems.
                </li>
                <li>
                  You need data in your system in real time, not at the end of
                  the day.
                </li>
                <li>
                  Your administrative team spends a significant portion of their
                  time on data entry.
                </li>
              </ul>

              <p>
                If you process fewer than 10 documents per day, manual entry is
                probably sufficient. The ROI of automation appears when the
                volume justifies the initial investment in integration and
                calibration.
              </p>

              <h2>How to get started</h2>

              <p>
                If you want to evaluate how Lens would work with your documents,
                the process is simple:
              </p>

              <ol>
                <li>
                  Send us 10-20 representative documents (invoices from your
                  main vendors, delivery notes you typically receive).
                </li>
                <li>
                  We process them with Lens and show you the results: what data
                  was extracted, with what accuracy, and where there are
                  opportunities for improvement.
                </li>
                <li>
                  If the results make sense for your operation, we design the
                  integration with your existing systems.
                </li>
              </ol>

              <p>
                There&apos;s no commitment in the initial evaluation. If the
                results don&apos;t convince you, we don&apos;t move forward.{" "}
                <Link
                  href="/en/contact"
                  className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Get in touch
                </Link>{" "}
                and we&apos;ll arrange a test with your documents.
              </p>
            </article>

            {/* Article footer */}
            <div className="mx-auto mt-16 max-w-3xl border-t border-white/[0.06] pt-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/en/blog/what-is-an-api-and-why-it-matters"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                >
                  <ArrowLeft size={12} />
                  Previous: What is an API and why it matters
                </Link>
                <Link
                  href="/en/blog/signs-you-need-process-automation"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                >
                  Next: 5 signs you need to automate your processes
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
                      We&apos;ll show you how it processes your real documents,
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
