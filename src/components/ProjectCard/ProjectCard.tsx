import { motion } from 'framer-motion'
import { CheckCircle2, Layers3 } from 'lucide-react'
import './ProjectCard.css'

type Project = {
  title: string
  description: string
  highlights: string[]
  tags: string[]
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="project-card__highlight" />
      <div className="project-card__top">
        <div className="project-card__icon">
          <Layers3 size={22} />
        </div>
        <span className="project-card__number">0{index + 1}</span>
      </div>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
      <ul className="project-card__highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="project-card__item">
            <CheckCircle2 className="project-card__check" size={17} />
            {highlight}
          </li>
        ))}
      </ul>
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-card__tag">
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
