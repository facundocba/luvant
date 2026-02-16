export interface NavLink {
  label: string;
  href: string;
}

export interface Product {
  name: string;
  slug: string;
  description: string;
  badge: string;
  status: "active" | "coming-soon";
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface FooterLinkGroup {
  label: string;
  href: string;
}
