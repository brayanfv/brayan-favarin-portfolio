import type { Locale } from "@/i18n/config";
import type { SectionKey } from "@/i18n/routing";
import type { Experience } from "@/types/experience";
import type { PersonalData, QuickFact } from "@/types/personal";
import type { Project, ProjectStackCategory } from "@/types/project";
import type { TechnologyGroup } from "@/types/technology";

export interface ContactHighlight {
  description: string;
  icon: "briefcase" | "clock" | "sparkles";
  title: string;
}

export interface ContactFormCopy {
  email: {
    emailLabel: string;
    heading: string;
    messageLabel: string;
    nameLabel: string;
    originLabel: string;
    originValue: string;
    subjectPrefix: string;
  };
  feedback: {
    genericError: string;
    invalidFields: string;
    processingError: string;
    success: string;
  };
  fields: {
    email: string;
    message: string;
    name: string;
    website: string;
  };
  send: string;
  sending: string;
  validation: {
    emailInvalid: string;
    emailMax: string;
    messageMax: string;
    messageMin: string;
    nameMax: string;
    nameMin: string;
  };
}

export interface ExperienceCopy {
  items: readonly Experience[];
  labels: {
    competencies: string;
    context: string;
    current: string;
    technologies: string;
    technologyList: string;
    timeline: string;
  };
  section: { description: string; eyebrow: string; title: string };
}

export interface ProjectCopy {
  architectureSupportingItems: string;
  breadcrumb: { home: string; label: string; projects: string };
  card: { caseStudy: string; code: string; deploy: string };
  contact: { button: string; eyebrow: string };
  gallery: { description: string; objective: string; title: string };
  links: {
    availableDescription: string;
    code: string;
    deploy: string;
    documentation: string;
    unavailableDescription: string;
  };
  navigation: {
    next: string;
    nextProject: string;
    previous: string;
    previousProject: string;
    returnToProjects: string;
  };
  overview: {
    context: string;
    heading: string;
    objective: string;
    projectType: string;
    role: string;
    status: string;
    title: string;
    year: string;
  };
  sections: readonly string[];
  stackCategories: Record<ProjectStackCategory, string>;
  statusPrefix: string;
  statusLabels: Record<Project["status"], string>;
}

export interface UiCopy {
  aboutAsideLabel: string;
  footer: { backToTop: string; builtWith: string; copyright: string };
  hero: { panelActive: string; panelFile: string; panelFrom: string; panelTo: string; projects: string; resume: string };
  languageSwitcher: { label: string; localeLabels: Record<Locale, string> };
  navigation: {
    closeMenu: string;
    contact: string;
    items: Record<Exclude<SectionKey, "home">, string>;
    mainLabel: string;
    mobileContact: string;
    mobileLabel: string;
    openMenu: string;
  };
  notFound: { description: string; eyebrow: string; home: string; projects: string; title: string };
  project: ProjectCopy;
  skipToContent: string;
  socialLinksLabel: string;
  technology: { complementary: string; focus: string; primary: string; primaryPrefix: string; practices: string };
}

export interface LocaleContent {
  contact: {
    channelsLabel: string;
    description: readonly string[];
    eyebrow: string;
    form: ContactFormCopy;
    highlights: readonly ContactHighlight[];
    title: string;
  };
  experiences: ExperienceCopy;
  locale: Locale;
  metadata: { description: string; keywords: readonly string[]; openGraphAlt: string; title: string };
  personal: PersonalData;
  projects: { items: readonly Project[]; section: { description: string; eyebrow: string; title: string } };
  quickFacts: readonly QuickFact[];
  sections: Record<SectionKey, string>;
  technologies: {
    focusDescription: string;
    groups: readonly TechnologyGroup[];
    practicesDescription: string;
    section: { description: string; eyebrow: string; title: string };
  };
  ui: UiCopy;
}
