// src/app/story/page.tsx
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[rgb(var(--story-bg))] text-emerald-50 font-story">
      <SiteHeader active="story" />

      <div className="mx-auto w-full max-w-4xl px-6 py-12">
        {/* HERO */}
        <header className="grid gap-8 md:grid-cols-[160px,1fr] md:items-center">
          <div className="relative h-40 w-40 overflow-hidden rounded-3xl border border-emerald-50/10 bg-black/20">
            <Image
              src="/images/headshot.png"
              alt="Victor Sarmiento headshot"
              fill
              className="object-cover"
              priority
              sizes="160px"
            />
          </div>

          <div className="space-y-4">
            <p className="text-emerald-50/70 font-script text-2xl">My Engineering Story</p>
            <h1 className="text-4xl font-semibold tracking-tight">
              I’m interested in building systems that work — under real constraints.
            </h1>
            <p className="text-emerald-50/75 leading-7">
              I’m a systems-leaning full-stack engineer: backend APIs, data workflows, search, and reliability habits
              learned from production environments. I like turning messy processes into predictable software.
            </p>
          </div>
        </header>

        {/* QUICK SNAPSHOT */}
        <section className="mt-10 rounded-2xl border border-emerald-50/10 bg-black/20 p-6">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">
            WHAT I CARE ABOUT
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-50/10 bg-black/20 p-5">
              <p className="text-emerald-50/90 font-semibold">Systems & workflows</p>
              <p className="mt-2 text-sm text-emerald-50/75 leading-6">
                Clear state transitions, role boundaries, and software that doesn’t drift into chaos.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-50/10 bg-black/20 p-5">
              <p className="text-emerald-50/90 font-semibold">Data & search</p>
              <p className="mt-2 text-sm text-emerald-50/75 leading-6">
                Modeling data cleanly, building query paths that scale, and improving discovery.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-50/10 bg-black/20 p-5">
              <p className="text-emerald-50/90 font-semibold">Production habits</p>
              <p className="mt-2 text-sm text-emerald-50/75 leading-6">
                Debugging with intent, writing things down, and making changes that hold up tomorrow.
              </p>
            </div>
          </div>
        </section>

        {/* THE ARC */}
        <section className="mt-12 space-y-6">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">THE ARC</h2>

          <div className="space-y-4 text-emerald-50/80 leading-7">
            <p>
              I didn’t fall in love with software because it’s “cool.” I fell in love with it because it’s the cleanest
              way I know to make complex operations reliable.
            </p>
            <p>
              I’m at my best when there are real constraints: time, data quality, edge cases, and people depending on the
              output.
            </p>
          </div>
        </section>

        {/* SILVERSHEET */}
        <section className="mt-12 grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-4 text-emerald-50/80 leading-7">
            <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">
              PRODUCTION ENGINEERING — SILVERSHEET
            </h2>

            <p>
              At Silversheet (AMN Healthcare), I learned what “production” really means: changes have consequences,
              and reliability is a feature.
            </p>

            <p>
              I worked across web systems (Rails + frontend + database-backed behavior), spent a lot of time debugging
              cross-browser/device issues, and built the habit of understanding failures at the system level — not just
              patching symptoms.
            </p>

            <p className="text-sm text-emerald-50/65">
              The takeaway: I’m calm in real systems. I like root causes, not band-aids.
            </p>
          </div>

          <figure className="rounded-2xl border border-emerald-50/10 bg-black/20 p-4">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl">
              <Image
                src="/images/silversheet_company_outing_2019.JPG"
                alt="Silversheet team outing"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 520px, 100vw"
              />
            </div>
            <figcaption className="mt-3 text-xs text-emerald-50/60">
              Silversheet — learning what “shipping” means when users depend on it.
            </figcaption>
          </figure>
        </section>

        {/* MGM */}
        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">
            SYSTEMS THINKING — MGM WORKFORCE
          </h2>

          <p>
            In Workforce Management, I operate inside large scheduling systems where trade-offs are constant:
            coverage, demand, rules, exceptions, and handoffs across teams. That environment sharpened how I think about
            software: dependencies, failure modes, and designing for the real world.
          </p>

          <p className="text-sm text-emerald-50/65">
            The takeaway: I naturally think in constraints, invariants, and “what breaks first?”
          </p>
        </section>

        {/* RESEARCH */}
        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">
            RESEARCH MINDSET — DATA PROCESSING & SIGNAL NOISE
          </h2>

          <p>
            Earlier on, I contributed to biomechanics research where we needed to process large force-platform datasets.
            My part of the work leaned into the engineering: numerical integration, handling noise, and turning raw signals
            into meaningful velocity/position curves.
          </p>

          <p className="text-sm text-emerald-50/65">
            The takeaway: I enjoy the “messy data to useful output” problem — and the trade-offs that come with it.
          </p>
        </section>

        {/* HOMESAVVY + HOST */}
        <section className="mt-12 space-y-6">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">
            WHAT I’M BUILDING NOW
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-50/10 bg-black/20 p-6">
              <p className="text-emerald-50/90 font-semibold">HomeSavvyDeals — contractor work</p>
              <p className="mt-3 text-sm text-emerald-50/75 leading-6">
                I’ve been contributing to a live affiliate product experience: mixing affiliate and non-affiliate items,
                improving search flow, and using Supabase RPC/views to support retrieval and ranking behavior.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-emerald-50/75">
                <li>Built a mixed product carousel with a target affiliate share</li>
                <li>Used recency-weighting to bias fresh inventory</li>
                <li>Improved search to distinguish “URL lookup” vs “similar product” intent</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-50/10 bg-black/20 p-6">
              <p className="text-emerald-50/90 font-semibold">H.O.S.T. — workflow-first system design</p>
              <p className="mt-3 text-sm text-emerald-50/75 leading-6">
                H.O.S.T. started from an operations mindset: define roles, states, and invariants first — then build
                the software to enforce it.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-emerald-50/75">
                <li>Relational modeling for tickets, roles, priorities, and state transitions</li>
                <li>APIs built around lifecycle integrity (create → assign → resolve)</li>
                <li>Authentication + role-based permissions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TECH HUBS */}
        <section className="mt-12 grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-4 text-emerald-50/80 leading-7">
            <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">
              WHERE I WANT TO GROW
            </h2>

            <p>
              I’m aiming for teams that build infrastructure-ish product surfaces: backend platforms, data/search
              workflows, reliability-minded feature development — the places where strong engineering habits matter.
            </p>

            <p>
              I’m open to tech hubs and strong engineering orgs (Seattle is one example), as well as Las Vegas or remote.
              What I care about most is being in an environment where I can ship, learn, and grow into bigger systems.
            </p>

            <p className="text-sm text-emerald-50/65">
              One reason I like major tech markets: they concentrate dense engineering ecosystems and high standards.{" "}
              (For example, CBRE consistently ranks places like the SF Bay Area, Seattle, and NYC among the top tech
              talent markets.)
            </p>
          </div>

          <figure className="rounded-2xl border border-emerald-50/10 bg-black/20 p-4">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl">
              <Image
                src="/images/microsoft_office_visit.JPG"
                alt="Victor outside the Microsoft sign in Redmond"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 520px, 100vw"
              />
            </div>
            <figcaption className="mt-3 text-xs text-emerald-50/60">
              Visiting a big-engineering campus — a reminder of the kind of environment I’m working toward.
            </figcaption>
          </figure>
        </section>

        {/* PERSONAL (CONTROLLED) */}
        <section className="mt-12 space-y-4 text-emerald-50/80 leading-7">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-50/70">
            OUTSIDE THE EDITOR
          </h2>

          <p>
            I’m happiest when I’m building something real: a system that reduces friction, a workflow that becomes
            predictable, or a product surface that makes decisions easier. I also care about being the kind of teammate
            who communicates clearly, writes things down, and takes ownership of outcomes.
          </p>

          <p className="text-sm text-emerald-50/65">
            If you want the “cold hard facts,” the Facts page has the quick scan version.
          </p>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
