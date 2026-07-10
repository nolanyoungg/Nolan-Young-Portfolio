import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { caseStudies, projects } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'
import { ProjectCard } from './ProjectCard'


export function SelectedWork() {
  return (
    <section id="work" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected work"
          title="Case studies across software, platforms, automation, AI, and infrastructure"
          copy="Each project is framed around the real operating problem, the technical solution, and what the work demonstrates."
        />
        <div className="space-y-5">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur lg:grid-cols-[0.9fr_1.1fr]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ delay: index * 0.04 }}
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">{study.category}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">{study.title}</h3>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-sm font-medium text-slate-200">Problem</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{study.problem}</p>
                </div>
              </div>
              <div>
                <p className="leading-7 text-slate-300">{study.solution}</p>
                <ul className="mt-5 grid gap-2">
                  {study.proof.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-sky-300" size={17} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-sky-300/12 bg-sky-300/7 px-3 py-1 text-xs font-medium text-sky-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>

<div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

      
          ))}
        </div>
      </div>

      
  )
}
