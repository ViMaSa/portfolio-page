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
    // ✅ Add a dark backing color so any tiny scale gaps are NOT white
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Desktop vertical divider */}
      <div
        className={[
          'pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block',
          'w-px transition-all duration-500', // ✅ thinner divider (w-px instead of 2px)
          boot ? 'divider-boot' : '',
          hovered === 'facts'
            ? 'bg-gradient-to-b from-transparent via-white/15 to-transparent' // ✅ reduced brightness
            : hovered === 'story'
            ? 'bg-gradient-to-b from-transparent via-emerald-300/12 to-transparent' // ✅ reduced brightness
            : 'bg-white/10',
        ].join(' ')}
      />

      {/* Mobile horizontal divider */}
      <div
        className={[
          'pointer-events-none absolute left-0 top-1/2 block w-full -translate-y-1/2 md:hidden',
          'h-px transition-all duration-500', // ✅ thinner divider
          boot ? 'divider-boot' : '',
          hovered === 'facts'
            ? 'bg-gradient-to-r from-transparent via-white/12 to-transparent'
            : hovered === 'story'
            ? 'bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent'
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
            dimFacts
              ? 'blur-[0.75px] scale-[0.995]'
              : 'blur-0 scale-100 hover:scale-[1.015]',
          ].join(' ')}
        >
          <div className="absolute inset-0 bg-[rgb(var(--facts-bg))]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--facts-tint))] to-[rgb(var(--facts-bg))] opacity-70 transition group-hover:opacity-100" />

          <div className="relative mx-auto w-full max-w-xl px-6 py-10 md:px-8 md:py-16">
            <p className="font-facts text-xs tracking-widest text-white/60">FACTS MODE</p>
            <h1 className="mt-3 font-facts text-3xl font-semibold tracking-tight text-[rgb(var(--facts-fg))] md:text-4xl">
              Victor Sarmiento
            </h1>
            <p className="mt-3 max-w-md font-facts text-sm leading-6 text-white/75">
              Full-Stack Developer · Systems-Focused Engineer
            </p>

            {/* Terminal */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-5 font-facts text-sm text-white/70">
              <div className="text-white/55">
                <Typewriter
                  text="$ quick_scan --resume"
                  durationMs={1200}
                  delayMs={150}
                  className="typewriter-muted"
                />
              </div>

              <div className="mt-3 space-y-2">
                <Typewriter
                  text="• Silversheet (Software Engineer): Rails · React · PostgreSQL · AWS"
                  durationMs={2400}
                  delayMs={750}
                  className="typewriter-muted"
                />
                <Typewriter
                  text="• H.O.S.T. System: APIs · Auth · Workflow modeling"
                  durationMs={1900}
                  delayMs={1400}
                  className="typewriter-muted"
                />
                <Typewriter
                  text="• MGM Workforce: operational constraints & scheduling systems"
                  durationMs={2100}
                  delayMs={2000}
                  className="typewriter-muted"
                  caret
                />
              </div>

              <p className="mt-4 text-white/55">
                → Click for the fast, recruiter-friendly view
              </p>
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
            dimStory
              ? 'blur-[0.75px] scale-[0.995]'
              : 'blur-0 scale-100 hover:scale-[1.015]',
          ].join(' ')}
        >
          <div className="absolute inset-0 bg-[rgb(var(--story-bg))]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--story-tint))] to-[rgb(var(--story-bg))] opacity-70 transition group-hover:opacity-100" />

          <div className="relative mx-auto w-full max-w-xl px-6 py-10 md:px-8 md:py-16">
            <p className="font-story text-xs tracking-widest text-emerald-50/70">STORY MODE</p>
            <h2 className="mt-3 font-story text-3xl font-semibold tracking-tight text-[rgb(var(--story-fg))] md:text-4xl">
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
