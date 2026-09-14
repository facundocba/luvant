export type Question = { q: string; a: string };

export type Chip = { label: string; on?: boolean };

export type Row = { title: string; sub: string; chip?: string; chipOn?: boolean };

export type FlowStep = { text: string; time?: string; state: "ok" | "run" };

export type NormPart = { text: string; kind?: "del" | "ins" | "note" };

export type NormParagraph = { article: string; parts: NormPart[] };

export type WindowSpec =
  | {
      kind: "search";
      title: string;
      query: string;
      total: string;
      facets: Chip[];
      rows: Row[];
    }
  | {
      kind: "norm";
      title: string;
      name: string;
      meta: string;
      chip: string;
      tabs: string[];
      activeTab: number;
      paragraphs: NormParagraph[];
    }
  | { kind: "flow"; title: string; steps: FlowStep[] }
  | {
      kind: "dashboard";
      title: string;
      kpis: { value: string; label: string }[];
      bars: number[];
    }
  | { kind: "code"; title: string; lines: string[] }
  | { kind: "list"; title: string; rows: Row[] }
  | {
      kind: "shop";
      title: string;
      items: { name: string; stock: string; out?: boolean }[];
    }
  | { kind: "task"; title: string; question: string; meta: string };

export type SketchKind = "lines" | "nodes" | "bars" | "systems" | "shop" | "code";

export type Situation = {
  when: string;
  tag: string;
  title: string;
  text: string;
  window: WindowSpec;
};

export type Service = {
  slug: string;
  number: string;
  name: string;
  tag: string;
  path: string;
  title: string;
  description: string;
  updatedAt: string;
  h1: string;
  h1Accent: string;
  intro: string;
  windows: [WindowSpec, WindowSpec];
  situations: [Situation, Situation, Situation];
  includesFirst: { title: string; text: string };
  connections: string[];
  questions: [Question, Question, Question];
  card: { sketch: SketchKind; text: string };
};
