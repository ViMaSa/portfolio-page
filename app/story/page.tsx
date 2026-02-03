import Link from "next/link";
import Container from "../components/Container";
import Section from "../components/Section";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Container>
        <nav className="text-sm text-neutral-400">
          <Link href="/" className="hover:text-neutral-200">← Home</Link>
        </nav>

        <header className="mt-6 space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">Story Mode</h1>
          <p className="text-neural-300">
            How I think, what I've learned, and the systems I like to build.
          </p>
        </header>

        <Section title="I didn't learn engineering from tutorials - I learned it from systems">
          <p>
            My path into software engineering has always been tied to real-world systems, not just classroom exercises.
            I'm drawn to the structure behind complex operations - the rules, constraints, and workflows that make
            big environments function.
          </p>
        </Section>

        <Section title="Production engineering at Silversheet">
          <p>
            At Silversheet, I worked as a Software Engineer on a production healthcare workforce platform used by hospitals.
            That's where I learned what production software really means: reliability, debugging, and designing changes
            that won't break the system tomorrow.
          </p>
          <p>
            I worked across Ruby on Rails, React, PostgreSQL, and AWS, and wrote 50+ root cause analyses to understand failures at the system level - not just fix symptoms.
          </p>
        </Section>

        <Section title="Systems thinking beyond code">
          <p>
            I also work in Workforce management at MGM Resorts, operating inside large-scale scheduling systems where
            constraints and trade-offs are constant. That environment strengthened my systems thinking: dependencies,
            edge cases, and decisions under real operational pressure.
          </p>
        </Section>

        <Section title="Why I build software">
          <p>
            I'm most interested in backend architecture, data modeling, APIs, and workflow-driven systems.
            I like turning messy processes into structured systems that behave predictably over time.
          </p>
        </Section>

        <Section title="Bringing it together - the H.O.S.T. system">
          <p>
            To combine production engineering habits with an operations mindset, I built the H.O.S.T. System -
            a full-stack service ticketing platform modeled around real workflows.
          </p>
          <p className="text-neutral-400">
            It includes authentication, role-based permissions, ticket lifecycle logic, and relational data modeling
            designed for workflow integrity.
          </p>
        </Section>

        <Section title="Where I'm going">
          <p>
            I'm deepening my CS foundation while continuing to bild systems. My goal is to grow into a backend/systems-focused
            engineer building software that supports real operations at scale.
          </p>
        </Section>
      </Container>
    </main>
  );
}
