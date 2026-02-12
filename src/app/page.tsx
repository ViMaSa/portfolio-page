// src/app/page.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Typewriter from '@/components/Typewriter';

type HoverSide = 'facts' | 'story' | null;

export default function HomePage() {
  const [hovered, setHovered] = useState<HoverSide>(null);
  const [boot, setBoot] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setBoot(false), 950);
    return () => clearTimeout(t);
  }, []);

  const dimFacts = hovered === 'story';
  const dimStory = hovered === 'facts';

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Desktop vertical divider */}
      <div
        className={[
          'pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block',
          'w-px transition-all duration-500',
          boot ? 'divider-boot' : '',
          hovered === 'facts'
            ? 'bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.18),transparent)]'
            : hovered === 'story'
            ? 'bg-[linear-gradient(to_bottom,transparent,rgba(52,211,153,0.16),transparent)]'
            : 'bg-white/10',
        ].join(' ')}
      />

      {/* Mobile horizontal divider */}
      <div
        className={[
          'pointer-events-none absolute left-0 top-1/2 block w-full -translate-y-1/2 md:hidden',
          'h-px transition-all duration-500',
          boot ? 'divider-boot' : '',
          hovered === 'facts'
            ? 'bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.14),transparent)]'
            : hovered === 'story'
            ? 'bg-[linear-gradient(to_right,transparent,rgba(52,211,153,0.12),transparent)]'
            : 'bg-white/10',
        ].join(' ')}
      />

      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* FACTS */}
        <Link
          href="/facts"
          aria-label="Go to Facts Mode"
          onMouseEnter={() => setHovered('facts')}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered('facts')}
          onBlur={() => setHovered(null)}
          className={[
            'group relative flex min-h-[50vh] cursor-pointer items-center justify-center overflow-hidden',
            'transition-[transform,filter] duration-400 ease-out md:min-h-screen',
            'focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 outline-none',
            dimFacts ? 'blur-[0.75px] scale-[0.995]' : 'blur-0 scale-100 hover:scale-[1.015]',
          ].join(' ')}
        >
          <div className="absolute inset-0 bg-[rgb(var(--facts-bg))]" />

          {/* FACTS tint: explicit linear */}
          <div className="absolute inset-0 opacity-70 transition group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(var(--facts-tint),0.95),rgba(var(--facts-bg),1))]" />

          <div className="relative mx-auto w-full max-w-xl px-6 py-10 md:px-8 md:py-16">
            <p className="font-facts text-xs tracking-widest text-white/60">FACTS MODE</p>

            <h1 className="mt-3 font-facts text-3xl font-semibold tracking-tight text-[rgb(var(--facts-fg))] md:text-4xl">
              Victor Sarmiento
            </h1>

            <p className="mt-3 max-w-md font-facts text-sm leading-6 text-white/80">
              Infrastructure-minded engineer who ships
            </p>
            <p className="mt-1 max-w-md font-facts text-sm leading-6 text-white/65">
              Backend · Search · Data Workflows · Reliability habits
            </p>

            {/* Terminal */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-5 font-facts text-sm text-white/70">
              <div className="text-white/55">
                <Typewriter
                  text="$ quick_scan --highlights"
                  durationMs={1150}
                  delayMs={140}
                  className="typewriter-muted"
                />
              </div>

              <div className="mt-3 space-y-2">
                <Typewriter
                  text="• Production automation + RCAs (Silversheet)"
                  durationMs={1700}
                  delayMs={650}
                  className="typewriter-muted"
                />
                <Typewriter
                  text="• Supabase RPC ranking + search intent routing (HomeSavvyDeals)"
                  durationMs={2200}
                  delayMs={1200}
                  className="typewriter-muted"
                />
                <Typewriter
                  text="• Constraints mindset (ops + high-frequency data work)"
                  durationMs={1900}
                  delayMs={2000}
                  className="typewriter-muted"
                />
              </div>

              {/* new line + blinking block cursor (no typing) */}
              <div className="mt-1 leading-6 text-white/55">
                <span className="terminal-cursor" aria-hidden="true">
                  █
                </span>
              </div>

              <p className="mt-4 text-white/55">→ Click for the recruiter-friendly view</p>
            </div>

            <p className="mt-8 font-facts text-sm text-white/70 opacity-80 transition group-hover:opacity-100">
              Enter Facts →
            </p>
          </div>
        </Link>

        {/* STORY */}
        <Link
          href="/story"
          aria-label="Go to Story Mode"
          onMouseEnter={() => setHovered('story')}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered('story')}
          onBlur={() => setHovered(null)}
          className={[
            'group relative flex min-h-[50vh] cursor-pointer items-center justify-center overflow-hidden',
            'transition-[transform,filter] duration-400 ease-out md:min-h-screen',
            'focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 outline-none',
            dimStory ? 'blur-[0.75px] scale-[0.995]' : 'blur-0 scale-100 hover:scale-[1.015]',
          ].join(' ')}
        >
          <div className="absolute inset-0 bg-[rgb(var(--story-bg))]" />

          {/* STORY tint: explicit linear */}
          <div className="absolute inset-0 opacity-70 transition group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(var(--story-tint),0.95),rgba(var(--story-bg),1))]" />

          <div className="relative mx-auto w-full max-w-xl px-6 py-10 md:px-8 md:py-16">
            <p className="font-story text-xs tracking-widest text-emerald-50/70">STORY MODE</p>

            <h2 className="mt-3 font-story text-3xl font-semibold tracking-tight text-[rgb(var(--story-fg))] md:text-4xl">
              My Engineering Story
            </h2>

            <p className="mt-3 max-w-md font-story text-base leading-7 text-emerald-50/85">
              How performance, data modeling, and real-world constraints shaped how I design software systems.
            </p>

            <div className="mt-10 rounded-2xl border border-emerald-50/10 bg-black/20 p-6">
              <p className="font-script text-2xl text-emerald-50/85">
                “I like problems where structure matters.”
              </p>
              <p className="mt-4 font-story text-sm leading-6 text-emerald-50/75">
                Production automation at Silversheet, operational constraints at MGM, and ranking/search logic in a live product —
                here’s the throughline.
              </p>
              <p className="mt-4 font-story text-sm text-emerald-50/60">
                → Click for the narrative behind the work
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
