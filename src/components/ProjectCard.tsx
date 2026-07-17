'use client';

import { Project } from "@/lib/projects";

export default function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <article
      className="border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer focus-visible:ring-2 focus-visible:ring-neutral-400 outline-none"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-lg font-medium text-neutral-900">{project.title}</h3>
      </div>
      <p className="text-neutral-600 text-sm mb-4">{project.description}</p>
      <div className="aspect-video bg-neutral-50 rounded-lg overflow-hidden mb-4">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} architecture diagram`}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full border border-dashed border-neutral-200 flex items-center justify-center text-neutral-300 text-sm">
            Architecture diagram
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.map((tech) => (
          <span key={tech} className="text-xs bg-neutral-100 text-neutral-600 rounded px-2 py-0.5">
            {tech}
          </span>
        ))}
      </div>
      <p className="text-sm text-neutral-500"></p>
    </article>
  );
}
