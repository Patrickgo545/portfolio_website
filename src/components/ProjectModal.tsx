'use client';

import { Project } from "@/lib/projects";

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video bg-neutral-50 rounded-t-2xl overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} architecture diagram`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full border-b border-neutral-100 flex items-center justify-center text-neutral-300 text-sm">
              Architecture diagram
            </div>
          )}
        </div>
        <div className="p-8">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h2 className="text-2xl font-semibold text-neutral-900">{project.title}</h2>
          </div>
          <p className="text-neutral-600 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.map((tech) => (
              <span key={tech} className="text-xs bg-neutral-100 text-neutral-600 rounded px-2 py-0.5">
                {tech}
              </span>
            ))}
          </div>
          <ul className="space-y-2">
            {project.outcome.map((o, i) => (
              <li key={i} className="text-sm text-neutral-500">↗ {o}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
