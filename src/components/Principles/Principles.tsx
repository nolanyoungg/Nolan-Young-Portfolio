import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { principles } from '../../data/portfolio'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import './Principles.css'

export function Principles() {
  return (
    <section className="principles">
      <div className="principles__inner">
        <SectionHeader
          eyebrow="Engineering approach"
          title="Software decisions tied to business reality"
          copy="The strongest systems are understandable, maintainable, observable, and built around the way people actually work."
        />
        <div className="principles__grid">
          {principles.map((principle, index) => (
            <motion.div
              key={principle}
              className="principles__card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <span className="principles__icon">
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
