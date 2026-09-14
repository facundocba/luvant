import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Services | Luvant",
    default: "Custom Software Services | Luvant",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
