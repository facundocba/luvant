import type { Metadata } from "next";
import ServicePage from "@/components/paper/ServicePage";
import { service } from "@/content/services/automatizacion-con-ia";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(service);

export default function Page() {
  return <ServicePage service={service} />;
}
