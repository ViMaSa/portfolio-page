export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  tech: string[];
  bullets: string[];
  links?: {
    repo?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'host',
    name: 'H.O.S.T. System',
    oneLiner: 'Full-stack operational ticketing workflow platform.',
    tech: ['Node.js', 'Express', 'PostreSQL', 'JWT', 'React/Vue'],
    bullets: [
      'Designed relational schema for tickets, roles, priorities, and status transitions',
      'Built REST APIs to support the ticket lifecycle (create, assign, resolve)',
      'Implemented authentication + role-based access control',
      'Modeled backend logic around workflow integrity and state change',
    ],
    links: {

    },
  },
];
