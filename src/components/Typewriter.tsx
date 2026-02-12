// src/components/Typewriter.tsx
'use client';

import { useMemo } from 'react';

type Props = {
  text: string;
  durationMs?: number;
  delayMs?: number;
  className?: string;
  caret?: boolean;
};

export default function Typewriter({
  text,
  durationMs = 2000,
  delayMs = 0,
  className = '',
  caret = false,
}: Props) {
  const steps = useMemo(() => Math.max(10, text.length), [text.length]);
  const width = useMemo(() => `${text.length}ch`, [text.length]);

  return (
    <span
      className={[
        'typewriter',
        caret ? 'typewriter-caret' : '',
        className,
      ].join(' ')}
      style={{
        // CSS vars used by globals.css animations
        // @ts-expect-error CSS custom properties
        ['--tw-duration']: `${durationMs}ms`,
        ['--tw-steps']: steps,
        ['--tw-width']: width,
        animationDelay: `${delayMs}ms`,
      }}
      aria-label={text}
    >
      {text}
    </span>
  );
}
