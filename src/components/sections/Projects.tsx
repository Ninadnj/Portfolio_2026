import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Gift,
  Radio,
  Store,
} from "lucide-react";
import { clientProjects } from "@/lib/portfolio";

const icons = {
  booking: CalendarDays,
  loyalty: Gift,
  retail: Store,
  social: Radio,
};

export function Projects() {
  return (
    <div className="projects-grid">
      {clientProjects.map((project) => {
        const Icon = icons[project.icon];
        return (
          <article
            key={project.id}
            className={`project-card project-${project.id}`}
            aria-labelledby={`${project.id}-heading`}
          >
            <div
              className="project-visual"
              aria-label={`${project.name} workflow`}
            >
              <div className="visual-topline">
                <span className="mono">SYSTEM / {project.number}</span>
                <span className="project-type">Client work · Production</span>
              </div>
              <div className="project-emblem">
                <Icon size={30} strokeWidth={1.4} aria-hidden="true" />
              </div>
              <ol className="flow-steps">
                {project.flow.map((step, index) => (
                  <li key={step}>
                    <span>{step}</span>
                    {index < project.flow.length - 1 && (
                      <ArrowRight size={16} aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
            </div>
            <div className="project-body">
              <p className="eyebrow">{project.category}</p>
              <h3 id={`${project.id}-heading`}>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tags" aria-label="Technologies">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <details className="case-study">
                <summary>
                  <span>
                    Read case study
                    <span className="sr-only">: {project.name}</span>
                  </span>
                  <ChevronDown size={17} aria-hidden="true" />
                </summary>
                <div className="case-study-content">
                  <h4>{project.name}</h4>
                  <dl>
                    <div>
                      <dt>The problem</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div>
                      <dt>What I built</dt>
                      <dd>{project.solution}</dd>
                    </div>
                    <div>
                      <dt>The operational result</dt>
                      <dd>{project.outcome}</dd>
                    </div>
                    <div>
                      <dt>How it stays manageable</dt>
                      <dd>{project.boundary}</dd>
                    </div>
                  </dl>
                  {"github" in project && (
                    <a
                      className="text-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explore the repository{" "}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </details>
            </div>
          </article>
        );
      })}
    </div>
  );
}
