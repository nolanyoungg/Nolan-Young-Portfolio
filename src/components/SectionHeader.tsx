import { motion } from 'framer-motion'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  copy: string
}

export function SectionHeader({ eyebrow, title, copy }: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-12 max-w-3xl"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">{copy}</p>
    </motion.div>
  )
}
