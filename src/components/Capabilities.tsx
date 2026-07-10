import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { capabilities } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function Capabilities() {
  return (
    <section id="capabilities" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Capabilities"
          title="Technical capability pillars built around operational problems"
          copy="Nolan’s work is not a flat list of tools. It is a set of capabilities that connect customer-facing platforms, backend systems, internal operations, data visibility, AI workflows, and infrastructure ownership."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              className="rounded-[2rem] border border-white/10 bg-slate-950/58 p-6 backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.035 }}
            >
              <Code2 className="mb-5 text-sky-300" size={24} />
              <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{capability.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {capability.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
