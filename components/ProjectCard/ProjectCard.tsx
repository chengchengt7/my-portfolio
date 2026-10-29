import type { ReactNode } from "react";
import Link from "next/link";
import "./ProjectCard.css";

type ProjectAction = {
  label: string;
  href: string;
    variant?: "primary" | "secondary";
};

export type ProjectCardProps = {
  name: string;
  skills: string[];
  description: string;
  media: ReactNode;
  actions: ProjectAction[];
};

export default function ProjectCard({
  name,
  skills,
  description,
  media,
  actions,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="card-visual">{media}</div>

      <div className="card-des">
        <h2>{name}</h2>
        <ul className="skill-labels" aria-label="Skill labels">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <p>{description}</p>

        <div className="project-actions">
          {actions.map(({ label, href, variant = "primary" }) => (
            href.startsWith("/projects/") ? (
              <Link className={`${variant}-action`} href={href} key={`${label}-${href}`}>
                {label}
              </Link>
            ) : (
            <a
              className={`${variant}-action`}
              href={href}
              target="_blank"
              rel="noreferrer"
              key={`${label}-${href}`}
            >
              {label}
            </a>
            )
          ))}
        </div>
      </div>
    </article>
  );
}
