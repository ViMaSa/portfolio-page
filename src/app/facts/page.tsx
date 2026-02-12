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
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">Facts Mode</h1>
          <p className="text-white/80">
            <span className="font-semibold">Victor Sarmiento</span> — infrastructure-minded engineer who ships
          </p>
          <p className="text-white/60">
            Backend systems · search/workflows · ranking logic · reliability habits
          </p>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold tracking-widest text-white/70">CORE SKILLS</h2>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>
                <span className="text-white/55">Languages:</span> TypeScript/JavaScript · Python · SQL
              </p>
              <p>
                <span className="text-white/55">Web:</span> Next.js · React · Tailwind · Node.js
              </p>
              <p>
                <span className="text-white/55">Backend:</span> REST APIs · Auth/JWT · Supabase RPC · Data modeling
              </p>
              <p>
                <span className="text-white/55">DB:</span> PostgreSQL · Views · Query abstractions
              </p>
              <p>
                <span className="text-white/55">Systems:</span> Ranking logic · Search intent routing · Debugging/RCA · CI/CD (GitHub → Vercel)
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold tracking-widest text-white/70">FOCUS</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/80">
              <li>Backend-leaning full-stack systems</li>
              <li>Data workflows and logic close to the DB layer</li>
              <li>Search and ranking pipelines</li>
              <li>Designing for constraints, maintainability, and reliability</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-sm font-semibold tracking-widest text-white/70">PROJECTS</h2>
          <div className="mt-4 grid gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold tracking-widest text-white/70">EXPERIENCE — HOME SAVVY DEALS (CONTRACT)</h2>
            <p className="mt-3 text-sm text-white/75">
              Next.js · Tailwind · Supabase (RPC + Views) · Vercel
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/80">
              <li>Implemented weighted ranking logic balancing monetization constraints with recency scoring</li>
              <li>Encapsulated selection/ranking logic via Supabase RPC + DB views</li>
              <li>Improved search flow by classifying intent (direct URL vs similarity lookup)</li>
              <li>In progress: background search execution to reduce perceived latency</li>
              <li>Shipped via PR-based Vercel preview deployments; mobile-responsive UI components</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold tracking-widest text-white/70">EXPERIENCE — SILVERSHEET</h2>
            <p className="mt-3 text-sm text-white/75">
              Software Engineer (2019–2021) — Rails · React · PostgreSQL · AWS
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/80">
              <li>Built automation pipeline (PDF → structured mappings → S3) reducing processing from days to hours</li>
              <li>Standardized form taxonomy to reduce mapping time and improve maintainability</li>
              <li>Shipped behind feature flags; debugged launch blockers and cross-browser issues</li>
              <li>Authored 20+ RCAs; monitored production via Airbrake</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold tracking-widest text-white/70">EXPERIENCE — MGM</h2>
            <p className="mt-3 text-sm text-white/75">Workforce Management — 24/7 operational systems</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/80">
              <li>Operate within real-time constraint systems (coverage, compliance, fairness)</li>
              <li>Escalations + reliability mindset: what breaks, why it breaks, how to prevent repeats</li>
              <li>Translate business rules into consistent, auditable workflow behavior</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold tracking-widest text-white/70">RESEARCH — HIGH-FREQUENCY DATA WORK</h2>
            <p className="mt-3 text-sm text-white/75">Numerical modeling · noise handling · performance trade-offs</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/80">
              <li>Implemented numerical integration to derive velocity/position from acceleration signals</li>
              <li>Handled noise/smoothing to stabilize computed series</li>
              <li>Worked with high-rate (1000 Hz) time-series data and multi-trial aggregation</li>
              <li>Assisted with visualization workflow + complexity evaluation</li>
            </ul>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
