import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { principles } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function Principles() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Engineering approach"
          title="Software decisions tied to business reality"
          copy="The strongest systems are understandable, maintainable, observable, and built around the way people actually work."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {principles.map((principle, index) => (
            <motion.div
              key={principle}
              className="theme-surface flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/54 p-5 text-slate-200 backdrop-blur"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-300/12 text-sky-200 ring-1 ring-sky-300/18">
                <Check size={16} />
              </span>
              {principle}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
