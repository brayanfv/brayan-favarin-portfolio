export interface HeroContent {
  description: readonly string[];
  featuredTechnologies: readonly string[];
  technicalFlow: readonly {
    detail: string;
    label: string;
  }[];
  titleHighlight: string;
  titleLead: string;
}

export interface AboutContent {
  eyebrow: string;
  paragraphs: readonly string[];
  title: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface PersonalData {
  about: AboutContent;
  area: string;
  availability: string;
  brand: string;
  education: string;
  focus: string;
  hero: HeroContent;
  location: string;
  name: string;
  role: string;
}
