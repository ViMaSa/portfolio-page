import Link from 'next/link';

type SplitOptionCardProps = {
  href: string;
  title: string;
  subtitle: string;
  icon?: string;
};

export default function SplitOptionCard({ href, title, subtitle, icon }: SplitOptionCardProps) {
  return (
    <Link
    href={href}
    className='group rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6 transition hover:border-neutral-600 hover:bg-neutral-950'
    >
      <div className='flex items-start gap-3'>
        <div className='text-2xl'>{icon ?? '→'}</div>
        <div>
          <h2 className='text-lg font-semibold text-neutral-100'>{title}</h2>
          <p className='mt-1 text-sm leading-6 text-neutral-300'>{subtitle}</p>
          <p className='mt-4 text-sm font-medium text-neutral-200 opacity-70 group-hover:opacity-100'>
            Open →
          </p>
        </div>
      </div>
    </Link>
  );
}
