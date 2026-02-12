// src/components/SiteHeader.tsx
import Link from 'next/link';

type Active = 'home' | 'facts' | 'story';

export default function SiteHeader({ active }: { active: Active }) {
  const item = (href: string, label: string, key: Active) => {
    const isActive = active === key;
    return (
      <Link
        href={href}
        className={[
          'rounded-xl px-3 py-2 text-sm transition',
          'outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0',
          isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5',
        ].join(' ')}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="rounded-xl px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/5"
        >
          ViMaSa.dev
        </Link>

        <nav className="flex items-center gap-2">
          {item('/', 'Home', 'home')}
          {item('/facts', 'Facts', 'facts')}
          {item('/story', 'Story', 'story')}
        </nav>
      </div>
    </header>
  );
}
