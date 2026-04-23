// src/app/facts/page.tsx
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function FactsPage() {
  return (
    <main className="min-h-screen bg-[rgb(var(--facts-bg))] text-white font-facts">
      <SiteHeader active="facts" />

      <div className="mx-auto w-full max-w-5xl px-6 py-12">

        {/* HERO */}
        <header className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">Facts Mode</h1>

          <div className="space-y-2">
            <p className="text-2xl font-semibold text-white">
              Victor Sarmiento
            </p>

            <p className="text-white/85 text-base leading-7 max-w-3xl">
              Software Engineer focused on backend systems, data workflows,
              and scalable products.
            </p>

            <p className="text-sm text-white/60">
              Former Software Engineer at Silversheet | Contractor shipping live product
              features | Computer Science @ UNLV
            </p>
          </div>
        </header>

        {/* EXPERIENCE */}
        <section className="mt-12">
          <h2 className="text-sm font-semibold tracking-widest text-white/70">
            EXPERIENCE
          </h2>

          <div className="mt-4 grid gap-6 md:grid-cols-2">

            {/* HOME SAVVY DEALS */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold tracking-widest text-white/70">
                HOME SAVVY DEALS (CONTRACT)
              </h3>

              <p className="mt-3 text-sm text-white/60">
                Next.js | Tailwind | Supabase | PostgreSQL | Vercel
              </p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-white/80">
                <li>
                  Implemented ranking logic balancing monetization goals,
                  relevance, and recency
                </li>
                <li>
                  Moved selection logic into database RPC functions and views
                  for cleaner architecture
                </li>
                <li>
                  Improved search flow by classifying user intent
                  (direct URL vs discovery lookup)
                </li>
                <li>
                  Built responsive UI components and shipped through PR-based
                  preview deployments
                </li>
                <li>
                  Contributed to a live product experience with real business
                  constraints
                </li>
              </ul>
            </div>

            {/* SILVERSHEET */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold tracking-widest text-white/70">
                SILVERSHEET
              </h3>

              <p className="mt-3 text-sm text-white/60">
                Software Engineer (2019–2021) | Rails | React | PostgreSQL | AWS
              </p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-white/80">
                <li>
                  Built automation pipeline converting PDFs into structured
                  mappings stored in AWS S3
                </li>
                <li>
                  Reduced internal processing time from days to hours
                </li>
                <li>
                  Shipped behind feature flags and resolved launch blockers
                  across browsers/devices
                </li>
                <li>
                  Authored 20+ root cause analyses and monitored production
                  issues through Airbrake
                </li>
                <li>
                  Worked in Agile engineering environment with sprint planning
                  and releases
                </li>
              </ul>
            </div>

            {/* MGM */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold tracking-widest text-white/70">
                MGM RESORTS INTERNATIONAL
              </h3>

              <p className="mt-3 text-sm text-white/60">
                Workforce Management Specialist
              </p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-white/80">
                <li>
                  Managed real-time workforce operations across large
                  multi-department environments
                </li>
                <li>
                  Balanced coverage, demand, compliance, and fairness
                  constraints daily
                </li>
                <li>
                  Developed strong systems-thinking around dependencies,
                  escalations, and reliability
                </li>
                <li>
                  Operated in fast-moving environments where mistakes have real
                  downstream impact
                </li>
              </ul>
            </div>

            {/* RESEARCH */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold tracking-widest text-white/70">
                HIGH-FREQUENCY DATA WORK
              </h3>

              <p className="mt-3 text-sm text-white/60">
                Numerical Modeling | Time-Series Data | Performance Analysis
              </p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-white/80">
                <li>
                  Processed 1000 Hz sensor datasets using numerical integration
                  techniques
                </li>
                <li>
                  Converted noisy acceleration signals into usable velocity and
                  position outputs
                </li>
                <li>
                  Applied smoothing / noise reduction methods for stable
                  analysis
                </li>
                <li>
                  Assisted with data visualization and computational evaluation
                  workflows
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-12">
          <h2 className="text-sm font-semibold tracking-widest text-white/70">
            PROJECTS
          </h2>

          <div className="mt-4 grid gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        {/* CORE SKILLS */}
        <section className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold tracking-widest text-white/70">
              CORE SKILLS
            </h2>

            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>
                <span className="text-white/55">Languages:</span>{' '}
                TypeScript / JavaScript · Python · SQL · Ruby
              </p>

              <p>
                <span className="text-white/55">Frontend:</span>{' '}
                Next.js · React · Tailwind CSS
              </p>

              <p>
                <span className="text-white/55">Backend:</span>{' '}
                Node.js · REST APIs · Auth/JWT · Supabase · Server-side logic
              </p>

              <p>
                <span className="text-white/55">Database:</span>{' '}
                PostgreSQL · Schema Design · Views · RPC Functions · Query Optimization
              </p>

              <p>
                <span className="text-white/55">Engineering:</span>{' '}
                Debugging · RCA Analysis · CI/CD · Feature Delivery · Reliability Thinking
              </p>
            </div>
          </div>

          {/* FOCUS */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold tracking-widest text-white/70">
              FOCUS
            </h2>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-white/80">
              <li>Backend-leaning full-stack systems</li>
              <li>Data workflows and business logic close to the DB layer</li>
              <li>Search, retrieval, and ranking pipelines</li>
              <li>Designing for constraints, maintainability, and scale</li>
              <li>Shipping practical software that solves real problems</li>
            </ul>
          </div>

        </section>

        {/* OPEN TO */}
        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-sm font-semibold tracking-widest text-white/70">
            OPEN TO
          </h2>

          <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-white/80">
            <li>Software Engineering Internships</li>
            <li>Early Career SWE Roles</li>
            <li>Backend / Full Stack Positions</li>
            <li>Platform / Data Systems Roles</li>
            <li>Las Vegas · Seattle · Remote</li>
          </ul>
        </section>

      </div>

      <SiteFooter />
    </main>
  );
}