import Link from "next/link";
import Container from "../components/Container";
import Section from "../components/Section";

export default function FactsPage() {
  return(
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Container>
        <nav className="text-sm text-neutral-400">
          <Link href="/" className="hover:text-neutral-200">← Home</Link>"
        </nav>
      </Container>
    </main>
  )
}
