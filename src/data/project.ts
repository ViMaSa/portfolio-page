// src/data/project.ts
export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  tech: string[];
  bullets: string[];
  links?: {
    demo?: string;
    repo?: string;
  };
};
