import { projects } from '../data/projects'
import '../styles/Projects.css'

export default function Projects() {
  return (
    <section id="projects">
      <div className="inner">
        <div className="projects-content">
          <h2 className="projects-title">Projects</h2>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-row ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`}
              >
                <div className="project-text">
                  <p className="project-problem">{project.problem}</p>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="stack-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                    )}
                  </div>
                </div>
                <div className="project-visual">
                  <div className="project-placeholder">
                    <span>{project.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}