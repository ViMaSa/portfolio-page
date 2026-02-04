import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[rgb(var(--story-bg))] text-emerald-50 font-story">
      <SiteHeader active="story" />

      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <header className="space-y-4">
          <p className="text-emerald-50/70 font-script text-2xl">My Engineering Story</p>
          <h1 className="text-4xl font-semibold tracking-tight">
            I’m interested in building systems that work.
          </h1>
          <p className="text-emerald-50/75 leading-7">
            This is the narrative version of my background — what I learned in production, how operations shaped my mindset,
            and why I’m drawn to backend architecture and workflow-driven software.
          </p>
        </header>

        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">THE START</h2>
          <p>
            My path into software engineering has always been tied to real-world systems, not just classroom exercises.
            I’m drawn to the structure behind complex operations — the rules, constraints, and workflows that make big environments function.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">PRODUCTION ENGINEERING — SILVERSHEET</h2>
          <p>
            At Silversheet, I worked as a Software Engineer on a production healthcare workforce platform used by hospitals.
            That’s where I learned what production software really means: reliability, debugging, and making changes that won’t break the system tomorrow.
          </p>
          <p>
            I worked across Ruby on Rails, React, PostgreSQL, and AWS, and wrote 50+ root cause analyses to understand failures at the system level — not just fix symptoms.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">SYSTEMS THINKING — MGM WORKFORCE</h2>
          <p>
            I also work in Workforce Management at MGM Resorts, operating inside large-scale scheduling systems where constraints and trade-offs are constant.
            That environment strengthened my systems thinking: dependencies, edge cases, and decisions under real operational pressure.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">WHY I BUILD</h2>
          <p>
            I’m most interested in backend architecture, data modeling, APIs, and workflow-driven systems.
            I like turning messy processes into structured systems that behave predictably over time.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">THE PROJECT — H.O.S.T.</h2>
          <p>
            To combine production engineering habits with an operations mindset, I built the H.O.S.T. System —
            a full-stack service ticketing platform modeled around real workflows.
          </p>
          <div className="rounded-2xl border border-emerald-50/10 bg-black/20 p-6">
            <p className="font-script text-2xl text-emerald-50/80">
              “Model the system first — then build the software to support it.”
            </p>
            <p className="mt-3 text-emerald-50/75">
              Authentication, role-based permissions, workflow state transitions, and relational modeling designed for integrity.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">WHERE I’M GOING</h2>
          <p>
            I’m deepening my CS foundations while continuing to build systems. My goal is to grow into a backend/systems-focused
            engineer building software that supports real operations at scale.
          </p>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
