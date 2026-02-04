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
          <p className="text-white/70">
            Full-Stack Developer · Systems-Focused Engineer · CS Student @ UNLV
          </p>
          <p className="text-white/55">
            Backend-driven systems, workflow modeling, production engineering habits.
          </p>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold tracking-widest text-white/70">CORE SKILLS</h2>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <p><span className="text-white/50">Languages:</span> JavaScript/TypeScript · Python · SQL · C/C++</p>
              <p><span className="text-white/50">Backend:</span> Node.js · Express · REST APIs · JWT · DB Design</p>
              <p><span className="text-white/50">Frontend:</span> React · Next.js · Vue</p>
              <p><span className="text-white/50">Databases:</span> PostgreSQL · Relational Modeling</p>
              <p><span className="text-white/50">Systems:</span> RBAC · Workflow Integrity · Debugging/RCA · Agile</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold tracking-widest text-white/70">FOCUS</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
              <li>Backend systems & API design</li>
              <li>Data modeling & relational integrity</li>
              <li>Workflow-driven applications</li>
              <li>Production reliability habits</li>
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
            <h2 className="text-sm font-semibold tracking-widest text-white/70">EXPERIENCE — SILVERSHEET</h2>
            <p className="mt-3 text-sm text-white/75">
              Software Engineer (2019–2021) — Rails · React · PostgreSQL · AWS
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
              <li>Shipped production features across backend and frontend systems</li>
              <li>Debugged cross-browser/device issues; authored 50+ RCAs</li>
              <li>Monitored production incidents (AWS Airbrake)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold tracking-widest text-white/70">EXPERIENCE — MGM</h2>
            <p className="mt-3 text-sm text-white/75">
              Workforce Management Specialist — operational scheduling systems
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
              <li>Operate within large-scale scheduling and workforce systems</li>
              <li>Manage real-time constraints and coverage requirements</li>
              <li>Work with rule-based logic, exceptions, and optimization</li>
            </ul>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
