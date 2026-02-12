// src/app/story/page.tsx
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[rgb(var(--story-bg))] text-emerald-50 font-story">
      <SiteHeader active="story" />

      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <header className="space-y-4">
          <p className="text-emerald-50/75 font-script text-2xl">My Engineering Story</p>
          <h1 className="text-4xl font-semibold tracking-tight">
            I like problems where structure matters.
          </h1>
          <p className="text-emerald-50/80 leading-7">
            I’m web-focused, but I’m most motivated by the backend logic and system behavior behind the UI —
            performance, constraints, and workflows that stay reliable over time.
          </p>
        </header>

        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">THE THROUGHLINE</h2>
          <p>
            Across research, production software, and operations work, I’ve kept ending up in the same categories of problems:
            turning messy inputs into consistent outputs, modeling constraints explicitly, and building systems that behave predictably.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">HIGH-FREQUENCY DATA WORK — FOUNDATIONS</h2>
          <p>
            In a UNLV biomechanics lab setting, I contributed to a high-frequency (1000 Hz) data processing workflow.
            My work included numerical integration to derive velocity and position from acceleration signals, and handling noise/smoothing
            to stabilize computed series.
          </p>
          <p className="text-emerald-50/70">
            The important part for me wasn’t the domain — it was learning how real data behaves, and how computation choices impact correctness and performance.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">PRODUCTION ENGINEERING — SILVERSHEET</h2>
          <p>
            At Silversheet, I worked on production systems supporting healthcare enrollment workflows. I contributed to automation that
            converted PDFs into structured mappings and stored them in AWS — turning a multi-day manual process into something that ran in hours.
          </p>
          <p>
            That’s where I learned production discipline: feature flags, debugging launch blockers, monitoring incidents,
            and writing RCAs so the same class of failure doesn’t repeat.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">CONSTRAINTS MINDSET — MGM</h2>
          <p>
            Working in workforce management in a 24/7 environment strengthened my systems thinking. Constraints, dependencies,
            and edge cases aren’t theoretical — they’re the difference between a system that works and one that breaks under pressure.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">SHIPPING NOW — HOME SAVVY DEALS (CONTRACT)</h2>
          <p>
            I currently contribute to HomeSavvyDeals (Next.js + Supabase deployed on Vercel). My work focuses on ranking logic and search workflows,
            keeping key logic close to the data layer with Supabase RPC and database views.
          </p>

          <div className="rounded-2xl border border-emerald-50/10 bg-black/20 p-6">
            <p className="font-script text-2xl text-emerald-50/85">
              “Keep the UI thin. Put the logic where it belongs.”
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-emerald-50/80">
              <li>Weighted ranking logic balancing monetization constraints with recency scoring</li>
              <li>Supabase RPC + views to encapsulate selection logic and reduce frontend complexity</li>
              <li>Search intent routing (direct URL vs similarity lookup)</li>
              <li>In progress: background search execution to reduce perceived latency</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">WHERE I’M GOING</h2>
          <p>
            I’m leaning into infrastructure-adjacent backend work: systems where performance, correctness, and constraints intersect —
            search/ranking pipelines, workflow engines, and data-heavy services that make product behavior reliable at scale.
          </p>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
