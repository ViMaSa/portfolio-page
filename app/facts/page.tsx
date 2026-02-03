import Link from "next/link";
import Container from "../components/Container";
import Section from "../components/Section";

export default function FactsPage() {
  return(
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Container>
        <nav className="text-sm text-neutral-400">
          <Link href="/" className="hover:text-neutral-200">← Home</Link>
        </nav>

        <header className="mt-6 space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">Facts Mode</h1>
          <p className="text-neutral-300">
            Full-Stack Developer · Systems-Focused Engineer · CS Student @ UNLV
          </p>
          <p className="text-neutral-400">
            I build backend-driven software systems that model real operational workflows.
          </p>
        </header>

        <Section title="Core Skills">
          <p><span className="text-neutral-400">Languages:</span> JavaScript/TypeScript · Python · SQL · C/C++</p>
          <p><span className="text-neutral-400">Backend:</span> Node.js · Express · REST APIs · JWT AUTH · DB Design</p>
          <p><span className="text-neutral-400">Frontend:</span> React · Next.js · Vue · Responsive UI</p>
          <p><span className="text-neutral-400">Databases:</span> PostgreSQL · Relational Modeling</p>
          <p><span className="text-neutral-400">Systems:</span> Workflow Modeling · RBAC · Debugging/RCA · Agile</p>
        </Section>

        <Section title="Selected Project">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-semibold">Hotel Operations Service Ticketing (H.O.S.T.) System</h3>
            <p className="mt-2 text-neutral-300">
              Full-stack operational workflow platform for issue reporting, assignment, and resolution.
            </p>
            <p className="mt-3 text-sm text-neutral-400">
              Tech: Node.js · Express · PostgreSQL · React/Vue · JWT
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-200/90">
              <li>Deesigned relational schema for tickets, roles, priorities, and statuses</li>
              <li>Built REST APIs for ticket lifecycle operations (create/assign/resolve)</li>
              <li>Implemented auth + role-based access control</li>
              <li>Structured workflow state transitions for integrity</li>
            </ul>
          </div>
        </Section>

        <Section title="Experience">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold"> Software Engineer - Silversheet (2019-2021)</h3>
              <p className="text-neutral-400"> Ruby on Rails · React · PostgreSQL · AWS</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-neutral-200/90">
                <li>Shipped production features across backend and frontend</li>
                <li>Debugged issues across devices/browsers; wrote +50 RCAs</li>
                <li>Monitored production incidents (AWS Airbrake)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Workforce Management Specialist - MGM Resorts</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-neutral-200/90">
                <li>Operate within large-scale scheduling and workforce systems</li>
                <li>Manage real-time constraints and coverage requirements</li>
                <li>Work with rules, exceptions, and operational optimization</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Links">
          <ul className="list-disc pl-5">
            <li><a className="text-neutral-200 underline underline-offset-4 hover:text-white" href="#">Resume</a></li>
            <li><a className="text-neutral-200 underline underline-offset-4 hover:text-white" href="https://github.com/ViMaSa">GitHub</a></li>
            <li><a className="text-neutral-200 underline underline-offset-4 hover:text-white" href="https://www.linkedin.com/in/vimasa/">LinkedIn</a></li>
          </ul>
        </Section>
      </Container>
    </main>
  );
}
