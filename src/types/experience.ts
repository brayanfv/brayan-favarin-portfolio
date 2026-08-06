export interface Experience {
  company: string;
  role: string;
  period: string;
  description: readonly string[];
  responsibilities: readonly string[];
  technologies?: readonly string[];
  skills?: readonly string[];
  current?: boolean;
  order?: number;
}
