import Link from "next/link";
import clsx from "clsx";

type Mode = 'facts' | 'story';

export default function SiteHeader({ active }: { active?: Mode }) {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm text-white/80 hover:text-white">
          Victor Sarmiento
        </Link>

        <nav className="flex items-center gap-2 text-sm">
          <Link
            href="/facts"
            className={clsx(
              'rounded-full border px-3 py-1 transition',
              active === 'facts'
                ? 'border-white/30 bg-white/10 text-white'
                : 'border-white/10 text-white/70 hover:border-white/25 hover:text-white'
            )}
          >
            Facts
          </Link>
          <Link
            href="/story"
            className={clsx(
              'rounded-full border px-3 py-1 transition',
              active === 'story'
                ? 'border-white/30 bg-white/10 text-white'
                : 'border-white/10 text-white/70 hover:border-white/25 hover:text-white'
            )}
          >
            Story
          </Link>
        </nav>
      </div>
    </header>
  );
}
