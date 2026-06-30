import './ProjectRow.css'

export default function ProjectRow({ project, isReversed }) {
  const rowClassName = isReversed ? 'project-row project-row--reversed' : 'project-row'
  const hasLinks = project.github || project.demo

  return (
    <article className={rowClassName}>
      <div className="project-row__text">
        {project.status && <p className="project-row__status">{project.status}</p>}
        <p className="project-row__problem">{project.problem}</p>
        <h3>{project.name}</h3>
        <p className="project-row__description">{project.description}</p>
        <div className="project-row__stack" aria-label={`${project.name} tech stack`}>
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {hasLinks ? (
          <div className="project-row__links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
          </div>
        ) : (
          <p className="project-row__placeholder">Links to be added when this project is ready.</p>
        )}
      </div>

      <div className="project-row__visual">
        {project.image ? (
          <img src={project.image} alt={`${project.name} project preview`} />
        ) : (
          <span>{project.name} image pending</span>
        )}
      </div>
    </article>
  )
}
