export interface Experience {
  company: string;
  role: string;
  context?: string;
  period: string;
  description: readonly string[];
  competencies: readonly string[];
  technologies?: readonly string[];
  current?: boolean;
  order?: number;
}
