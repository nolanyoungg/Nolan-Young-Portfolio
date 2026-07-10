import { projects } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { SectionHeader } from './SectionHeader'

export function SelectedWork() {
  return (
    <section id="work" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects across software, platforms, automation, AI, and infrastructure"
          copy="A selection of projects demonstrating practical software engineering, systems integration, automation, and technical ownership."
        />

        <div className="grid gap-5 lg:grid-cols-2">
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
