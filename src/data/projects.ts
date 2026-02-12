// src/data/projects.ts
import type { Project } from './project';

export const projects: Project[] = [
  {
    slug: 'homesavvydeals',
    name: 'HomeSavvyDeals (Contract)',
    oneLiner: 'Ranking logic + search workflow design for an affiliate discovery platform.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase (RPC + Views)', 'Vercel'],
    bullets: [
      'Implemented weighted ranking logic balancing monetization constraints with recency scoring',
      'Encapsulated selection and ranking logic via Supabase RPC; modeled DB views for clean abstractions',
      'Improved search workflow by classifying intent (direct URL vs similarity lookup)',
      'In progress: background search execution to reduce perceived latency',
    ],
    links: {
      demo: 'https://homesavvydeals.com',
    },
  },
  {
    slug: 'host',
    name: 'H.O.S.T. (Hotel Ops Service Ticketing)',
    oneLiner: 'Workflow-driven ticketing system built from real operational pain points.',
    tech: ['Node/Express', 'React/Vue', 'PostgreSQL', 'Auth', 'Deployment'],
    bullets: [
      'Designed a ticket workflow focused on reliability, ownership, and operational clarity',
      'Implemented authentication and role-based behaviors for different users',
      'Modeled relational data and optimized queries for common operational views',
      'Shipped an end-to-end product experience (create → triage → resolve → report)',
    ],
    links: {
      repo: 'https://github.com/ViMaSa/hotel-operations-service-ticketing',
    },
  },
  {
    slug: 'portfolio',
    name: 'ViMaSa.dev Portfolio',
    oneLiner: 'Dual-mode portfolio: Facts for recruiters, Story for narrative context.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    bullets: [
      'Designed a split landing experience optimized for both skimmers and deep readers',
      'Built reusable components and consistent visual identity across modes',
      'Focused on clarity, accessibility, and mobile-first behavior',
    ],
  },
  {
    slug: 'research',
    name: 'High-Frequency Data Processing (Research)',
    oneLiner: 'Time-series numerical integration + noise handling for 1000 Hz biomechanical datasets.',
    tech: ['Time-series', 'Numerical integration', 'Noise handling', 'Visualization workflows'],
    bullets: [
      'Implemented numerical integration to derive velocity/position from acceleration signals',
      'Handled noise/smoothing to stabilize computed series and improve interpretability',
      'Assisted with complexity evaluation and automated visualization outputs',
    ],
  },
];
