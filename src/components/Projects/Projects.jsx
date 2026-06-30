import { projects } from '../../data/projects'
import ProjectRow from '../shared/ProjectRow/ProjectRow'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="inner">
        <div className="projects__header">
          <h2>Projects</h2>
        </div>
        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} isReversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
