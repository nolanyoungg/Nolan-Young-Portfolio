import { motion } from 'framer-motion'
import './SectionHeader.css'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  copy: string
}

export function SectionHeader({ eyebrow, title, copy }: SectionHeaderProps) {
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <p className="section-header__eyebrow">{eyebrow}</p>
      <h2 className="section-header__title">{title}</h2>
      <p className="section-header__copy">{copy}</p>
    </motion.div>
  )
}
