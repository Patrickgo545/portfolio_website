import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-lg font-medium text-neutral-900">{project.title}</h3>
        <span className="text-xs text-neutral-400 whitespace-nowrap pt-0.5">{project.role}</span>
      </div>
      <p className="text-neutral-600 text-sm mb-4">{project.description}</p>
      <div className="aspect-video bg-neutral-50 border border-dashed border-neutral-200 rounded-lg flex items-center justify-center text-neutral-300 text-sm mb-4">
        Architecture diagram
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.map((tech) => (
          <span key={tech} className="text-xs bg-neutral-100 text-neutral-600 rounded px-2 py-0.5">
            {tech}
          </span>
        ))}
      </div>
      <p className="text-sm text-neutral-500">↗ {project.outcome}</p>
    </article>
  );
}
