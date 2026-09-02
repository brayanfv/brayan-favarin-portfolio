export type TechnologyCategory =
  | "backend"
  | "database"
  | "frontend"
  | "practices"
  | "tools";

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
  label: string;
}
