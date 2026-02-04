import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* LEFT: FACTS */}
        <Link
          href="/facts"
          className="group relative flex items-center justify-center overflow-hidden"
          aria-label="Go to Facts Mode"
        >
          <div className="absolute inset-0 bg-[rgb(var(--facts-bg))]" />
          <div className="absolute inset-0 opacity-70 transition group-hover:opacity-100 bg-gradient-to-br from-[rgb(var(--facts-tint))] to-[rgb(var(--facts-bg))]" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-xl px-8 py-16">
            <p className="font-facts text-xs tracking-widest text-white/60">FACTS MODE</p>
            <h1 className="mt-3 font-facts text-4xl font-semibold tracking-tight text-[rgb(var(--facts-fg))]">
              Victor Sarmiento
            </h1>
            <p className="mt-3 max-w-md font-facts text-sm leading-6 text-white/75">
              Full-Stack Developer · Systems-Focused Engineer
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-5 font-facts text-sm text-white/70">
              <p className="text-white/55">$ quick_scan --resume</p>
              <p className="mt-2">
                • Silversheet (Software Engineer): Rails · React · PostgreSQL · AWS
              </p>
              <p>• H.O.S.T. System: APIs · Auth · Workflow modeling</p>
              <p>• MGM Workforce: operational constraints &amp; scheduling systems</p>
              <p className="mt-3 text-white/55">
                → Click for the fast, recruiter-friendly view
              </p>
            </div>

            <p className="mt-8 font-facts text-sm text-white/70 opacity-80 transition group-hover:opacity-100">
              Enter Facts →
            </p>
          </div>
        </Link>

        {/* RIGHT: STORY */}
        <Link
          href="/story"
          className="group relative flex items-center justify-center overflow-hidden"
          aria-label="Go to Story Mode"
        >
          <div className="absolute inset-0 bg-[rgb(var(--story-bg))]" />
          <div className="absolute inset-0 opacity-70 transition group-hover:opacity-100 bg-gradient-to-br from-[rgb(var(--story-tint))] to-[rgb(var(--story-bg))]" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-emerald-200/10 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-emerald-200/10 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-xl px-8 py-16">
            <p className="font-story text-xs tracking-widest text-emerald-50/70">STORY MODE</p>
            <h2 className="mt-3 font-story text-4xl font-semibold tracking-tight text-[rgb(var(--story-fg))]">
              My Engineering Story
            </h2>
            <p className="mt-3 max-w-md font-story text-base leading-7 text-emerald-50/80">
              How production experience, systems thinking, and operations shaped the way I build software.
            </p>

            <div className="mt-10 rounded-2xl border border-emerald-50/10 bg-black/20 p-6">
              <p className="font-script text-2xl text-emerald-50/80">
                “I’m interested in building systems that work.”
              </p>
              <p className="mt-4 font-story text-sm leading-6 text-emerald-50/75">
                A narrative view of what I learned in production at Silversheet, how operations at MGM sharpened my systems mindset,
                and why I’m drawn to backend architecture and workflow-driven software.
              </p>
              <p className="mt-4 font-story text-sm text-emerald-50/60">
                → Click for the story behind the work
              </p>
            </div>

            <p className="mt-8 font-story text-base text-emerald-50/80 opacity-80 transition group-hover:opacity-100">
              Enter Story →
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
