export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10 text-sm text-white/55">
      <div className="mx-auto w-full max-w-5xl px-6">
        <p>© {new Date().getFullYear()} Victor Sarmiento</p>
        <p className="mt-2">
          <span className="text-white/40">Links:</span> {' '}
          <a className="underline underline-offset-4 hover:text-white" href="/resume/victor_sarmiento_resume_2026.pdf" target="_blank" rel="noreferrer">
            Resume
          </a> {' '}
          ·{' '}
          <a className="underline underline-offset-4 hover:text-white" href="https://github.com/ViMaSa" target="_blank" rel="noreferrer">
            GitHub 
          </a> {' '}
          ·{' '}
          <a className="underline underline-offset-4 hover:text-white" href="https://www.linkedin.com/in/vimasa/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
