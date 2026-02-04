import { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <p className="text-white/75">{project.oneLiner}</p>

        <p className="mt-2 text-sm text-white/55">
          Tech: {project.tech.join(' · ')}
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        {(project.links?.repo || project.links?.demo) && (
          <div className="mt-5 flex gap-4 text-sm">
            {project.links?.demo && (
              <a className="underline underline-offset-4 hover:text-white" href={project.links.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
            {project.links?.repo && (
              <a className="underline underline-offset-4 hover:text-white" href={project.links.repo} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
