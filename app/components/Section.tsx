type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mt-10">
      <h2 className="text-sm font-semibold tracking-wide text-neutral-200">
        {title.toUpperCase()}
      </h2>
      <div className="mt-4 space-y-3 text-neutral-200/90">
        {children}
      </div>
    </section>
  );
}
