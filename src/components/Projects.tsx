'use client';

import { useState } from "react";
import { projects, Project } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
