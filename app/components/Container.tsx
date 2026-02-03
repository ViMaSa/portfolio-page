export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-ful max-w-4xl px-6 py-12">
      {children}
    </div>
  );
}
