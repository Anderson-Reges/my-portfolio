import type { Localized } from "~/lib/i18n";

/**
 * Site content for the terminal portfolio. Pure data (no React) so copy lives
 * in one place. Commands and tech names stay in English by design; only
 * readable prose/labels are localized (en / pt-BR).
 */

export const profile = {
  brand: "~/anderson-reges",
  name: "anderson reges",
  tagline: {
    en: "full stack developer · technology enthusiast",
    pt: "desenvolvedor full stack · entusiasta de tecnologia",
  },
  status: {
    en: "available for new offers",
    pt: "disponível para novas oportunidades",
  },
} satisfies {
  brand: string;
  name: string;
  tagline: Localized;
  status: Localized;
};

export interface StackGroup {
  label: Localized;
  items: readonly string[];
}

/** `cat stack.txt` — grouped tech. Tech names are intentionally not localized. */
export const stackGroups: readonly StackGroup[] = [
  {
    label: { en: "languages", pt: "linguagens" },
    items: ["javascript", "typescript", "python", "c", "java"],
  },
  {
    label: { en: "frontend", pt: "frontend" },
    items: ["html", "css", "react", "next.js", "redux", "tailwind", "sass", "styled components", "bootstrap", "electron"],
  },
  {
    label: { en: "mobile", pt: "mobile" },
    items: ["react native", "expo", "nativewind", "android sdk", "ios sdk"],
  },
  {
    label: { en: "backend", pt: "backend" },
    items: ["node", "express", "nest.js", "elysia.js", "django", "flask", "medusa.js", "aws lambda", "openai sdk", "osrm"],
  },
  {
    label: { en: "databases", pt: "bancos de dados" },
    items: ["postgresql", "sqlserver", "mysql", "mongodb", "supabase"],
  },
  {
    label: { en: "orms", pt: "orms" },
    items: ["sequelize", "prisma", "drizzle"],
  },
  {
    label: { en: "tooling", pt: "ferramentas" },
    items: ["git", "docker", "jest", "pytest", "mocha"],
  },
];

/** `cat about.md` — paragraphs. `*emphasis*` marks bold spans. */
export const aboutParagraphs: readonly Localized[] = [
  {
    en: "I'm a fullstack developer with experience building web and mobile applications, working from planning through to final delivery. I've taken an active part in projects across different sectors — *industry, healthcare and e-commerce* — building complete solutions that span everything from defining the architecture and data structures to implementing complex features and integrations with external services.",
    pt: "Sou desenvolvedor Fullstack com experiência no desenvolvimento de aplicações web e mobile, atuando do planejamento à entrega final do produto. Tenho participado ativamente de projetos em diferentes segmentos como *indústria, saúde e e-commerce*, desenvolvendo soluções completas que envolvem desde a definição da arquitetura e estrutura de dados até a implementação de funcionalidades complexas e integrações com serviços externos.",
  },
  {
    en: "In the industrial sector, I built platforms for resource monitoring and machine management, ensuring scalability, reliability and efficiency when collecting and visualizing data in real time. In healthcare, I worked on solutions that integrated software and hardware to control and automate internal processes, always focused on the security and integrity of information. In e-commerce, I developed complete applications with payment integrations, logistics management, inventory control and data-security mechanisms across the whole application flow.",
    pt: "No setor industrial, atuei na construção de plataformas para monitoramento de recursos e gestão de máquinas, garantindo escalabilidade, confiabilidade e eficiência na coleta e visualização de dados em tempo real. No segmento hospitalar, participei de soluções que integraram software e hardware para controle e automação de processos internos, sempre com foco em segurança e integridade das informações. Já no e-commerce, desenvolvi aplicações completas com integrações de pagamento, gestão logística, controle de estoque e mecanismos de segurança de dados ao longo de todo o fluxo da aplicação.",
  },
  {
    en: "I also have experience building cross-platform mobile applications focused on performance and user experience, as well as creating PWAs to widen the reach and accessibility of the systems I build.",
    pt: "Além disso, possuo experiência no desenvolvimento de aplicações móveis multiplataforma com foco em desempenho e experiência do usuário, assim como na criação de PWAs para ampliar o alcance e a acessibilidade dos sistemas desenvolvidos.",
  },
  {
    en: "I work with agile methodologies (*Scrum and Kanban*) and *TDD* practices, collaborating closely with multidisciplinary teams to ensure continuous, reliable delivery. I'm currently studying Systems Analysis and Development and keep growing my technical and architectural skills to deliver ever more efficient solutions.",
    pt: "Atuo com *metodologias ágeis (Scrum e Kanban)*, práticas de *TDD*, colaborando de forma próxima com equipes multidisciplinares para garantir entregas contínuas e seguras. Atualmente, curso Análise e Desenvolvimento de Sistemas e sigo expandindo minhas competências técnicas e arquiteturais para entregar soluções cada vez mais eficientes.",
  },
];

export interface ContactRow {
  key: Localized;
  value: string;
  href: string;
  /** External links open in a new tab and show the `↗` glyph. */
  external: boolean;
}

/** `cat contact.txt` — contact + résumé rows. */
export const contactRows: readonly ContactRow[] = [
  { key: { en: "github", pt: "github" }, value: "github.com/Anderson-Reges", href: "https://github.com/Anderson-Reges", external: true },
  { key: { en: "linkedin", pt: "linkedin" }, value: "/in/anderson-reges", href: "https://www.linkedin.com/in/anderson-reges/", external: true },
  { key: { en: "email", pt: "email" }, value: "andersonreges76@gmail.com", href: "mailto:andersonreges76@gmail.com", external: false },
  { key: { en: "whatsapp", pt: "whatsapp" }, value: "+55 88 99340-8548", href: "https://wa.me/5588993408548", external: true },
  // Served from public/ANDERSON_REGES_RESUME.pdf (anything in public/ is at the root).
  { key: { en: "resume", pt: "currículo" }, value: "resume.pdf", href: "/ANDERSON_REGES_RESUME.pdf", external: true },
];

export interface SectionMeta {
  /** Anchor id, e.g. `s0`. */
  id: string;
  /** Two-digit index label shown in the nav. */
  ix: string;
  /** Command typed at the top of the section. */
  cmd: string;
  /** Short nav label (kept in English — it mirrors the command). */
  nav: string;
}

export const sections: readonly SectionMeta[] = [
  { id: "s0", ix: "01", cmd: "whoami", nav: "whoami" },
  { id: "s1", ix: "02", cmd: "cat stack.txt", nav: "stack" },
  { id: "s2", ix: "03", cmd: "ls projects/", nav: "projects" },
  { id: "s3", ix: "04", cmd: "cat about.md", nav: "about" },
  { id: "s4", ix: "05", cmd: "cat contact.txt", nav: "contact" },
];

export const prompt = {
  user: "anderson@reges",
  path: "~",
  sign: "$",
} as const;

export const ui = {
  scroll: { en: "scroll", pt: "rolar" },
  copyright: {
    en: "© 2022—2026 anderson reges · built in the terminal",
    pt: "© 2022—2026 anderson reges · feito no terminal",
  },
} satisfies Record<string, Localized>;

export const siteMeta = {
  title: "anderson reges — portfolio",
  description: "full stack developer · technology enthusiast",
} as const;
