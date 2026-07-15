import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { capabilities } from '../../data/portfolio'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import './Capabilities.css'

export function Capabilities() {
  return (
    <section id="capabilities" className="capabilities">
      <div className="capabilities__inner">
        <SectionHeader
          eyebrow="Capabilities"
          title="Technical capability pillars built around operational problems"
          copy="Nolan’s work is not a flat list of tools. It is a set of capabilities that connect customer-facing platforms, backend systems, internal operations, data visibility, AI workflows, and infrastructure ownership."
        />
        <div className="capabilities__grid">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              className="capabilities__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.035 }}
            >
              <Code2 className="capabilities__icon" size={24} />
              <h3 className="capabilities__title">{capability.title}</h3>
              <p className="capabilities__copy">{capability.description}</p>
              <div className="capabilities__tags">
                {capability.technologies.map((technology) => (
                  <span key={technology} className="capabilities__tag">
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
