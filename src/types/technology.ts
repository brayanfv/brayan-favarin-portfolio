export type TechnologyCategory =
  | "Backend"
  | "Frontend"
  | "Bancos de dados"
  | "Ferramentas e DevOps"
  | "Práticas";

export interface Technology {
  name: string;
  category: TechnologyCategory;
  icon?: string;
  highlighted?: boolean;
  description?: string;
  order?: number;
}

export interface TechnologyGroup {
  category: TechnologyCategory;
  items: readonly Technology[];
}
