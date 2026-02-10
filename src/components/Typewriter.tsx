// src/components/Typewriter.tsx
type TypewriterProps = {
  text: string;
  /** Total typing duration (ms) */
  durationMs?: number;
  /** Delay before typing starts (ms) */
  delayMs?: number;
  /** Extra className(s) */
  className?: string;
  /** Show a blinking caret on this line */
  caret?: boolean;
};

export default function Typewriter({
  text,
  durationMs = 2200,
  delayMs = 200,
  className = '',
  caret = false,
}: TypewriterProps) {
  const steps = Math.max(10, Math.min(160, text.length));

  const style = {
    ['--tw-steps']: steps,
    ['--tw-duration']: `${durationMs}ms`,
    ['--tw-width']: `${text.length}ch`,
    animationDelay: `${delayMs}ms`,
  } as React.CSSProperties;

  return (
    <span
      className={[
        'typewriter',
        caret ? 'typewriter-caret' : '',
        className,
      ].join(' ')}
      style={style}
      aria-label={text}
      title={text}
    >
      {text}
    </span>
  );
}
