type TypewriterProps = {
  text: string;
  durationMs?: number;
  delayMs?: number;
  className?: string;
};

export default function Typewriter({
  text,
  durationMs = 2200,
  delayMs = 200,
  className = '',
}: TypewriterProps) {
  const steps = Math.max(10, Math.min(120, text.length));

  const style = {
    ['--tw-steps']: steps,
    ['--tw-duration']: `${durationMs}ms`,
    ['--tw-width']: `${text.length}ch`,
    animationDelay: `${delayMs}ms, ${delayMs}ms`,
  } as React.CSSProperties;

  return (
    <span className={`typewriter ${className}`} style={style} aria-label={text}>
      {text}
    </span>
  );
}
