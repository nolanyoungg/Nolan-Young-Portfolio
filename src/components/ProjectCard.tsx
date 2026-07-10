import { motion } from 'framer-motion'
import { CheckCircle2, Layers3 } from 'lucide-react'

type Project = {
  title: string
  description: string
  highlights: string[]
  tags: string[]
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="group relative min-h-full overflow-hidden rounded-3xl border border-blue-300/14 bg-slate-950/62 p-6 shadow-xl shadow-blue-950/25 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-500/15 text-cyan-200 ring-1 ring-cyan-300/20">
          <Layers3 size={22} />
        </div>
        <span className="rounded-full border border-blue-300/14 px-3 py-1 text-xs text-slate-300">0{index + 1}</span>
      </div>
      <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
      <ul className="mt-5 space-y-3">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-300">
            <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={17} />
            {highlight}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-100 ring-1 ring-blue-300/12">
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
