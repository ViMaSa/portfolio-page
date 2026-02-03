import Container from "./components/Container";
import SplitOptionCard from "./components/SplitOptionCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Container>
        <header className="space-y-4">
          <p className="text-sm text-neutral-400">Portfolio</p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Victor Sarmiento
          </h1>
          <p className="max-w-2xl text-neutral-300">
            Full-Stack Developer · Systems-Focused Engineer — choose a fast facts view or a narrative view.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <SplitOptionCard
            href="/facts"
            icon="🧊"
            title="Facts Mode"
            subtitle="Straight to the point: skills, experience, projects, links."
          />

          <SplitOptionCard
            href="/story"
            icon="🔥"
            title="Story Mode"
            subtitle="How I think, what I've learned, and they systems I like to build."
          />
        </div>

        <footer className="mt-12 text-sm text-neutral-500">
          Adding resume link + GitHub/LinkedIn in the footer later.
        </footer>
      </Container>
    </main>
  );
}
