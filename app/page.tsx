import "./page.css";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Statement from "@/components/Statement/Statement";
import { projects } from "@/data/projects";

export default function Page() {
  return (
    <div className="home">
      <Statement />
      <section id="projects" aria-label="Projects">
        {projects.map(({ id, ...project }) => (
          <ProjectCard key={id} {...project} />
        ))}
      </section>
    </div>
  );
}
