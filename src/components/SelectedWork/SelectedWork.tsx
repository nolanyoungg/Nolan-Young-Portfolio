import { projects } from '../../data/portfolio'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import './SelectedWork.css'

export function SelectedWork() {
  return (
    <section id="work" className="selected-work">
      <div className="selected-work__inner">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects across software, platforms, automation, AI, and infrastructure"
          copy="A selection of projects demonstrating practical software engineering, systems integration, automation, and technical ownership."
        />

        <div className="selected-work__grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
